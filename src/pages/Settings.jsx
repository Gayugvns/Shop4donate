// src/pages/Settings.jsx
import { useState } from "react";

const Settings = () => {
  const [email, setEmail] = useState("alex@example.com");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
          <span>Enable Email Notifications</span>
        </div>

        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
