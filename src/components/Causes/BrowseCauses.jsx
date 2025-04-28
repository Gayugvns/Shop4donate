import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiSliders } from 'react-icons/fi';



const categories = [
  'All Causes',
  'Education',
  'Healthcare',
  'Environment',
  'Humanitarian',
  'Urgent',
  'Trending',
];

const sortOptions = [
  'Most Popular',
  'Highest Funded',
  'Newest',
  'Ending Soon',
];

// Example array of causes with image URLs (replace with your actual data)
const exampleCauses = [
  {
    id: 1,
    category: 'Education',
    title: 'Support Early Childhood Education',
    shortDescription: 'Providing resources and learning materials for young children.',
    raised: 7500,
    goal: 15000,
    supporters: 185,
    daysLeft: 25,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Two_preschoolers_with_teacher.jpg/1280px-Two_preschoolers_with_teacher.jpg',
    imageAlt: 'Children learning with a teacher',
  },
  {
    id: 2,
    category: 'Environment',
    title: 'Plant Trees for a Greener Future',
    shortDescription: 'Reforestation efforts to combat climate change and protect ecosystems.',
    raised: 12300,
    goal: 25000,
    supporters: 312,
    daysLeft: 40,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Afforestation_in_India.jpg/1280px-Afforestation_in_India.jpg',
    imageAlt: 'Planting saplings',
  },
  {
    id: 3,
    category: 'Healthcare',
    title: 'Fund Medical Supplies for Rural Clinics',
    shortDescription: 'Ensuring essential medical equipment and medicines reach underserved communities.',
    raised: 21000,
    goal: 40000,
    supporters: 540,
    daysLeft: 60,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Doctor_and_patient_in_rural_India.JPG/1280px-Doctor_and_patient_in_rural_India.JPG',
    imageAlt: 'Doctor examining a patient',
  },
  {
    id: 4,
    category: 'Humanitarian',
    title: 'Provide Clean Water to Villages',
    shortDescription: 'Building sustainable water sources to improve health and sanitation.',
    raised: 18000,
    goal: 35000,
    supporters: 420,
    daysLeft: 50,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Water_pump_in_India.jpg/1280px-Water_pump_in_India.jpg',
    imageAlt: 'Community using a water pump',
  },
  {
    id: 5,
    category: 'Urgent',
    title: 'Disaster Relief for Flood Victims',
    shortDescription: 'Immediate aid and support for families affected by recent flooding.',
    raised: 28500,
    goal: 50000,
    supporters: 680,
    daysLeft: 15,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2011_Thailand_floods_in_Pathumthani.jpg/1280px-2011_Thailand_floods_in_Pathumthani.jpg',
    imageAlt: 'People affected by floods',
  },
  {
    id: 6,
    category: 'Trending',
    title: 'Support Sustainable Agriculture Initiatives',
    shortDescription: 'Promoting eco-friendly farming practices for a healthier planet.',
    raised: 15600,
    goal: 30000,
    supporters: 390,
    daysLeft: 75,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Organic_vegetables_at_farmers_market_in_India.jpg/1280px-Organic_vegetables_at_farmers_market_in_India.jpg',
    imageAlt: 'Organic vegetables at a market',
  },
  {
    id: 7,
    category: 'Education',
    title: 'Empower Girls Through Literacy Programs',
    shortDescription: 'Providing educational opportunities to young girls in rural areas.',
    raised: 9200,
    goal: 20000,
    supporters: 220,
    daysLeft: 35,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Indian_girls_in_school.jpg/1280px-Indian_girls_in_school.jpg',
    imageAlt: 'Girls studying in a classroom',
  },
  {
    id: 8,
    category: 'Healthcare',
    title: 'Support Mental Health Awareness Campaigns',
    shortDescription: 'Raising awareness and providing resources for mental well-being.',
    raised: 11800,
    goal: 22000,
    supporters: 290,
    daysLeft: 55,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/World_Mental_Health_Day_2020_Poster.jpg/1280px-World_Mental_Health_Day_2020_Poster.jpg',
    imageAlt: 'Mental health awareness poster',
  },
];

