import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaHeart, FaShoppingCart, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ImpactCard = ({ icon, value, label }) => (
  <div className=" border w-80 border-blue-300 backdrop-blur-md p-6 rounded-2xl text-center text-white shadow-lg flex-1 max-w-xl">
    <div className="flex items-center justify-center w-14 h-14 mx-auto bg-[#1c3b85] rounded-full shadow-lg mb-4">
      <div className="text-xl text-white">{icon}</div>
    </div>
    <div className="text-3xl font-bold mb-1">
      {typeof value === 'number' ? value.toLocaleString() : value}
    </div>
    <div className="text-sm opacity-80">{label}</div>
  </div>
);

const ImpactDashboard = () => {
  const [stats, setStats] = useState({
    donations: 1200000,
    causesSupported: 100,
    activeShoppers: 25000,
    communitiesImpacted: 75,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        ...prevStats,
        donations: prevStats.donations + Math.floor(Math.random() * 1000),
        causesSupported: prevStats.causesSupported + Math.floor(Math.random() * 2),
        activeShoppers: prevStats.activeShoppers + Math.floor(Math.random() * 50),
        communitiesImpacted: prevStats.communitiesImpacted + Math.floor(Math.random() * 1),
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#051637] to-[#0a1e4a] min-h-screen text-white px-6 py-12 flex flex-col items-center">
      <div className="text-center mb-10">
        <div className="relative inline-block mb-2">
          
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full rounded-b-full" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          The Difference We're Making Together
        </h1>
        <p className="max-w-2xl mx-auto text-sm opacity-80">
          Through the collective power of our community, we've achieved remarkable results. Every purchase contributes to these growing numbers.
        </p>
      </div>
  
      {/* ✅ Rotating Impact Badge Section */}
      <div className="relative flex justify-center items-center w-full h-32 mb-10">
        {/* Rotating line behind */}
        <motion.div
          className="absolute w-[150px] h-10 bg-blue-500 rounded-full shadow-2xl"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear"
          }}
        />
        {/* Glowing badge */}
        <div className="relative px-4 py-1 bg-gradient-to-r from-slate-700 to-slate-900 border border-blue-400 text-blue-200 rounded-full shadow-lg backdrop-blur-md text-sm font-semibold z-10">
          MAKE AN IMPACT
        </div>
      </div>
  
      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6">
        <ImpactCard icon={<FaArrowUp />} value={`$ ${stats.donations.toLocaleString()}`} label="Total Donations" />
        <ImpactCard icon={<FaHeart />} value={stats.causesSupported} label="Causes Supported" />
        <ImpactCard icon={<FaShoppingCart />} value={stats.activeShoppers} label="Active Shoppers" />
        <ImpactCard icon={<FaGlobe />} value={stats.communitiesImpacted} label="Communities Impacted" />
      </div>
    </div>
  );
  
};

export default ImpactDashboard;
