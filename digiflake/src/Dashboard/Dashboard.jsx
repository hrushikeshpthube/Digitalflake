// Dashboard.js

import React from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Home from './Home'; // Create Home component separately
import Category from './Category'; // Create Category component separately
import Products from './Products'; // Create Products component separately
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const history = useHistory();

  const handleLogout = () => {
    // Add logic for logout
    onLogout();
    history.push('/');
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
        <Switch>
          <Route path="/dashboard/home" component={Home} />
          <Route path="/dashboard/category" component={Category} />
          <Route path="/dashboard/products" component={Products} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
