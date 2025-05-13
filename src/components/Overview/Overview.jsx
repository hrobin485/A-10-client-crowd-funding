import React from 'react';

const Overview = () => {
  const stats = [
    { title: 'Total Campaigns', value: 42 },
    { title: 'Total Donations', value: '$15,200' },
    { title: 'Active Campaigns', value: 12 },
    { title: 'Total Donors', value: 350 },
  ];

  const campaignSummary = {
    approved: 30,
    pending: 10,
    rejected: 2,
  };

  const recentDonations = [
    { name: 'John Doe', campaign: 'Medical Help', amount: '$200', date: '2025-05-12' },
    { name: 'Jane Smith', campaign: 'Education Fund', amount: '$150', date: '2025-05-11' },
    { name: 'Alice Johnson', campaign: 'Flood Relief', amount: '$500', date: '2025-05-10' },
  ];

  const highlights = {
    topDonor: 'Alice Johnson',
    mostDonatedCampaign: 'Flood Relief',
    totalRaisedThisWeek: '$1,300',
  };

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

      {/* Campaign Summary */}
      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Campaign Summary</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✅ Approved Campaigns: <span className="font-bold">{campaignSummary.approved}</span></li>
            <li>⏳ Pending Approval: <span className="font-bold">{campaignSummary.pending}</span></li>
            <li>❌ Rejected Campaigns: <span className="font-bold">{campaignSummary.rejected}</span></li>
          </ul>
        </div>

        {/* Progress Bar */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md col-span-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Campaign Activation Progress</h3>
          <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Active campaigns compared to total:</p>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-4 rounded-full text-xs text-white text-center"
              style={{ width: `${(12 / 42) * 100}%` }}
            >
              {(12 / 42 * 100).toFixed(0)}%
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
          <h4 className="text-md font-semibold text-gray-800 dark:text-white">Top Donor This Week</h4>
          <p className="mt-2 text-blue-600 font-bold text-lg">{highlights.topDonor}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
          <h4 className="text-md font-semibold text-gray-800 dark:text-white">Most Donated Campaign</h4>
          <p className="mt-2 text-blue-600 font-bold text-lg">{highlights.mostDonatedCampaign}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
          <h4 className="text-md font-semibold text-gray-800 dark:text-white">Raised This Week</h4>
          <p className="mt-2 text-blue-600 font-bold text-lg">{highlights.totalRaisedThisWeek}</p>
        </div>
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
                  <td className="py-2 px-4 text-green-600 font-semibold">{donation.amount}</td>
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
