import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-[#1c2238] p-4 rounded-xl shadow-lg w-full sm:w-[250px]"
    >
      <div className="h-40 bg-white rounded mb-3 flex justify-center items-center">
        <span className="text-black">[Image]</span>
      </div>

      <div className="text-sm text-gray-400 mb-1">🛒 {product.platform}</div>
      <h3 className="text-lg font-bold mb-1">{product.name}</h3>

      <div className="text-sm mb-2">Supports: {product.support}</div>

      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">
          ${product.price}{" "}
          <s className="text-gray-500 text-sm">${product.originalPrice}</s>
        </span>
        <span className="text-sm bg-pink-500 px-2 py-1 rounded">
          -{product.discount}%
        </span>
      </div>

      <div className="mt-2 text-sm flex items-center gap-2">
        <span className="bg-blue-600 px-2 py-1 rounded-full">
          {product.donation}% Donation
        </span>
        {product.tag && (
          <span className="bg-yellow-500 text-black px-2 py-1 rounded-full">
            {product.tag}
          </span>
        )}
      </div>

      <div className="mt-4">
        <a href={product.affiliateLink} target="_blank" rel="noreferrer">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded">
            Shop
          </button>
        </a>
      </div>
    </motion.div>
  );
}
