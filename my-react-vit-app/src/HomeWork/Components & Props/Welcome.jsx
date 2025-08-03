import React from 'react'

// 1.	Welcome Message Component
// Design a reusable Welcome component that accepts a user’s name through props and displays a personalized greeting in the UI.

function Welcome(props) {
  return (
    <div>
      <h1>Welcome, {props.name}!</h1>
    </div>
  )
}

export default Welcome

