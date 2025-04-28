import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CategoryFilter() {
  const categories = [
    { name: "Men", img: "https://via.placeholder.com/80?text=Men" },
    { name: "Women", img: "https://via.placeholder.com/80?text=Women" },
    { name: "Kids", img: "https://via.placeholder.com/80?text=Kids" },
    { name: "Accessories", img: "https://via.placeholder.com/80?text=Acc" },
    { name: "Shoes", img: "https://via.placeholder.com/80?text=Shoes" },
    { name: "Furniture", img: "https://via.placeholder.com/80?text=Furn" },
  ];

  const products = [
    { id: 1, name: "Jacket", category: "Men", price: 120, img: "https://via.placeholder.com/150x200?text=Men" },
    { id: 2, name: "Dress", category: "Women", price: 90, img: "https://via.placeholder.com/150x200?text=Women" },
    { id: 3, name: "T-shirt", category: "Kids", price: 30, img: "https://via.placeholder.com/150x200?text=Kids" },
    { id: 4, name: "Necklace", category: "Accessories", price: 50, img: "https://via.placeholder.com/150x200?text=Acc" },
    { id: 5, name: "Sneakers", category: "Shoes", price: 80, img: "https://via.placeholder.com/150x200?text=Shoes" },
    { id: 6, name: "Sofa", category: "Furniture", price: 300, img: "https://via.placeholder.com/150x200?text=Furn" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceLimit, setPriceLimit] = useState(300);

  const filtered = products.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchCategory && p.price <= priceLimit;
  });

  return (
    <div className="bg-[#f8f8f0] p-6 space-y-14">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-center">
        Shop By <span className="text-blue-500">Category</span>
      </h2>

  
     {/* Category Icons */}
<div className="flex justify-center flex-wrap gap-6">
  {[{ name: "All", img: "https://via.placeholder.com/80?text=All" }, ...categories].map((cat) => (
    <div
      key={cat.name}
      onClick={() => setSelectedCategory(cat.name)}
      className={`cursor-pointer flex flex-col items-center space-y-2 transition-transform duration-200 ${
        selectedCategory === cat.name ? "scale-110" : "hover:scale-105"
      }`}
    >
      <img
        src={cat.img}
        alt={cat.name}
        className={`w-20 h-20 rounded-full border-4 ${
          selectedCategory === cat.name ? "border-blue-500" : "border-gray-300"
        }`}
      />
      <span className="text-sm font-medium">{cat.name}</span>
    </div>
  ))}
</div>


      {/* Featured Section */}
      <div className="text-3xl font-semibold text-center">
        <span className="text-blue-500">Flexible</span> Selection
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
          <img
            src="https://via.placeholder.com/180x300?text=Men+Look"
            className="w-full h-64 object-cover rounded-xl mb-4"
            alt="flex-men"
          />
          <p className="text-gray-600 mb-2">Elevate your style with pieces that speak confidence.</p>
          <p className="text-sm text-gray-400 mb-4">From classic cuts to bold statements, dress like you mean it.</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View more</button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
          <img
            src="https://via.placeholder.com/180x300?text=Women+Look"
            className="w-full h-64 object-cover rounded-xl mb-4"
            alt="flex-women"
          />
          <p className="text-gray-600 mb-2">Grace in every thread, power in every fold,</p>
          <p className="text-sm text-gray-400 mb-4">Where elegance dances with stories untold.</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View more</button>
        </div>
      </div>

      {/* Filters */}
      <div className="text-center">
        <h3 className="text-xl font-medium mb-2">Filter by Category & Price</h3>
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === "All"
                ? "bg-blue-500 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-300"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === cat.name
                  ? "bg-blue-500 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-300"
              } hover:shadow transition`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="max-w-md mx-auto text-center">
          <label className="block text-gray-700 mb-2 font-medium">
            Max Price: ${priceLimit}
          </label>
          <input
            type="range"
            min="10"
            max="300"
            value={priceLimit}
            onChange={(e) => setPriceLimit(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <AnimatePresence>
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-4 text-center"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-gray-500 mb-2">${p.price}</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                View more
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
