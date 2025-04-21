// components/ImpactStats.js
import CountUp from './CountUpNoSSR';

const ImpactStats = () => {
  const stats = [
    { label: 'Total Donations', value: 1.2, prefix: '$', suffix: 'M+', decimals: 1 },
    { label: 'Causes Supported', value: 100, suffix: '+' },
    { label: 'Active Shoppers', value: 25000, suffix: '+' },
    { label: 'Communities Impacted', value: 75, suffix: '+' },
  ];

  return (
    <section className="text-center px-6 py-12">
      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-black hover:text-white">
        OUR IMPACT
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mt-4">The Difference We've Made</h2>
      <p className="text-gray-600 mt-4 max-w-xl mx-auto">
        Since our founding, we've achieved remarkable results through the collective power of our community.
        Every purchase contributes to these growing numbers:
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-blue-900 to-blue-400 text-white rounded-full p-6 shadow-lg">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              {stat.prefix || ''}
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                decimals={stat.decimals || 0}
              />
              {stat.suffix || ''}
            </h3>
            <p className="mt-2 text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
