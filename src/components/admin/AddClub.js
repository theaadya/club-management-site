// components/admin/AddClub.js
import React from 'react';

const AddClub = () => {
  const handleSubmit = (event) => {
    // Handle club addition logic here
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add New Club</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-64">
        <label htmlFor="clubName">Club Name:</label>
        <input type="text" id="clubName" name="clubName" className="border p-2 mb-2" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows="4" className="border p-2 mb-2"></textarea>

        <label htmlFor="coordinator">Coordinator:</label>
        <input type="text" id="coordinator" name="coordinator" className="border p-2 mb-2" />

        <label htmlFor="events">Events:</label>
        <textarea id="events" name="events" rows="2" className="border p-2 mb-2"></textarea>

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" className="border p-2 mb-2" />

        <label htmlFor="members">Members:</label>
        <textarea id="members" name="members" rows="2" className="border p-2 mb-2"></textarea>

        <label htmlFor="creationDate">Creation Date:</label>
        <input type="text" id="creationDate" name="creationDate" className="border p-2 mb-2" />

        <button type="submit" className="bg-[#3FADA8] text-white px-4 py-2 rounded">Add Club</button>
      </form>
    </div>
  );
};

export default AddClub;
