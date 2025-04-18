import {  Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/Products";
import Profile from "./pages/ProfilePage";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import DonationHistory from "./pages/DonationHistory";
import About from "./pages/About";

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
      </Routes>
     
     
    
  );
}

export default App;
