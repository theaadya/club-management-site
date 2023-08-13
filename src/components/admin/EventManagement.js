// components/admin/EventManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventManagement = () => {
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
        const response = await axios.get('/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
    fetchEvents();
  }, []);

  const handleApproveOrReject = async (event, status) => {
    try {
      const updatedEvent = { ...event, status };
      delete updatedEvent._id; // Remove the _id field from the update payload

      await axios.put(`/events/${event._id}`, updatedEvent);
      const response = await axios.get('/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Event Management</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">Description</th>
            <th className="text-center">Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event._id}>
              <td className="border px-4 py-2 cursor-pointer hover:text-[#3FADA8]"
                onClick={() => openModal(event)}>
                {event.name}
              </td>
              <td className="border px-4 py-2">{event.description}</td>
              <td className="border px-4 py-2 capitalize">{event.status}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={() => handleApproveOrReject(event, 'approved')}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleApproveOrReject(event, 'rejected')}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
    </div>
  );
};

export default EventManagement;
