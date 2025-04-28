  import React, { useEffect, useState } from 'react';
  import { Routes, Route, useNavigate } from 'react-router-dom';
  import Sidebar from './Sidebar';
  import ProfileSettings from './ProfileSettings';
  import DynamicForm from './DynamicForm';
  import CategoriesAdmin from './Categories';
  import AdminAffiliatePartners from './AdminAffiliatePartners';
  import AdminEmailContent from './AdminEmailContent';
  import AdminSMTPSettings from './AdminSMTPSettings';
  import AdminMail from './Email';
  import AdminRoles from './Roles';
  import Users from './Users';
  import Affiliate from './Affiliate';
  import Dashboard from './Dashboard';
  import AdminAuth from './adminauth';

  const AdminPanel = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({ name: 'Admin User', image: '' });
    const [dashboardStats] = useState({
      users: 123,
      categories: 10,
      causes: 5,
      affiliates: 8
    });
    const [recentActions] = useState([
      'User JohnDoe created',
      'Category Health updated',
      'Cause Education deleted',
      'SMTP Settings changed',
    ]);

    const logHistory = async (_actionType, entityName, entityId, oldData, newData) => {
      // Dummy stub
    };

    useEffect(() => {
      logHistory('INIT', 'AdminPanel', null, null, null);
    }, []);

    const handleLogout = () => {
      localStorage.removeItem('profile');
      navigate('/admin/login');
    };

    return (
      <div className="flex w-screen min-h-[150vh]">
        {/* Sidebar */}
        <div className="w-72 bg-blue-900 text-white space-y-4 p-6 rounded-r-3xl sticky top-0 h-[150vh]">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 mt-5 p-6 overflow-y-auto space-y-4 rounded-3xl bg-blue-50">
          <Routes>
            {/* Dashboard Overview */}
            <Route index element={
              <div>
                {/* Profile Section */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden cursor-pointer">
                    <img
                      src={profile.image || 'https://via.placeholder.com/64'}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-blue-900">{profile.name}</h2>
                    <button
                      onClick={handleLogout}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Logout
                    </button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  <div className="p-4 bg-white rounded shadow">
                    <h3 className="text-gray-500">Users</h3>
                    <p className="text-2xl font-bold">{dashboardStats.users}</p>
                  </div>
                  <div className="p-4 bg-white rounded shadow">
                    <h3 className="text-gray-500">Categories</h3>
                    <p className="text-2xl font-bold">{dashboardStats.categories}</p>
                  </div>
                  <div className="p-4 bg-white rounded shadow">
                    <h3 className="text-gray-500">Causes</h3>
                    <p className="text-2xl font-bold">{dashboardStats.causes}</p>
                  </div>
                  <div className="p-4 bg-white rounded shadow">
                    <h3 className="text-gray-500">Affiliates</h3>
                    <p className="text-2xl font-bold">{dashboardStats.affiliates}</p>
                  </div>
                </div>

                {/* Recent Actions */}
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-lg font-semibold mb-2 text-blue-900">Recent Actions</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {recentActions.map((act, i) => (
                      <li key={i}>{act}</li>
                    ))}
                  </ul>
                </div>
              </div>
            } />

            {/* Other Admin Routes */}
            <Route path="users" element={<Users />} />
            <Route path="profilesettings" element={<ProfileSettings profile={profile} setProfile={setProfile} />} />
            <Route path="category" element={<CategoriesAdmin />} />
            <Route path="smtp" element={<AdminSMTPSettings />} />
            <Route path="roles" element={<AdminRoles />} />
            <Route path="adminaffiliatepartners" element={<AdminAffiliatePartners />} />
            <Route path="email" element={<AdminMail />} />
            <Route path="adminEmailContent" element={<AdminEmailContent />} />
            <Route path="affiliate" element={<Affiliate />} />
            <Route path="categories" element={<CategoriesAdmin />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="adminauth" element={<AdminAuth />} />
          </Routes>
        </div>
      </div>
    );
  };

  export default AdminPanel;
