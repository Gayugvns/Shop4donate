// pages/Admin.jsx
import React from 'react';
import AdminLayout from '../components/AdminLayout';

const AdminPage = () => {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <p>This is your admin panel landing page. Choose from the menu on the left.</p>
    </AdminLayout>
  );
};

export default AdminPage;
