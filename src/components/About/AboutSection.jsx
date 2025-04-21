import React from 'react';
import Give from '/images/give.png'; // logo


const AboutSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-2 overflow-hidden">
     

      {/* Foreground Content */}
      <div className="relative z-10 max-w-3xl text-center text-white">
        {/* Logo Image */}
        <div className="mb-6 mt-10 flex justify-center">
        <img
  src={Give}
  alt="Give4Change Logo"
  className="w-52 h-52 sm:w-56 sm:h-56 object-contain brightness-110"
/>
        </div>

        {/* Tagline / Subheading */}
        <p className="text-blue-100 text-3xl font-bold uppercase tracking-wider mb-2">Our Story</p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          About{' '}
          <span className="text-blue-400 font-extrabold">
            Give<span className="italic text-white bg-blue-500 px-2 py-1 rounded-md">4</span>Change
          </span>
        </h1>

        {/* Description */}
        <p className="text-white text-xl mb-6">
          We're on a mission to transform everyday shopping into a force for good.
          Learn about our journey, our team, and the values that drive us forward.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#mission">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
              Join Our Mission
            </button>
          </a>
          <a href="#team">
            <button className="border border-blue-300 text-blue-300 px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition">
              Meet The Team
            </button>
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-10">
          <a href="#mission" className="inline-block animate-bounce text-blue-300 text-2xl">
            ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
