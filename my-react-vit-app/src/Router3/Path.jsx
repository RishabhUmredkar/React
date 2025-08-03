import React from 'react'
import { createBrowserRouter } from 'react-router'

export let Path = createBrowserRouter([
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