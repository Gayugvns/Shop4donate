import React from "react";

import LoginSignupToggle from "@/components/Signup/LoginSignupToggle";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const Signup = () => {
  return (
    <><Navbar/>
    <div className="relative mt-[150px] min-h-screen ">
      <LoginSignupToggle />
      <Footer />
    </div>
    </>
  );
};

export default Signup;
