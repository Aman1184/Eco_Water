import React from "react"
import Login from "../components/Login"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer"
const Logins = ({setIsLoggedIn,isLoggedIn}) => {
  return (
    <>
      <div className="min-h-screen"  onClick={()=>document.getElementById("my_modal_3").showModal()}>
        <Login setIsLoggedIn={setIsLoggedIn}/>
      </div>
    </>
  )
}
export default Logins