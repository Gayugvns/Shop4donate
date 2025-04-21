import React from "react";
import LoginForm from "@/components/Login/LoginForm";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const Login = () => {
  return (
    <div className="relative min-h-screen ">
      <Navbar/>
      <LoginForm />
      <Footer/>
    </div>
  );
};

export default Login;
