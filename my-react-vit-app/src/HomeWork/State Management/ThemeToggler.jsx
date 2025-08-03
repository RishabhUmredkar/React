// ThemeToggler.js
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggler = () => {
  const { theme, dispatch } = useTheme();

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
