// NFTImpactShowcase.jsx
import { useState } from 'react';
import { FaShareAlt, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const badges = [
  { title: "Bronze Impact", amount: "$50+", icon: "🥉", },
  { title: "Silver Impact", amount: "$100+", icon: "🥈" },
  { title: "Gold Impact", amount: "$250+", icon: "🥇" },
  { title: "Platinum Impact", amount: "$500+", icon: "💎" },
];

const socialLinks = [
  { icon: <FaWhatsapp />, label: "WhatsApp", url: "https://wa.me/?text=Check+out+my+impact+badge!" },
  { icon: <FaEnvelope />, label: "Email", url: "mailto:?subject=My Impact Badge&body=Look at this badge I earned!" },
  { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/" },
  { icon: <FaFacebook />, label: "Facebook", url: "https://www.facebook.com/sharer/sharer.php?u=https://example.com" },
  { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com/intent/tweet?text=I+just+earned+an+impact+badge!+" },
];

export default function NFTImpactShowcase() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <span className="bg-purple-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Recognition</span>
          <h2 className="text-4xl font-bold mt-4 mb-3 text-blue-900">Showcase Your Impact</h2>
          <p className="text-gray-700 mb-6">Earn unique NFT badges based on your donation milestones. Share them on social media to inspire others and showcase your commitment to making a difference.</p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>1. Exclusive digital collectibles stored on blockchain</li>
            <li>2. Different tiers based on donation amount</li>
            <li>3. Shareable on social media with one click</li>
            <li>4. Verifiable proof of your positive impact</li>
          </ul>
          <a 
  href="https://charitydigital.org.uk/topics/topics/an-introduction-to-nfts-for-charities-8804" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 text-white bg-blue-900 hover:bg-blue-700 via-black to-white rounded-lg shadow-lg transition"
>
  Learn More About NFT Badges
</a>
        </div>

       {/* Right Side */}
<div className="grid grid-cols-2 gap-6 justify-center text-center items-center">
  {badges.map((badge, index) => (
    <div key={index} className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 p-6 rounded-xl shadow-md relative transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="text-5xl mb-2">{badge.icon}</div>
      <h4 className="font-semibold text-lg text-blue-800">{badge.title}</h4>
      <p className="text-gray-600 text-sm mb-3">{badge.amount} donated</p>
      <div className="flex justify-center">
        <button
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
        >
          <FaShareAlt /> Share
        </button>
      </div>       {activeIndex === index && (
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
      </div>
    </div>
  );
}