import React,{useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner'
import OurTeam from '../components/OurTeam'
import Footer from '../components/Footer'

function Home() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  return (
    <>
    <Navbar isLoggedIn={SetIsLoggedIn}/>
    <Banner isLoggedIn={SetIsLoggedIn}/>
    <OurTeam/>
    <Footer/>
    </>
  )
}

export default Home
