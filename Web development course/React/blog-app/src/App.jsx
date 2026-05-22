import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Create from './pages/Create'
import { Toaster } from 'sonner'

function App() {
  

  return (
    <div>

      <Toaster position='bottom-center' />

      <BrowserRouter>
      
      
      <Routes>


      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/profile' element={<Profile/>}/>

      </Routes>
      
      
      </BrowserRouter>

    </div>
  )
}

export default App
