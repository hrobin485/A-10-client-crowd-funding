// SuccessStories.jsx
const SuccessStories = () => {
  const stories = [
    {
      name: "Maya's Medical Journey",
      description:
        "Crowdcube helped Maya raise funds for a life-saving surgery. Today, she’s back on her feet and building her dreams.",
      image: "https://images.pexels.com/photos/6284371/pexels-photo-6284371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // hospital/medical image
    },
    {
      name: "Startup Spark: EcoBox",
      description:
        "With the support of over 500 donors, EcoBox launched a sustainable packaging startup now featured in major retail stores.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // business startup
    },
    {
      name: "Artists United",
      description:
        "A group of local artists crowdfunded their first exhibition. Now they’re mentoring young creatives through their journey.",
      image: "https://images.pexels.com/photos/3807757/pexels-photo-3807757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // art exhibition
    },
  ];

  return (
    <section className="bg-white rounded-lg dark:bg-gray-600 py-16 mb-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Real Stories, <span className="text-blue-600">Real Impact</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto">
          These are just a few of the many lives touched by your generosity. Your donations truly change the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-md transition"
            >
              <img src={story.image} alt={story.name} className="w-full h-48 object-cover" />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{story.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
