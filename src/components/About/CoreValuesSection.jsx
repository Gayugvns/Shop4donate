import React from "react";
import {
  ShieldCheck,
  Heart,
  Users,
  Zap,
  Globe,
  Sparkles,
} from "lucide-react";

const values = [
  {
    title: "Impact-Driven",
    description:
      "We measure our success by the positive change we create in the world. Every decision we make is guided by maximizing our collective impact.",
    icon: <Heart className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Radical Transparency",
    description:
      "We believe in complete openness about how donations are generated, distributed, and used. Our blockchain-based verification system ensures accountability.",
    icon: <ShieldCheck className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Community First",
    description:
      "Our community of shoppers, retailers, and causes is at the heart of everything we do. We build features and partnerships that serve their needs.",
    icon: <Users className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Effortless Giving",
    description:
      "We remove barriers to charitable giving by integrating it seamlessly into everyday activities, making positive impact accessible to everyone.",
    icon: <Zap className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Global Perspective",
    description:
      "We support causes around the world and recognize that effective solutions must be culturally relevant and locally empowering.",
    icon: <Globe className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Continuous Innovation",
    description:
      "We constantly explore new technologies and approaches to increase our impact and improve the experience for our community.",
    icon: <Sparkles className="text-blue-600 w-6 h-6" />,
  },
];

const CoreValuesSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-blue-50 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block hover:bg-green-700 hover:text-white">
          Our Mission & Values
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Drives Us Forward
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          Our mission is to transform everyday shopping into a powerful force
          for positive change in the world. These core values guide everything
          we do:
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="relative bg-white border-4 border-double border-blue-600 rounded-2xl p-6 shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:rotate-[0.5deg] hover:shadow-2xl hover:bg-blue-200 hover:text-white"
            >
              {/* Optional bubble glow effect */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-100 rounded-full blur-xl opacity-50 animate-ping pointer-events-none" />
              <div className="mb-4">{val.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {val.title}
              </h3>
              <p className="text-gray-600 text-sm">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
