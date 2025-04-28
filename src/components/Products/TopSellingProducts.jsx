import React, { useState } from "react";

const productData = [
  { id: 1, title: "Men Shirt", price: "$800", category: "MEN", img: "./list/image6.png" },
  { id: 2, title: "Men T-Shirt", price: "$600", category: "MEN", img: "./list/image6.png" },
  { id: 3, title: "KID T-Shirt", price: "$500", category: "KID", img: "./list/image6.png" },
  { id: 4, title: "WOMEN Shirt", price: "$800", category: "WOMEN", img: "./list/image6.png" },
  { id: 5, title: "WOMEN Shirt", price: "$800", category: "WOMEN", img: "./list/image6.png" },
];

const categories = ["All", "Tech", "Fashion", "Books", "Fitness", "Toys", "Home", "Beauty"];


const TopSellingProducts = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  // Removed unused variable 'visibleCategories' to fix the error

  const filtered = activeCategory === "ALL"
    ? productData
    : productData.filter((item) => item.category === activeCategory);

  const handleImageError = (e) => {
    e.target.src = '/images/placeholder.png';  // Fallback image
  };
  

  return (
    <div className="bg-white px-6 py-10 space-y-12">
      {/* Header */}
      <div>
        <h3 className="text-gray-500 text-lg ms-10 mb-1">Our Products</h3>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
  <h2 className="text-3xl font-bold whitespace-nowrap ms-10">
    Our Top Selling <span className="text-blue-500">Products</span>
  </h2>

  {/* Category Filter */}
  <div className="flex flex-wrap gap-4 ms-10">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={`px-4 py-2 rounded text-sm font-semibold transition-colors duration-300 ${
          activeCategory === cat
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
  </div>
</div>

 

      {/* Horizontal Scrollable Products */}
      <div className="relative overflow-x-auto whitespace-nowrap ms-10 scroll-smooth mb-8">
        <div className="flex gap-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-blue-900 rounded-xl shadow p-4 w-52 inline-block transition-transform transform hover:scale-105"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-36 h-36 object-contain mx-auto mb-2"
                onError={handleImageError}  // Handle image error by setting fallback
              />
              <h3 className="text-sm font-semibold text-center">{product.title}</h3>
              <p className="text-center text-gray-500">{product.price}</p>
              <p className="text-center text-xs text-gray-400 mt-1">Delivered in 5 Days</p>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Section */}
      <div className="flex items-center bg-[#dce7f5] rounded-xl p-6 gap-6">
        <img
          src="./list/image7.png" // replace with real image if needed
          alt="Offer"
          className="w-1/3 object-contain"
        />
        
        <div className="space-y-2">
          <h4 className="text-sm text-gray-500">Limited Time Offers</h4>
          <h2 className="text-2xl font-bold leading-snug">
            25 % Off All Fashion Favourite{" "}
            <span className="text-blue-500">–Limited Time</span>
          </h2>
          <p className="text-sm text-gray-600">
            The clock is ticking, the stars align. <br />
            A fleeting chance — your moment to shine.
          </p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * TopSellingProducts Component
 * 
 * This component is responsible for displaying a list of top-selling products.
 * It fetches and renders product data, providing users with insights into the 
 * most popular items available in the store.
 * 
 * @component
 * @returns {JSX.Element} The rendered TopSellingProducts component.
 */
export default TopSellingProducts;
