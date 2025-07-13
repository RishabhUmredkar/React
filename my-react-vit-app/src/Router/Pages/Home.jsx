import React from 'react'
import { Link, Outlet } from 'react-router'

const Home = () => {
  return (
    <div className="p-8 font-sans min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col gap-8">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <nav className="mb-10 flex items-center gap-8 bg-white rounded-full shadow-lg px-8 py-3 justify-between">
          <Link to='/home' className="flex items-center gap-3">
            <h2 className="text-3xl font-extrabold text-indigo-800 tracking-tight hover:text-indigo-600 transition-colors duration-200">
              Home
            </h2>
          </Link>
          <ul className="flex gap-6 items-center">
            <li>
              <Link to="/" className="text-indigo-700 font-medium px-4 py-2 rounded-full hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-150">
                Login
              </Link>
            </li>
            <li>
              <Link to="/home/about" className="text-indigo-700 font-medium px-4 py-2 rounded-full hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-150">
                About
              </Link>
            </li>
            <li>
              <Link to="/home/contact" className="text-indigo-700 font-medium px-4 py-2 rounded-full hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-150">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/home/services" className="text-indigo-700 font-medium px-4 py-2 rounded-full hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-150">
                Services
              </Link>
            </li>
            <li>
              <Link to="/admin" className="text-indigo-700 font-medium px-4 py-2 rounded-full hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-150">
                Admin
              </Link>
            </li>
            <li>
              <Link to="/" className="text-red-700 font-medium px-4 py-2 rounded-full hover:bg-indigo-50 hover:text-red-900 transition-colors duration-150">
                LogOut
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-8">
          {/* Aside Section */}
          <aside className="w-64 bg-white rounded-xl shadow-lg p-6 h-fit sticky top-8">
            <h3 className="text-xl font-bold text-indigo-700 mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/home/about" className="text-indigo-600 hover:underline">About</Link>
              </li>
              <li>
                <Link to="/home/contact" className="text-indigo-600 hover:underline">Contact</Link>
              </li>
              <li>
                <Link to="/home/services" className="text-indigo-600 hover:underline">Services</Link>
              </li>
              <li>
                <Link to="/admin" className="text-indigo-600 hover:underline">Admin</Link>
              </li>
            </ul>
          </aside>
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
