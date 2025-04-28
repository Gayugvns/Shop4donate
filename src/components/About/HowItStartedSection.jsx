import React, { useState } from "react";
import journey from "/images/journey.jpg"; // replace with your image path


const HowItStartedSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content Left */}
        <div>
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It All Started
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Shop4Donate began in 2022 when our founder, Emma Rodriguez, realized that the billions spent on online shopping could be redirected to make a meaningful difference in the world.
          </p>

          <p className={`text-gray-700 text-lg transition-all duration-300 ${expanded ? "max-h-full opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}>
            After leaving her executive role at a major tech company, Emma assembled a team of experts in technology, nonprofit management, and retail partnerships to build a platform that would make giving back effortless.
            <br /><br />
            What started as a small pilot with just 5 retail partners and 3 causes has grown into a global movement with thousands of retailers and hundreds of vetted charitable organizations.
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            {expanded ? "View Less" : "Read Our Full Story →"}
          </button>
        </div>

        {/* Image Right */}
        <div className="flex justify-center md:justify-end">
        <img
  src={journey}
  alt="How It All Started"
  className="w-full max-w-lg h-[500px] rounded-3xl shadow-xl object-cover"
/>
        </div>
      </div>
    </section>
  );
};

export default HowItStartedSection;
