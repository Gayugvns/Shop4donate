// [NO CHANGE IN IMPORTS]
import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBell,
  FaBars,
  FaTimes,
  FaUser,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems] = useState(3); // Change this dynamically later
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); // Notification dropdown

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`fixed w-full top-8 z-50 ${darkMode ? "dark" : ""}`}>
      <div className="text-black dark:text-white">
        <div
          className={`mx-2 max-w-9xl px-2 py-3 mb-5 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "backdrop-blur-lg bg-white/30 dark:bg-gray-800/40 shadow-md rounded-b-2xl"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center space-x-6 ms-5 cursor-pointer">
            <img src="/images/logo.png" alt="Logo" className="h-18 w-auto" />
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8 relative">
            
            {/* Animated Morphing Blob */}
            <motion.div
              className="absolute -z-5 left-1/2 -translate-x-1/2 top-0"
              initial={{ scale: 0.8, opacity: 0.3 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
            >
              <svg viewBox="0 0 200 200" width="220" height="100">
                <motion.path
                  fill="#fde68a"
                  d="M43.1,-76.5C56.6,-68.6,68,-56.7,71.2,-43.3C74.5,-29.9,69.5,-15,68,-0.1C66.6,14.9,68.7,29.8,63.3,42.1C57.8,54.4,44.8,64.2,30.3,71.5C15.8,78.8,-0.2,83.6,-13.7,78.3C-27.1,73.1,-38.1,57.7,-49.4,44.2C-60.6,30.6,-72.2,18.9,-74.9,5.6C-77.6,-7.7,-71.3,-22.6,-61.9,-34.2C-52.5,-45.7,-40,-53.9,-27.3,-61.9C-14.6,-69.9,-1.8,-77.8,11.6,-83.5C25.1,-89.2,39.2,-92.1,43.1,-76.5Z"
                  animate={{
                    d: [
                      "M43.1,-76.5C56.6,-68.6,68,-56.7,...",
                      "M54.5,-61.1C64.2,-53.3,...",
                      "M43.1,-76.5C56.6,-68.6,...",
                    ],
                  }}
                  transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
                />
              </svg>
            </motion.div>
            {["Shop", "Causes", "How It Works", "About Us"].map((item) => (
  <a
    key={item}
    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
    className="relative group inline-block px-4 py-2 rounded-full overflow-hidden font-medium z-10"
  >
    <span className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-black to-white opacity-0 transform scale-0 origin-bottom-left transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 rounded-full z-0"></span>
    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
      {item}
    </span>
  </a>
))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <a onClick={() => setIsSearchOpen(true)} className="cursor-pointer">
              <FaSearch className="text-lg" />
            </a>

            {/* Wishlist */}
            <a href="/wishlist">
              <FaHeart className="text-lg" />
            </a>

            {/* Cart */}
            <div className="relative">
              <a onClick={() => setIsCartOpen(!isCartOpen)} className="relative cursor-pointer">
                <FaShoppingCart className="text-lg" />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1.5 rounded-full">
                  {cartItems}
                </span>
              </a>
              <AnimatePresence>
                {isCartOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-8 right-0 bg-white dark:bg-gray-800 p-4 rounded shadow-md z-50 w-60"
                  >
                    <p className="text-sm">Your cart has {cartItems} item(s).</p>
                    <a href="/cart" className="text-blue-500 hover:underline text-sm">
                      Go to Cart
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Notifications */}
            <div className="relative">
              <a onClick={() => setIsNotificationOpen(!isNotificationOpen)} className="cursor-pointer">
                <FaBell className="text-lg" />
              </a>
              <AnimatePresence>
                {isNotificationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-8 right-0 bg-white dark:bg-gray-800 p-4 rounded shadow-md z-50 w-64"
                  >
                    <p className="text-sm font-medium mb-2">Notifications</p>
                    <ul className="text-sm space-y-1">
                      <li>No new notifications</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile */}
            <div className="relative">
              <a
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer block"
              ></a>
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute top-10 right-0 bg-white dark:bg-gray-700 text-black dark:text-white p-3 rounded shadow-md space-y-2 z-50"
                  >
                    <div>Profile</div>
                    <div className="text-xs text-gray-500">Silver Donor</div>
                    <a href="/dashboard" className="block text-sm hover:text-yellow-500">
                      Dashboard
                    </a>
                    <a href="/logout" className="block text-sm hover:text-yellow-500">
                      Logout
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>

            {/* Start Shopping CTA */}
            <a
              href="/shop"
              className="ml-2 relative px-4 py-4 rounded-full overflow-hidden text-black text-lg font-medium shadow-lg border border-transparent group"
            >
              <span className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-black to-white opacity-0 transform scale-0 origin-bottom-left transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 rounded-full z-0"></span>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Start Shopping 🛒
              </span>
            </a>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="md:hidden bg-white dark:bg-gray-900 text-black dark:text-white py-4 px-6 space-y-4"
            >
              {["Shop", "Causes", "How It Works", "About Us"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="block">
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Modal */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setIsSearchOpen(false)}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-96" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-xl mb-4">Search</h2>
                <input
                  type="text"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                  placeholder="Type to search..."
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
