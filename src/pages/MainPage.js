import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/navbar';
import axios from 'axios';

const MainPage = () => {
  const [sessionData, setSessionData] = useState(null);

  
  async function getSessionData() {
    try {
      const response = await axios.get('/auth/api/session', {
        withCredentials: true,
      });
      setSessionData(response.data);
    } catch (error) {
      console.error('Error fetching session data:', error);
      setSessionData(error.message);
    }
  }

    

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#ffffff] to-[#3FADA8]">
        <div className="p-6">
          <div className="flex justify-center space-x-4 mb-4">
            <Link to="/events" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Approved Events
            </Link>
            <Link to="/clubs" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Club List
            </Link>
            <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Logout
          </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-md w-3/4 p-6 bg-white shadow-lg rounded-md">
          <div className="wrapper">
            <h2>Session</h2>
            <button onClick={getSessionData}>Get session data</button>

            <div className="data">{JSON.stringify(sessionData, null, 4)}</div>
          </div>
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome, {sessionData?.name}!</h2>
            {sessionData && (
              <h3 className="text-xl mb-6 text-center text-gray-800">
                Your email: {sessionData.email}
              </h3>
            )}
            <h3 className="text-xl mb-6 text-center text-gray-800">Say goodbye to administrative headaches and hello to a seamless club experience that maximizes your impact on campus.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
