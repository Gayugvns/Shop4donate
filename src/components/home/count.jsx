import React, { useEffect, useState } from "react";
import { FaUserFriends, FaShoppingCart, FaHandsHelping, FaAward } from "react-icons/fa";

const initialStats = [
  { title: "Total Donors", value: 3000, icon: <FaUserFriends />, tooltip: "People who donated" },
  { title: "Total Shoppers", value: 1500, icon: <FaShoppingCart />, tooltip: "Contributed by shopping" },
  { title: "Causes Supported", value: 90, icon: <FaHandsHelping />, tooltip: "Different social causes" },
  { title: "NFT Badges Earned", value: 120, icon: <FaAward />, tooltip: "Badges earned by users" },
];

const Count = () => {
  const [stats, setStats] = useState(initialStats);
  const [animatedValues, setAnimatedValues] = useState(initialStats.map(s => 0));

  const animateValues = (targetValues) => {
    targetValues.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1000;
      const increment = end / (duration / 16);

      const animate = () => {
        start += increment;
        if (start < end) {
          setAnimatedValues(prev => {
            const updated = [...prev];
            updated[i] = Math.floor(start);
            return updated;
          });
          requestAnimationFrame(animate);
        } else {
          setAnimatedValues(prev => {
            const updated = [...prev];
            updated[i] = end;
            return updated;
          });
        }
      };

      animate();
    });
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://your-backend-api.com/api/stats"); // Replace with real backend
      const data = await response.json();

      const updated = [
        { title: "Total Donors", value: data.donors, icon: <FaUserFriends />, tooltip: "People who donated" },
        { title: "Total Shoppers", value: data.shoppers, icon: <FaShoppingCart />, tooltip: "Contributed by shopping" },
        { title: "Causes Supported", value: data.causes, icon: <FaHandsHelping />, tooltip: "Different social causes" },
        { title: "NFT Badges Earned", value: data.badges, icon: <FaAward />, tooltip: "Badges earned by users" },
      ];

      setStats(updated);
      animateValues(updated);
    } catch (err) {
      console.error("Failed to fetch backend stats:", err);
    }
  };

  useEffect(() => {
    animateValues(initialStats); // Animate dummy data first
    fetchData(); // Fetch real data
    const interval = setInterval(fetchData, 60000); // Refresh every 60s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-16 bg-background text-foreground">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative group rounded-2xl border border-transparent bg-gradient-to-br from-blue-100/10 to-blue-400/10 backdrop-blur-md p-6 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center text-white text-lg bg-gradient-to-tr from-blue-300 to-blue-900 rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>

            {/* Title + Tooltip */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                {stat.title}
              </p>
              <span className="flex items-center gap-1 text-xs px-2 py-0.5 border border-blue-300 bg-blue-100/30 text-blue-900 rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10A8 8 0 11.001 9.999 8 8 0 0118 10zm-8-4a1 1 0 10.001 2.001A1 1 0 0010 6zm-1 4a1 1 0 012 0v4a1 1 0 01-2 0v-4z" clipRule="evenodd" />
                </svg>
                {stat.tooltip}
              </span>
            </div>

            {/* Count Value */}
            <h3 className="text-4xl font-extrabold mt-2 text-foreground font-supreme tracking-tight">
              {animatedValues[index].toLocaleString()}
            </h3>

            {/* Border on Hover */}
            <div className="absolute inset-0 rounded-2xl border border-blue-300/10 pointer-events-none group-hover:border-blue-500/30 transition duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Count;
