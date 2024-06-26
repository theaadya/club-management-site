import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/navbar.js';
import axios from 'axios';
import EventModal from '../components/common/EventModal.js';

const ClubCoordinator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClubModalOpen, setIsClubModalOpen] = useState(false);
  const [sessionData, setSessionData] = useState(null);
  const [events, setEvents] = useState([]);
  const today = new Date();
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedClub, setSelectedClub] = useState(null);
  const [clubs, setClubs] = useState([]);

  const [formData, setFormData] = useState({
    eventName: "",
    eventDescription: "",
    eventDomain: "",
    start: "",
    end: "",
    venue:"",
    coordinator:"",
    // status: "",
    registrationDeadline:"",
    // club:"",
    creationDate:"",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openClubModal = (club) => {
    setSelectedClub(club);
    setIsClubModalOpen(true);
  };

  const closeClubModal = () => {
    setIsClubModalOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const requestData = {
        name: formData.eventName,
        description: formData.eventDescription,
        domain: formData.eventDomain,
        start: formData.start,
        end: formData.end,
        venue: formData.venue,
        coordinator: formData.coordinator,
        status: "pending",
        registrationDeadline: formData.registrationDeadline,   
        club: sessionData?.email,
        participants: [],
        creationDate: formData.creationDate,
      };

      console.log(requestData)
      const response = await axios.post('/events/requests', requestData);

      console.log('Event request submitted:', response.data);
      closeModal();
    } catch (error) {
      console.error('Error submitting event request:', error);
    }
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

  useEffect(() => {
    async function fetchClubs() {
      try {
        const response = await axios.get('/clubs');
        setClubs(response.data);
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    }
    fetchClubs();
  }, []);

  const updatedClubDetails = async (club) => {
    try {
      const updatedClub = { ...club };
      delete updatedClub._id; 
      await axios.put(`/clubs/${club._id}`, updatedClub);
      closeClubModal();
    } catch (error) {
      console.error('Error updating club details:', error);
    }
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
    fetch('/events') 
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  const approvedEvents = events.filter((event) => {
    return event.club === sessionData?.email && event.status === 'approved';
  });

  const rejectedEvents = events.filter((event) => {
    return event.club === sessionData?.email && event.status === 'rejected';
  });

  const pendingEvents = events.filter((event) => {
    return event.club === sessionData?.email && event.status === 'pending';
  });

  const pastEvents = events.filter((event) => {
    const eventStartDate = new Date(event.start); 
    return event.club === sessionData?.email && eventStartDate < today;
  });

  const openEventModal = (event) => {
    setSelectedEvent(event);
    setIsEventModalOpen(true);
  };

  const closeEventModal = () => {
    setIsEventModalOpen(false);
  };

  const userClub = clubs.find((club) => club.email === sessionData?.email);
  const navigationButtons = [
    {
      label: 'Edit Club Info',
      click: () => {
        console.log(userClub);
        openClubModal(userClub);
      },
    },
    { to: '/profile', label: 'Profile' },
    { label: 'Logout', click: logout },
  ];
  
  return (
    <>
      <Navbar navigationButtons={navigationButtons} />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-center font-bold mb-4">{userClub.name} Club Coordinator Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-4">Past Events</h2>
            <ul className="border border-gray-300 p-2 bg-white">
              <li className="flex justify-between items-center py-1 font-bold text-[#808080]">
                <span>Event Name</span>
                <span>Date</span>
              </li>
              {pastEvents.map((event) => (
                <li key={event.id} className="flex justify-between items-center py-1 cursor-pointer hover:text-[#3FADA8]"
                  onClick={() => openEventModal(event)}>
                  <span>{event.name}</span>
                  <span>{event.start}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold mb-4">New Requests</h2>
              <button
                className="bg-[#3FADA8] hover:bg-[#808080] hover:text-white text-white font-bold py-1 px-4 mb-2 rounded"
                onClick={openModal}
              >
                New Request +
              </button>
            </div>
            <ul className="border border-gray-300 p-2 bg-white">
              <li className="flex justify-between items-center py-1 font-bold text-[#808080]">
                <span>Request Title</span>
                <span>Request Date</span>
              </li>
              {pendingEvents.map((event) => (
                <li key={event.id} className="flex justify-between items-center py-1 cursor-pointer hover:text-[#3FADA8]"
                  onClick={() => openEventModal(event)}>
                  <span>{event.name}</span>
                  <span>{event.start}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Approved Requests</h2>
            <ul className="border border-gray-300 p-2 bg-white">
              <li className="flex justify-between items-center py-1 font-bold text-[#808080]">
                <span>Request Title</span>
                <span>Request Date</span>
              </li>
                {approvedEvents.map((event) => (
                  <li key={event.id} className="flex justify-between items-center py-1 cursor-pointer hover:text-[#3FADA8]"
                    onClick={() => openEventModal(event)}>
                    <span>{event.name}</span>
                    <span>{event.start}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Rejected Requests</h2>
            <ul className="border border-gray-300 p-2 bg-white">
              <li className="flex justify-between items-center py-1 font-bold text-[#808080]">
                <span>Request Title</span>
                <span>Request Date</span>
              </li>
              {rejectedEvents.map((event) => (
                <li key={event.id} className="flex justify-between items-center py-1 cursor-pointer hover:text-[#3FADA8]"
                  onClick={() => openEventModal(event)}>
                  <span>{event.name}</span>
                  <span>{event.start}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="max-w-2xl w-3/4 max-h-2xl h-3/4 p-6 bg-white shadow-lg rounded-md overflow-y-auto">
              <h2 className="text-2xl text-center font-bold mb-4">New Event Request</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block font-bold">Event Title</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full"
                    name="eventName"
                    value={formData.eventName}
                    onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                  />

                  <label className="block font-bold">Event Description</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full"
                    name="eventDescription"
                    value={formData.eventDescription}
                    onChange={(e) => setFormData({ ...formData, eventDescription: e.target.value })}
                  />

                  <label className="block font-bold">Domain</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full"
                    name="eventDomain"
                    value={formData.eventDomain}
                    onChange={(e) => setFormData({ ...formData, eventDomain: e.target.value })}
                  />

                  <label className="block font-bold">Start</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full"
                    name="start"
                    value={formData.start}
                    onChange={(e) => setFormData({ ...formData, start: e.target.value })}
                  />
                  
                  <label className="block font-bold">End</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full"
                    name="end"
                    value={formData.end}
                    onChange={(e) => setFormData({ ...formData, end: e.target.value })}
                  />

                  <label className="block font-bold">Preferred Venue</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full"
                    name="venue"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  />

                  <label className="block font-bold">Coordinator</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full"
                    name="coordinator"
                    value={formData.coordinator}
                    onChange={(e) => setFormData({ ...formData, coordinator: e.target.value })}
                  />

                  <label className="block font-bold">Registration Deadline</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full"
                    name="registrationDeadline"
                    value={formData.registrationDeadline}
                    onChange={(e) => setFormData({ ...formData, registrationDeadline: e.target.value })}
                  />

                  <label className="block font-bold">Creation Date</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full"
                    name="creationDate"
                    value={formData.creationDate}
                    onChange={(e) => setFormData({ ...formData, creationDate: e.target.value })}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#3FADA8] hover:bg-[#808080] hover:text-white text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="ml-4 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {isClubModalOpen && selectedClub && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="max-w-2xl w-3/4 max-h-2xl h-3/4 p-6 bg-white shadow-lg rounded-md overflow-y-auto">
          <h2 className="text-2xl text-center font-bold mb-4">{selectedClub.name}</h2>
            <div className="mb-4">
              <label className="block font-bold">Description</label>
              <textarea
                className="border p-2 w-full"
                value={selectedClub.description}
                onChange={(e) => {
                  const updatedClub = { ...selectedClub, description: e.target.value };
                  setSelectedClub(updatedClub);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold">Members</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={selectedClub.members.join(',')}
                onChange={(e) => {
                  const membersInput = e.target.value;
                  const updatedClub = { ...selectedClub, members: membersInput.split(',') };
                  setSelectedClub(updatedClub);
                }}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="ml-4 bg-[#3FADA8] hover:bg-gray-400 text-white py-2 px-4 rounded"
                onClick={() => {
                  updatedClubDetails(selectedClub);
                }}
              >
                Save Changes
              </button>
              <button
                type="button"
                className="ml-4 bg-[#3FADA8] hover:bg-gray-400 text-white py-2 px-4 rounded"
                onClick={() => {
                  closeClubModal();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
      <EventModal
        isEventModalOpen={isEventModalOpen}
        selectedEvent={selectedEvent}
        closeEventModal={closeEventModal}
      />
    </>
  );
};

export default ClubCoordinator;