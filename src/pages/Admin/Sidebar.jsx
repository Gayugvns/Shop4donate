import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [profile, setProfile] = useState({ name: '', image: '' });
  const [editName, setEditName] = useState('');
  const [editImage, setEditImage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      const parsedProfile = JSON.parse(storedProfile);
      setProfile(parsedProfile);
      setEditName(parsedProfile.name);
      setEditImage(parsedProfile.image);
    }
  }, []);

  const handleSave = () => {
    const updatedProfile = { name: editName, image: editImage };
    setProfile(updatedProfile);
    localStorage.setItem('profile', JSON.stringify(updatedProfile));
    setShowToast(true);

    // Hide toast after 2 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditImage(reader.result);
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-[150vh] rounded-lg relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Profile Updated Successfully!
        </div>
      )}

      {/* Profile Section */}
      <div className="flex flex-col items-center py-4 space-y-3 border-b mb-4">
        {/* Profile Image */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-300 cursor-pointer group">
          {loading ? (
            <div className="flex items-center justify-center w-full h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <img
              src={editImage || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        {/* Name Input */}
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          className="w-4/5 p-2 rounded bg-white text-black text-center"
          placeholder="Enter Name"
        />

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded text-sm"
        >
          Save Changes
        </button>
      </div>

      {/* Sidebar Navigation */}
      <ul className="nav flex-column space-y-2">
        <li className="nav-item">
          <Link className="nav-link" to="/admin">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/profilesettings">Profile Settings</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/users">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/adminaffiliatepartners">Affiliate</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/category">Category</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/email">Email</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/roles">Roles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/causes">Causes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/smtp">SMTP Settings</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/adminEmailContent">Email Content</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/roles">Role Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
