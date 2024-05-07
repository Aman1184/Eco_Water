import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Calculate from '../../components/Calculate'
import Footer from '../../components/Footer'

function Calculates() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
        <Calculate/>
      </div>

      <Footer/>
    </>
  )
}

export default Calculates
