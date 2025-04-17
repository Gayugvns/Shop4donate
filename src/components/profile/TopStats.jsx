import StatCard from './StatCard';
import { ShoppingBag, Heart, Store, Gift } from 'lucide-react';

const TopStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <StatCard icon={<ShoppingBag />} title="Total Shopping" value="$1,245.89" change="+12%" />
    <StatCard icon={<Heart />} title="Total Donations" value="$62.29" change="+8%" />
    <StatCard icon={<Store />} title="Purchases" value="24" subtitle="8 stores" />
    <StatCard icon={<Gift />} title="Causes Supported" value="5" subtitle="+2 this month" />
  </div>
);

export default TopStats;
