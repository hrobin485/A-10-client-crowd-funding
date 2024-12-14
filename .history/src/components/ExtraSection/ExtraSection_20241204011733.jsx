import React from "react";

const ExtraSections = () => {
  return (
    <div>
      {/* Community Impact Section */}
      <section className="community-impact bg-blue-50 py-12 px-6 mt-5 rounded-lg mb-5 md:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Community Impact
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Your donations have brought warmth and hope to thousands of families. 
            Together, we’ve distributed over <strong>10,000 winter clothing items</strong> across Bangladesh.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="stat p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600">10,000+</h3>
              <p className="text-gray-700">Clothing Items Donated</p>
            </div>
            <div className="stat p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600">50+</h3>
              <p className="text-gray-700">Communities Reached</p>
            </div>
            <div className="stat p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600">5,000+</h3>
              <p className="text-gray-700">Donors Participated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Stories Section */}
      <section className="volunteer-stories bg-gray-100 py-12 px-6 rounded-lg mb-5 md:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Volunteer Stories
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Meet the amazing people behind our efforts. Here are stories from our volunteers who made a difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="story p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Farhana Ahmed
              </h3>
              <p className="text-gray-700">
                “Helping distribute warm clothing in remote villages was a life-changing experience. 
                Seeing the smiles of people receiving the donations was priceless.”
              </p>
            </div>
            <div className="story p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Tanvir Hossain
              </h3>
              <p className="text-gray-700">
                “Volunteering with this platform has been incredible. It’s amazing to see how small actions 
                can make such a big impact in people's lives.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSections;
