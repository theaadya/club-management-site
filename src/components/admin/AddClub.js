import React, { useState } from 'react';
import axios from 'axios';

const AddClub = () => {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    coordinator: "",
    events: "",
    email: "", 
    members: "",
    creationDate: ""
  });

  const formattedEvents = formData.events.split(',').map((event) => event.trim());
  const formattedMembers = formData.members.split(',').map((members) => members.trim());

  const handleSubmit = async (club) => {
    club.preventDefault();

    try {
      const requestData = {
        name: formData.clubName,
        description: formData.description,
        coordinator: formData.coordinator,
        events: formattedEvents,
        email: formData.email,
        members: formattedMembers,
        creationDate: formData.creationDate,
      };

      console.log(requestData)
      const response = await axios.post('/clubs', requestData);

      console.log('Club request submitted:', response.data);
    } catch (error) {
      console.error('Error submitting club request:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add New Club</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-64">
        <label htmlFor="clubName">Club Name:</label>
        <input type="text" id="clubName" name="clubName" className="border p-2 mb-2" 
          value={formData.clubName}
          onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
        />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows="4" className="border p-2 mb-2"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        ></textarea>

        <label htmlFor="coordinator">Coordinator:</label>
        <input type="text" id="coordinator" name="coordinator" className="border p-2 mb-2" 
          value={formData.coordinator}
          onChange={(e) => setFormData({ ...formData, coordinator: e.target.value })}
        />

        <label htmlFor="events">Events:</label>
        <textarea id="events" name="events" rows="2" className="border p-2 mb-2"
          value={formData.events}
          onChange={(e) => setFormData({ ...formData, events: e.target.value })}
        ></textarea>

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" className="border p-2 mb-2" 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label htmlFor="members">Members:</label>
        <textarea id="members" name="members" rows="2" className="border p-2 mb-2"
          value={formData.members}
          onChange={(e) => setFormData({ ...formData, members: e.target.value })}  
        ></textarea>

        <label htmlFor="creationDate">Creation Date:</label>
        <input type="text" id="creationDate" name="creationDate" className="border p-2 mb-2" 
          value={formData.creationDate}
          onChange={(e) => setFormData({ ...formData, creationDate: e.target.value })}
        />

        <button type="submit" className="bg-[#3FADA8] text-white px-4 py-2 rounded">Add Club</button>
      </form>
    </div>
  );
};

export default AddClub;
