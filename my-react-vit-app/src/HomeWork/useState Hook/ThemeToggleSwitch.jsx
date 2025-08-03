import React from 'react'

const ThemeToggleSwitch = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div style={{ 
      backgroundColor : isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
      height: '97vh',
    }}>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        {isDarkMode ? 'Dark Mode' :  'Light Mode'}
      </label>
    </div>
  )
}

export default ThemeToggleSwitch
