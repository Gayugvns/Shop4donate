import React from "react";
import ImpactBadge from "../components/Causes/ImpactBadge";
import CausesCard from "../components/Causes/CausesCard";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BrowseCauses from "../components/Causes/BrowseCauses";
import ImpactDashboard from "../components/Causes/ImpactDashboard";
import HeroSection from "../components/Causes/HeroSection";

const Causes = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[150px] bg-gradient-to-b from-blue-950 to-blue-800 bg-opacity-40">
        <ImpactBadge />
        <CausesCard />
        <BrowseCauses />
        <ImpactDashboard />
        <HeroSection />
      </div>
      <Footer />
    </>
  );
};

export default Causes;
