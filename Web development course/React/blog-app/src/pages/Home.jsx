import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { databases } from "../appwrite/Services";
import { toast } from "sonner";
import { motion } from "motion/react";

function Home() {
  const [allblogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getBlogsFromDatabase() {
    try {
      setLoading(true);
      const response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_BLOGS_TABLE_ID,
        []
      );

      if (response) {
        console.log(response);

        setAllBlogs(response.documents);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("error while fetching blogs");
    }
  }
  useEffect(() => {
    getBlogsFromDatabase();
  }, []);
  return (
    <div className="min-h-screen w-full bg-slate-400 p-1 relative">
      <Navbar />
      {/* card container */}
      {loading && <p>loading...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-10 max-w-7xl mx-auto mt-10">
        {allblogs.map((element, index) => (
          <motion.div
            initial={{y: -100}}
            animate={{y: 0,
              transition:{duration: 0.4* index}
            }}
          >

              <Card
                imageUrl={element.imageLink}
                title={element.title}
                description={element.description}
                key={element.$id}
                />
            </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
