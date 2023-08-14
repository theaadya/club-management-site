import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = () => {
  const handleLoginSuccess = async (credentialResponse) => {
    const idToken = credentialResponse.credential;
    const email = await fetchEmailFromGoogle(idToken);

    if (email === 'aadya21370@iiitd.ac.in') {
      console.log(credentialResponse);
      window.location.href = '/mainpage';
    } else {
      console.log('Login Failed: Invalid email address');
    }
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  const fetchEmailFromGoogle = async (idToken) => {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + idToken);
    const data = await response.json();
    return data.email;
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={handleLoginError}
    />
  );
};

export default GoogleLoginComponent;
