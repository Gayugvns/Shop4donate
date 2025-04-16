"use client";
import React, { useEffect, useState } from "react";
import { FaShoppingBag, FaMoneyBillWave, FaHeart, FaMedal } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Shop Through Our Links",
    desc: "Browse products from your favorite stores and click through our affiliate links to make your purchase.",
    icon: <FaShoppingBag size={24} />,
  },
  {
    title: "We Earn Commission",
    desc: "We receive a commission from the store for referring you – at no extra cost to you.",
    icon: <FaMoneyBillWave size={24} />,
  },
  {
    title: "Donations Are Made",
    desc: "We donate a significant portion of our commission to causes based on your preferences.",
    icon: <FaHeart size={24} />,
  },
  {
    title: "Earn NFT Badges",
    desc: "Top donors receive exclusive NFT badges that can be shared on social media.",
    icon: <FaMedal size={24} />,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500); // every 2.5s switch card
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 px-4 bg-[#f3faff] rounded-3xl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How Shop4Donate Works</h2>
        <p className="text-gray-600 mt-6 mb-10">
          Our platform makes it easy to support causes you care about while shopping online from your favorite stores.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-2">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              animate={{
                scale: activeStep === idx ? 1.05 : 1,
                boxShadow: activeStep === idx ? "0 8px 20px rgba(0, 123, 255, 0.2)" : "none",
              }}
              transition={{ duration: 0.5 }}
              className={`relative bg-white rounded-2xl p-6 flex flex-col items-center text-center border ${
                activeStep === idx ? "border-blue-500" : "border-gray-200"
              } transition-all duration-300 ease-in-out`}
            >
              <div className="bg-gray-100 text-blue-600 p-3 rounded-full mb-4">{step.icon}</div>
              <h3 className="text-md font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>

              {/* Blue underline indicator */}
              <div
                className={`h-[3px] w-8 mt-4 rounded-full transition-all duration-300 ${
                  activeStep === idx ? "bg-blue-600 scale-x-100" : "bg-gray-200 scale-x-50"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
