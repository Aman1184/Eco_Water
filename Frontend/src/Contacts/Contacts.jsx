import React,{useState} from 'react'
import Contact from '../components/Contact/Contact'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
function Contacts() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  return (
    <>
    <Navbar isLoggedIn={SetIsLoggedIn}/>
      <div className="min-h-screen">
        <Contact/>
      </div>
      
      <Footer/>
      
    </>
  )
}

export default Contacts
