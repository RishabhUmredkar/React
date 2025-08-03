// Use useEffect to log a custom message in the console every time a counter value changes.


import React, { useState, useEffect } from 'react';

const CounterChangeLogger = () => {
  const [counter, setCounter] = useState(0);

  // useEffect to log whenever the counter value changes
  useEffect(() => {
    console.log(`Counter value has changed to: ${counter}`);
  }, [counter]); // Dependency array contains 'counter', meaning the effect runs on counter change

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterChangeLogger;
