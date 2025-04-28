import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ImpactBadge = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState(''); // To store the search query
  const [filteredCauses, setFilteredCauses] = useState([]); // To store the filtered results

  // Sample causes (you can replace this with data from an API or backend)
  const causes = [
    { id: 1, name: 'Clean Water for All' },
    { id: 2, name: 'Save the Amazon Rainforest' },
    { id: 3, name: 'Education for Every Child' },
    { id: 4, name: 'End Hunger Worldwide' },
    // Add more causes as needed
  ];

  const handleExploreClick = () => {
    navigate('/explore');
  };

  const handleSuggestClick = () => {
    navigate('/suggest');
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click (filtering the causes based on the search query)
  const handleSearchClick = () => {
    const filtered = causes.filter((cause) =>
      cause.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCauses(filtered);
  };

  return (
    <section className="min-h-screen text-white px-4 py-12">
      {/* Impact Badge */}
      <div className="relative flex justify-center items-center w-full h-32 mb-10">
        {/* Rotating line behind */}
        <motion.div
          className="absolute w-[150px] h-10 bg-blue-500 rounded-full shadow-2xl"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'linear',
          }}
        />
        {/* Glowing badge */}
        <div className="relative px-4 py-1 bg-gradient-to-r from-slate-700 to-slate-900 border border-blue-400 text-blue-200 rounded-full shadow-lg backdrop-blur-md text-sm font-semibold z-10">
          MAKE AN IMPACT
        </div>
      </div>

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Support Causes That <br className="hidden md:inline" /> Matter
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-100">
          Discover meaningful causes that need your support. Every purchase you make
          through Shop4Donate contributes to these initiatives without any extra cost to you.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="flex w-full max-w-2xl">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange} // Update search query
            placeholder="Search for causes..."
            className="flex-grow px-4 py-2 rounded-l-full text-gray-800 focus:outline-none"
          />
          <button
            onClick={handleSearchClick} // Trigger search functionality
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-full shadow-md"
          >
            Search
          </button>
        </div>
      </div>

      {/* Display Search Results */}
      <div className="text-center">
        {filteredCauses.length > 0 ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Search Results:</h2>
            <ul>
              {filteredCauses.map((cause) => (
                <li key={cause.id} className="text-xl text-blue-100 mb-2">
                  {cause.name}
                </li>
              ))}
            </ul>
          </div>
        ) : searchQuery ? (
          <p className="text-xl text-red-500">No causes found for "{searchQuery}".</p>
        ) : (
          <p className="text-xl text-blue-100">Start typing to search for causes.</p>
        )}
      </div>

      {/* Explore Button */}
      <div className="flex justify-center gap-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow-lg"
          onClick={handleExploreClick}
        >
          Explore All Causes
        </button>
        <button
          className="bg-white text-blue-800 hover:bg-blue-100 px-6 py-3 rounded-full text-lg shadow-lg"
          onClick={handleSuggestClick}
        >
          Suggest a Cause
        </button>
      </div>
    </section>
  );
};

export default ImpactBadge;
