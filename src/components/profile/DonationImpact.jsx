import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";


const chartData = [
  { name: "Jan", donation: 5 },
  { name: "Feb", donation: 10 },
  { name: "Mar", donation: 20 },
  { name: "Apr", donation: 15 },
];

const breakdownData = [
  { label: "Education for All", amount: 25.5, percent: 40, color: "bg-blue-600" },
  { label: "Medical Aid Fund", amount: 18.75, percent: 30, color: "bg-purple-500" },
  { label: "Clean Water Initiative", amount: 12.5, percent: 20, color: "bg-cyan-500" },
  { label: "Wildlife Conservation", amount: 6.25, percent: 10, color: "bg-yellow-500" },
];

const timelineData = [
  { date: "Apr 12, 2025", cause: "Education for All", amount: "$10.00" },
  { date: "Mar 28, 2025", cause: "Clean Water Initiative", amount: "$5.00" },
  { date: "Feb 15, 2025", cause: "Medical Aid Fund", amount: "$8.75" },
];

const DonationImpact = () => {
  const [activeTab, setActiveTab] = useState("chart");

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold">Your Donation Impact</h3>
      <p className="text-sm text-gray-500">
        Track how your shopping has contributed to various causes
      </p>

      {/* Tabs */}
      <div className="mt-4 flex gap-4 border-b text-sm font-medium">
        {["chart", "breakdown", "timeline"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 capitalize ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart View */}
      {activeTab === "chart" && (
        <div className="h-64 mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="donation"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Breakdown View */}
      {activeTab === "breakdown" && (
        <div className="mt-6 space-y-4">
          {breakdownData.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${item.color}`}
                ></span>
                <span className="text-sm">{item.label}</span>
              </div>
              <span className="text-sm font-medium text-gray-700">
                ${item.amount} ({item.percent}%)
              </span>
              <div className="w-full ml-2 bg-gray-200 rounded h-2 relative">
                <div
                  className={`${item.color} h-2 rounded`}
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Timeline View */}
      {activeTab === "timeline" && (
        <div className="mt-6 space-y-4 text-sm">
          {timelineData.map((entry, idx) => (
            <div key={idx} className="flex justify-between">
              <div className="text-gray-600">{entry.date}</div>
              <div className="text-gray-800 font-medium">{entry.cause}</div>
              <div className="text-blue-600 font-semibold">{entry.amount}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationImpact;
