import React, { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  role: "",
  status: "Active", // Default
};

const Users = () => {
  const [form, setForm] = useState(initialForm);
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = form;
      setUsers(updated);
      setEditIndex(null);
    } else {
      setUsers([...users, form]);
    }
    setForm(initialForm);
  };

  const handleEdit = (index) => {
    setForm(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...users];
    updated.splice(index, 1);
    setUsers(updated);
    if (editIndex === index) setForm(initialForm);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        {editIndex !== null ? "Edit User" : "Add New User"}
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Role"
          className="border p-2 rounded"
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <button
        onClick={handleAddOrUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        {editIndex !== null ? "Update User" : "Add User"}
      </button>

      <h3 className="text-xl font-semibold mb-2">Users List</h3>
      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td className="border p-2">{idx + 1}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.role}</td>
                <td className="border p-2">{user.status}</td>
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
            {users.length === 0 && (
              <tr>
                <td className="border p-2 text-center" colSpan="6">
                  No users added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
