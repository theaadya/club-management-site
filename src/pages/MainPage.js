import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';

const MainPage = () => {
  return (
    <><Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ffffff] to-[#3FADA8]">
      <div className="max-w-md w-3/4 p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome!</h2>
        <h3 className="text-xl mb-6 text-center text-gray-800">Say goodbye to administrative headaches and hello to a seamless club experience that maximizes your impact on campus.</h3>
      </div>
    </div></>
  );
};

export default MainPage;
