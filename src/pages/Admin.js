import React, { useState } from 'react';
import Navbar from '../components/common/navbar.js';
import EventManagement from '../components/admin/EventManagement.js';
import AddClub from '../components/admin/AddClub.js';
import LoginChange from '../components/admin/LoginChange.js';
import ClubChange from '../components/admin/ClubChange.js';
import axios from 'axios';

const Admin = () => {
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionClick = (section) => {
        setActiveSection(prevActiveSection => prevActiveSection === section ? null : section);
    };

    const sectionButtonStyle = {
        background: '#3FADA8',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '10px',
    };

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
        { to: '/profile', label: 'Profile' },
        { label: 'Logout', click: logout },
    ];

    return (
        <div>
            <Navbar navigationButtons={navigationButtons} />
            <div className='m-5'>
                <button
                    style={activeSection === 'EventManagement' ? { ...sectionButtonStyle, background: '#808080' } : sectionButtonStyle}
                    onClick={() => handleSectionClick('EventManagement')}
                >
                    Event Management
                </button>
                {activeSection === 'EventManagement' && <EventManagement />}
            </div>
            <div className='m-5'>
                <button
                    style={activeSection === 'AddClub' ? { ...sectionButtonStyle, background: '#808080' } : sectionButtonStyle}
                    onClick={() => handleSectionClick('AddClub')}
                >
                    Add Club
                </button>
                {activeSection === 'AddClub' && <AddClub />}
            </div>
            <div className='m-5'>
                <button
                    style={activeSection === 'ClubChange' ? { ...sectionButtonStyle, background: '#808080' } : sectionButtonStyle}
                    onClick={() => handleSectionClick('ClubChange')}
                >
                    Edit Club Details
                </button>
                {activeSection === 'ClubChange' && <ClubChange />}
            </div>
            <div className='m-5'>
                <button
                    style={activeSection === 'LoginChange' ? { ...sectionButtonStyle, background: '#808080' } : sectionButtonStyle}
                    onClick={() => handleSectionClick('LoginChange')}
                >
                    Edit Login Details
                </button>
                {activeSection === 'LoginChange' && <LoginChange />}
            </div>
        </div>
    );
};

export default Admin;
