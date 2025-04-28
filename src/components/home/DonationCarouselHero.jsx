import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const quotes = [
  "Education is the most powerful weapon to change the world.",
  "Every life matters. Give hope through your kindness.",
  "Together, we heal. Together, we rise.",
  "Your help can rewrite someone's story.",
"Give a little. Change a lot.",

"Your shopping powers a smile.",

"Turn kindness into impact.",

"Buy with purpose. Give with heart.",

"Donate hope. Spread light.",

"Where giving meets greatness.",

"Shop. Support. Shine.",

"Small acts. Big difference.",

"Be someone's reason to believe.",

"Make every rupee count.",

"Empower lives with your clicks.",

"From your cart to their heart.",

"Impact begins with intention.",

"Together, we rise by giving.",

"A better world starts with you.",

"Kindness is your true currency.",

"You give. We grow.",

"Buy. Give. Inspire.",

"Turn your deals into deeds.",

"Because humanity matters."
];

const images = [
  "/images/donation1.jpg",
  "/images/donation2.jpg",
  "/images/donation3.jpg",
  "/images/donation4.jpg",
  "/images/donation5.jpg",
];

const DonationCarouselHero = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);

    const imgTimer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(quoteTimer);
      clearInterval(imgTimer);
    };
  }, []);

  return (
    <div className="w-full h-[130vh] mb-10 bg-gradient-to-tr from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] text-white flex items-center justify-between mt-[150px] relative overflow-hidden">
      {/* LEFT SIDE TEXT */}
      <div className="w-full md:w-1/2 px-6 md:px-20 z-10 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Make <span className="text-blue-300">Every Purchase</span> Count
        </h1>
        <p className="text-lg text-blue-100 max-w-md">
          When you shop, someone smiles. Turn your daily buys into donations effortlessly.
        </p>
        <button>
          <a
            href="/products"
            className="ml-2 relative p-2 py-4 rounded-full bg-white overflow-hidden text-black text-sm font-medium shadow-lg border border-transparent group flex items-center gap-2"
          >
            {/* Shopping Bag Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-black group-hover:text-white transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 7.121A3 3 0 018.243 6h7.514a3 3 0 013.122 1.121M3 9h18l-1.5 11.25A2 2 0 0117.516 22H6.484a2 2 0 01-1.984-1.75L3 9z"
              />
            </svg>
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Start Shopping
            </span>
            <span className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-black to-white opacity-0 transform scale-0 origin-bottom-left transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 rounded-full z-0" />
          </a>
        </button>
      </div>

      {/* RIGHT SIDE IMAGE & QUOTE */}
      <div className="hidden md:flex w-1/2 mt-[-100px] h-full items-center justify-start relative z-30 pl-10">
        <div className="w-[780px] h-[715px] rounded-l-full overflow-hidden relative shadow-2xl bg-transparent">
          {/* IMAGE TRANSITION */}
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIndex}
              src={images[imgIndex]}
              alt="Donation Theme"
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>

        {/* QUOTE TRANSITION */}
<AnimatePresence mode="wait">
  <motion.div
    key={quoteIndex}
    className="absolute inset-0 flex items-center justify-center justify-content font-supreme text-6xl mt-[300px] ms-[150px] bg-transparent bg-opacity-40 text-white font-semibold text-center px-6"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.8 }}
  >
    {quotes[quoteIndex]}
  </motion.div>
</AnimatePresence>

        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
        viewBox="0 0 1440 320" className="w-full h-[150px] md:h-[200px]" preserveAspectRatio="none">

          <path
            fill="#ffffff"
            d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,261.3C672,277,768,267,864,250.7C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default DonationCarouselHero;
