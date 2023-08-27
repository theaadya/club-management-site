import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/navbar';
import axios from 'axios';

const ProfileBadge = ({ level }) => {
  let badgeClass = '';

  switch (level) {
    case 'Student':
      badgeClass = 'bg-blue-500';
      break;
    case 'Club Coordinator':
      badgeClass = 'bg-green-500';
      break;
    case 'Student Club Coordinator':
      badgeClass = 'bg-yellow-500';
      break;
    case 'Admin':
      badgeClass = 'bg-red-500';
      break;
    default:
      badgeClass = 'bg-gray-500';
  }

  return (
    <span className={`inline-block px-2 py-1 text-white rounded ${badgeClass}`}>
      {level}
    </span>
  );
};

const Profile = () => {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const logout = async () => {
    try {
      await axios.delete('/auth/api/session', {
        withCredentials: true,
      });
    } catch (error) {
      console.error('Error during logout:', error);
    }
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

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const response = await axios.get('/events');
        const allEvents = response.data.events;

        const userRegisteredEvents = allEvents.filter((event) =>
          event.participants.some((participant) => participant.email === sessionData.email)
        );

        setRegisteredEvents(userRegisteredEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchAllEvents();
  });

  const navigationButtons = [
    { to: '/login', label: 'Logout', onClick: logout },
  ];

  return (
    <>
      <Navbar navigationButtons={navigationButtons} />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4 mx-2">User Profile</h1>
        <div className="bg-white p-4 rounded shadow-lg">
          {/* <p>Name: {sessionData.name}</p> */}
          {/* <p>Roll Number: {userData.rollNumber}</p> */}
          <p>Email ID: {sessionData.email}</p>
          <p>
            Profile Type: <ProfileBadge level={sessionData.level} />
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2 mx-2">Registered Events</h2>
          <ul>
            {registeredEvents.map((event) => (
              <li key={event.id}>{event.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;