import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <>
      <div className="relative flex justify-center items-center w-full h-32 mb-10">
        <motion.div
          className="absolute w-[150px] h-10 bg-blue-500 rounded-full shadow-2xl"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'linear',
          }}
        />
        <div className="relative px-4 py-1 bg-gradient-to-r from-slate-700 to-slate-900 border border-blue-400 text-blue-200 rounded-full shadow-lg backdrop-blur-md text-sm font-semibold z-10">
          MAKE AN IMPACT
        </div>
      </div>
      <div className="bg-blue-900 text-white py-20 px-5 rounded-lg mx-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-sm tracking-wider mb-2 text-blue-300">JOIN THE MOVEMENT</div>
          <h1 className="text-3xl font-bold mb-5">Ready to Make a Difference While You Shop?</h1>
          <p className="text-lg leading-relaxed mb-8 text-blue-200">
            Start shopping through Shop4Donate today and support these amazing causes
            without spending extra. Every purchase has the power to change lives.
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
              onClick={() => (window.location.href = '/products')}
            >
              Start Shopping Now <span className="ml-2">→</span>
            </button>
            <button
              className="bg-transparent border border-blue-300 hover:border-blue-400 text-blue-300 hover:text-blue-400 font-semibold py-3 px-8 rounded-md transition duration-300"
              onClick={() => (window.location.href = '/about')}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;