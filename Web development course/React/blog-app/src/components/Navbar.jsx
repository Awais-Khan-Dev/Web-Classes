import React from 'react'
import { Link } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'

function Navbar() {
  return (
    <div className='w-4xl py-5  mx-auto mt-10 flex items-center justify-between'>
        <h2 className='text-3xl font-semibold text-white'>Blogify</h2>
        <ul className='flex items-center gap-4 text-xl font-medium'>
            <Link className='hover:text-gray-800 transition-all' to={"/"}>Home</Link>
            <Link className='hover:text-gray-800 transition-all' to={"/create"}>Create</Link>
            <Link className='hover:text-gray-800 transition-all' to={"/profile"}>Profile</Link>
            <LogoutBtn/>
        </ul>

    </div>
  )
}

export default Navbar
