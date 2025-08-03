import React from 'react'

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false);

  const toggle = () => setIsToggled(prevState => !prevState);

  return (
    <div>
      <h2>Toggle State: {isToggled ? 'On' : 'Off'}</h2>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default Toggle
