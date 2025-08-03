import React, { useEffect, useState } from 'react'

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    
    <div>
      <h2>Live Clock</h2>
      <p>{time.toString()}</p>
    </div>
  )
}

export default LiveClock
