// /pages/Cart.js
import React from "react";
import { useCart } from "../CartContext";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div>
      <h2>Your Saved Products</h2>
      <div className="product-grid">
        {cart.length ? (
          cart.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p>Cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
