import React, { useState, useEffect } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
function App({ children }) {
  /** App layout wrapper providing theme toggle, header, and footer */
  const [theme, setTheme] = useState('light');

  // Apply theme to <html> element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <h1 style={{ marginTop: 32, marginBottom: 8 }}>Welcome to Your Website</h1>
        <p style={{ marginTop: 0, opacity: 0.8 }}>A lightweight React starter ready to grow</p>

        <nav style={{ display: 'flex', gap: 16, marginTop: 24, marginBottom: 24 }}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'App-link' : undefined}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'App-link' : undefined}
          >
            About
          </NavLink>
        </nav>

        <main style={{ width: '100%', maxWidth: 960, padding: '0 16px' }}>
          {children}
        </main>
      </header>

      <footer style={{ textAlign: 'center', padding: 16, opacity: 0.7 }}>
        © {new Date().getFullYear()} Basic Website • Built with React
      </footer>
    </div>
  );
}

export default App;
