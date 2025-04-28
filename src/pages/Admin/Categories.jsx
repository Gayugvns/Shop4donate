import React, { useState } from "react";

const initialForm = {
  title: "",
  categoryName: "",
  size: "",
  price: "",
  categoryType: "",
  subtitle: "",
};

const CategoriesAdmin = () => {
  const [form, setForm] = useState(initialForm);
  const [categories, setCategories] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      const updated = [...categories];
      updated[editIndex] = form;
      setCategories(updated);
      setEditIndex(null);
    } else {
      setCategories([...categories, form]);
    }
    setForm(initialForm);
  };

  const handleEdit = (index) => {
    setForm(categories[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...categories];
    updated.splice(index, 1);
    setCategories(updated);
    if (editIndex === index) setForm(initialForm);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        {editIndex !== null ? "Edit Category" : "Add New Category"}
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {["title", "categoryName", "size", "price", "categoryType", "subtitle"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.replace(/([A-Z])/g, " $1")}
            className="border p-2 rounded"
          />
        ))}
      </div>

      <button
        onClick={handleAddOrUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        {editIndex !== null ? "Update Category" : "Add Category"}
      </button>

      <h3 className="text-xl font-semibold mb-2">Category History</h3>
      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Size</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Subtitle</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, idx) => (
              <tr key={idx}>
                <td className="border p-2">{idx + 1}</td>
                <td className="border p-2">{cat.title}</td>
                <td className="border p-2">{cat.categoryName}</td>
                <td className="border p-2">{cat.size}</td>
                <td className="border p-2">${cat.price}</td>
                <td className="border p-2">{cat.categoryType}</td>
                <td className="border p-2">{cat.subtitle}</td>
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
            {categories.length === 0 && (
              <tr>
                <td className="border p-2 text-center" colSpan="8">
                  No categories added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriesAdmin;
