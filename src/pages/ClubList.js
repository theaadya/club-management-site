import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/navbar.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ClubList = () => {
  const [clubs, setClubs] = useState([]);
  const [selectedClub, setSelectedClub] = useState(null);

  useEffect(() => {
    fetch('/clubs') // Replace with the appropriate API endpoint
      .then((response) => response.json())
      .then((data) => setClubs(data))
      .catch((error) => console.error('Error fetching clubs:', error));
  }, []);

  const openClubDetails = (club) => {
    setSelectedClub(club);
  };

  const closeClubDetails = () => {
    setSelectedClub(null);
  };

  const logout = async () => {
    try {
      await axios.delete('/auth/api/session', {
        withCredentials: true,
      });
      // Redirect to the login page or perform other necessary actions
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle logout error, show error message, etc.
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-8 pb-4 flex justify-center space-x-4 mb-4">
        <Link to="/mainpage" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Main Page
        </Link>
        <Link to="/events" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Approved Events
        </Link>
        <Link to="/login" onClick={logout} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Logout
        </Link>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Clubs List</h2>
        <ul className="grid gap-4">
          {clubs.map((club) => (
            <li key={club._id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{club.name}</h3>
              <p className="text-gray-600 mb-2">{club.description}</p>
              {/* ... other club details ... */}
              <button
                onClick={() => openClubDetails(club)}
                className="text-[#3FADA8] hover:underline cursor-pointer"
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedClub && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">{selectedClub.name}</h3>
          <p className="text-gray-600 mb-2">{selectedClub.description}</p>
          <p className="text-gray-600 mb-2">
            <strong>Coordinator:</strong> {selectedClub.coordinator}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Events:</strong> {selectedClub.events.join(', ')}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> {selectedClub.email}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Members:</strong> {selectedClub.members.join(', ')}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Creation Date:</strong> {selectedClub.creationDate}
          </p>
            <button
              className="bg-[#3FADA8] hover:bg-[#808080] text-white font-bold py-2 px-4 rounded"
              onClick={closeClubDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ClubList;
