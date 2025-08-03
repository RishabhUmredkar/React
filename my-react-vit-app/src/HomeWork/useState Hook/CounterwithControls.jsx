import React from 'react'

const CounterwithControls = () => {
    // Placeholder for state and event handlers

   const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <h1>Counter with Controls</h1>
      <p>Current Count: {count} </p>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default CounterwithControls
