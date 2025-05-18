import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const navItems = [
  { to: "/dashboard/overview", label: "Overview" },
  { to: "/dashboard/profile", label: "Profile" },
  { to: "/dashboard/add-new-campaign", label: "Add New Campaign" },
  { to: "/dashboard/my-campaigns", label: "My Campaigns" },
  { to: "/dashboard/my-donations", label: "My Donations" },
];

const Dashboard = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-blue-500";

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900">
      {/* Sidebar ‑‑ always visible, stacks on top for mobile */}
      <aside className="w-full md:w-64 bg-white dark:bg-gray-800 rounded-b-lg md:rounded-none p-6 shadow-lg md:shadow-none fixed md:static inset-0 md:inset-auto h-56 md:h-auto overflow-y-auto z-20">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 pt-60 md:pt-6 px-4 md:px-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
