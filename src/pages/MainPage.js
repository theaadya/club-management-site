import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/navbar';
import axios from 'axios';

const MainPage = () => {
  const [sessionData, setSessionData] = useState(null);
  useEffect(() => {
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

    getSessionData();
  }, []);

  const logout = async () => {
    try {
      await axios.delete('/auth/api/session', {
        withCredentials: true,
      });
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const navigationButtons = [
    { to: '/events', label: 'Approved Events' },
    { to: '/clubs', label: 'Club List' },
    { to: '/login', label: 'Logout', onClick: {logout} },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-[#ffffff] to-[#3FADA8]">
      <Navbar navigationButtons={navigationButtons} />
        <div className="flex items-center justify-center p-10">
          <div className="max-w-md w-3/4 p-6 bg-white shadow-lg rounded-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome, {sessionData?.name}!</h2>
            <h3 className="text-xl mb-6 text-center text-gray-800">Say goodbye to administrative headaches and hello to a seamless club experience that maximizes your impact on campus.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
