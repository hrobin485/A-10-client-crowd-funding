// WhyChooseCrowdcube.jsx
const WhyChooseCrowdcube = () => {
  const features = [
    {
      icon: "🚀",
      title: "Fast & Secure Funding",
      description: "Our platform ensures that your funds are transferred safely and quickly."
    },
    {
      icon: "🌍",
      title: "Global Support",
      description: "Reach supporters from all over the world to back your vision."
    },
    {
      icon: "📈",
      title: "Transparent Progress",
      description: "Track donations and campaign milestones with real-time updates."
    },
    {
      icon: "💡",
      title: "Innovative Campaign Tools",
      description: "Use our built-in tools to boost visibility and manage your fundraising."
    },
  ];

  return (
    <section className="py-14 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Why Choose <span className="text-blue-600">Crowdcube</span>?
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          We’re more than just a fundraising platform. Discover the unique advantages of raising funds through Crowdcube.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCrowdcube;
