import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const initialLeaders = [
  { name: 'Sarah Johnson', amount: 1250, badge: 'Platinum Impact Maker' },
  { name: 'Michael Chen', amount: 880, badge: 'Gold Impact Maker' },
  { name: 'Priya Sharma', amount: 750, badge: 'Gold Impact Maker' },
  { name: 'David Lee', amount: 620, badge: 'Silver Impact Maker' },
];

const rankColors = [
    'linear-gradient(to right, #b3e5fc, #81d4fa)', // 1st
    'linear-gradient(to right, #b3e5fc, #81d4fa)', // 2nd
    'linear-gradient(to right, #b3e5fc, #81d4fa)', // 3rd
    'linear-gradient(to right, #b3e5fc, #81d4fa)'  // 4th
  ];

export default function TopImpactMakers() {
  const [leaders, setLeaders] = useState(initialLeaders);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setLeaders((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      controls.start({ y: [0, -20, 0], transition: { duration: 0.6 } });
    }, 2500);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="text-center py-10 px-4 bg-white">
      <span className="text-xs uppercase tracking-wide bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
        Community Heroes
      </span>
      <h2 className="text-3xl font-bold mt-4 mb-2">Top Impact Makers</h2>
      <p className="text-gray-600 mb-6">
        Celebrating those who have made the biggest difference through their shopping.
      </p>

      <div className="bg-gradient-to-r from-blue-900 via-blue-500 to-black rounded-xl text-white p-6 max-w-3xl mx-auto shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Leaderboard</h3>
          <a href="#" className="text-sm underline hover:text-gray-200">
            View Full Leaderboard
          </a>
        </div>

        <motion.div animate={controls} className="space-y-4">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white bg-opacity-10 rounded-lg p-4 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                {/* Rank Circle */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: rankColors[index] }}
                >
                  {index + 1}
                </div>

                {/* Avatar + Name */}
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    leader.name
                  )}&background=random&color=fff`}
                  alt={leader.name}
                  className="w-10 h-10 rounded-full border border-white"
                />
                <div className="text-left">
                  <p className="font-semibold">{leader.name}</p>
                  <p className="text-sm text-gray-200">${leader.amount} donated</p>
                </div>
              </div>

              {/* Badge Pill */}
              <div className="bg-white text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                {leader.badge}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-6 bg-white bg-opacity-10 p-4 rounded-lg">
          <p className="text-sm">
            Your current rank:{' '}
            <span className="font-semibold text-white">#42 with $120</span> donated
          </p>
          <button className="mt-2 px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-100 transition">
            Increase Your Impact
          </button>
        </div>
      </div>
    </div>
  );
}
