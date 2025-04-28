import React, { useState } from "react";

const Affiliate = () => {
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState({
    viewDashboard: false,
    manageUsers: false,
    editContent: false,
    viewReports: false,
    manageSettings: false,
  });

  const handlePermissionChange = (permission) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: !prev[permission],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const roleData = {
      roleName,
      permissions,
    };
    console.log("Role Created:", roleData);
    // You can replace the above line with an API call to save the role
    alert("Role Created Successfully!");
    setRoleName("");
    setPermissions({
      viewDashboard: false,
      manageUsers: false,
      editContent: false,
      viewReports: false,
      manageSettings: false,
    });
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-2xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
        Create New Role & Set Permissions
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Role Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Role Name
          </label>
          <input
            type="text"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            placeholder="Enter Role Name (e.g., Manager)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Permissions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Permissions
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(permissions).map((permission) => (
              <label key={permission} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={permissions[permission]}
                  onChange={() => handlePermissionChange(permission)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-gray-700 capitalize">
                  {permission.replace(/([A-Z])/g, " $1")}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Create Role
          </button>
        </div>
      </form>
    </div>
  );
};

export default Affiliate;
