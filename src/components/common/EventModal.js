import React from 'react';

const EventModal = ({ isEventModalOpen, selectedEvent, closeEventModal }) => {
  if (!isEventModalOpen || !selectedEvent) {
    return null; 
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="max-w-2xl w-3/4 max-h-2xl h-3/4 p-6 bg-white shadow-lg rounded-md overflow-y-auto">
            <h2 className="text-2xl text-center font-bold mb-4">{selectedEvent.name}</h2>
            <div className="mb-4">
            <label className="block font-bold">Description</label>
            <p>{selectedEvent.description}</p>
            </div>
            <div className="mb-4">
            <label className="block font-bold">Domain</label>
            <p>{selectedEvent.domain}</p>
            </div>
            <div className="mb-4">
            <label className="block font-bold">Start Date</label>
            <p>{selectedEvent.start}</p>
            </div>
            <div className="mb-4">
            <label className="block font-bold">End Date</label>
            <p>{selectedEvent.end}</p>
            </div>
            <div className="mb-4">
            <label className="block font-bold">Venue</label>
            <p>{selectedEvent.venue}</p>
            </div>
            <div className="mb-4">
            <label className="block font-bold">Coordinator</label>
            <p>{selectedEvent.coordinator}</p>
            </div>
            <div className="mb-4">
            <label className="block font-bold">Registration Deadline</label>
            <p>{selectedEvent.registrationDeadline}</p>
            </div>
            <div className="mb-4">
            <label className="block font-bold">Club</label>
            <p>{selectedEvent.club}</p>
            </div>
            <div className="mb-4">
            <label className="block font-bold">Participants</label>
            {selectedEvent.participants.map((participant, index) => (
                <p key={index} className="mb-1">
                {participant}
                </p>
            ))}
            </div>
            <div className="mb-4">
            <label className="block font-bold">Creation Date</label>
            <p>{selectedEvent.creationDate}</p>
            </div>
            <div className="flex justify-center">
            <button
                type="button"
                className="ml-4 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                onClick={closeEventModal}
            >
                Close
            </button>
            </div>
        </div>
        </div>
  );
};

export default EventModal;
