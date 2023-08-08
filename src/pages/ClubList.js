import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ClubList = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    async function fetchClubs() {
      try {
        const response = await axios.get('/clubs');
        setClubs(response.data.clubs);
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    }

    fetchClubs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Clubs List</h2>
      <ul className="grid gap-4">
        {clubs.map((club) => (
          <li key={club._id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{club.name}</h3>
            <p className="text-gray-600 mb-2">{club.description}</p>
            <p className="mb-2">Coordinator: {club.coordinator}</p>
            <p className="mb-2">Events: {club.events.join(', ')}</p>
            <p className="mb-2">Email: {club.email}</p>
            <p className="mb-2">Members: {club.members.join(', ')}</p>
            <p className="mb-2">Creation Date: {club.creationDate}</p>
            <Link
              to={`/clubs/${club._id}`}
              className="text-[#3FADA8] hover:underline"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubList;
