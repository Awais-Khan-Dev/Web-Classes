import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { account, databases } from '../appwrite/Services'
import { ID } from 'appwrite'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [imageUrl, setImageUrl] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const handleBtnClick =  async () =>{

      try {
       const user =  await account.get()
       console.log(user.$id);

        const response = await databases.createDocument(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_BLOGS_TABLE_ID,
          ID.unique(),
          {
            "imageLink": imageUrl,
            title,
            description,
            "userId": user.$id
          },[]
        )
        if(response){
          toast.success("Blog Created Successfully")
          setTimeout(()=> {navigate("/")}, 3000)
        }
        
      } catch (error) { 
          toast.error("Something went wrong while creating blog")
      }
    }
  return (
   <div className='min-h-screen w-full bg-slate-500 p-1 relative'>
      <Navbar/>
     <div className='w-full h-screen bg-slate-400 flex items-center justify-center'>
        <div className="flex flex-col items-center gap-3 bg-white p-4 rounded-md shadow-xl">
            <h2 className='text-2xl font-semibold'>Create Blog</h2>
        <input type="url" placeholder='https://www.image.com' className='w-xl border-1 border-slate-300 py-2 px-4 text-lg outline-none' onChange={(e)=>setImageUrl(e.target.value)}/>
        <input type="text" placeholder='How react native works?' className='w-xl border-1 border-slate-300 py-2 px-4 text-lg outline-none' onChange={(e)=>setTitle(e.target.value)}/>
        <textarea name="" rows={10} id="" onChange={(e)=>setDescription(e.target.value)} className='w-xl border-1 border-slate-300 py-2 px-4 text-lg outline-none' placeholder='Whats on your mind'></textarea>
        
        <button onClick={handleBtnClick} className='w-xl  border-none bg-slate-500 rounded-md  text-md text-white cursor-pointer hover:bg-slate-600  transition-all py-2 px-4 text-lg outline-none'>Create Blog</button>
        </div>
    </div>
   </div>
  )
}

export default Create
