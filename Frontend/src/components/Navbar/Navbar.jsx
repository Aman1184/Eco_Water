import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import '../Navbar/Navbar.css';
import Login from '../Login';
import Signup from '../Signup';

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element=document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Fixed this line
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions
    setIsLoggedIn(false);
    // Show popup message
    alert('Logged out successfully');
  };

  const navItems = (
    <>
      <li><a href="/" className="nav-links">Home</a></li>
      <li><a href="waterfootprint" className="nav-links">WaterFootprint</a></li>
      <li><a href="about" className="nav-links">About Us</a></li>
      <li><a href="contact" className="nav-links">Contact</a></li>
    </>
  );

  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-2 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 ${sticky ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-800 dark:text-white duration-300 transition-all ease-in-out" : ""}`}>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className="logo btn-ghost cursor-pointer w-20 h-12">
            <div className="navbar-logo">
              <img src={logo} alt="Logo" />
            </div>
          </a>
        </div>
        <div className='navbar.end space-x-3' >
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems}
            </ul>
          </div>
          <div className='hidden md:block'>
            <label className=" px-3 py-2 border rounded-md flex items-center gap-3">
              <input type="text" className="grow outline-none dark:bg-slate-900 dark:text-white" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
          </div>
          <div>
            {isLoggedIn ? (
              <button className="button px-3 py-2 rounded-md hover:bg-slate-500 duration-300 cursor-pointer" onClick={()=>{{setIsLoggedIn(false)};{handleLogout}}}>Logout</button>
            ) : (
              <>
                <a className="button px-3 py-2 rounded-md hover:bg-slate-500 duration-300 cursor-pointer" onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</a>
                <Login setIsLoggedIn={setIsLoggedIn}/> {/* Pass setIsLoggedIn to handle login */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
