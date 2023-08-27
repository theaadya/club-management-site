import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventModal from '../common/EventModal';

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
      delete updatedEvent._id;

      await axios.put(`/events/${event._id}`, updatedEvent);
      const response = await axios.get('/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div>
      <table className="w-full">
        <tbody>
        <div className="container mx-auto">
        <h1 className="text-lg font-bold mt-4">Pending Requests</h1>
          <ul className="border border-gray-300 p-2 bg-white mt-2">
            {events.filter(event => event.status === 'pending').length > 0 ? (
              events
                .filter(event => event.status === 'pending')
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
                    <div>
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
                    </div>
                  </li>
                ))
            ) : (
              <li className="py-1 text-gray-500">No Pending Requests</li>
            )}
          </ul>

          <h1 className="text-lg font-bold mt-4">Approved Requests</h1>
          <ul className="border border-gray-300 p-2 bg-white mt-2">
            {events.filter(event => event.status === 'approved').length > 0 ? (
              events
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
                ))
            ) : (
              <li className="py-1 text-gray-500">No Approved Requests</li>
            )}
          </ul>

          <h1 className="text-lg font-bold mt-4">Rejected Requests</h1>
          <ul className="border border-gray-300 p-2 bg-white mt-2">
            {events.filter(event => event.status === 'rejected').length > 0 ? (
              events
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
                ))
            ) : (
              <li className="py-1 text-gray-500">No Rejected Requests</li>
            )}
          </ul>
          </div>
        </tbody>
      </table>

      <EventModal
        isEventModalOpen={isModalOpen}
        selectedEvent={selectedEvent}
        closeEventModal={closeModal}
      />
    </div>
  );
};

export default EventManagement;