
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./componentes/Home"
import Contact from "./componentes/Contact"
import Servies from "./componentes/Services"
import About from "./componentes/About"
import Navbar from "./componentes/Navbar"
import Login from "./componentes/Login"

function App() {
  

  return (
    <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                    <Route path='/'  element={<Home/>}/>
                    <Route path='/about'  element={<About/>}/>
                    <Route path='/contact'  element={<Contact/>}/>
                    <Route path='/services'  element={<Servies/>}/>
                    <Route path='/login'  element={<Login/>}/>
            </Routes>
        </BrowserRouter> 
    </>
  )
}

export default App
