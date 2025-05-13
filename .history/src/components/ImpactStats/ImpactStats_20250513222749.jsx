const ImpactStats = () => {
  const stats = [
    {
      value: "12,500+",
      label: "Total Donations",
      icon: "💰",
    },
    {
      value: "950+",
      label: "Campaigns Funded",
      icon: "🎯",
    },
    {
      value: "38",
      label: "Countries Reached",
      icon: "🌐",
    },
    {
      value: "4.9/5",
      label: "User Satisfaction",
      icon: "⭐",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-700 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Our <span className="text-blue-600">Impact So Far</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto">
          Crowdfunding has helped thousands turn dreams into reality through community-driven funding.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-blue-600">{stat.value}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
