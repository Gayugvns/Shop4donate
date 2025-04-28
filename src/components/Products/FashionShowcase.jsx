import React, { useState } from "react";

const categories = ["Kid", "Men", "Women", "Accessories"];

const kidsProducts = [
  {
    id: 1,
    title: "Boy Fashion Jacket",
    price: 550,
    image: "https://i.ibb.co/8b3Hkq9/boy-fashion.png", // Replace with your image URLs
  },
  {
    id: 2,
    title: "Girl Fashion Jacket",
    price: 550,
    image: "https://i.ibb.co/RBjDfnx/girl-fashion.png",
  },
  {
    id: 3,
    title: "Girl Winter Cloth",
    price: 550,
    image: "https://i.ibb.co/k4cTqGL/girl-winter1.png",
  },
  {
    id: 4,
    title: "Girl Winter Cloth",
    price: 550,
    image: "https://i.ibb.co/2cw2NVS/girl-winter2.png",
  },
];

const KidsFashionSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Kid");

  return (
    <div className="flex p-6 bg-[#f7f7f1] min-h-screen gap-10">
      {/* Sidebar */}
      <div className="w-48">
        {categories.map((category) => (
          <button
            key={category}
            className={`w-full px-4 py-2 my-2 text-left border-b border-gray-300 ${
              selectedCategory === category
                ? "bg-blue-500 text-white rounded"
                : "text-blue-500 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-6">
        {kidsProducts.map((product) => (
          <div
            key={product.id}
            className="relative w-64 h-80 bg-gray-100 rounded-xl shadow p-4 flex flex-col justify-end items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="absolute top-0 w-36 h-36 object-contain -translate-y-8"
            />
            <div className="mt-20 text-center">
              <h2 className="text-md font-semibold">{product.title}</h2>
              <p className="text-gray-500 mt-1">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsFashionSection;
