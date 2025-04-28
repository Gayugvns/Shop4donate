import React, { useState } from 'react';

const Suggestion = () => {
  const [causeName, setCauseName] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!causeName || !description || !contact) {
      setStatusMessage('All fields are required!');
      return;
    }

    // Here you can send the data to your backend or API
    // For now, we simulate a success response
    setStatusMessage('Thank you! Your cause has been successfully submitted for review.');
    setCauseName('');
    setDescription('');
    setContact('');
  };

  return (
    <div
    className="min-h-screen px-6 py-12 text-white"
    style={{
      backgroundImage: "url('./images/suggetion.jpg')", // Replace with your image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
  >
      <h1 className="text-4xl font-bold mb-6 text-center">Suggest a Cause</h1>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg shadow-md max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Cause Name</label>
          <input
            type="text"
            value={causeName}
            onChange={(e) => setCauseName(e.target.value)}
            className="w-full px-4 py-2 text-gray-800 rounded-lg"
            placeholder="Enter the name of the cause"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 text-gray-800 rounded-lg"
            rows="4"
            placeholder="Describe the cause and its impact"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Your Contact Info</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full px-4 py-2 text-gray-800 rounded-lg"
            placeholder="Provide your contact info (email or phone)"
          />
        </div>
        <div className="mb-6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md w-full">
            Submit Cause
          </button>
        </div>
        {statusMessage && (
          <div className="text-center text-lg text-green-400">
            {statusMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default Suggestion;
