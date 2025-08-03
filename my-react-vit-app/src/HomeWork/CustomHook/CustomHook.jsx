import React from 'react'
import ApiFetch from './ApiFetch'
import WindowSizeTracker from './WindowSizeTracker'
import Toggle from './Toggle'
import CachedUserFetching from './CachedUserFetching'
import UserIdleActivityTracker from './UserIdleActivityTracker'



// 🔷 Custom Hooks
// 36.	Reusable API Fetching Hook
// Develop a custom hook that accepts a URL and returns data, loading, and error states from the API.

// 37.	Window Size Tracking Hook
// Create a custom hook that returns the current window width and height and updates the values on window resize.


// 38.	Toggle Hook
// Implement a custom hook that manages a boolean state and provides a toggle function to switch its value.

// 39.	Cached User Fetching Hook
// Build a hook that fetches user data and caches the result to prevent repeated API calls on re-renders.

// 40.	User Idle Activity Tracker
// Create a custom hook that detects when the user is idle (inactive) for a certain amount of time.

const CustomHook = () => {
  return (
    <div>
      {/* <ApiFetch /> */}

      {/* // 37.	Window Size Tracking Hook */}
      {/* <WindowSizeTracker /> */}
     
      {/* // 38.	Toggle Hook */}
      {/* <Toggle/> */}


      {/* // 39.	Cached User Fetching Hook */}
      {/* <CachedUserFetching /> */}
  
      {/* // 40.	User Idle Activity Tracker */}
      <UserIdleActivityTracker />

    </div>
  )
}

export default CustomHook
