import ProductCard from "./ProductCard";
import products from "@/data/products.json"; // dummy data

export default function ProductGrid({ category, filters }) {
  const filtered = products
    .filter(p => category === "All" || p.category === category)
    .sort((a, b) => {
      if (filters.sort === "price_low_high") return a.price - b.price;
      if (filters.sort === "price_high_low") return b.price - a.price;
      if (filters.sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filtered.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}
