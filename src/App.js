import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import './styles/global.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div>
      <button onClick={toggleDarkMode} className="toggle-darkmode">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Dashboard />
    </div>
  );
};

export default App;
