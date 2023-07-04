import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">IIITD's Club Management Site</h2>
        <h3 className="text-xl mb-6 text-center text-gray-800">Centralize, Organize, and Elevate Your Club Experience</h3>
        <Link
          to="/login"
          className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </Link>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <Link to="/signup" className="text-blue-500 underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
