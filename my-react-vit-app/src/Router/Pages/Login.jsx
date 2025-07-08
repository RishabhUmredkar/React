import React from 'react'
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form className="space-y-4">
          <input type="email" placeholder="Email"className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
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
