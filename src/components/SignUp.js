import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from '../google.tsx';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl text-center font-semibold mb-4">Sign Up</h2>
        {<form>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your username"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Confirm Password
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cpassword"
                type="cpassword"
                placeholder="Re-enter your password"
                />
            </div>
            <div className="flex items-center justify-center my-4">
                <button
                className="bg-[#3FADA8] hover:bg-[#808080] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                >
                Sign Up
                </button>
            </div>
            <div className="mb-6">
            <div className="flex items-center justify-center">
            <GoogleOAuthProvider clientId="157144026998-m6ttloec606q7jqb82ks58iteu7k00mq.apps.googleusercontent.com">
              <Google />
              {/* <button
                className="bg-white hover:bg-[#f0f0f0] text-[#4D4D4D] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                type="button"
              >
                <img src={googleLogo} alt="Google Logo" className="h-6 mr-2" />
                Sign up with Google
              </button> */}
              </GoogleOAuthProvider>
            </div>
          </div>
        </form>}
      </div>
    </div>
  );
};

export default SignUp;
