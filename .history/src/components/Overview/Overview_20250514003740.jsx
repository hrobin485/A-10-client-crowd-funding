import React from 'react';

const Overview = () => {
  // Dummy stats and data
  const stats = [
    { title: 'Total Campaigns', value: 42 },
    { title: 'Total Donations', value: '$15,200' },
    { title: 'Active Campaigns', value: 12 },
    { title: 'Total Donors', value: 350 },
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
          <div key={i} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md text-center">
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">{stat.title}</p>
            <p className="text-2xl font-bold text-blue-600 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Donations Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Donations</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="text-gray-600 dark:text-gray-300 border-b">
                <th className="py-2 px-4">Donor</th>
                <th className="py-2 px-4">Campaign</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentDonations.map((donation, index) => (
                <tr key={index} className="border-b dark:border-gray-700">
                  <td className="py-2 px-4">{donation.name}</td>
                  <td className="py-2 px-4">{donation.campaign}</td>
                  <td className="py-2 px-4 text-green-600 font-medium">{donation.amount}</td>
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
