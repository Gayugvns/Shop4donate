import React, { useState } from 'react';

const aiProducts = [
  {
    id: 1,
    name: 'Eco-Friendly Water Bottle',
    price: 24.99,
    platform: 'Amazon',
    discount: 5,
    cause: 'Clean Water Initiative',
    causeLink: '#',
    image: '/placeholder.png'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: 89.99,
    platform: 'Flipkart',
    discount: 4,
    cause: 'Education for All',
    causeLink: '#',
    image: '/placeholder.png'
  },
  {
    id: 3,
    name: 'Organic Cotton T-Shirt',
    price: 19.99,
    platform: 'Meesho',
    discount: 6,
    cause: 'Medical Aid Fund',
    causeLink: '#',
    image: '/placeholder.png'
  },
  // Add more dummy items if you want to test the scroll behavior
];

const AIRecommendations = () => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll(prev => !prev);

  const visibleProducts = showAll ? aiProducts : aiProducts.slice(0, 2); // show first 2 by default

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">AI Recommendations For You</h2>
          <p className="text-sm text-gray-500">Products that match your interests and support causes you care about</p>
        </div>
        <button
          onClick={toggleShowAll}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${showAll ? '' : 'overflow-x-auto flex-nowrap flex pb-2'}`}>
        {visibleProducts.map(product => (
          <div key={product.id} className="min-w-[220px] bg-gray-50 border rounded-lg p-3 shadow-sm hover:shadow-md transition">
            <div className="w-full h-28 bg-gray-200 rounded mb-2 flex items-center justify-center">
              <img src={product.image} alt={product.name} className="h-full object-contain" />
            </div>
            <h3 className="font-medium text-gray-800 text-sm truncate">{product.name}</h3>
            <p className="text-blue-700 font-semibold text-sm">${product.price.toFixed(2)}</p>
            <p className="text-xs text-gray-900 mb-1">via {product.platform}</p>
            <div className="text-xs text-blue-700">
              <span className="font-medium">Supports: </span>
              <a href={product.causeLink} className="hover:underline">{product.cause}</a>
            </div>
            <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full mt-2 inline-block w-fit">
              {product.discount}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;
