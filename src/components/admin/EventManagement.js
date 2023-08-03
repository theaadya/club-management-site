// components/admin/EventManagement.js
import React from 'react';

const EventManagement = () => {
  // Assuming you have a list of events and their details
  const events = [
    { id: 1, name: 'Event 1', description: 'Description of Event 1', status: 'Pending' },
    { id: 2, name: 'Event 2', description: 'Description of Event 2', status: 'Approved' },
    // Add more events here
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Event Management</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.status}</td>
              <td>
                {/* Add buttons or actions for right to veto or suggest amends here */}
                <button className="bg-green-500 text-white px-2 py-1 rounded">Approve</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventManagement;
