import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/navbar';
import axios from 'axios';

const Profile = () => {
    const navigationButtons = [
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
    ];
    
    return (
        <>
        <Navbar navigationButtons={navigationButtons} />
        </>
    )
}

export default Profile;