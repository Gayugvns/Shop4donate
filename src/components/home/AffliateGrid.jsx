import React, { useMemo, useEffect, useState } from 'react';

const affiliates = [
  { id: 1, name: 'Amazon', url: 'https://www.amazon.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { id: 2, name: 'eBay', url: 'https://www.ebay.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg' },
  { id: 3, name: 'Walmart', url: 'https://www.walmart.com', logo: 'https://cdn.simpleicons.org/walmart/0071ce' },
  { id: 4, name: 'Target', url: 'https://www.target.com', logo: 'https://1000logos.net/wp-content/uploads/2017/06/Target-Logo.png' },
  { id: 5, name: 'Best Buy', url: 'https://www.bestbuy.com', logo: 'https://cdn.simpleicons.org/bestbuy/003B64' },
  { id: 6, name: 'Flipkart', url: 'https://www.flipkart.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Flipkart_logo.svg' },
  { id: 7, name: 'AliExpress', url: 'https://www.aliexpress.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/AliExpress_logo.svg' },
  { id: 8, name: 'Myntra', url: 'https://www.myntra.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Myntra_logo.svg' },
  { id: 9, name: 'Shopify', url: 'https://www.shopify.com', logo: 'https://cdn.simpleicons.org/shopify/7AB55C' },
  { id: 5, name: 'Best Buy', url: 'https://www.bestbuy.com', logo: 'https://1000logos.net/wp-content/uploads/2020/08/Best-Buy-logo.png' },
  { id: 6, name: 'Flipkart', url: 'https://www.flipkart.com', logo: 'https://1000logos.net/wp-content/uploads/2021/04/Flipkart-logo.png' },
  { id: 7, name: 'AliExpress', url: 'https://www.aliexpress.com', logo: 'https://1000logos.net/wp-content/uploads/2022/08/AliExpress-logo.png' },
  { id: 8, name: 'Myntra', url: 'https://www.myntra.com', logo: 'https://1000logos.net/wp-content/uploads/2020/08/Myntra-logo.png' },
  { id: 9, name: 'Shopify', url: 'https://www.shopify.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Shopify_logo_2018.svg' },
];

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const AffiliateGrid = () => {
  const shuffledAffiliates = useMemo(() => shuffleArray(affiliates), []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % shuffledAffiliates.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [shuffledAffiliates.length]);

  return (
    <div className="text-center py-12 px-4">
      {/* Custom animation style injected directly */}
      <style>
        {`
          @keyframes ping-once {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.6; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-ping-once {
            animation: ping-once 1.2s ease-in-out;
          }
        `}
      </style>

      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full uppercase font-semibold tracking-wide hover:bg-blue-300">
        Trusted Partners
      </span>
      <h2 className="text-3xl font-bold mt-4 mb-2 text-gray-800">Shop With Your Favorite Stores</h2>
      <p className="text-gray-600 mb-8 max-w-lg mx-auto">
        We've partnered with top retailers to bring you the best products while supporting great causes.
      </p>

      <div className="flex justify-center flex-wrap gap-6 max-w-4xl mx-auto">
      {shuffledAffiliates.map((affiliate, index) => (
  <a key={affiliate.id} 
            href={affiliate.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[100px] h-[100px] rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 ${
              index === activeIndex ? 'animate-ping-once border-2 border-blue-500 scale-110 z-10' : ''
            }`}
            aria-label={`Visit ${affiliate.name}`}
          >
            <img
              src={affiliate.logo}
              alt={`${affiliate.name} logo`}
              className="max-w-[60%] max-h-[60%] object-contain"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/100?text=Logo')}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AffiliateGrid;
