import React from 'react'
import { Link, Outlet } from 'react-router'

const Home = () => {
  return (
    <div className="p-8 font-sans">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Home</h2>

      <nav className="mb-8 flex gap-4">
        <Link to='/' className="text-blue-600 hover:underline">Login</Link>
        <Link to='/home/about' className="text-blue-600 hover:underline">About</Link>
        <Link to='/home/contact' className="text-blue-600 hover:underline">Contact</Link>
        <Link to='/home/services' className="text-blue-600 hover:underline">Services</Link>
        <Link to='/admin' className="text-blue-600 hover:underline">Admin</Link>
      </nav>
      
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <Outlet />
      </div>
    </div>
  )
}

export default Home
