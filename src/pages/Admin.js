import React, { useState } from 'react';
import Navbar from '../components/common/navbar.js';
import EventManagement from '../components/admin/EventManagement.js';
import AddClub from '../components/admin/AddClub.js';
import LoginDetails from '../components/admin/LoginDetails.js';
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
                    style={activeSection === 'LoginDetails' ? { ...sectionButtonStyle, background: '#808080' } : sectionButtonStyle}
                    onClick={() => handleSectionClick('LoginDetails')}
                >
                    Club & Login Details
                </button>
                {activeSection === 'LoginDetails' && <LoginDetails />}
            </div>
        </div>
    );
};

export default Admin;
