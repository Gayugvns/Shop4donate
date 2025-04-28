import React, { useState, useEffect } from 'react';

// ====================== FORM FIELDS + ROLES ======================
const formFields = {
  'Add Category': {
    fields: ['Category Name', 'Description', 'Title', 'Subtitle', 'Image'],
    roles: ['admin', 'editor']
  },
  'Create User': {
    fields: ['Username', 'Email', 'Role'],
    roles: ['admin']
  },
  'Create Blog': {
    fields: ['Title', 'Content', 'Author'],
    roles: ['admin', 'editor']
  },
  'Manage Products': {
    fields: ['Product Name', 'Image URL', 'Subtitle', 'Description', 'Price', 'Category', 'Affliate Link'],
    roles: ['admin']
  },
  'Affiliate': {
    fields: ['Affiliate Brand', 'Affliate Link', 'Logo'],
    roles: ['admin', 'editor']
  }
};

// ====================== MOCK USER ======================
const currentUser = {
  name: 'John Doe',
  role: 'editor' // Change this to 'admin' to test role access
};

// ====================== COMPONENT ======================
const AdminDashboard = () => {
  const formCategories = Object.keys(formFields).filter(key =>
    formFields[key].roles.includes(currentUser.role)
  );

  const [selectedCategory, setSelectedCategory] = useState(formCategories[0]);
  const [formData, setFormData] = useState([]);
  const [formState, setFormState] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  const fields = formFields[selectedCategory]?.fields || [];

  // ====================== LOCAL STORAGE API ======================
  const storageKey = (category) => `form-data-${category}`;

  const fetchData = (category) => {
    const data = localStorage.getItem(storageKey(category));
    return data ? JSON.parse(data) : [];
  };

  const saveData = (category, newData) => {
    const old = fetchData(category);
    const updated = [...old, newData];
    localStorage.setItem(storageKey(category), JSON.stringify(updated));
    return updated;
  };

  const updateData = (category, index, updatedEntry) => {
    const data = fetchData(category);
    data[index] = updatedEntry;
    localStorage.setItem(storageKey(category), JSON.stringify(data));
    return data;
  };

  const deleteData = (category, index) => {
    const data = fetchData(category);
    const updated = data.filter((_, i) => i !== index);
    localStorage.setItem(storageKey(category), JSON.stringify(updated));
    return updated;
  };

  // ====================== HOOKS ======================
  useEffect(() => {
    const data = fetchData(selectedCategory);
    setFormData(data);
    setFormState({});
    setEditIndex(null);
  }, [selectedCategory]);

  // ====================== HANDLERS ======================
  const handleChange = (e, field) => {
    setFormState({ ...formState, [field]: e.target.value });
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updated = updateData(selectedCategory, editIndex, formState);
      setFormData(updated);
      setEditIndex(null);
    } else {
      const updated = saveData(selectedCategory, formState);
      setFormData(updated);
    }
    setFormState({});
  };

  const handleEdit = (index) => {
    setFormState(formData[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = deleteData(selectedCategory, index);
    setFormData(updated);
  };

  // ====================== UI ======================
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-blue-900 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        {formCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`block w-full text-left px-4 py-2 rounded ${
              selectedCategory === category ? 'bg-blue-700' : 'hover:bg-blue-800'
            }`}
          >
            {category}
          </button>
        ))}
      </aside>

      <main className="flex-1 p-6">
        <div className="p-6 bg-blue-800 rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>

          {fields.map((field) => (
            <div className="mb-4" key={field}>
              <label className="block mb-1">{field}</label>
              <input
                className="p-2 rounded bg-blue-700 text-white w-full"
                value={formState[field] || ''}
                onChange={(e) => handleChange(e, field)}
                placeholder={`Enter ${field}`}
              />
            </div>
          ))}

          <button
            onClick={handleSubmit}
            className="bg-white text-blue-800 px-4 py-2 rounded hover:bg-gray-200"
          >
            {editIndex !== null ? 'Update' : 'Add'}
          </button>

          <ul className="mt-6">
            {formData.map((item, index) => (
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
                    onClick={() => handleDelete(index)}
                    className="text-red-300 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
