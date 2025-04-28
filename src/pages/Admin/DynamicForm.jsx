import React, { useState } from 'react';

const formFields = {
  'Add Category': ['Category Name', 'Description', 'Title', 'Subtitle', 'Image'],
  'Create User': ['Username', 'Email', 'Role'],
  'Create Blog': ['Title', 'Content', 'Author'],
  'Manage Products': ['Product Name', 'Image URL', 'Subtitle', 'Description', 'Price', 'Category', 'Affiliate Link'],
  'Users': ['Name', 'Email Id', 'Phone number', 'Password'],
  'Role permission': ['Name', 'Role', 'Email', 'Password'],
  'Affiliate': ['Affiliate Brand', 'Affiliate Link', 'Logo'],
  'Email': ['First Name', 'Last Name', 'Email Id', 'Password'],
  'User List': ['Name', 'Email', 'Phone number'],
  'Manage Cause': ['Title', 'cause', 'need'],
  
};

const DynamicForm = ({ title, data, onCreate, onUpdate, onDelete }) => {
  const [formData, setFormData] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [image, setImage] = useState(null); // Image state to handle the uploaded image

  const fields = formFields[title] || [];

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview the selected image
      setFormData({ ...formData, Image: file }); // Set image file in the form data
    }
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      onUpdate(editIndex, formData);
      setEditIndex(null);
    } else {
      onCreate(formData);
    }
    setFormData({});
    setImage(null); // Reset image after form submission
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setImage(data[index].Image); // Set the image if editing
    setEditIndex(index);
  };

  return (
    <div className="p-6 bg-blue-800 rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {fields.map((field) => (
        <div className="mb-4" key={field}>
          <label className="block mb-1">{field}</label>
          {/* Image upload part */}
          {field === 'Image' ? (
            <div className="relative">
              <input
                type="file"
                onChange={handleImageChange}
                className="p-2 w-full rounded-md bg-white text-gray-800"
              />
              {image && <img src={image} alt="Preview" className="mt-2 w-20 h-20 object-cover rounded-full" />}
            </div>
          ) : (
            <input
              type="text"
              value={formData[field] || ''}
              onChange={(e) => handleChange(e, field)}
              className="p-2 w-full rounded-md bg-white text-gray-800"
            />
          )}
        </div>
      ))}
      <div className="flex space-x-4">
        <button onClick={handleSubmit} className="bg-blue-600 p-2 rounded-md text-white">
          {editIndex !== null ? 'Update' : 'Create'}
        </button>
        <button
          onClick={() => setFormData({})}
          className="bg-red-600 p-2 rounded-md text-white"
        >
          Reset
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-xl mb-4">Existing {title}</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index} className="flex items-center space-x-4 mb-2">
              <div>{item.Name}</div>
              <button onClick={() => handleEdit(index)} className="text-blue-500">Edit</button>
              <button onClick={() => onDelete(index)} className="text-red-500">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicForm;
