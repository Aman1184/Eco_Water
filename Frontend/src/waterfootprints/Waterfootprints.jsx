import React,{useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Waterfootprint from '../components/Waterfootprint'
import Footer from '../components/Footer'

function Waterfootprints() {
  const [isLoggedIn, SetIsLoggedIn] = useState(true);
  return (
    
    <>
      <Navbar isLoggedIn={SetIsLoggedIn}/>
      <div className="min-h-screen">
        <Waterfootprint/>
      </div>
      
      <Footer/>
    </>
  )
}

export default Waterfootprints
