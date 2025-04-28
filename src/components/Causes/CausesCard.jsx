import React from "react";
import { motion } from "framer-motion"; // ✅ Needed for motion.div

const CauseCard = ({ title, description, raised, goal }) => {
  const progress = (raised / goal) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md flex flex-col justify-between border border-blue-200">
      {/* Optional Image or Illustration */}
      <div className="h-40 bg-gradient-to-b from-gray-100 to-white rounded-lg mb-4 flex items-center justify-center text-gray-300 text-4xl">
        📦
      </div>

      {/* Cause Info */}
      <div className="flex flex-col space-y-2 text-sm text-gray-700">
        <p className="font-semibold text-base text-black">{title}</p>
        <p>{description}</p>
      </div>

      {/* Raised / Goal Progress */}
      <div className="mt-4">
        <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
          <span>${raised.toLocaleString()} raised</span>
          <span>${goal.toLocaleString()} goal</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-sky-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-4 bg-blue-600 text-white font-semibold text-sm py-2 rounded-full w-full hover:bg-blue-700 transition relative flex justify-center items-center">
        Support This Cause
        <span className="absolute right-4 w-5 h-5 rounded-full bg-white border border-gray-300" />
      </button>
    </div>

    
  );
};

const CausesCard = () => {
  const causesData = [
    {
      title: "Providing educational resources to underprivileged children",
      description:
        "Help us build libraries, provide school supplies, and support teacher training programs.",
      raised: 12500,
      goal: 25000,
    },
    {
      title: "Bringing clean water to communities",
      description:
        "Your support helps install water purification systems and dig wells.",
      raised: 8000,
      goal: 20000,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-950 to-blue-800 min-h-screen text-white px-4 py-12">
      {/* Impact Badge */}
      <div className="relative flex justify-center items-center w-full h-32 mb-10">
        {/* Rotating line behind */}
        <motion.div
          className="absolute w-[150px] h-10 bg-blue-500 rounded-full shadow-2xl"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
        />
        {/* Glowing badge */}
        <div className="relative px-4 py-1 bg-gradient-to-r from-slate-700 to-slate-900 border border-blue-400 text-blue-200 rounded-full shadow-lg backdrop-blur-md text-sm font-semibold z-10">
          MAKE AN IMPACT
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Causes Making a Big Impact</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto">
          These featured causes have been carefully selected based on their
          urgent needs and potential for significant positive impact in their
          communities.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {causesData.map((cause, index) => (
          <CauseCard key={index} {...cause} />
        ))}
      </div>
    </section>
  );
};

export default CausesCard;
