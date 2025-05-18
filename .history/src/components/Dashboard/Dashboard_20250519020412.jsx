// Dashboard.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const items = [
  { to: "/dashboard/overview", label: "Overview" },
  { to: "/dashboard/profile", label: "Profile" },
  { to: "/dashboard/add-new-campaign", label: "Add New Campaign" },
  { to: "/dashboard/my-campaigns", label: "My Campaigns" },
  { to: "/dashboard/my-donations", label: "My Donations" },
];

const Dashboard = () => {
  const link = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-blue-500";

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900">
      {/* Sidebar: hidden on small, shown from md ↑ */}
      <aside className="hidden md:block md:w-64 bg-white dark:bg-gray-800 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          {items.map(({ to, label }) => (
            <NavLink key={to} to={to} className={link}>
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
