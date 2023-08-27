import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/navbar.js';
import EventManagement from '../components/admin/EventManagement.js';
import AddClub from '../components/admin/AddClub.js';
import LoginChange from '../components/admin/LoginChange.js';
import ClubChange from '../components/admin/ClubChange.js';
import axios from 'axios';

const fetchUserLevel = async (email) => {
    try {
      const response = await axios.get('/user');
      const users = response.data;
      const matchingUser = users.find((user) => user.email === email);
      if (matchingUser) {
        return matchingUser.level;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching user level:', error);
      return null;
    }
  };
  
const Manage = () => {
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

    const [level, setLevel] = React.useState(null);
    React.useEffect(() => {
        fetchUserLevel(sessionData?.email).then((result) => {
        setLevel(result);
        });
    }, [sessionData?.email]);

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
      
      if (level === 'Student Club Coordinator') {
        navigationButtons.unshift({ to: '/studentcoordinator', label: 'Student Coordinator Page' });
      } else if (level === 'Admin') {
        navigationButtons.unshift({ to: '/admin', label: 'Admin Page' });
      }

    return (
        <div>
            <Navbar navigationButtons={navigationButtons} />
            <div className='m-5'>
                <button
                    style={activeSection === 'EventManagement' ? { ...sectionButtonStyle, background: '#808080' } : sectionButtonStyle}
                    onClick={() => handleSectionClick('EventManagement')}
                >
                    Pending Event Requests
                </button>
                {activeSection === 'EventManagement' && <EventManagement />}
            </div>
            <div className='m-5'>
                <button
                    style={activeSection === 'AddClub' ? { ...sectionButtonStyle, background: '#808080' } : sectionButtonStyle}
                    onClick={() => handleSectionClick('AddClub')}
                >
                    Pending New Club Requests
                </button>
                {activeSection === 'AddClub' && <AddClub />}
            </div>
            <div className='m-5'>
                <button
                    style={activeSection === 'ClubChange' ? { ...sectionButtonStyle, background: '#808080' } : sectionButtonStyle}
                    onClick={() => handleSectionClick('ClubChange')}
                >
                    Edit Club Information
                </button>
                {activeSection === 'ClubChange' && <ClubChange />}
            </div>
            <div className='m-5'>
                <button
                    style={activeSection === 'LoginChange' ? { ...sectionButtonStyle, background: '#808080' } : sectionButtonStyle}
                    onClick={() => handleSectionClick('LoginChange')}
                >
                    Edit Student Coordinator Login Details
                </button>
                {activeSection === 'LoginChange' && <LoginChange />}
            </div>
        </div>
    );
};

export default Manage;