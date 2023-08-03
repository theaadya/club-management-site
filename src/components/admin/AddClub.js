// components/admin/AddClub.js
import React from 'react';

const AddClub = () => {
  // Assuming you have a form to add new clubs
  const handleSubmit = (event) => {
    event.preventDefault();
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

        <button type="submit" className="bg-[#3FADA8] text-white px-4 py-2 rounded">Add Club</button>
      </form>
    </div>
  );
};

export default AddClub;
