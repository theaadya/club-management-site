import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/navbar';
import axios from 'axios';

const Profile = () => {
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
        { to: '/login', label: 'Logout', onClick: {logout} },
    ];
    
    return (
        <>
        <Navbar navigationButtons={navigationButtons} />
        </>
    )
}

export default Profile;