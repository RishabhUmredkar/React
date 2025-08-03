import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const NotFound = () => {
  const [state, setState] = useState({ currentPage: 'Home' });

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={() => setState({ currentPage: 'Home' })}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setState({ currentPage: 'About' })}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setState({ currentPage: 'Contact' })}>Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>{state.currentPage} Page</h2>} />
          <Route path="/about" element={<h2>{state.currentPage} Page</h2>} />
          <Route path="/contact" element={<h2>{state.currentPage} Page</h2>} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default NotFound;
