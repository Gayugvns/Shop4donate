import React, { useState, useEffect } from 'react';

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    image: '',
  });
  const [preview, setPreview] = useState('');

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('profile'));
    if (storedProfile) {
      setProfile(storedProfile);
      setPreview(storedProfile.image);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, image: reader.result }));
      setPreview(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem('profile', JSON.stringify(profile));
    alert('Profile Saved!');
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Profile Settings</h2>

      <div className="flex flex-col items-center mb-6">
        <div className="relative w-32 h-32 mb-4">
          {preview ? (
            <img src={preview} alt="Profile Preview" className="rounded-full w-full h-full object-cover" />
          ) : (
            <div className="rounded-full w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">No Image</div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={profile.name}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleChange}
          className="border p-2 w-full mb-6"
        />
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
