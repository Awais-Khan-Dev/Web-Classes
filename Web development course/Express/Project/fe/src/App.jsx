import { useEffect, useState } from 'react'
import './App.css'
import TodoUI from './TodoUi'

function App() {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])

  useEffect(()=>{
    
  },[])


  return (
   <div className='w-full h-screen bg-slate-500'>
       <TodoUI/>
   </div> 
  )
}

export default App
