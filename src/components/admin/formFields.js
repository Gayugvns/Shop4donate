import React, { useState } from "react";
import { formFields } from "./formFields";

const DynamicForm = ({ title, data, onCreate, onUpdate, onDelete }) => {
  const [formData, setFormData] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const fields = formFields[title]?.fields || [];

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      onUpdate(editIndex, formData);
      setEditIndex(null);
    } else {
      onCreate(formData);
    }
    setFormData({});
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };

  return (
    <div className="p-6 bg-grenn-100 rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {fields.map((field) => (
        <div className="mb-4" key={field}>
          <label className="block mb-1">{field}</label>
          <input
            className="p-2 rounded green-300 text-white w-full"
            value={formData[field] || ""}
            onChange={(e) => handleChange(e, field)}
            placeholder={`Enter ${field}`}
          />
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200"
      >
        {editIndex !== null ? "Update" : "Add"}
      </button>
      <ul className="mt-4">
        {data.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-1 border-b border-blue-700"
          >
            <span>{item[fields[0]]}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="text-yellow-300 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(index)}
                className="text-red-300 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicForm;
