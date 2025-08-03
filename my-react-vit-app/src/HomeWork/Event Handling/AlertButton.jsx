import React from 'react'

const AlertButton = () => {
  const handleClick = () => {
    alert("Button clicked!");
  }

  return (
    <div>
      <button onClick={handleClick}>Show Alert</button>
    </div>
  )
}

export default AlertButton
