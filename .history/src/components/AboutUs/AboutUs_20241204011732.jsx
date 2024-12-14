import React from "react";

const About = () => {
  return (
    <section className="about-section bg-blue-50 py-12 px-6 mt-4 rounded-lg md:px-16">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          About Us
        </h2>

        {/* Mission Description */}
        <p className="text-lg text-gray-700 mb-6">
          The mission of the Winter Clothing Donation Website is to provide warm clothing to those in need across Bangladesh. 
          We aim to connect donors with volunteers to ensure everyone has access to warmth during the cold season.
        </p>

        {/* How Users Can Help */}
        <div className="help-section mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            How You Can Help
          </h3>
          <ul className="text-left text-lg text-gray-700 space-y-4">
            <li>📦 Donate your unused winter clothing.</li>
            <li>🏠 Drop off your donations at the nearest collection points.</li>
            <li>🤝 Join as a volunteer to help distribute clothing.</li>
            <li>💖 Inspire others to contribute through this platform.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
