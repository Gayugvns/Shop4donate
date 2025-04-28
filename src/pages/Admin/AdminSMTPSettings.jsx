import React, { useState } from "react";

const initialSMTP = {
  host: "",
  port: "",
  username: "",
  password: "",
  senderName: "",
  senderEmail: "",
};

const AdminSMTPSettings = () => {
  const [form, setForm] = useState(initialSMTP);
  const [settings, setSettings] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      const updated = [...settings];
      updated[editIndex] = form;
      setSettings(updated);
      setEditIndex(null);
    } else {
      setSettings([...settings, form]);
    }
    setForm(initialSMTP);
  };

  const handleEdit = (index) => {
    setForm(settings[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...settings];
    updated.splice(index, 1);
    setSettings(updated);
    if (editIndex === index) setForm(initialSMTP);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        {editIndex !== null ? "Edit SMTP Setting" : "Add SMTP Setting"}
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="host"
          value={form.host}
          onChange={handleChange}
          placeholder="SMTP Host"
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="port"
          value={form.port}
          onChange={handleChange}
          placeholder="SMTP Port"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="SMTP Username"
          className="border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="SMTP Password"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="senderName"
          value={form.senderName}
          onChange={handleChange}
          placeholder="Sender Name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="senderEmail"
          value={form.senderEmail}
          onChange={handleChange}
          placeholder="Sender Email"
          className="border p-2 rounded"
        />
      </div>

      <button
        onClick={handleAddOrUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        {editIndex !== null ? "Update SMTP Setting" : "Add SMTP Setting"}
      </button>

      <h3 className="text-xl font-semibold mb-2">SMTP History</h3>
      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Host</th>
              <th className="border p-2">Port</th>
              <th className="border p-2">User</th>
              <th className="border p-2">Sender</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {settings.map((smtp, idx) => (
              <tr key={idx}>
                <td className="border p-2">{idx + 1}</td>
                <td className="border p-2">{smtp.host}</td>
                <td className="border p-2">{smtp.port}</td>
                <td className="border p-2">{smtp.username}</td>
                <td className="border p-2">{smtp.senderName}</td>
                <td className="border p-2">{smtp.senderEmail}</td>
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
            {settings.length === 0 && (
              <tr>
                <td className="border p-2 text-center" colSpan="7">
                  No SMTP settings added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSMTPSettings;
