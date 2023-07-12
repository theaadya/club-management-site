import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar.js';


const ClubCoordinator = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
      closeModal();
    };
  
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
                <button className="bg-[#3FADA8] hover:bg-[#808080] hover:text-white text-white font-bold py-1 px-4 mb-2 rounded" 
                onClick={openModal}>
                New Request +
                </button>
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

        {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="max-w-2xl w-3/4 max-h-2xl h-3/4 p-6 bg-white shadow-lg rounded-md overflow-y-auto">
            <h2 className="text-2xl text-center font-bold mb-4">New Event Request</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label className="block font-bold">Event Title</label>
            <input type="text" className="border border-gray-300 p-2 w-full" />

            <label className="block font-bold">Event Description</label>
            <textarea className="border border-gray-300 p-2 w-full h-20" />

            <label className="block font-bold">Domain</label>
            <input type="text" className="border border-gray-300 p-2 w-full" />

            <label className="block font-bold">Date</label>
            <input type="date" className="border border-gray-300 p-2 w-full" />

            <label className="block font-bold">Time</label>
            <input type="time" className="border border-gray-300 p-2 w-full" />

            <label className="block font-bold">Participation Expected</label>
            <input type="text" className="border border-gray-300 p-2 w-full" />

            <label className="block font-bold">Preferred Venue</label>
            <input type="text" className="border border-gray-300 p-2 w-full" />

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
    </>
  );
};

export default ClubCoordinator;
