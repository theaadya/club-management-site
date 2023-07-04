import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../assets/google-logo.png';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-md">
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
              
              <button
                className="bg-white hover:bg-[#f0f0f0] text-[#4D4D4D] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                type="button"
              >
                <img src={googleLogo} alt="Google Logo" className="h-6 mr-2" />
                Sign in with Google
              </button>
            </div>
          </div>
        </form>}
      </div>
    </div>
  );
};

export default Login;
