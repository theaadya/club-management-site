import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginComponent = () => {
  const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('auth/api/session', {
        email: username, // Assuming the email field corresponds to the username
      });

      console.log('Session created:', response.data);
      // Handle successful login, redirect, etc.
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, show error message, etc.
    }
  };

  const handleLoginSuccess = async (credentialResponse) => {
    const idToken = credentialResponse.credential;
    const email = await fetchEmailFromGoogle(idToken);
    const userLevel = await fetchUserLevel(email);
    setUsername(email);
    
    if (userLevel === "Student") {
      console.log(credentialResponse);
      console.log(`User's level: ${userLevel}`);
      //window.location.href = '/mainpage';
    } else if (userLevel === "Student Club Coordinator") {
      console.log(credentialResponse);
      console.log(`User's level: ${userLevel}`);
      window.location.href = '/studentcoordinator';
    } else if (userLevel === "Club Coordinator") {
      console.log(credentialResponse);
      console.log(`User's level: ${userLevel}`);
      window.location.href = '/clubcoordinator';
    } else if (userLevel === "Admin") {
      console.log(credentialResponse);
      console.log(`User's level: ${userLevel}`);
      window.location.href = '/admin';
    } else {
      console.log(credentialResponse);
      console.log('Login Failed: Invalid email address or user not found');
      //window.location.href = '/signup';
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

  const fetchUserLevel = async (email) => {
    try {
      const response = await axios.get('/user');
      const users = response.data;
      const matchingUser = users.find(user => user.email === email);
      if (matchingUser) {
        return matchingUser.level;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching user level:', error);
      return null;
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={handleLoginError}
    />
  );
};

export default GoogleLoginComponent;