export default function BrowseCauses() {
  const [selectedCategory, setSelectedCategory] = useState('All Causes');
  const [sortBy, setSortBy] = useState('Most Popular');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    minFunding: 0,
    maxFunding: 100000,
    minDaysLeft: 0,
    maxDaysLeft: 120,
    urgentOnly: false,
    trendingOnly: false,
    selectedCategories: [],
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSortSelect = (option) => {
    setSortBy(option);
    setIsSortOpen(false);
  };

  const toggleFilterModal = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const applyFilters = () => {
    setIsFilterOpen(false);
    // In a real application, you would apply the filters here
    console.log('Applying filters:', filters);
  };

  // In a real application, you would filter the exampleCauses array
  // based on selectedCategory and the filters state.
  const filteredCauses = exampleCauses.filter((cause) => {
    return selectedCategory === 'All Causes' || cause.category === selectedCategory;
    // Add more filtering logic based on the 'filters' state
  });

  // Similarly, in a real application, you would sort the filteredCauses array
  // based on the 'sortBy' state.
  const sortedCauses = [...filteredCauses].sort((a, b) => {
    if (sortBy === 'Most Popular') return b.supporters - a.supporters;
    if (sortBy === 'Highest Funded') return b.goal - a.goal;
    return 0; // Default sorting
  });

  return (
    <div className=" min-h-screen py-10 px-4 sm:px-6 lg:px-8 text-white">
      {/* Header */}
      <div className="relative flex justify-center mb-8">
        <motion.div
          className="absolute w-24 h-6 bg-blue-500 rounded-full shadow-md"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'linear',
          }}
        />
        <div className="relative px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-900 border border-blue-400 text-blue-200 rounded-full shadow-lg backdrop-blur-sm text-xs font-semibold z-10">
          ALL CAUSES
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Browse All Causes</h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium focus:outline-none ${
              selectedCategory === category
                ? 'bg-white text-blue-700 shadow-md'
                : 'bg-blue-800 hover:bg-blue-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search and Icons */}
      <div className="flex items-center justify-end mb-6 gap-3">
        <div className="relative rounded-full shadow-sm flex-grow sm:flex-grow-0">
          <input
            type="text"
            className="bg-blue-900 border border-blue-700 text-white text-sm rounded-full py-2 pl-5 pr-10 focus:outline-none focus:border-blue-500 block w-full sm:w-64"
            placeholder="Search causes..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <button
          onClick={toggleFilterModal}
          className="bg-blue-800 hover:bg-blue-700 text-white text-sm rounded-full py-2 px-3 font-medium shadow-sm focus:outline-none"
        >
          <FiFilter className="h-5 w-5" />
        </button>

        <div className="relative">
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="bg-blue-800 hover:bg-blue-700 text-white text-sm rounded-full py-2 px-3 font-medium shadow-sm focus:outline-none"
          >
            <FiSliders className="h-5 w-5" />
          </button>
          {isSortOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-blue-900 border border-blue-700 z-10">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSortSelect(option)}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-800 ${
                      sortBy === option ? 'font-semibold' : ''
                    }`}
                    role="menuitem"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filter Modal */}
      {isFilterOpen && (
        <div className="fixed top-0  left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-blue-900 p-6 rounded-lg shadow-xl w-[90%] max-w-md text-white relative">
            <h2 className="text-lg font-bold mb-4">Advanced Filters</h2>
            <button
              onClick={toggleFilterModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-300 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-4">
              <label htmlFor="fundingRange" className="block text-sm mb-1">Funding Range</label>
              <div className="flex items-center gap-2">
                <span>${filters.minFunding.toLocaleString()}</span>
                <input
                  type="range"
                  id="fundingRange"
                  className="w-full"
                  min="0"
                  max="100000"
                  value={filters.maxFunding}
                  onChange={(e) => handleFilterChange('maxFunding', Number(e.target.value))}
                />
                <span>${filters.maxFunding.toLocaleString()}</span>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="daysRemaining" className="block text-sm mb-1">Days Remaining</label>
              <div className="flex items-center gap-2">
                <span>{filters.minDaysLeft} days</span>
                <input
                  type="range"
                  id="daysRemaining"
                  className="w-full"
                  min="0"
                  max="120"
                  value={filters.maxDaysLeft}
                  onChange={(e) => handleFilterChange('maxDaysLeft', Number(e.target.value))}
                />
                <span>{filters.maxDaysLeft} days</span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Status</label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500 focus:ring-blue-500 rounded border-gray-300 bg-blue-800"
                  checked={filters.urgentOnly}
                  onChange={(e) => handleFilterChange('urgentOnly', e.target.checked)}
                />
                <span className="ml-2 text-sm">Urgent Causes Only</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500 focus:ring-blue-500 rounded border-gray-300 bg-blue-800"
                  checked={filters.trendingOnly}
                  onChange={(e) => handleFilterChange('trendingOnly', e.target.checked)}
                />
                <span className="ml-2 text-sm">Trending Causes Only</span>
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Categories</label>
              <div className="grid grid-cols-2 gap-2">
                {categories.slice(1).map((category) => (
                  <label key={category} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 rounded border-gray-300 bg-blue-800"
                      checked={filters.selectedCategories.includes(category)}
                      onChange={(e) => {
                        const updatedCategories = e.target.checked
                          ? [...filters.selectedCategories, category]
                          : filters.selectedCategories.filter((c) => c !== category);
                        handleFilterChange('selectedCategories', updatedCategories);
                      }}
                    />
                    <span className="ml-2 text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={applyFilters}
              className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4 w-full"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Cause Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCauses.map((cause) => (
          <div key={cause.id} className="bg-transparent rounded-xl p-4 shadow-md border border-blue-400">
            <div className="relative h-40 bg-blue-800 rounded-md mb-3 overflow-hidden">
              <img
                src={cause.imageUrl}
                alt={cause.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-sm">
                <h4 className="font-semibold text-white">{cause.imageAlt}</h4>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{cause.title}</h3>
            <p className="text-sm text-gray-300 mb-3">{cause.shortDescription}</p>
            <div className="text-sm">
              <span className="font-bold text-white">${cause.raised.toLocaleString()}</span> raised /{' '}
              <span className="text-gray-400">${cause.goal.toLocaleString()}</span> goal
            </div>
            <div className="text-xs text-gray-400">{cause.supporters} supporters</div>
            <div className="text-xs text-gray-400">{cause.daysLeft} days left</div>
          </div>
        ))}
      </div>
    </div>
  );
}