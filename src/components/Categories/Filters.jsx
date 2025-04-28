import { motion } from "framer-motion";

export default function Filters({ onFilterChange }) {
  const handleSort = (e) => {
    onFilterChange(prev => ({ ...prev, sort: e.target.value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-between mb-4"
    >
      <select onChange={handleSort} className="p-2 rounded bg-white text-black">
        <option value="">Sort By</option>
        <option value="price_low_high">Price: Low to High</option>
        <option value="price_high_low">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </motion.div>
  );
}
