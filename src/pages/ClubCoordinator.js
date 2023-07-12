import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar.js';

const ClubCoordinator = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-center font-bold mb-4">Club Coordinator Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-4">Past Events</h2>
            <ul className="border border-gray-300 p-2 bg-white">
              {/* Iterate over past events */}
              <li className="flex justify-between items-center py-1">
                <span>Event Name</span>
                <span>Date</span>
              </li>
              {/* Add more list items as needed */}
            </ul>
          </div>

          <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold mb-4">New Requests</h2>
                <Link to="/create-request">
                <button className="bg-[#3FADA8] hover:bg-[#808080] hover:text-white text-white font-bold py-1 px-4 mb-2 rounded">
                New Request +
                </button>
                </Link>
            </div>
            <ul className="border border-gray-300 p-2 bg-white">
              {/* Iterate over new requests */}
              <li className="flex justify-between items-center py-1">
                <span>Request Title</span>
                <span>Request Date</span>
              </li>
              {/* Add more list items as needed */}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Approved Requests</h2>
            <ul className="border border-gray-300 p-2 bg-white">
              {/* Iterate over approved requests */}
              <li className="flex justify-between items-center py-1">
                <span>Request Title</span>
                <span>Request Date</span>
              </li>
              {/* Add more list items as needed */}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Rejected Requests</h2>
            <ul className="border border-gray-300 p-2 bg-white">
              {/* Iterate over rejected requests */}
              <li className="flex justify-between items-center py-1">
                <span>Request Title</span>
                <span>Request Date</span>
              </li>
              {/* Add more list items as needed */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubCoordinator;
