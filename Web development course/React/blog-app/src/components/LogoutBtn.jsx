import React from 'react'
import { account } from '../appwrite/Services'
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
  const navigate = useNavigate()
    const handleBtnClick = async () =>{
     try {
         let logout = await account.deleteSession();
         if(logout){
          toast.success("loggedOut Successfully")

          setTimeout(()=>{
            navigate("/login")
          }, 3000)
         }
     } catch (error) {
                toast.error("Something went wrong")

     }
    }
  return (
    <button onClick={handleBtnClick} className='py-2 px-3 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-400 transition-all'>Logout</button>
  )
}

export default LogoutBtn
