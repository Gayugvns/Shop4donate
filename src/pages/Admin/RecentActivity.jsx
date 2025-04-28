// RecentActivity.js
import React from 'react';

const RecentActivity = ({ activities }) => (
  <div className="bg-white p-4 rounded shadow">
    <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
    <ul className="space-y-2">
      {activities.map(activity => (
        <li key={activity.id} className="text-gray-700">
          {activity.timestamp}: {activity.message}
        </li>
      ))}
    </ul>
  </div>
);

export default RecentActivity;
