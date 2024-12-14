import React from "react";

const ExtraSections = () => {
  return (
    <div>
      {/* Community Impact Section */}
      <section id="how-it-works" class="py-10">
  <div class="container mx-auto">
    <h2 class="text-2xl font-bold text-center mb-6">How Crowdfunding Works</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Step 1 -->
      <div class="flex items-center">
        <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span class="text-blue-500 text-2xl font-bold">1</span>
        </div>
        <div>
          <h3 class="text-lg font-bold">Create Your Campaign</h3>
          <p class="text-gray-600">Set up your project, tell your story, and set a fundraising goal.</p>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="flex items-center">
        <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span class="text-blue-500 text-2xl font-bold">2</span>
        </div>
        <div>
          <h3 class="text-lg font-bold">Share with the Community</h3>
          <p class="text-gray-600">Spread the word about your campaign through social media and personal networks.</p>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="flex items-center">
        <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span class="text-blue-500 text-2xl font-bold">3</span>
        </div>
        <div>
          <h3 class="text-lg font-bold">Receive Support & Funds</h3>
          <p class="text-gray-600">Get contributions from people who believe in your cause and watch your project grow.</p>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="flex items-center">
        <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span class="text-blue-500 text-2xl font-bold">4</span>
        </div>
        <div>
          <h3 class="text-lg font-bold">Achieve Your Goal</h3>
          <p class="text-gray-600">With community support, reach your funding goal and make your project a reality.</p>
        </div>
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
