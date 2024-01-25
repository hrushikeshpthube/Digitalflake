import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ onForgotPasswordClick, onLogin }) => {
  const logoUrl = 'https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png';
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Add your login logic here
    onLogin();

    // Navigate to the dashboard after successful login
    navigate('/dashboard/');
  };

  return (
    <div className="login-container">
      <div className="company-logo">
        <img src={logoUrl} alt="Company Logo" />
      </div>
      <div className="company-info">
        <h2>DigitalFlake</h2>
        <p>Welcome to DigitalFlake. Please sign in to continue.</p>
      </div>
      <div className="login-form">
        <form>
          <label>Email Address</label>
          <input type="email" required />

          <label>Password</label>
          <input type="password" required />

          {/* Use handleSignIn function for the onClick event */}
          <button type="button" onClick={handleSignIn}>
            Sign In
          </button>
          <div className="forgot-password-link">
            <span onClick={onForgotPasswordClick}>Forgot Password?</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
