import React from 'react';
import GoogleLoginComponent from '../components/auth/google.js';
import Navbar from '../components/common/navbar.js';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {  

  const navigationButtons = [
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-100">
    <Navbar navigationButtons={navigationButtons} />
    <div className="flex items-center justify-center p-10">
      <div className="max-w-md w-3/4 p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>
        {<form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password" />
          </div>
          <div className="flex items-center justify-between my-4">
            <button
              className="bg-[#3FADA8] hover:bg-[#808080] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-[#808080] hover:text-[#3FADA8]"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-center">
              <GoogleOAuthProvider clientId="157144026998-m6ttloec606q7jqb82ks58iteu7k00mq.apps.googleusercontent.com">
                <GoogleLoginComponent />
              </GoogleOAuthProvider>
            </div>
          </div>
        </form>}
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
