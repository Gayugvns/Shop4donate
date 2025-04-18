import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaShareAlt, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const allBadges = [
  { id: "bronze", title: "Bronze Impact", amount: "$50+", emoji: "🥉" },
  { id: "silver", title: "Silver Impact", amount: "$100+", emoji: "🥈" },
  { id: "gold", title: "Gold Impact", amount: "$250+", emoji: "🥇" },
  { id: "platinum", title: "Platinum Impact", amount: "$500+", emoji: "💎" },
  { id: "emerald", title: "Emerald Impact", amount: "$1000+", emoji: "💚" },
];

const socialLinks = [
  { icon: <FaWhatsapp />, label: "WhatsApp", url: "https://wa.me/?text=Check+out+my+impact+badge!" },
  { icon: <FaEnvelope />, label: "Email", url: "mailto:?subject=My Impact Badge&body=Look at this badge I earned!" },
  { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/" },
  { icon: <FaFacebook />, label: "Facebook", url: "https://www.facebook.com/sharer/sharer.php?u=https://example.com" },
  { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com/intent/tweet?text=I+just+earned+an+impact+badge!+" },
];

const NFTBadges = () => {
  const [showAll, setShowAll] = useState(false);
  const [donationProgress, setDonationProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setDonationProgress(62.29); // Simulated donation progress
  }, []);

  const visibleBadges = showAll ? allBadges : allBadges.slice(0, 2);

  return (
    <div className="bg-white shadow-lg rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-xl text-blue-900">Your NFT Badges</h2>
          <p className="text-sm text-gray-500">Proof of your charitable impact</p>
        </div>
        <button onClick={() => setShowAll(!showAll)} className="text-sm text-blue-600 hover:underline">
          {showAll ? "View Less" : "View All"}
        </button>
      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {visibleBadges.map((badge, index) => (
          <div
            key={badge.id}
            className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 p-4 rounded-xl shadow text-center hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <div className="text-4xl mb-1">{badge.emoji}</div>
            <h4 className="font-semibold text-blue-800 text-base">{badge.title}</h4>
            <p className="text-gray-600 text-xs mb-2">{badge.amount} donated</p>
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="text-blue-600 hover:text-blue-800 text-xs flex items-center justify-center gap-1"
            >
              <FaShareAlt /> Share
            </button>

            {activeIndex === index && (
              <div className="absolute bg-white border rounded-md p-3 shadow-md top-full mt-2 left-1/2 transform -translate-x-1/2 z-10 w-52">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-blue-700 py-1"
                  >
                    {social.icon} {social.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Animated Progress Bar */}
      <div className="bg-indigo-50 p-4 rounded-xl">
        <p className="text-sm text-gray-700 mb-2">
          Next Badge: <span className="text-indigo-700 font-semibold">Platinum Impact</span>
        </p>
        <div className="w-full bg-gray-200 h-2 rounded-full mb-2 overflow-hidden">
          <motion.div
            className="bg-indigo-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${donationProgress}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <p className="text-xs text-gray-600">${(100 - donationProgress).toFixed(2)} more needed for next badge</p>
      </div>
    </div>
  );
};

export default NFTBadges;
