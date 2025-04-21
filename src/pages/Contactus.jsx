import React from "react";
import ContactUsSection from "@/components/Contact/ContactUsSection";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
    
const Contactus = () => {
  return (
    <>
    <Navbar />
    <div
      className="relative min-h-screen flex items-center mt-[150px] justify-center px-4 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/formbg.jpg')" }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <ContactUsSection />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contactus;
