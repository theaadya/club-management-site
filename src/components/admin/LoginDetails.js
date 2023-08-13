import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);

  const openModal = (club) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openLogin = (club) => {
    setSelectedClub(club);
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const [studentCouncilCoordinator, setStudentCouncilCoordinator] = useState('');
  const [clubCouncilCoordinator, setClubCouncilCoordinator] = useState('');

  const [clubs, setClubs] = useState([]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login details change logic here
  };

  return (
    <div className='py-5'>
      <h2 className="text-xl font-bold mb-4">Club Details</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">Description</th>
            <th className="text-center">Coordinator</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {clubs.map(club => (
            <tr key={club._id}>
              <td className="border px-4 py-2 cursor-pointer hover:text-[#3FADA8]">
                {club.name}
              </td>
              <td className="border px-4 py-2">{club.description}</td>
              <td className="border px-4 py-2 capitalize">{club.coordinator}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-[#3FADA8] hover:bg-[#808080] text-white py-1 px-2 rounded mr-2"
                  onClick={() => openLogin(club)}
                >
                  Edit Login Details
                </button>
                <button
                  className="bg-[#3FADA8] hover:bg-[#808080] text-white py-1 px-2 rounded"
                  onClick={() => openModal(club)}
                >
                  Edit Club Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <h2 className="text-xl font-bold mb-4 mt-10">Login Details</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-64">
        <label htmlFor="studentCouncilEmail">Student Council Coordinator Email:</label>
        <input
          type="text"
          id="studentCouncilEmail"
          name="studentCouncilEmail"
          className="border p-2 mb-2"
          value={studentCouncilCoordinator}
          onChange={(e) => setStudentCouncilCoordinator(e.target.value)}
        />

        <label htmlFor="studentCouncilPassword">New Password:</label>
        <input
          type="text"
          id="studentCouncilPassword"
          name="studentCouncilPassword"
          className="border p-2 mb-2"
          value={studentCouncilCoordinator}
          onChange={(e) => setStudentCouncilCoordinator(e.target.value)}
        />

        <button type="submit" className="bg-[#3FADA8] text-white px-4 py-2 rounded">Save Changes</button>
      </form>

      {isModalOpen && selectedClub && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="max-w-2xl w-3/4 max-h-2xl h-3/4 p-6 bg-white shadow-lg rounded-md overflow-y-auto">
          <h2 className="text-2xl text-center font-bold mb-4">{selectedClub.name}</h2>
            <div className="mb-4">
              <label className="block font-bold">Description</label>
              <p>{selectedClub.description}</p>
            </div>
            <div className="mb-4">
              <label className="block font-bold">Coordinator</label>
              <p>{selectedClub.coordinator}</p>
            </div>
            <div className="mb-4">
              <label className="block font-bold">Events</label>
              {selectedClub.events.map((event, index) => (
                <p key={index} className="mb-1">
                  {event}
                </p>
              ))}
            </div>
            <div className="mb-4">
              <label className="block font-bold">Email</label>
              <p>{selectedClub.email}</p>
            </div>
            <div className="mb-4">
              <label className="block font-bold">Members</label>
              {selectedClub.members.map((member, index) => (
                <p key={index} className="mb-1">
                  {member}
                </p>
              ))}
            </div>
            <div className="mb-4">
              <label className="block font-bold">Creation Date</label>
              <p>{selectedClub.creationDate}</p>
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

      {isLoginOpen && selectedClub && (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="max-w-2xl w-1/2 max-h-2xl h-1/2 py-2 bg-white shadow-lg rounded-md overflow-y-auto">
        <h2 className="text-center text-xl font-bold mb-2 mt-10">Login Details</h2>
        <form onSubmit={handleSubmit} className="items-center flex flex-col ">
          <label htmlFor="clubCouncilEmail">Club Coordinator Email:</label>
          <input
            type="text"
            id="clubCouncilEmail"
            name="clubCouncilEmail"
            className="border p-2 mb-2"
            value={clubCouncilCoordinator}
            onChange={(e) => setClubCouncilCoordinator(e.target.value)}
          />

          <label htmlFor="clubCouncilPassword">New Password:</label>
          <input
            type="text"
            id="clubCouncilPassword"
            name="clubCouncilPassword"
            className="border p-2 mb-2"
            value={clubCouncilCoordinator}
            onChange={(e) => setClubCouncilCoordinator(e.target.value)}
          />

          <button type="submit" className="bg-[#3FADA8] text-white px-4 py-2 rounded"
            onClick={closeLogin}  
          >
            Save Changes
          </button>
        </form>
        </div>
        </div>
      )}
    </div>
  );
};

export default LoginDetails;
