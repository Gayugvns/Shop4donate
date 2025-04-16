// /pages/Home.js
import React, { useState } from "react";
import products from "./data/products";
import ProductCard from "../components/ProductCard";
import FilterTabs from "../components/FilterTabs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const navigate = useNavigate();

  const filtered =
    selectedCategory === "All Products"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const categories = [
    "All Products",
    ...new Set(products.map((p) => p.category)),
  ];

  return (
    <div>
      <h2>Discover Products You'll Love</h2>
      <FilterTabs
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button onClick={() => navigate("/products")}>View All Products</button>
    </div>
  );
};

export default Home;
