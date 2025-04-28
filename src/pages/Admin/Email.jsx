import React, { useState } from "react";

const initialMail = {
  subject: "",
  recipient: "",
  message: "",
};

const AdminMail = () => {
  const [form, setForm] = useState(initialMail);
  const [mails, setMails] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      const updated = [...mails];
      updated[editIndex] = form;
      setMails(updated);
      setEditIndex(null);
    } else {
      setMails([...mails, form]);
    }
    setForm(initialMail);
  };

  const handleEdit = (index) => {
    setForm(mails[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...mails];
    updated.splice(index, 1);
    setMails(updated);
    if (editIndex === index) setForm(initialMail);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        {editIndex !== null ? "Edit Mail" : "Compose New Mail"}
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="recipient"
          value={form.recipient}
          onChange={handleChange}
          placeholder="Recipient Email"
          className="border p-2 rounded"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message Content"
          className="border p-2 rounded col-span-2 h-24"
        />
      </div>

      <button
        onClick={handleAddOrUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        {editIndex !== null ? "Update Mail" : "Send Mail"}
      </button>

      <h3 className="text-xl font-semibold mb-2">Mail History</h3>
      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Subject</th>
              <th className="border p-2">To</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mails.map((mail, idx) => (
              <tr key={idx}>
                <td className="border p-2">{idx + 1}</td>
                <td className="border p-2">{mail.subject}</td>
                <td className="border p-2">{mail.recipient}</td>
                <td className="border p-2">{mail.message}</td>
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
            {mails.length === 0 && (
              <tr>
                <td className="border p-2 text-center" colSpan="5">
                  No mails sent yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMail;
