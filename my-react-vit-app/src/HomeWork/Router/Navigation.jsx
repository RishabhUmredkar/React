import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  const [state, setState] = useState({ currentPage: 'Home' });

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setState({ currentPage: 'Home' })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setState({ currentPage: 'About' })}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setState({ currentPage: 'Contact' })}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>{state.currentPage} Page</h2>} />
          <Route path="/about" element={<h2>{state.currentPage} Page</h2>} />
          <Route path="/contact" element={<h2>{state.currentPage} Page</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
