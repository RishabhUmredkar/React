import React from 'react'
import Joke from './Joke';
import LiveClock from './LiveClock';
import MousePositionTracker from './MousePositionTracker';
import OneTimeWelcomeMessage from './OneTimeWelcomeMessage';
import CounterChangeLogger from './CounterChangeLogger';



// 16.	Fetch and Display Joke on Load
// Use an API to fetch a random joke and display it when the component is initially rendered.


// 17.	Live Digital Clock
// Build a live clock that updates every second using the useEffect hook.

// 18.	Mouse Position Tracker
// Create a component that displays the current x and y coordinates of the mouse in real time as the user moves their cursor.

// 19.	One-Time Welcome Message
// Display a one-time welcome message to the user the first time they visit or load the component.


// 20.	Log Counter Changes
// Use useEffect to log a custom message in the console every time a counter value changes.
 
const UseEffect = () => {
  return (
    <div>
       {/* // 16.	Fetch and Display Joke on Load */}
    {/* <Joke /> */}


{/* // 17.	Live Digital Clock */}
{/* <LiveClock /> */}


    {/* // 18.	Mouse Position Tracker */}
    {/* <MousePositionTracker /> */}

    {/* // 19.	One-Time Welcome Message */}
    {/* <OneTimeWelcomeMessage /> */}


    {/* // 20.	Log Counter Changes */}
    
    <CounterChangeLogger />

    </div>
  )
}

export default UseEffect
