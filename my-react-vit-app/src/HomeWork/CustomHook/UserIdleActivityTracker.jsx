import React, { useEffect, useState } from 'react'

const UserIdleActivityTracker = () => {
  const [state, setState] = useState({ isIdle: false, lastActivityTime: Date.now() });
  const idleTimeout = 5000; // 5 seconds for testing

  useEffect(() => {
    const handleActivity = () => {
      setState({ isIdle: false, lastActivityTime: Date.now() });
    };

    const checkIdleStatus = () => {
      if (Date.now() - state.lastActivityTime > idleTimeout) {
        setState(prevState => ({ ...prevState, isIdle: true }));
      }
    };

    const events = ['mousemove', 'keydown', 'click', 'scroll'];
    events.forEach(event => window.addEventListener(event, handleActivity));

    const interval = setInterval(checkIdleStatus, 1000); // Check idle every second

    return () => {
      events.forEach(event => window.removeEventListener(event, handleActivity));
      clearInterval(interval);
    };
  }, [state.lastActivityTime, idleTimeout]);

  return (
    <div>
      <h2>User is {state.isIdle ? 'Idle' : 'Active'}</h2>
    </div>
  );
};


export default UserIdleActivityTracker
