import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClubChange = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);
  const [clubs, setClubs] = useState([]);

  const openModal = (club) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
      closeModal();
    } catch (error) {
      console.error('Error updating club details:', error);
    }
  };

  return (
    <div className='py-5'>
      <h2 className="text-xl font-bold mb-4">Club Details</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">Description</th>
            <th className="text-center">Club Email</th>
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
              <td className="border px-4 py-2">{club.email}</td>
              <td className="border px-4 py-2">
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
      
      {isModalOpen && selectedClub && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="max-w-2xl w-3/4 max-h-2xl h-3/4 p-6 bg-white shadow-lg rounded-md overflow-y-auto">
          <h2 className="text-2xl text-center font-bold mb-4">{selectedClub.name}</h2>
            <div className="mb-4">
              <label className="block font-bold">Name</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={selectedClub.name}
                onChange={(e) => {
                  const updatedClub = { ...selectedClub, name: e.target.value };
                  setSelectedClub(updatedClub);
                }}
              />
            </div>
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
              <label className="block font-bold">Coordinator</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={selectedClub.coordinator}
                onChange={(e) => {
                  const updatedClub = { ...selectedClub, coordinator: e.target.value };
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
                  closeModal();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubChange;