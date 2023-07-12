import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar.js';

const Home = () => {
  return (
    <><Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ffffff] to-[#3FADA8]">
      <div className="max-w-md w-3/4 p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">IIITD's Club Management Site</h2>
        <h3 className="text-xl mb-6 text-center text-gray-800">Centralize, Organize, and Elevate Your Club Experience</h3>
        <Link
          to="/login"
          className="block bg-[#3FADA8] hover:bg-[#808080] text-white font-bold py-3 px-6 rounded-md text-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#3FADA8] focus:ring-offset-2"
        >
          Login
        </Link>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <Link to="/signup" className="text-[#808080] hover:text-[#3FADA8] underline">Sign up</Link>
        </p>
      </div>
    </div></>
  );
};

export default Home;
