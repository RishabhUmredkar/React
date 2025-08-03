import React, { useState } from 'react'


const lightTheme = {
  backgroundColor: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  backgroundColor: '#333333',
  color: '#ffffff',
};

const DynamicThemeRenderer = () => {
  const [theme, setTheme] = useState('light'); // Default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Apply the selected theme
  const appliedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div style={appliedTheme}>
      <h1>Dynamic Theme Renderer</h1>
      <p>This section's style changes based on the selected theme.</p>
      <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme</button>
    </div>
  );
}

export default DynamicThemeRenderer
