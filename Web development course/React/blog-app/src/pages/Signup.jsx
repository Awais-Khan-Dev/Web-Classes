import React, { useState } from 'react'
import { account } from '../appwrite/Services'
import { ID } from 'appwrite'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()

    const handleBtnClick = async () => {
        try {
          const result = await account.create({
              userId: ID.unique(),
              email,
              password,
              name
            });

            if(result){
              toast.success("Account Create Successfully")

              setTimeout(()=>{
                navigate("/login")
              }, 3000)

            }
        } catch (error) {
          toast.error("Something went wrong while creating account")

        }}
  return (
    <div className='w-full h-screen bg-slate-400 flex flex-col items-center justify-center'>
        <div className="flex flex-col items-center justify-center gap-2 bg-white p-3 rounded-md shadow-xl">
        <h2 className='text-2xl font-semibold '>Signup 📚</h2>
        <input type="email" placeholder='John@gmail.com' className='w-xl border-1 border-slate-300 py-2 px-4 text-lg outline-none' onChange={(e)=>setEmail(e.target.value)}/>  
        <input type="text" placeholder='John Doe' className='w-xl border-1 border-slate-300 py-2 px-4 text-lg outline-none' onChange={(e)=>setName(e.target.value)}/>
        <input type="password" placeholder='1233123' className='w-xl border-1 border-slate-300 py-2 px-4 text-lg outline-none'onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleBtnClick} className='w-xl  border-none bg-slate-500 rounded-md  text-md text-white cursor-pointer hover:bg-slate-600  transition-all py-2 px-4 text-lg outline-none'>Signup</button>
        </div>
    </div>
  )
}

export default Signup
