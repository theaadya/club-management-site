import React from 'react';
import Navbar from '../components/common/navbar.js';
import axios from 'axios';

const Admin = () => {
    const logout = async () => {
        try {
          await axios.delete('/auth/api/session');
          window.location.href = '/login';
          console.log('Logged out');
        } catch (error) {
          console.error('Error during logout:', error);
        }
      };
        
      const navigationButtons = [
        { to: '/manage', label: 'Manage' },
        { to: '/profile', label: 'Profile' },
        { label: 'Logout', click: logout },
      ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#ffffff] to-[#3FADA8]">
        <Navbar navigationButtons={navigationButtons} />
            <div className="flex items-center justify-center p-10">
            <div className="max-w-md w-3/4 p-6 bg-white shadow-lg rounded-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome, Admin!</h2>
                <h3 className="text-xl mb-6 text-center text-gray-800">Manage your club with ease and make an impact on campus.</h3>
            </div>
            </div>
        </div>
    );
};

export default Admin;
