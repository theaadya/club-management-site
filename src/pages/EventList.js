import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/navbar.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [email, setEmail] = useState('');
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
    fetch('/events/approved') 
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  const handleRegister = async () => {
    if (selectedEventId && email) {
      try {
        await axios.post(`/events/${selectedEventId}/registrations`, { email });
        
        const updatedEvents = events.map((event) =>
          event._id === selectedEventId
            ? { ...event, participants: [...event.participants, email] }
            : event
        );

        setEvents(updatedEvents);
        setRegisteredEvents((prevRegisteredEvents) => [...prevRegisteredEvents, selectedEventId]);
        setEmail('');
        setSelectedEventId(null);
        setShowModal(false);
      } catch (error) {
        console.error('Error registering for event:', error);
      }
    }
  };

  const openModal = (eventId) => {
    setSelectedEventId(eventId);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedEventId(null);
    setShowModal(false);
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
    { to: '/profile', label: 'Profile' },
    { to: '/mainpage', label: 'Main Page' },
    { to: '/clubs', label: 'Club List' },
    { to: '/login', label: 'Logout', onClick: {logout} },
  ];

  return (
    <>
      <Navbar navigationButtons={navigationButtons} />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-2xl font-bold mt-4 mb-4">Event List</h2>
            <ul className="grid gap-4">
              {events.map((event) => (
                <li key={event._id} className="border p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <button
                    className={`bg-[#3FADA8] hover:bg-[#808080] text-white font-bold py-2 px-4 rounded ${
                      registeredEvents.includes(event._id) || (sessionData && event.participants.includes(sessionData.email))
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:text-white'
                    }`}
                    onClick={() => openModal(event._id)}
                    disabled={
                      registeredEvents.includes(event._id) ||
                      (sessionData && event.participants.includes(sessionData.email))
                    }
                  >
                    {registeredEvents.includes(event._id) ||
                    (sessionData && event.participants.includes(sessionData.email))
                      ? 'Registered'
                      : 'Register'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">Register for Event</h3>
            <p>Please enter your email address:</p>
            <input
              type="email"
              className="border rounded-md px-2 py-1 mt-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-4">
              <button
                className="bg-[#3FADA8] hover:bg-[#808080] text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleRegister}
              >
                Submit
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventList;