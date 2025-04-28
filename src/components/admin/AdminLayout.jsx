import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { name: 'Signup', path: '/admin/signup' },
  { name: 'Login', path: '/admin/login' },
  { name: 'Affiliate', path: '/admin/affiliate' },
  { name: 'Email', path: '/admin/email' },
  { name: 'Categories', path: '/admin/categories' },
  { name: 'Role Access', path: '/admin/roles' },
  { name: 'User List', path: '/admin/users' },
];

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-2xl font-bold text-blue-600">Shop4Donate</div>
        <nav className="flex flex-col space-y-2 p-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded hover:bg-blue-100 ${
                  isActive ? 'bg-blue-200 font-semibold' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-blue-700">Admin Panel</h1>
          <div className="text-sm text-gray-500">Welcome back, Admin!</div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
