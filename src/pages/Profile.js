import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/navbar';
import ProfileBadge from './ProfileBadge';
import axios from 'axios';
import EventModal from '../components/common/EventModal';

const Profile = () => {
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const [sessionData, setSessionData] = useState(null);
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
  
    const openEventModal = (event) => {
      setSelectedEvent(event);
      setIsEventModalOpen(true);
    };
  
    const closeEventModal = () => {
      setIsEventModalOpen(false);
    };  

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
            const allEvents = response.data;
    
            const userRegisteredEvents = allEvents.filter((event) =>
            event.participants.some((participant) => participant === sessionData?.email)
          );
  
            setRegisteredEvents(userRegisteredEvents);
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      };
  
      fetchAllEvents();
    });
  
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
      { label: 'Logout', click: logout },
    ];
  
    return (
      <>
        <Navbar navigationButtons={navigationButtons} />
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-4 mx-2">My Profile</h1>
          <div className="bg-white p-4 rounded shadow-lg">
            {sessionData ? (
                <>
                <p><span className="font-bold">Name:</span> {sessionData.name}</p>
                <p><span className="font-bold">Email ID:</span> {sessionData.email}</p>
                <p>
                    <span className="font-bold">Profile Type:</span> <ProfileBadge email={sessionData.email} />
                </p>
                </>
            ) : (
                <p>Loading user data...</p>
            )}
            </div>
  
          <div className="mt-4">
            <h2 className="text-xl font-semibold mt-6 mb-2 mx-4">Registered Events</h2>
            <ul>
              {registeredEvents.map((event) => (
                <div className="bg-white p-4 rounded shadow-lg">
                    <li key={event._id}
                      className='flex justify-between items-center py-1 cursor-pointer hover:text-[#3FADA8]'
                      onClick={() => openEventModal(event)}>
                      {event.name}
                    </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <EventModal
          isEventModalOpen={isEventModalOpen}
          selectedEvent={selectedEvent}
          closeEventModal={closeEventModal}
        />
      </>
    );
  };
  
  export default Profile;  