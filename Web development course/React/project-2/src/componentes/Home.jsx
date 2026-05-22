import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col gap-10'>
        Home Page

        <button className='py-2 px-3 bg-slate-700 rounded-md text-white cursor-pointer'
        

          onClick={()=>{
              navigate("/login")
          }}
        
        >Login</button>
    </div>
  )
}

export default Home
