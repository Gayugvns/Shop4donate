const StatCard = ({ icon, title, value, change, subtitle }) => (
    <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
      <div className="text-blue-500">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold">{value}</p>
        {change && <p className="text-green-500 text-sm">{change}</p>}
        {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
      </div>
    </div>
  );
  export default StatCard;
  