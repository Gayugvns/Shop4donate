import AboutSection from "@/components/About/AboutSection";
import Donation from '/images/donatebg.jpg'; // background image
import HowItStartedSection from "@/components/About/HowItStartedSection";
import CoreValuesSection from "@/components/About/CoreValuesSection";
import ImpactStats from "@/components/About/ImpactStats";
import TrustedPartners from "@/components/About/TrustedPartners";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

function About() {
  return (
    <>
    <Navbar />
    <div className="relative min-h-screen mt-[150px] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <img
  src={Donation}
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover opacity-50 animate-zoomSlow z-0"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 w-full">
        <AboutSection />
      </div>
    </div>
    <HowItStartedSection/>
    <CoreValuesSection />
    <ImpactStats/>
    <TrustedPartners />
    <Footer />
    </>
  );
}

export default About;
