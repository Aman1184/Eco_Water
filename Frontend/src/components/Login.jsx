import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Login({ setIsLoggedIn }) { // Receive setIsLoggedIn prop
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:4000/api/user/login', { email, password }, {
        headers: {
          "Content-type": "application/json"
        },
        withCredentials: true
      });
      if (data.success) {
        alert('Logged in successfully');
        document.getElementById('my_modal_3').close(); // Close the dialog
        navigateTo('/');
        setIsLoggedIn(true); // Update login status
        document.getElementById('my_modal_3').close(); // Close the dialog
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred');
    }
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleLogin}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
              onClick={() => document.getElementById('my_modal_3').close()}>
              ✕
            </Link>
            <h3 className="font-bold text-lg dark:text-black">Login</h3>

            <div className="mt-4 space-y-2">
              <span className="dark:text-black">Email</span><br />
              <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none" onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div className="mt-4 space-y-2">
              <span className="dark:text-black">Password</span><br />
              <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black" onChange={(e) => setPassword(e.target.value)} />

            </div>
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200" onClick={handleLogin}>
                Login
              </button>
              <p className="dark:text-black">
                Not registered? <Link to="/signup" className="underline text-red-500 cursor-pointer">Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
