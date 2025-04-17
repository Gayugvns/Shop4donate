import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handleSubmit = () => {
    alert(`Subscribed with ${email}`);
    setEmail('');
    setIsValid(false);
  };

  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] via-50% to-[#3b82f6] to-90% text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">Shop<span className="text-blue-400">for</span>Donate</h2>
          <p className="mt-2 text-sm text-blue-200">
            Shop from your favorite stores and support causes you care about – at no extra cost to you.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:scale-105 transition border border-blue-400/30 shadow-lg"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">QUICK LINKS</h3>
          <ul className="space-y-1 text-sm text-blue-200">
            <li><a href="https://example.com/shop" target="_blank" rel="noopener noreferrer" className="hover:underline">Shop</a></li>
            <li><a href="https://example.com/causes" target="_blank" rel="noopener noreferrer" className="hover:underline">Causes</a></li>
            <li><a href="https://example.com/how-it-works" target="_blank" rel="noopener noreferrer" className="hover:underline">How It Works</a></li>
            <li><a href="https://example.com/about" target="_blank" rel="noopener noreferrer" className="hover:underline">About Us</a></li>
            <li><a href="https://example.com/contact" target="_blank" rel="noopener noreferrer" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-semibold mb-2">SUPPORT</h3>
          <ul className="space-y-1 text-sm text-blue-200">
            <li><a href="https://example.com/faq" target="_blank" rel="noopener noreferrer" className="hover:underline">FAQ</a></li>
            <li><a href="https://example.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy Policy</a></li>
            <li><a href="https://example.com/terms" target="_blank" rel="noopener noreferrer" className="hover:underline">Terms of Service</a></li>
            <li><a href="https://example.com/partner" target="_blank" rel="noopener noreferrer" className="hover:underline">Partner With Us</a></li>
            <li><a href="https://example.com/affiliate" target="_blank" rel="noopener noreferrer" className="hover:underline">Affiliate Program</a></li>
          </ul>
        </div>

        {/* Email Subscribe */}
        <div>
          <h3 className="font-semibold mb-2">STAY UPDATED</h3>
          <p className="text-sm mb-3 text-blue-200">
            Subscribe to our newsletter for updates on new causes and features.
          </p>

          {/* Input Field */}
          <div className="flex rounded-md overflow-hidden w-full shadow-md">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email"
              className="flex-1 py-2 px-4 bg-[#1e3a8a] text-white placeholder-blue-300 outline-none"
            />
            <div className="flex items-center justify-center px-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white">
              <ArrowRight size={18} />
            </div>
          </div>

          {/* Animated Subscribe Button */}
          <AnimatePresence>
            {isValid && (
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.4 }}
                onClick={handleSubmit}
                className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-md text-sm font-medium hover:scale-105 transition-transform"
              >
                Subscribe
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      <hr className="border-blue-800 mt-10 mb-4" />
      <p className="text-center text-xs text-blue-300">&copy; 2025 Shop4Donate. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
