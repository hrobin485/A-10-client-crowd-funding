import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-6 shadow-lg hidden md:block">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/dashboard/overview"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 dark:text-gray-300'
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 dark:text-gray-300'
            }
          >
            My Profile
          </NavLink>
          <NavLink
            to="/AddNewCampaign"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 dark:text-gray-300'
            }
          >
            Add New Campaign
          </NavLink>
          <NavLink
            to="/dashboard/my-campaigns"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 dark:text-gray-300'
            }
          >
            My Campaigns
          </NavLink>
          <NavLink
            to="/dashboard/my-donations"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 dark:text-gray-300'
            }
          >
            My Donations
          </NavLink>
        </nav>
      </aside>

      {/* Right Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
