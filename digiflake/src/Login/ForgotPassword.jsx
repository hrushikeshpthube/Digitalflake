import React from 'react';
import './ForgotPassword.css';


const ForgotPassword = ({ onClose }) => {
  const handleRequestLink = () => {
    // Add logic to handle request link action
    alert("Link sent")
  };

  return (
    <div className="forgot-password-container">
      <h3>Did you forget your password?</h3>
      <p>Enter your email address, and we'll send you a link to reset your password.</p>

      <form>
        <label htmlFor="email">Email ID</label>
        <input type="email" id="email" placeholder="Enter your email address" />

        <button type="button" onClick={handleRequestLink}>
          Request Reset Link
        </button>
      </form>

      <button className="close" onClick={onClose}>
        Back to Login
      </button>
    </div>
  );
};

export default ForgotPassword;
