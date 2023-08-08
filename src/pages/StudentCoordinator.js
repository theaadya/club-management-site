import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/navbar.js';
import axios from 'axios';

const StudentCoordinator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get('/studentcoordinator');
        setEvents(response.data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
    fetchEvents();
  }, []);

  

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* <h1 className="text-2xl text-center font-bold">Student Coordinator Dashboard</h1>

        <h2 className="text-xl font-bold mt-4">Pending Requests</h2>
        <ul className="border border-gray-300 p-2 bg-white mt-2">
          {requests
            .filter((request) => request.status === 'pending')
            .map((request) => (
              <li
                key={request.id}
                className="flex justify-between items-center py-1"
              >
                <span>{request.title}</span>
                <div>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
                    onClick={() => handleApprove(request.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleReject(request.id)}
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))}
        </ul>

        <h2 className="text-xl font-bold mt-4">Approved Requests</h2>
        <ul className="border border-gray-300 p-2 bg-white mt-2">
          {requests
            .filter((request) => request.status === 'approved')
            .map((request) => (
              <li
                key={request.id}
                className="flex justify-between items-center py-1"
              >
                <span>{request.title}</span>
                <span className="text-green-500">Approved</span>
              </li>
            ))}
        </ul>

        <h2 className="text-xl font-bold mt-4">Rejected Requests</h2>
        <ul className="border border-gray-300 p-2 bg-white mt-2">
          {requests
            .filter((request) => request.status === 'rejected')
            .map((request) => (
              <li
                key={request.id}
                className="flex justify-between items-center py-1"
              >
                <span>{request.title}</span>
                <span className="text-red-500">Rejected</span>
              </li>
            ))}
        </ul> */}
        <h1 className="text-xl font-bold mt-4">Pending Requests</h1>
        <ul className="border border-gray-300 p-2 bg-white mt-2">
          {events
            .filter(event => event.status === 'pending')
            .map(event => (
              <li
                key={event._id}  // Assuming _id is the unique identifier
                className="flex justify-between items-center py-1"
              >
                <h3
                  onClick={() => openModal(event)}
                  className="cursor-pointer hover:text-[#3FADA8]"
                >
                  {event.name}
                </h3>
                <div>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
                    // onClick={() => handleApprove(request.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                    // onClick={() => handleReject(request.id)}
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))}
        </ul>

        <h1 className="text-xl font-bold mt-4">Approved Requests</h1>
        <ul className="border border-gray-300 p-2 bg-white mt-2">
          {events
            .filter(event => event.status === 'approved')
            .map(event => (
              <li
                key={event._id}
                className="flex justify-between items-center py-1"
              >
                <h3
                  onClick={() => openModal(event)}
                  className="cursor-pointer hover:text-[#3FADA8]"
                >
                  {event.name}
                </h3>
                <span className="text-green-500">Approved</span>
              </li>
            ))}
        </ul>

        <h1 className="text-xl font-bold mt-4">Rejected Requests</h1>
        <ul className="border border-gray-300 p-2 bg-white mt-2">
          {events
            .filter(event => event.status === 'rejected')
            .map(event => (
              <li
                key={event._id}
                className="flex justify-between items-center py-1"
              >
                <h3
                  onClick={() => openModal(event)}
                  className="cursor-pointer hover:text-[#3FADA8]"
                >
                  {event.name}
                </h3>
                <span className="text-red-500">Rejected</span>
              </li>
            ))}
        </ul>
      </div>

      {isModalOpen && selectedEvent && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="max-w-2xl w-3/4 max-h-2xl h-3/4 p-6 bg-white shadow-lg rounded-md overflow-y-auto">
              <h2 className="text-2xl text-center font-bold mb-4">{selectedEvent.name}</h2>
              <div className="mb-4">
                <label className="block font-bold">Description</label>
                <p>{selectedEvent.description}</p>
              </div>
              <div className="mb-4">
                <label className="block font-bold">Domain</label>
                <p>{selectedEvent.domain}</p>
              </div>
              <div className="mb-4">
                <label className="block font-bold">Start Date</label>
                <p>{selectedEvent.start}</p>
              </div>
              <div className="mb-4">
                <label className="block font-bold">End Date</label>
                <p>{selectedEvent.end}</p>
              </div>
              <div className="mb-4">
                <label className="block font-bold">Venue</label>
                <p>{selectedEvent.venue}</p>
              </div>
              <div className="mb-4">
                <label className="block font-bold">Coordinator</label>
                <p>{selectedEvent.coordinator}</p>
              </div>
              <div className="mb-4">
                <label className="block font-bold">Registration Deadline</label>
                <p>{selectedEvent.registrationDeadline}</p>
              </div>
              <div className="mb-4">
                <label className="block font-bold">Club</label>
                <p>{selectedEvent.club}</p>
              </div>
              <div className="mb-4">
                <label className="block font-bold">Participants</label>
                {selectedEvent.participants.map((participant, index) => (
                  <p key={index} className="mb-1">
                    {participant}
                  </p>
                ))}
              </div>
              <div className="mb-4">
                <label className="block font-bold">Creation Date</label>
                <p>{selectedEvent.creationDate}</p>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="ml-4 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default StudentCoordinator;
