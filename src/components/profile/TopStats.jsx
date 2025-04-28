import { useNavigate } from 'react-router-dom';
import StatCard from './StatCard';
import { ShoppingBag, Heart, Store, Gift } from 'lucide-react';

const TopStats = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
      <StatCard icon={<ShoppingBag />} title="Total Shopping" value="$1,245.89" change="+12%" />
      <StatCard icon={<Heart />} title="Total Donations" value="$62.29" change="+8%" />
      <StatCard icon={<Store />} title="Purchases" value="24" subtitle="8 stores" />
      <StatCard icon={<Gift />} title="Causes Supported" value="5" subtitle="+2 this month" />

      {/* Go to Cart Button */}
      <button
        onClick={() => navigate('/cartpage')}
        className="absolute top-0 right-0 mt-[-2.5rem] mb-10 md:mt-[-1.5rem] me-[880px] lg:mt-[-3rem] bg-blue-900 text-white px-4 py-2 rounded-full text-sm shadow hover:bg-blue-700 transition"
      >
        🛒 Go to Cart
      </button>
    </div>
  );
};

export default TopStats;
