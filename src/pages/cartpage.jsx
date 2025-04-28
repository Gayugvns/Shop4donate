import { useEffect, useState } from 'react';
import { FaSeedling, FaHandsHelping, FaRegSmile } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer'; // ✅ added footer import

export default function CartPage() {
  const isLoading = false;

  const [impactData, setImpactData] = useState({
    amountDonated: 0,
    treesPlanted: 0,
    familiesHelped: 0
  });
  const [impactLoading, setImpactLoading] = useState(true);
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchImpactSummary();
  }, []);

  const fetchImpactSummary = async () => {
    try {
      setImpactLoading(true);
      const res = await new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            amountDonated: 8.45,
            treesPlanted: 3,
            familiesHelped: 2
          });
        }, 1200)
      );

      setImpactData(res);
    } catch (error) {
      console.error('Error fetching impact summary:', error);
    } finally {
      setImpactLoading(false);
    }
  };

  return (
 <div className='mt-[150px]'>
      <Navbar /> {/* ✅ Navbar added */}

      <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Your Shopping Cart</h1>
          <p className="text-gray-500 mt-2">Every product supports a cause. Shop with purpose 💙</p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-6 text-sm sm:text-base">
            <div className="flex flex-col items-center text-blue-600 font-bold">
              1<div className="text-gray-500 font-normal">Cart</div>
            </div>
            <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex flex-col items-center text-gray-400 font-bold">
              2<div className="text-gray-500 font-normal">Shipping</div>
            </div>
            <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex flex-col items-center text-gray-400 font-bold">
              3<div className="text-gray-500 font-normal">Payment</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <AiOutlineLoading3Quarters className="animate-spin text-3xl text-blue-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Cart Items ({cartItems.length})</h2>
              {cartItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-b py-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-md" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">Supports: {item.supportCause}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-base font-bold">${item.price}</span>
                      <span className="text-sm line-through text-gray-400">${item.originalPrice}</span>
                      <span className="text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-0.5 rounded">5% Donation</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const updatedCart = cartItems.filter((_, index) => index !== i);
                      setCartItems(updatedCart);
                    }}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => navigate('/products')}
                  className="text-blue-600 hover:underline"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={() => setCartItems([])}
                  className="text-red-500 hover:underline"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Impact Summary */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <h2 className="text-lg font-semibold mb-2">Your Impact Summary</h2>
              <p className="text-sm text-gray-600 mb-4">Thanks to you, the world is a little better 🌱</p>
              {impactLoading ? (
                <div className="flex justify-center items-center h-24">
                  <AiOutlineLoading3Quarters className="animate-spin text-2xl text-blue-500" />
                </div>
              ) : (
                <div className="space-y-4 text-blue-600 font-semibold">
                  <div className="flex items-center justify-center gap-2">
                    <FaHandsHelping className="text-xl" />
                    ${impactData.amountDonated.toFixed(2)} Donated
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaSeedling className="text-xl" />
                    {impactData.treesPlanted} Trees Planted
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaRegSmile className="text-xl" />
                    {impactData.familiesHelped} Families Helped
                  </div>
                </div>
              )}
              <button
                className="mt-6 w-[220px] bg-blue-900 text-white py-2 rounded-full hover:bg-blue-700"
                onClick={() => window.location.href = '/products'}
              >
                ✨ Shop with Purpose
              </button>
            </div>
          </div>
        )}

        {/* Frequently Bought Together */}
        <div className="mt-10 bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Frequently Bought Together</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item, i) => (
              <div key={i} className="p-4 border rounded-md text-center">
                <img
                  src={`https://source.unsplash.com/featured/?skincare,product,${i}`}
                  alt="Product"
                  className="w-24 h-24 object-cover rounded mx-auto mb-2"
                />
                <p className="font-medium text-sm">Organic Skincare Set</p>
                <p className="text-sm text-gray-500 line-through">$40.99</p>
                <p className="font-bold text-base">$39.99</p>
                <p className="text-xs text-gray-500">Supports: Women Empowerment</p>
                <button
                  onClick={() => {
                    const newItem = {
                      name: 'Organic Skincare Set',
                      price: 39.99,
                      originalPrice: 40.99,
                      supportCause: 'Women Empowerment',
                    };
                    setCartItems([...cartItems, newItem]);
                  }}
                  className="mt-2 bg-blue-900 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                  + Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer /> {/* ✅ Footer added */}
      </div>
  );
}
