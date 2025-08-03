import React, { useState } from 'react'
import PostLoginGreeting from './PostLoginGreeting';
import WeatherStatusMessage from './WeatherStatusMessage';
import LoadingIndicator from './LoadingIndicator';
import EmptyTodoListMessage from './EmptyTodoListMessage';
import DynamicThemeRenderer from './DynamicThemeRenderer';


// 🔷 Conditional Rendering
// 21.	Post-Login Greeting
// Create a login form. After successful form submission, conditionally render a welcome message with the entered username.


// 22.	Weather Status Message
// Display a message based on the selected weather condition: “It’s sunny today!”, “Looks like rain!”, or “Cloudy skies ahead.”


// 23.	Loading Indicator
// Build a component that fetches data. Show a “Loading…” message while the data is being retrieved, and render the data once it’s available.


// 24.	Empty To-Do List Message
// If a to-do list is empty, display a message saying “No tasks to show.” Otherwise, render the list.


// 25.	Dynamic Theme Renderer
// Create a component that switches themes and displays a UI section styled accordingly based on the selected theme.

const ConditionalRendering = () => {
   
  return (
    <div>
      {/* // 21.	Post-Login Greeting */}
    {/* <PostLoginGreeting /> */}

{/* // 22.	Weather Status Message */}
    {/* <WeatherStatusMessage /> */}


{/* // 23.	Loading Indicator */}
    {/* <LoadingIndicator /> */}

{/* // 24.	Empty To-Do List Message */}
    {/* <EmptyTodoListMessage /> */}


{/* // 25.	Dynamic Theme Renderer */}
    <DynamicThemeRenderer />

    </div>
  )
}

export default ConditionalRendering
