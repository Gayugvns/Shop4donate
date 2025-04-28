// CategoriesPage.jsx
import React, { useState } from 'react';

import CategoryTabs from "@/components/Categories/CategoryTabs"; // Make sure you create this tabs component
import ProductCard from '@/components/Categories/ProductCard'; // Make sure you create this card component

const Categories = () => {
  const categories = ['Men', 'Electronics', 'Furniture', 'Toys']; // Example categories
  const [selectedCategory, setSelectedCategory] = useState('Men');

  // Sample data based on category selection
  const categoryData = {
    Men: [
      { title: 'Men Shirt', price: '$20' },
      { title: 'Men Jeans', price: '$30' },
    ],
    Electronics: [
      { title: 'Laptop', price: '$500' },
      { title: 'Smartphone', price: '$300' },
    ],
    Furniture: [
      { title: 'Sofa', price: '$150' },
      { title: 'Coffee Table', price: '$80' },
    ],
    Toys: [
      { title: 'Toy Car', price: '$10' },
      { title: 'Doll', price: '$15' },
    ],
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <CategoryTabs categories={categories} onSelect={handleCategorySelect} />

      <div className="mt-8">
        {categoryData[selectedCategory].map((product, index) => (
          <ProductCard key={index} title={product.title} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
