import React from "react";

const HowItWorks = () => {
  return (
    <section className=" mt-5 bg-gray-100 py-12 px-6 md:px-16">
      <div className="w-11/12 mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          How It Works
        </h2>

        {/* Steps Description */}
        <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className=" bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              1. Choose What to Donate
            </h3>
            <p className="text-lg text-gray-700">
              Select winter clothing items you no longer use, such as jackets, sweaters, or blankets, and prepare them for donation.
            </p>
          </div>

          {/* Step 2 */}
          <div className=" bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              2. Locate a Collection Point
            </h3>
            <p className="text-lg text-gray-700">
              Find the nearest collection points listed on our website. Each collection point is organized by division for your convenience.
            </p>
          </div>

          {/* Step 3 */}
          <div className=" bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              3. Drop Off Your Donation
            </h3>
            <p className="text-lg text-gray-700">
              Visit the collection point, hand over your items to our volunteers, and rest assured your donation will reach those in need.
            </p>
          </div>

          {/* Step 4 */}
          <div className=" bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              4. Spread the Word
            </h3>
            <p className="text-lg text-gray-700">
              Share our platform with your friends and family to encourage more donations and help us reach more communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
