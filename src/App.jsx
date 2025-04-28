
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

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
import Categories from "./pages/Categories";
import Causes from "./pages/Causes";
import CausesCard from './components/Causes/CausesCard';
import BrowseCauses from './components/Causes/BrowseCauses';
import Explore from "./pages/explore";
import Suggestion from "./pages/suggestion";
import Cartpage from "./pages/cartpage";



{/* import AdminLayout */}
import SignupAdmin from "./pages/Admin/SignupAdmin";
import Affiliate from "./pages/Admin/Affiliate";
import Email from "./pages/Admin/Email";
import AdminAffiliatePartners from "./pages/Admin/AdminAffiliatePartners";
import AdminEmailContent from "./pages/Admin/AdminEmailContent";
import CategoriesAdmin from "./pages/Categories";
import AdminMail from "./pages/Admin/Email"; 
import AdminSMTPSettings from "./pages/Admin/AdminSMTPSettings";
import ProfileSettings from "./pages/Admin/ProfileSettings";
import AdminRoles from "./pages/Admin/Roles";
import Users from "./pages/Admin/Users";
import Adminpanel from "./pages/Admin/Adminpanel";
import AdminAuth from "./pages/Admin/adminauth";
import Dashboard from "./pages/Admin/Dashboard";
import RecentActivity from "./pages/Admin/RecentActivity";
import StatCard from "./pages/Admin/StatCard";



function App() {
  return (
    <Routes>
      {/* Regular routes */}
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
      <Route path="/categories" element={<Categories />} />
      <Route path="/causes" element={<Causes />} />
      <Route path="/causescard" element={<CausesCard />} />
      <Route path="/browsecauses" element={<BrowseCauses />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/Suggest" element={<Suggestion />} />
      <Route path="/cartpage" element={<Cartpage />} />
      
      {/* Admin Routes with layout */}
      <Route path="/admin/login" element={<AdminAuth />} />
<Route path="/admin" element={<Adminpanel />}>
  <Route path="adminpanel" element={<Adminpanel />} />
  <Route path="affiliate" element={<Affiliate />} />
  <Route path="email" element={<Email />} />
  <Route path="adminaffiliatepartners" element={<AdminAffiliatePartners />} />
  <Route path="adminEmailContent" element={<AdminEmailContent />} />
  <Route path="category" element={<CategoriesAdmin />} />
  <Route path="smtp" element={<AdminSMTPSettings />} />
  <Route path="profilesettings" element={<ProfileSettings />} />
  <Route path="adminMail" element={<AdminMail />} />
  <Route path="about" element={<About />} />
  <Route path="causes" element={<Causes />} />
  <Route path="roles" element={<AdminRoles />} />
  <Route path="users" element={<Users />} />
  <Route path="signupadmin" element={<SignupAdmin />} />
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="recentactivity" element={<RecentActivity />} />
  <Route path="statcard" element={<StatCard />} />

</Route>


      {/* Catch-all */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}


export default App;
