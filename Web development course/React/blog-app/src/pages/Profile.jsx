import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { account, databases } from '../appwrite/Services'
import { Query } from 'appwrite'
import Card from '../components/Card'

function Profile() {
  const [user, setUser] = useState({})
  const [blogs, setBlogs] = useState([])

  async function fetchUserData() {
    let result = await account.get()
    if (result) {
      setUser(result)
      const response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_BLOGS_TABLE_ID,
        [Query.equal("userId", result.$id)]
      )
      setBlogs(response.documents)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className="w-full min-h-screen bg-slate-800 text-white p-1">
      {/* Navbar */}
      <Navbar />
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* User Info Card */}
        <div className="bg-slate-900 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between mb-10 border border-slate-700">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-slate-100">
              {user.name || "Guest User"}
            </h2>
            <p className="text-slate-400">📧 {user.email}</p>
            <p className="text-green-400 font-medium">
              {user.emailVerification ? "✅ Verified Account" : "❌ Not Verified"}
            </p>
          </div>
        </div>
        {/* Blogs Section */}
        <div>
          <h3 className="text-xl font-semibold text-slate-100 mb-6 border-b border-slate-600 pb-2">
            My Blogs
          </h3>
          {blogs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((singleBlog) => (
                <Card
                  imageUrl={singleBlog.imageLink}
                  title={singleBlog.title}
                  description={singleBlog.description}
                  key={singleBlog.$id}
                />
              ))}
            </div>
          ) : (
            <p className="text-slate-400 text-center mt-10">
              You haven’t posted any blogs yet.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
export default Profile
