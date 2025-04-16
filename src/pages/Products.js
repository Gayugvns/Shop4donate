// /pages/Products.js
import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => (
  <div>
    <h2>All Products</h2>
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Products;
