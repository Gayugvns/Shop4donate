'use client';
import React from 'react';

const HeroSection = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="h-[350px] flex items-center justify-center px-4 text-black"
      style={{
        background: 'linear-gradient(135deg, #ffffff, #e0f2fe, #ffffff, #bfdbfe)',
      }}
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Shop and Make a Difference?
        </h1>
        <p className="text-lg mb-8 text-black">
          Start shopping through our platform today and support causes you care about without spending extra.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection('products-section')}
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow hover:shadow-lg transition duration-300"
          >
            Start Shopping Now
          </button>

          <button
            onClick={() => scrollToSection('about-section')}
            className="px-6 py-3 bg-white text-white font-semibold rounded-md shadow hover:bg-blue-700 text-black transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
