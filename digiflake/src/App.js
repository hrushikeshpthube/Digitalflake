import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import ForgotPassword from './Login/ForgotPassword';
import Dashboard from './Dashboard/Dashboard';

const App = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const closeForgotPassword = () => {
    setShowForgotPassword(false);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/login" 
        element={!loggedIn ? <LoginForm onForgotPasswordClick={handleForgotPasswordClick} 
        onLogin={handleLogin} /> : <Navigate to="/dashboard/home" />} />
        <Route exact path="/forgot-password" element={<ForgotPassword onClose={closeForgotPassword} />} />
        <Route exact path="/dashboard/" 
        element={loggedIn ? <Dashboard onLogout={() => setLoggedIn(false)} /> : <Navigate to="/login" />} />
        <Route exact path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
