import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/navbar.js';
import axios from 'axios';

const StudentCoordinator = () => {
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
                <span>{event.name}</span>
                {/* Approve and Reject buttons */}
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
                <span>{event.name}</span>
                {/* Approved label */}
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
                <span>{event.name}</span>
                {/* Rejected label */}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default StudentCoordinator;
