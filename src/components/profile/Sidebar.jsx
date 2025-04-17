import { NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  BadgePercent,
  CalendarDays,
  CreditCard,
  Gift,
  Bell,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "My Purchases", path: "/purchases", icon: ShoppingBag },
  { label: "Causes I Support", path: "/causes", icon: Heart },
  { label: "My NFT Badges", path: "/badges", icon: BadgePercent },
  { label: "Donation History", path: "/donations", icon: CalendarDays },
  { label: "Rewards", path: "/rewards", icon: Gift },
  { label: "Notifications", path: "/notifications", icon: Bell },
  { label: "Settings", path: "/settings", icon: Settings },
];

const Sidebar = () => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) setProfileImage(savedImage);
  }, []);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        setProfileImage(imageData);
        localStorage.setItem("profileImage", imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow w-full lg:w-80 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-900 h-24 relative">
        <div
          className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white bg-gray-200 cursor-pointer group"
          onClick={handleImageClick}
        >
          <img
            src={profileImage || "https://via.placeholder.com/80"}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
            accept="image/*"
          />
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
            Click to upload
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="text-center mt-14">
        <h2 className="font-semibold text-lg">Alex Johnson</h2>
        <p className="text-sm text-gray-500">Member since March 2025</p>
        <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-900 rounded-full">
          Silver Impact Maker
        </span>
      </div>

      {/* Stats */}
      <div className="px-6 mt-6 mb-4 text-center text-sm text-gray-700">
        <div className="mb-2">
          <span className="font-medium">Total Donated:</span>{" "}
          <span className="text-blue-600 font-semibold">$62.29</span>
        </div>
        <div className="mb-2">
          <span className="font-medium">Donor Rank:</span> Top 15%
        </div>
        <div className="mb-2">
          <span className="font-medium">Next Badge:</span>{" "}
          $37.71 away from Gold
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: "62%" }}
          ></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 pb-6 space-y-1 text-sm font-medium">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-gray-100 text-gray-700"
              }`
            }
          >
            <Icon size={18} /> {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
