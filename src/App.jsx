import {  Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/Products";
import Profile from "./pages/ProfilePage";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import DonationHistory from "./pages/DonationHistory";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blogs from "./pages/Blogs";
import Catagories from "./pages/Catagories";


function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/donations" element={<DonationHistory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/categories" element={<Catagories />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
     
     
    
  );
}

export default App;
