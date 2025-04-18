import { useState } from "react";

const allPurchases = [
  {
    title: "Eco-Friendly Water Bottle",
    platform: "Amazon",
    logo: "/images/amazon.jpg",
    date: "Apr 2, 2025",
    amount: "$24.99",
    donation: "$1.25 to Clean Water Initiative",
  },
  {
    title: "Wireless Headphones",
    platform: "Flipkart",
    logo: "/images/flipkart.webp",
    date: "Mar 28, 2025",
    amount: "$89.99",
    donation: "$3.6 to Education for All",
  },
  {
    title: "Organic Cotton T-Shirt",
    platform: "Meesho",
    logo: "/images/meesho.webp",
    date: "Mar 25, 2025",
    amount: "$19.99",
    donation: "$1.2 to Medical Aid Fund",
  },
  // Add more dummy purchases to simulate 10
  {
    title: "Reusable Grocery Bags",
    platform: "BigBasket",
    logo: "/images/bigbasket.png",
    date: "Mar 22, 2025",
    amount: "$12.00",
    donation: "$0.5 to Green Planet Trust",
  },
  {
    title: "Plant-Based Protein Powder",
    platform: "HealthKart",
    logo: "/images/healthkart.png",
    date: "Mar 18, 2025",
    amount: "$32.50",
    donation: "$1.6 to Wellness Program",
  },
  {
    title: "Recycled Notebook Set",
    platform: "Amazon",
    logo: "/images/amazon.jpg",
    date: "Mar 16, 2025",
    amount: "$10.00",
    donation: "$0.4 to Tree Plantation",
  },
  {
    title: "Fitness Tracker Band",
    platform: "Flipkart",
    logo: "/images/flipkart.webp",
    date: "Mar 12, 2025",
    amount: "$59.99",
    donation: "$2.5 to Health Awareness",
  },
  {
    title: "Compost Bin",
    platform: "Meesho",
    logo: "/images/meesho.webp",
    date: "Mar 10, 2025",
    amount: "$14.99",
    donation: "$0.8 to Clean Earth",
  },
  {
    title: "Solar Power Bank",
    platform: "Amazon",
    logo: "/images/amazon.jpg",
    date: "Mar 8, 2025",
    amount: "$29.99",
    donation: "$1.5 to Renewable Energy",
  },
  {
    title: "Eco Toothbrush Set",
    platform: "Flipkart",
    logo: "/images/flipkart.webp",
    date: "Mar 5, 2025",
    amount: "$9.99",
    donation: "$0.3 to Ocean Cleanup",
  },
];

const RecentPurchases = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedPurchases = showAll ? allPurchases : allPurchases.slice(0, 3);

  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-semibold text-lg">Recent Purchases</h2>
          <p className="text-sm text-gray-500">Your shopping history & donation impact</p>
        </div>
        <button
          className="text-blue-600 hover:underline text-sm"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>

      <div className="space-y-4">
        {displayedPurchases.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <img
              src={item.logo}
              alt={item.platform}
              className="w-10 h-10 object-contain rounded-full bg-gray-100 p-1"
            />
            <div className="flex-1">
              <p className="font-medium">{item.title}</p>
              <p className="text-xs text-gray-500">
                {item.platform} · {item.date}
              </p>
              <p className="text-xs text-blue-600 mt-1">{item.donation}</p>
            </div>
            <p className="font-semibold text-sm text-right">{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPurchases;
