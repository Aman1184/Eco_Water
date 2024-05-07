import React, { useState } from 'react'
import Home from './home/Home';
import { Route,Routes } from "react-router-dom"
import Waterfootprints from './waterfootprints/Waterfootprints';
import Calculates from './assets/Calculates/Calculates';
import Abouts from './abouts/Abouts';
import Signup from './components/Signup';
import Contacts from './Contacts/Contacts';
import Login from './components/Login';
import Logins from './Logins/Logins';
const App = () => {
  const [showLogin,setShowLogin] = useState(false)

 return (
    <>
    {showLogin?<Login/>:<></>}
    <div className='dark:bg-slate-900 dark:text-white'>
      
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/waterfootprint" element={<Waterfootprints/>}/>
      <Route path="/calculate" element={<Calculates/>}/>
      <Route path='/about' element={<Abouts/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/login' element={<Logins/>}/>
    </Routes>
    </div>
    </>
 )
}

export default App
