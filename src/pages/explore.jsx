import React, { useState, useEffect } from 'react';

const ExplorePage = () => {
  // Sample causes (replace with real data from your API)
  const causes = [
    { id: 1, name: 'Clean Water for All', description: 'Help provide clean drinking water to communities in need.' },
    { id: 2, name: 'Save the Amazon Rainforest', description: 'Conserve and protect the Amazon rainforest from deforestation.' },
    { id: 3, name: 'Education for Every Child', description: 'Support initiatives that provide education to underprivileged children.' },
    { id: 4, name: 'End Hunger Worldwide', description: 'Donate to food banks and initiatives to end hunger globally.' },
    { id: 5, name: 'Wildlife Protection', description: 'Support conservation programs that protect endangered species.' },
    { id: 6, name: 'Mental Health Awareness', description: 'Fund initiatives aimed at improving mental health care and awareness.' },
    { id: 7, name: 'Climate Action Now', description: 'Help mitigate climate change and reduce carbon footprints.' },
    { id: 8, name: 'Human Rights Advocacy', description: 'Support organizations fighting for human rights and equality.' },
    { id: 9, name: 'Disaster Relief Fund', description: 'Aid in disaster recovery efforts for affected communities worldwide.' },
    { id: 10, name: 'Access to Clean Energy', description: 'Support projects that provide renewable energy solutions to underserved areas.' },
    { id: 11, name: 'Sustainable Farming', description: 'Invest in sustainable agricultural practices to promote food security.' },
    { id: 12, name: 'Homelessness Assistance', description: 'Donate to programs providing shelter and care for homeless individuals.' },
    { id: 13, name: 'Equal Access to Technology', description: 'Help bridge the digital divide by providing access to technology for underprivileged communities.' },
    { id: 14, name: 'Refugee Support Programs', description: 'Support programs providing shelter, food, and education to refugees worldwide.' },
    { id: 15, name: 'Water Sanitation Projects', description: 'Aid in the development of water sanitation systems in developing countries.' },
  ];

  return (
    <div
      className="min-h-screen px-6 py-12 text-white"
      style={{
        backgroundImage: "url('https://your-image-url-here.com/your-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">Explore All Causes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {causes.map((cause) => (
          <div key={cause.id} className="bg-slate-800 bg-opacity-60 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{cause.name}</h2>
            <p className="text-blue-100 mb-4">{cause.description}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
