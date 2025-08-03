import React from 'react'

const MousePositionTracker = () => {
     
    return (
    <div>
      <button onClick={(e) => {
        const { clientX, clientY } = e;
        console.log(`Mouse position: (${clientX}, ${clientY})`);
      }}>Get Mouse Position</button>
    </div>
  )
}

export default MousePositionTracker
