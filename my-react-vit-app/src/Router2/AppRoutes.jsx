import React from 'react'
import { createBrowserRouter } from 'react-router'
import Login from './Pages/Login'
import Home from './Pages/Home'
import HomeMain from './Pages/HomeMain'
import About from './Pages/About'
import Contact from './Pages/Contact'


export let router = createBrowserRouter([
    {
        path : '/',
        element : <Login/>
    },
    {
        path : '/home',
        element : <Home/>,
        children : [
            {
                path : '/home',
                element : <HomeMain/>
            },
            {
                path : '/home/about',
                element : <About/>
            },
            {
                path : '/home/contact',
                element : <Contact/>
            }

        ]
    }

])