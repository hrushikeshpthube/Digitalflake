import React, { useState } from 'react';
import LoginForm from './Login/LoginForm';
import ForgotPassword from './Login/ForgotPassword';

const App = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const closeForgotPassword = () => {
    setShowForgotPassword(false);
  };

  return (
    <div>
      {!showForgotPassword ? (
        <LoginForm onForgotPasswordClick={handleForgotPasswordClick} />
      ) : (
        <ForgotPassword onClose={closeForgotPassword} />
      )}
    </div>
  );
};

export default App;
