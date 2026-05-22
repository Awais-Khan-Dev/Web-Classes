import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full px-10 py-3 bg-slate-300 flex items-center justify-center gap-10'>
            <Link to='/'>Home</Link>    
            <Link to='/about'>About</Link>    
            <Link to='/contact'>Contact</Link>    
            <Link to='/services'>Services</Link>    
    </div>
  )
}

export default Navbar
