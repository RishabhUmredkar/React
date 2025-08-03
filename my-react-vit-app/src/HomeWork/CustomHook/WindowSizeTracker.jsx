import React from 'react'
import useWindowSize from './useWindowSize';

const WindowSizeTracker = () => {
   const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Window Size</h2>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default WindowSizeTracker
