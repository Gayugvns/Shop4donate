"use client";

import React from "react";
import { DynamicNeedSection } from "./DynamicNeedSection.1";


export const ProgressBar = ({ label, score }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-blue-700">{label}</span>
        <span className="text-sm font-medium text-blue-700">{score}%</span>
      </div>
      <div className="w-full bg-blue-100 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1 }}
          className="bg-blue-600 h-3 rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

export const CauseCard = ({ title, description, raised, goal, supporters, badge }) => {
  const percentage = Math.min((raised / goal) * 100, 100);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-80">
      <div className="mb-3 flex justify-between">
        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full font-medium">
          {badge.category}
        </span>
        <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded-full font-medium">
          {badge.label}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <div className="text-sm text-blue-800 mb-1">
        Raised: ${raised.toLocaleString()} / Goal: ${goal.toLocaleString()}
      </div>
      <div className="w-full bg-blue-100 rounded-full h-2 mb-2">
        <div
          style={{ width: `${percentage}%` }}
          className="h-2 bg-blue-500 rounded-full"
        ></div>
      </div>
      <p className="text-xs text-gray-500 mb-3">💙 {supporters} supporters</p>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full text-sm">
        Support This Cause
      </button>
    </div>
  );
};

export default DynamicNeedSection;
