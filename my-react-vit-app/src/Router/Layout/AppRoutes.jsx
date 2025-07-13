import Login from './../Pages/Login';
import Home from './../Pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import About from './../Pages/About';
import Contact from './../Pages/Contact';
import Services from './../Pages/Services';
import Admin from './../Pages/Admin';
import HomeMain from './../Pages/HomeMain';

export let routes = createBrowserRouter([
    {
        path : '/',
        element : <Login/>
    },
    {
        path : 'home',
        element : <Home/>,
        children :[
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
            },
            {
                path : '/home/services',
                element : <Services/>
            }
        ]
    },
    {
        path : 'admin',
        element : <Admin/>
    }

])