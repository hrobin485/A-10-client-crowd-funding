import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { to: '/dashboard/overview', label: 'Overview' },
    { to: '/dashboard/profile', label: 'Profile' },
    { to: '/dashboard/add-new-campaign', label: 'Add New Campaign' },
    { to: '/dashboard/my-campaigns', label: 'My Campaigns' },
    { to: '/dashboard/my-donations', label: 'My Donations' },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900">
      
      {/* Topbar for mobile */}
      <div className="flex items-center justify-between md:hidden bg-white dark:bg-gray-800 p-4 shadow-md">
        <h2 className="text-xl font-bold text-blue-600">Dashboard</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-800 dark:text-white">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'block' : 'hidden'
        } md:block w-full md:w-64 bg-white dark:bg-gray-800 mt-14 p-6 shadow-lg z-10 md:relative fixed md:static top-0 left-0 h-full overflow-y-auto transition-all `}
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6 hidden md:block">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)} // Close on mobile after click
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 dark:text-gray-300'
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto mt-16 md:mt-0">{/* offset for mobile nav */}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
