// CategoryTabs.jsx
import React from 'react';

const CategoryTabs = ({ categories, onSelect }) => {
  return (
    <div className="flex space-x-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onSelect(category)}
          className="px-4 py-2 border rounded hover:bg-blue-500"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
