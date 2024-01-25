// Dashboard.js

import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home'; // Create Home component separately
import Category from './Category'; // Create Category component separately
import Products from './Products'; // Create Products component separately
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logic for logout
    alert("Logged out");
    onLogout();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/dashboard/home">HOME</Link>
          </li>
          <li>
            <Link to="/dashboard/category">Category</Link>
          </li>
          <li>
            <Link to="/dashboard/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="header">
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="content">
        {/* Add Routes component to handle nested routes */}
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
