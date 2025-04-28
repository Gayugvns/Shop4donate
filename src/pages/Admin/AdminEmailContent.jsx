import React, { useState } from "react";

const initialEmail = {
  email_title: "",
  email_subject: "",
  email_body: "",
  is_active: true,
};

const AdminEmailContent = () => {
  const [form, setForm] = useState(initialEmail);
  const [emailTemplates, setEmailTemplates] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      const updated = [...emailTemplates];
      updated[editIndex] = form;
      setEmailTemplates(updated);
      setEditIndex(null);
    } else {
      setEmailTemplates([...emailTemplates, form]);
    }
    setForm(initialEmail);
  };

  const handleEdit = (index) => {
    setForm(emailTemplates[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...emailTemplates];
    updated.splice(index, 1);
    setEmailTemplates(updated);
    if (editIndex === index) setForm(initialEmail);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        {editIndex !== null ? "Edit Email Content" : "Add Email Content"}
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="email_title"
          value={form.email_title}
          onChange={handleChange}
          placeholder="Email Title"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="email_subject"
          value={form.email_subject}
          onChange={handleChange}
          placeholder="Email Subject"
          className="border p-2 rounded"
        />
        <textarea
          name="email_body"
          value={form.email_body}
          onChange={handleChange}
          placeholder="Email Body"
          className="border p-2 rounded col-span-2 h-32"
        ></textarea>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="is_active"
            checked={form.is_active}
            onChange={handleChange}
          />
          <label>Active</label>
        </div>
      </div>

      <button
        onClick={handleAddOrUpdate}
        className="bg-green-600 text-white px-4 py-2 rounded mb-6"
      >
        {editIndex !== null ? "Update Email" : "Add Email"}
      </button>

      <h3 className="text-xl font-semibold mb-2">Email Content History</h3>
      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Subject</th>
              <th className="border p-2">Body</th>
              <th className="border p-2">Active</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {emailTemplates.map((template, idx) => (
              <tr key={idx}>
                <td className="border p-2">{idx + 1}</td>
                <td className="border p-2">{template.email_title}</td>
                <td className="border p-2">{template.email_subject}</td>
                <td className="border p-2">
                  {template.email_body.substring(0, 30)}...
                </td>
                <td className="border p-2">
                  {template.is_active ? "Yes" : "No"}
                </td>
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
            {emailTemplates.length === 0 && (
              <tr>
                <td className="border p-2 text-center" colSpan="6">
                  No emails added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEmailContent;
