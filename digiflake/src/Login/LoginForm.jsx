import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onForgotPasswordClick }) => {
  const logoUrl = 'https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png';

  return (
    <div className="login-container">
      <div className="company-logo">
        <img src={logoUrl} alt="Company Logo" />
      </div>
      <div className="company-info">
        <h2>DigitalFlake</h2>
        <p>Welcome to the DigitalFlake. Please sign in to continue.</p>
      </div>
      <div className="login-form">
        <form>
          <label>Email Address</label>
          <input type="email" required />

          <label>Password</label>
          <input type="password" required />

          <button type="submit">Sign In</button>
          <div className="forgot-password-link">
            <span onClick={onForgotPasswordClick}>Forgot Password?</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
