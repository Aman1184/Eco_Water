import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import axios from 'axios';

function Signup() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigateTo = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async(e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post('http://localhost:4000/api/user/register',{name, email, password}, {
        headers: {
          "Content-type": "application/json"
        },
        withCredentials: true
      });
      console.log(data.message);
      if (data.message) {
      alert(data.message);
    } else{
      setName("");
      setEmail("");
      setPassword("");
      setIsLoggedIn(true);
      navigateTo('/');
    } 
  }catch (error) {
      console.log(error);
    }
  }

  return (
    <>
     <div className='flex h-screen items-center justify-center'>
          <div  className=" w-[600px]">
  <div className="modal-box">
    <form method="dialog">
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 " onClick={() => document.getElementById('my_modal_3').close()}>✕</Link>
    
    <h3 className="font-bold text-lg dark:text-black">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span className='dark:text-black'>Name</span>
        <br/>
        <input type="text" className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black" placeholder="Enter your fullname" value={name} onChange={(e) => setName(e.target.value)}/>
        {/* <br/>{errors.Name && <span className='text-sm text-red-500'>This field is required</span>} */}
    </div>
    <div className='mt-4 space-y-2'>
        <span className='dark:text-black'>Email</span>
        <br/>
        <input type="email" className="w-80 px-3 py-1 border rounded-md outline-none" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        {/* <br/>{errors.email && <span className='text-sm text-red-500'>This field is required</span>} */}
    </div>
    <div className='mt-4 space-y-2'>
        <span className='dark:text-black'>Password</span>
        <br/>
        <input type="password" className="w-80 px-3 py-1 border rounded-md outline-none" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        {/* <br/>{errors.password && <span className='text-sm text-red-500'>This field is required</span>} */}
    </div>
    <div className='flex justify-around mt-4'>
        <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200' onClick={handleSignup}>Signup</button>
        <div className='text-xl '>Have account? {""}<button className='underline text-red-500 cursor-pointer' onClick={()=>{document.getElementById("my_modal_3").showModal();handleSignup();}}>Login</button>{""} <Login setIsLoggedIn={setIsLoggedIn}/></div>
    </div>
    </form>
  </div>
</div></div> 
    </>
  )
}

export default Signup
