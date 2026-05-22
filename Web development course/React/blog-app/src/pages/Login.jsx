import React, { useState } from 'react'
import { toast } from 'sonner'
import {account} from "../appwrite/Services"
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

function Login() {
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleBtnClick = async () => {
        try {

          const result = await account.createEmailPasswordSession({
            email,
            password
          })

          if (result) {
            navigate("/")
          }
        } catch (error) {
          toast.error("Something went wrong")
        }
    }
  return (
    <div

    

    className='w-full h-screen bg-slate-400 flex flex-col items-center justify-center'>
        <motion.div 
        initial={{
          y: -100,
        }}
          animate={{
            y: 0, 
            transition:{duration: 1, delay: 0},
            

          }}
        className="flex flex-col items-center justify-center gap-2 bg-white p-3 rounded-md shadow-xl">
        <h2 className='text-2xl font-semibold '>Login 📚</h2>
        <input type="email" placeholder='John@gmail.com' className='w-xl border-1 border-slate-300 py-2 px-4 text-lg outline-none' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='1233123' className='w-xl border-1 border-slate-300 py-2 px-4 text-lg outline-none'onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleBtnClick} className='w-xl  border-none bg-slate-500 rounded-md  text-md text-white cursor-pointer hover:bg-slate-600  transition-all py-2 px-4 text-lg outline-none'>Login</button>
        </motion.div>
    </div>
  )
}

export default Login
