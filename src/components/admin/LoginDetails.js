// components/admin/LoginDetails.js
import React, { useState } from 'react';

const LoginDetails = () => {
  const [studentCouncilCoordinator, setStudentCouncilCoordinator] = useState('');
  const [clubCoordinator, setClubCoordinator] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login details change logic here
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Login Details</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-64">
        <label htmlFor="studentCouncil">Student Council Coordinator:</label>
        <input
          type="text"
          id="studentCouncil"
          name="studentCouncil"
          className="border p-2 mb-2"
          value={studentCouncilCoordinator}
          onChange={(e) => setStudentCouncilCoordinator(e.target.value)}
        />

        <label htmlFor="clubCoordinator">Club Coordinator:</label>
        <input
          type="text"
          id="clubCoordinator"
          name="clubCoordinator"
          className="border p-2 mb-2"
          value={clubCoordinator}
          onChange={(e) => setClubCoordinator(e.target.value)}
        />

        <button type="submit" className="bg-[#3FADA8] text-white px-4 py-2 rounded">Save Changes</button>
      </form>
    </div>
  );
};

export default LoginDetails;
