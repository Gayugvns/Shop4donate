import React, { useState } from "react";

const initialAffiliate = {
  name: "",
  affiliate_link: "",
  total_revenue: "",
  category: "",
  logo: null,
};

const AdminAffiliatePartners = () => {
  const [form, setForm] = useState(initialAffiliate);
  const [affiliates, setAffiliates] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      setForm({ ...form, logo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      const updated = [...affiliates];
      updated[editIndex] = form;
      setAffiliates(updated);
      setEditIndex(null);
    } else {
      setAffiliates([...affiliates, form]);
    }
    setForm(initialAffiliate);
  };

  const handleEdit = (index) => {
    setForm(affiliates[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...affiliates];
    updated.splice(index, 1);
    setAffiliates(updated);
    if (editIndex === index) setForm(initialAffiliate);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        {editIndex !== null ? "Edit Affiliate Partner" : "Add Affiliate Partner"}
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Affiliate Name"
          className="border p-2 rounded"
        />
        <input
          type="url"
          name="affiliate_link"
          value={form.affiliate_link}
          onChange={handleChange}
          placeholder="Affiliate Link"
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="total_revenue"
          value={form.total_revenue}
          onChange={handleChange}
          placeholder="Total Revenue"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="border p-2 rounded"
        />
        <input
          type="file"
          name="logo"
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>

      <button
        onClick={handleAddOrUpdate}
        className="bg-green-600 text-white px-4 py-2 rounded mb-6"
      >
        {editIndex !== null ? "Update Partner" : "Add Partner"}
      </button>

      <h3 className="text-xl font-semibold mb-2">Affiliate Partners History</h3>
      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Link</th>
              <th className="border p-2">Revenue</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Logo</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {affiliates.map((partner, idx) => (
              <tr key={idx}>
                <td className="border p-2">{idx + 1}</td>
                <td className="border p-2">{partner.name}</td>
                <td className="border p-2">
                  <a href={partner.affiliate_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Visit
                  </a>
                </td>
                <td className="border p-2">{partner.total_revenue}</td>
                <td className="border p-2">{partner.category}</td>
                <td className="border p-2">
                  {partner.logo && (
                    <img
                      src={URL.createObjectURL(partner.logo)}
                      alt="Logo"
                      className="w-12 h-12 object-cover rounded"
                    />
                  )}
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
            {affiliates.length === 0 && (
              <tr>
                <td className="border p-2 text-center" colSpan="7">
                  No affiliates added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAffiliatePartners;
