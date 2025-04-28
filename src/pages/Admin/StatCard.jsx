// StatCard.js
import React from 'react';

const StatCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded shadow">
    <h2 className="text-gray-600">{title}</h2>
    <p className="text-2xl font-semibold">{value}</p>
  </div>
);

export default StatCard;
