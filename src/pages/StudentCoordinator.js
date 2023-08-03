import React, { useState } from 'react';
import Navbar from '../components/common/navbar.js';

const StudentCoordinator = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: 'Request 1',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Request 2',
      status: 'approved',
    },
    {
      id: 3,
      title: 'Request 3',
      status: 'rejected',
    },
  ]);

  const handleApprove = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: 'approved' } : request
      )
    );
  };

  const handleReject = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: 'rejected' } : request
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-center font-bold">Student Coordinator Dashboard</h1>

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
        </ul>
      </div>
    </>
  );
};

export default StudentCoordinator;
