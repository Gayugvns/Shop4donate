import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaCrown, FaChartLine } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const fetchStats = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        products: 100,
        customers: 80,
        experience: 30,
      });
    }, 1000);
  });
};
function NavigateButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/some-path')}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Navigate
    </button>
  );
}

export default function ProductPageSections() {
  const [stats, setStats] = useState({ products: 0, customers: 0, experience: 0 });

  useEffect(() => {
    const getStats = async () => {
      const data = await fetchStats();
      setStats(data);
    };
    getStats();
  }, []);

  const handleStartNow = () => {
    alert("Getting Started!");
  };

  const navigate = useNavigate();

  const handleViewMore = () => {
    alert("Viewing More Products!");
  };

  return (
    <div className="bg-[#f7f7f2] text-gray-800 p-4 md:p-10 space-y-20">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-2xl md:text-3xl justify-text font-bold">
            Whispers of Profit in Every Share, <br />
            Craft the Path, and Fortune Will Care.
          </h1>
          <p className="text-xl text-gray-600">
            Crafting Excellence in Grain & Seed Processing
          </p>
          <button
            onClick={handleStartNow}
            className="px-6 py-3 bg-[#5797c3] text-white rounded-md hover:bg-[#3f7ea6] transition"
          >
            Start Now
          </button>
        </div>

     
     
{/* Precise Custom Shapes with Bottom-Aligned Right Column */}
<div className="relative flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-12">
  {/* Left: Tall Rounded Image */}
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="bg-yellow-300 w-[224px] h-[464px] rounded-t-[120px] rounded-b-[120px] overflow-hidden"
  >
    <img
      src="/list/image1.png"
      alt="Person"
      className="object-cover w-full h-full"
    />
  </motion.div>

  {/* Right: Two Stacked Shapes Bottom-Aligned */}
  <div className="flex flex-col gap-4 justify-end">
    {/* Top Oval Shape */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-orange-500 w-[180px] h-[220px] rounded-[90px] overflow-hidden"
    >
      <img
        src="/list/iamge4.png"
        alt="Business"
        className="object-cover w-full h-full"
      />
    </motion.div>

    {/* Bottom Rounded-Corner Shape */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-purple-300 w-[180px] h-[180px] rounded-br-[90px] overflow-hidden"
    >
      <img
        src="/list/image7.png"
        alt="Handshake"
        className="object-cover w-full h-full"
      />
    </motion.div>
  </div>
</div>


      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="bg-[#5797c3] rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-around gap-6 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <StatCard icon={<FaUsers />} number={`${stats.products}+`} label="Unique Product" />
        <StatCard icon={<FaCrown />} number={`${stats.customers}+`} label="Happy Customer" />
        <StatCard icon={<FaChartLine />} number={`${stats.experience}+`} label="Year of Experiences" />
      </motion.section>

      {/* Product Collection Section */}
      <motion.section
        className="flex flex-col md:flex-row items-start justify-between gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#5797c3] md:text-6xl space-y-6 mt-5">Explore Our Extensive</span> <br /><br />
            Collection of Product
          </h2>
          <p className="text-gray-600 sapce-y-6 mt-5">
            Step into a world where space-variety meets quality — from the everyday essentials to the rare gems you didn’t know you needed. Whether you're hunting for the latest tech, timeless fashion, or lifestyle upgrades that spark joy, our handpicked selection is designed to inspire and elevate.
          </p>
          <button
            onClick={handleViewMore}
            className="px-5 py-2 bg-[#5797c3] text-white rounded hover:bg-[#3f7ea6] transition"
          >
            View more
          </button>
          <button
      onClick={() => navigate('/Categories')}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 ms-5 rounded"
    >
     Catogories
    </button>
        </div>
        <div className="md:w-1/2">
          <img src="/images/product-collection.png" alt="Product Collection" className="rounded-xl w-full shadow-lg" />
        </div>
      </motion.section>
    </div>
  );
}

function StatCard({ icon, number, label }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-[#e0e0e0] text-[#675fcf] flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-[#675fcf]">{number}</p>
        <p className="text-lg font-semibold">{label}</p>
      </div>
    </div>
  );
}
