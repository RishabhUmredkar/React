import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';

const Login = () => {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')

  let navigate = useNavigate();

  let un = "Rishabh"
  let pw = "12345"

  let handleClick =(e)=>{
    e.preventDefault();
    if(un == username && pw == password){
      // Tailwind-styled toast (centered implementation)
      const toast = document.createElement('div');
      toast.innerText = "Login Successful";
      toast.className = "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50";
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 2000);
      // You can show a Tailwind-styled toast here instead of alert for better UI
      navigate('/home');
    }
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form className="space-y-4">
          <input type="email" placeholder="Email"         onChange={(e)=>{setUsername(e.target.value)}}                               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          <input type="password" placeholder="Password"   onChange={(e)=>{setPassword(e.target.value)}}                               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>

          <button type="submit"    onClick={handleClick}                                          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            Login
          </button>

        </form>

        <div className="mt-4 text-center">
          <Link to="home" className="text-blue-500 hover:underline">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  )
}


export default Login
