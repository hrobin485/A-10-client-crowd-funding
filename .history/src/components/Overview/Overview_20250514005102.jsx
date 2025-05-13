import React from 'react';
// import { UsersIcon, CurrencyDollarIcon, ClipboardListIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Overview = () => {
  const stats = [
    { title: 'Total Campaigns', value: 42, icon: ClipboardListIcon },
    { title: 'Total Donations', value: '$15,200', icon: CurrencyDollarIcon },
    { title: 'Active Campaigns', value: 12, icon: SparklesIcon },
    { title: 'Total Donors', value: 350, icon: UsersIcon },
  ];

  const recentDonations = [
    { name: 'John Doe', campaign: 'Medical Help', amount: '$200', date: '2025-05-12' },
    { name: 'Jane Smith', campaign: 'Education Fund', amount: '$150', date: '2025-05-11' },
    { name: 'Alice Johnson', campaign: 'Flood Relief', amount: '$500', date: '2025-05-10' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <stat.icon className="w-8 h-8 text-blue-500 mb-2" />
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">{stat.title}</p>
            <p className="text-2xl font-bold text-blue-600 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Donations Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Recent Donations</h3>
          <button className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="text-gray-600 dark:text-gray-200 border-b">
                <th className="py-2 px-4">Donor</th>
                <th className="py-2 px-4">Campaign</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentDonations.map((donation, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-2 px-4">{donation.name}</td>
                  <td className="py-2 px-4">{donation.campaign}</td>
                  <td className="py-2 px-4">
                    <span className="bg-green-100 text-green-700 dark:bg-green-700 dark:text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                      {donation.amount}
                    </span>
                  </td>
                  <td className="py-2 px-4">{donation.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
