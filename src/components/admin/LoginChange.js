import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginChange = () => {
  const [studentCouncilCoordinator, setStudentCouncilCoordinator] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='py-5'>      
      <h2 className="text-xl font-bold mb-4">Login Details</h2>
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

        {/* <label htmlFor="studentCouncilPassword">New Password:</label>
        <input
          type="text"
          id="studentCouncilPassword"
          name="studentCouncilPassword"
          className="border p-2 mb-2"
          value={studentCouncilCoordinator}
          onChange={(e) => setStudentCouncilCoordinator(e.target.value)}
        /> */}

        <button type="submit" className="bg-[#3FADA8] text-white px-4 py-2 rounded">Save Changes</button>
      </form>
    </div>
  );
};

export default LoginChange;