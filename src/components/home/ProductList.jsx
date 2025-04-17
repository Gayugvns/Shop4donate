import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Mock API
const fetchProductsFromAPI = () =>
  Promise.resolve([
    {
      id: 1,
      title: 'Eco-Friendly Water Bottle',
      price: '$24.99',
      category: 'Lifestyle',
      source: 'Amazon',
      sourceLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      image: 'https://via.placeholder.com/150',
      donation: '5%',
      rating: 4.8,
      reviews: 124,
      support: 'Clean Water Initiative',
      link: 'https://amazon.com',
    },
    {
      id: 2,
      title: 'Wireless Noise-Cancelling Headphones',
      price: '$89.99',
      category: 'Electronics',
      source: 'Flipkart',
      sourceLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Flipkart_logo.svg',
      image: 'https://via.placeholder.com/150',
      donation: '4%',
      rating: 4.6,
      reviews: 89,
      support: 'Education for All',
      link: 'https://flipkart.com',
    },
    {
      id: 3,
      title: 'Organic Cotton T-Shirt',
      price: '$19.99',
      category: 'Fashion',
      source: 'Meesho',
      sourceLogo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Meesho_Logo.png',
      image: 'https://via.placeholder.com/150',
      donation: '3%',
      rating: 4.4,
      reviews: 58,
      support: 'Sustainable Clothing',
      link: 'https://meesho.com',
    },
    {
      id: 4,
      title: 'Yoga Mat',
      price: '$29.99',
      category: 'Health',
      source: 'Flipkart',
      sourceLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Flipkart_logo.svg',
      image: 'https://via.placeholder.com/150',
      donation: '2%',
      rating: 4.7,
      reviews: 92,
      support: 'Mental Wellness',
      link: 'https://flipkart.com',
    },
    {
      id: 5,
      title: 'Solar Power Bank',
      price: '$39.99',
      category: 'Electronics',
      source: 'Amazon',
      sourceLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      image: 'https://via.placeholder.com/150',
      donation: '6%',
      rating: 4.9,
      reviews: 150,
      support: 'Renewable Energy',
      link: 'https://amazon.com',
    },
  ]);

// Save to LocalStorage
const saveToLocalStorage = (product) => {
  const saved = JSON.parse(localStorage.getItem('savedProducts')) || [];
  const updated = [...saved, product];
  localStorage.setItem('savedProducts', JSON.stringify(updated));
};

const ProductCard = ({ product, navigate }) => (
  <div className="inline-block align-top w-[280px] bg-white rounded-xl p-4 shadow transition-all transform hover:scale-105">
    <div className="flex justify-between mb-2">
      <span className="bg-orange-400 text-white text-xs px-2 py-1 rounded">Bestseller</span>
      <span className="bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded">
        {product.donation} Donation
      </span>
    </div>

    <div className="grid grid-cols-2 gap-2 mb-2">
      {[...Array(4)].map((_, i) => (
        <img key={i} src={product.image} alt={`${product.title} ${i}`} className="w-full h-20 object-contain" />
      ))}
    </div>

    <div className="flex items-center text-xs mb-1">
      <img src={product.sourceLogo} alt={product.source} className="w-5 h-5 mr-1" />
      <span className="text-gray-500">{product.source}</span>
    </div>
    <div className="flex items-center text-yellow-500 text-sm mb-1">
      ⭐ {product.rating} <span className="text-gray-400 ml-1">({product.reviews})</span>
    </div>
    <h3 className="font-semibold text-sm">{product.title}</h3>
    <p className="text-blue-600 font-bold">{product.price}</p>
    <p className="text-xs text-gray-500 mb-2">{product.category}</p>
    <p className="text-xs text-green-600">Supports: {product.support}</p>
    <div className="flex justify-between mt-3">
      <button
        onClick={() => {
          saveToLocalStorage(product);
          navigate('/profile/saved');
        }}
        className="text-sm text-blue-600 border border-blue-600 px-3 py-1 rounded-full hover:bg-blue-50 flex items-center"
      >
        ❤️ Save
      </button>
      <button
        onClick={() => window.open(product.link, '_blank')}
        className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full hover:bg-blue-700 flex items-center"
      >
        🛒 Shop
      </button>
    </div>
  </div>
);

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductsFromAPI().then(setProducts);
  }, []);

  const filteredProducts = filter === 'All' ? products : products.filter((p) => p.category === filter);

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold text-center mb-2">Discover Products You'll Love</h2>
      <p className="text-center mx-auto mt-4 mb-10 max-w-xl text-gray-600">
        Our AI analyzes your preferences to recommend products that match your style while supporting causes you care about.
      </p>

      {/* Filters */}
      <div className="flex gap-2 justify-center flex-wrap mb-6">
        {['All', 'Electronics', 'Fashion', 'Lifestyle', 'Health'].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${filter === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Swipeable Cards */}
      <div className="max-w-[1150px] mx-auto overflow-hidden">
        <div
          className="flex gap-4 overflow-x-auto px-2 whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth', touchAction: 'pan-x' }}
        >
          {filteredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} navigate={navigate} />
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate('/products')}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductsFromAPI().then(setProducts);
  }, []);

  const filteredProducts = filter === 'All' ? products : products.filter((p) => p.category === filter);

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold text-center mb-2">All Products</h2>
      <p className="text-center mx-auto mt-4 mb-10 max-w-xl text-gray-600">
        Browse our full range of products that support causes you care about.
      </p>

      {/* Filters */}
      <div className="flex gap-2 justify-center flex-wrap mb-6">
        {['All', 'Electronics', 'Fashion', 'Lifestyle', 'Health'].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${filter === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="max-w-[1150px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} navigate={navigate} />
        ))}
      </div>
    </div>
  );
};

const SavedProductsPage = () => {
  const saved = JSON.parse(localStorage.getItem('savedProducts')) || [];

  return (
    <div className="p-4 max-w-[1150px] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Saved Products</h2>
      {saved.length === 0 ? (
        <p className="text-center text-gray-500">You haven't saved any products yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {saved.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow">
              <img src={product.image} alt={product.title} className="w-full h-32 object-contain mb-2" />
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.price}</p>
              <p className="text-xs text-green-600">Supports: {product.support}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductList = () => (
 
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/profile/saved" element={<SavedProductsPage />} />
    </Routes>

);

export default ProductList;
