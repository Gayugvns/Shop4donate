import React, { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart, FaBell } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isLoginSignupPrompt, setIsLoginSignupPrompt] = useState(false);
  const [showLoginWarning, setShowLoginWarning] = useState(false);
  const [cartItems] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const isLoggedIn = false; // Simulate login status

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleProfileClick = (action) => {
    setIsProfileOpen(false);
    if (action === "login") navigate("/login");
    else if (action === "signup") navigate("/signup");
    else if (action === "profile") {
      isLoggedIn ? navigate("/profile") : setShowLoginWarning(true);
    }
  };

  const handleStartShoppingClick = () => {
    if (!isLoggedIn) {
      setIsLoginSignupPrompt(true);
    } else {
      navigate("/shop");
    }
  };

  const handleLoginSignupAction = (action) => {
    if (action === "signup") navigate("/signup");
    else if (action === "login") navigate("/login");
    setIsLoginSignupPrompt(false);
  };

  const handleNavClick = (item) => {
    switch (item) {
      case "Shop":
        navigate("/products");
        break;
      case "Causes":
        navigate("/causes");
        break;
      case "Blogs":
        navigate("/blogs");
        break;
      case "About Us":
        setIsAboutUsOpen(!isAboutUsOpen);
        break;
      default:
        break;
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
      setSearchQuery(""); // Clear search after submitting
    }
  };

  return (
    <div className="fixed w-full top-8 z-50">
      <div className={`text-black dark:text-white`}>
        <div
          className={`mx-2 max-w-9xl px-2 py-3 mb-5 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "backdrop-blur-lg bg-white/30 dark:bg-gray-800/40 shadow-md rounded-b-2xl"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center space-x-6 ms-5 cursor-pointer"
          >
            <img src="/images/logo.png" alt="Logo" className="h-18 w-auto" />
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {["Shop", "Causes", "Blogs", "About Us"].map((item) => (
              <div key={item} className="relative">
                <div
                  onClick={() => handleNavClick(item)}
                  className="relative group inline-block px-4 py-2 rounded-full overflow-hidden font-medium z-10 cursor-pointer"
                >
                  <span className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-black to-white opacity-0 transform scale-0 origin-bottom-left transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 rounded-full z-0"></span>
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    {item}
                  </span>
                </div>

                {item === "About Us" && isAboutUsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-8 left-0 bg-white dark:bg-gray-800 p-4 rounded shadow-md w-48 z-50"
                  >
                    <div
                      className="block text-sm hover:text-yellow-500 mb-2 cursor-pointer"
                      onClick={() => navigate("/about")}
                    >
                     Visionary
                    </div>
                    <div
                      className="block text-sm hover:text-yellow-500 cursor-pointer"
                      onClick={() => navigate("/contactus")}
                    >
                      Contact Us
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-x-4">
            {/* Search */}
            <div className="relative flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search..."
                className="hidden md:block px-3 py-1 rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch onClick={handleSearch} className="text-lg cursor-pointer" />
            </div>

            {/* Cart */}
            {isLoggedIn && (
              <div className="relative">
                <FaShoppingCart
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="text-lg cursor-pointer"
                />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1.5 rounded-full">
                  {cartItems}
                </span>
                <AnimatePresence>
                  {isCartOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-8 right-0 bg-white dark:bg-gray-800 p-4 rounded shadow-md z-50 w-60"
                    >
                      <p className="text-sm">Your cart has {cartItems} item(s).</p>
                      <div
                        onClick={() => navigate("/cartpage")}
                        className="text-blue-500 hover:underline text-sm cursor-pointer"
                      >
                        Go to Cart
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Notifications */}
            <div className="relative">
  <FaBell
    onClick={() => navigate("/notifications")}
    className="text-lg cursor-pointer"
  />
</div>

            {/* Login / Sign Up */}
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => handleProfileClick("login")}
                  className="text-sm hover:text-yellow-500"
                >
                  Login
                </button>
                <button
                  onClick={() => handleProfileClick("signup")}
                  className="text-sm hover:text-yellow-500"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <div className="relative">
                <div
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer"
                >
                  <img
                    src="/images/Donation.jpg"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute top-10 right-0 bg-white dark:bg-gray-700 text-black dark:text-white p-3 rounded shadow-md space-y-2 z-50"
                    >
                      <div className="text-xs text-gray-500">Silver Donor</div>
                      <button
                        onClick={() => handleProfileClick("profile")}
                        className="block text-sm hover:text-yellow-500 w-full text-left"
                      >
                        Dashboard
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Start Shopping Button */}
            <button
              onClick={handleStartShoppingClick}
              className="ml-2 relative px-4 py-3 rounded-full overflow-hidden text-black text-sm font-medium shadow-lg border border-transparent group"
            >
              <span className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-black to-white opacity-0 transform scale-0 origin-bottom-left transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 rounded-full z-0"></span>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Start Shopping 🛒
              </span>
            </button>
          </div>
        </div>

        {/* Login / Sign Up Prompt */}
        <AnimatePresence>
          {isLoginSignupPrompt && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-96">
                <h3 className="text-xl font-semibold mb-4">Please Sign Up or Log In</h3>
                <div className="space-y-4">
                  <button
                    onClick={() => handleLoginSignupAction("signup")}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400"
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => handleLoginSignupAction("login")}
                    className="w-full bg-gray-300 text-black py-2 rounded-lg hover:bg-gray-200"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Login Warning */}
        <AnimatePresence>
          {showLoginWarning && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-24 right-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg px-6 py-4 z-50"
            >
              <p className="text-black dark:text-white font-medium mb-2">
                Please login to access your profile
              </p>
              <button
                onClick={() => {
                  setShowLoginWarning(false);
                  navigate("/login");
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
              >
                Go to Login
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
