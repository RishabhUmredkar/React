import React from 'react'
import { useState } from 'react';


// / 21.	Post-Login Greeting
const PostLoginGreeting = () => {

     const [username, setUsername] = useState('');
      const [isLoggedIn, setIsLoggedIn] = useState(false);
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
          setIsLoggedIn(true);
        }
      };
  return (
    <div>
 {/* // 21.	Post-Login Greeting */}
     {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <div> 

            <label htmlFor="username">Username: </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
          
          </div>
          
          <button type="submit">Login</button>
        </form>
      ) : (
        <h2>Welcome, {username}!</h2>
      )}    </div>
  )
}


// /
export default PostLoginGreeting
