import React, { useState } from "react";

const initialRole = {
  roleName: "",
  description: "",
  permissions: "",
};

const AdminRoles = () => {
  const [form, setForm] = useState(initialRole);
  const [roles, setRoles] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      const updated = [...roles];
      updated[editIndex] = form;
      setRoles(updated);
      setEditIndex(null);
    } else {
      setRoles([...roles, form]);
    }
    setForm(initialRole);
  };

  const handleEdit = (index) => {
    setForm(roles[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...roles];
    updated.splice(index, 1);
    setRoles(updated);
    if (editIndex === index) setForm(initialRole);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        {editIndex !== null ? "Edit Role" : "Add New Role"}
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="roleName"
          value={form.roleName}
          onChange={handleChange}
          placeholder="Role Name"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Role Description"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="permissions"
          value={form.permissions}
          onChange={handleChange}
          placeholder="Permissions (comma-separated)"
          className="border p-2 rounded col-span-2"
        />
      </div>

      <button
        onClick={handleAddOrUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        {editIndex !== null ? "Update Role" : "Add Role"}
      </button>

      <h3 className="text-xl font-semibold mb-2">Role History</h3>
      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Permissions</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, idx) => (
              <tr key={idx}>
                <td className="border p-2">{idx + 1}</td>
                <td className="border p-2">{role.roleName}</td>
                <td className="border p-2">{role.description}</td>
                <td className="border p-2">{role.permissions}</td>
                <td className="border p-2 space-x-2">
                  <button
                    className="text-blue-500 underline"
                    onClick={() => handleEdit(idx)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 underline"
                    onClick={() => handleDelete(idx)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {roles.length === 0 && (
              <tr>
                <td className="border p-2 text-center" colSpan="5">
                  No roles added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRoles;
