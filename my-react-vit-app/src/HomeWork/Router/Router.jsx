import React from 'react'
import Routing from './Routing'
import Navigation from './Navigation'
import NotFound from './NotFound'


// 🔷 React Router
// 41.	Basic Routing Setup
// Set up client-side routing for a React app with Home, About, and Contact pages using React Router.

// 42.	Product Details with Route Parameters
// Use route parameters to display details of a specific product based on its ID in the URL.

// 43.	Navigation Bar with Active Highlighting
// Build a navigation bar that highlights the active route/page based on the current URL.

// 44.	404 Page Handling
// Create a route that shows a “404 Not Found” message for all unmatched or invalid paths.

// 45.	Private Route for Authenticated Users
// Implement a protected route that only renders its content if the user is authenticated; otherwise, redirect them to a login page.


const Router = () => {
    return (
        <div>
      {/* // 41.	Basic Routing Setup */}
      {/* <Routing/> */}


        {/* // 42.	Product Details with Route Parameters */}
        {/* <ProductDetails /> */}


        {/* // 43.	Navigation Bar with Active Highlighting */}
        {/* <Navigation/> */}
        {/* // 44.	404 Page Handling */}
        <NotFound/>
        {/* // 45.	Private Route for Authenticated Users */}

        </div>
    )
}

export default Router
