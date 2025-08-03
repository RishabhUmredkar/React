// ThemeContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Reducer function to manage theme state
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

// Create context to share theme state
const ThemeContext = createContext();

// Provider component to wrap the app and provide theme context
const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' });

  return (
    <ThemeContext.Provider value={{ theme: state.theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access theme context
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
