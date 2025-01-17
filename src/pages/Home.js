// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Stock/Finance Dashboard</h1>
      <p>Track stock performance, financial news, and currency exchange rates all in one place.</p>
      <Link to="/dashboard">
        <button className="go-to-dashboard">Go to Dashboard</button>
      </Link>
    </div>
  );
};

export default Home;
