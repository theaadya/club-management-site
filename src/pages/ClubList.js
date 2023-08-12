import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/navbar.js';
import { Link } from 'react-router-dom';

const ClubList = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch('/clubs/') // Replace with the appropriate API endpoint
      .then((response) => response.json())
      .then((data) => setClubs(data))
      .catch((error) => console.error('Error fetching clubs:', error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Clubs List</h2>
        <ul className="grid gap-4">
          {clubs.map((club) => (
            <li key={club._id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{club.name}</h3>
              <p className="text-gray-600 mb-2">{club.description}</p>
              {/* ... other club details ... */}
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

      {/* Add ClubCoordinator section below */}
      <div className="container mx-auto p-4">
        {/* ... ClubCoordinator component JSX ... */}
      </div>
    </>
  );
};

export default ClubList;
