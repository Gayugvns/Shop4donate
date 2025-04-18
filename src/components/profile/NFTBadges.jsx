import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaShareAlt, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

// Medal SVGs
const bronzeBadgeIcon = (
  <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="36" r="18" fill="#cd7f32" stroke="#b87333" strokeWidth="2" />
    <text x="32" y="43" fontSize="20" fill="#222" fontWeight="bold" textAnchor="middle">3</text>
    <path d="M24 8L32 20L40 8" fill="#1E90FF" />
    <path d="M20 4L32 20L44 4" fill="#00BFFF" />
  </svg>
);

const silverBadgeIcon = (
  <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="36" r="18" fill="#C0C0C0" stroke="#A9A9A9" strokeWidth="2" />
    <text x="32" y="43" fontSize="20" fill="#222" fontWeight="bold" textAnchor="middle">2</text>
    <path d="M24 8L32 20L40 8" fill="#1E90FF" />
    <path d="M20 4L32 20L44 4" fill="#00BFFF" />
  </svg>
);

const goldBadgeIcon = (
  <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="36" r="18" fill="#FFD700" stroke="#DAA520" strokeWidth="2" />
    <text x="32" y="43" fontSize="20" fill="#222" fontWeight="bold" textAnchor="middle">1</text>
    <path d="M24 8L32 20L40 8" fill="#1E90FF" />
    <path d="M20 4L32 20L44 4" fill="#00BFFF" />
  </svg>
);

// Social share links
const socialLinks = [
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    url: "https://wa.me/?text=Check+out+my+impact+badge!",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    url: "mailto:?subject=My Impact Badge&body=Look at this badge I earned!",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    url: "https://www.instagram.com/",
  },
  {
    icon: <FaFacebook />,
    label: "Facebook",
    url: "https://www.facebook.com/sharer/sharer.php?u=https://example.com",
  },
  {
    icon: <FaTwitter />,
    label: "Twitter",
    url: "https://twitter.com/intent/tweet?text=I+just+earned+an+impact+badge!+",
  },
];

const NFTBadges = () => {
  const [donationProgress, setDonationProgress] = useState(0);
  const [showAllBadges, setShowAllBadges] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const badges = [
    {
      id: "badge1",
      title: "Bronze Impact",
      earned: "$50+ donated",
      icon: bronzeBadgeIcon,
    },
    {
      id: "badge2",
      title: "Silver Impact",
      earned: "$100+ donated",
      icon: silverBadgeIcon,
    },
    {
      id: "badge3",
      title: "Gold Impact",
      earned: "$250+ donated",
      icon: goldBadgeIcon,
    },
  ];

  useEffect(() => {
    setDonationProgress(62.29);
  }, []);

  const toggleBadgeView = () => setShowAllBadges((prev) => !prev);

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-semibold text-xl text-blue-900">Your NFT Badges</h2>
          <p className="text-sm text-gray-500">Proof of your charitable impact</p>
        </div>
        <button className="text-blue-600 hover:underline text-sm" onClick={toggleBadgeView}>
          {showAllBadges ? "View Less" : "View All"}
        </button>
      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 relative">
        {(showAllBadges ? badges : badges.slice(0, 2)).map((badge, index) => (
          <div
            key={badge.id}
            className="relative bg-white border shadow rounded-lg p-4 text-center hover:shadow-md transition"
          >
            <div className="flex justify-center mb-2">{badge.icon}</div>
            <p className="text-blue-900 font-semibold text-sm">{badge.title}</p>
            <p className="text-xs text-gray-600">{badge.earned}</p>
            <div className="flex justify-center mt-2">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
              >
                <FaShareAlt /> Share
              </button>
            </div>

            {/* Dropdown */}
            {activeIndex === index && (
              <div className="absolute bg-white border rounded-md p-3 shadow-md top-full mt-2 left-0 z-10 flex flex-wrap gap-3 w-56">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-blue-700"
                  >
                    {social.icon} {social.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Donation Progress */}
      <div className="bg-indigo-50 p-4 rounded-lg">
        <p className="text-xs font-medium text-gray-700">
          Next Badge: <span className="text-indigo-600 font-semibold">Platinum Impact Maker</span>
        </p>
        <div className="w-full bg-gray-200 h-2 rounded-full mt-1 mb-2 overflow-hidden">
          <motion.div
            className="bg-indigo-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${donationProgress}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <p className="text-xs text-gray-600">
          ${Math.max(0, (100 - donationProgress).toFixed(2))} more in donations needed
        </p>
      </div>
    </div>
  );
};

export default NFTBadges;
