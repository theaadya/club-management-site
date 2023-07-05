import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = () => {
  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    window.location.href = '/mainpage';
  };

  const handleLoginError = () => {
    console.log('Login Failed');
    window.location.href = '/mainpage';
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={handleLoginError}
    />
  );
};

export default GoogleLoginComponent;
