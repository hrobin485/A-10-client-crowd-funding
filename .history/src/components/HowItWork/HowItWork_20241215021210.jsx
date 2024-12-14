import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" class="py-10">
  <div class="container mx-auto">
    <h2 class="text-2xl font-bold text-center mb-6">How Crowdfunding Works</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div class="flex items-center">
        <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span class="text-blue-500 text-2xl font-bold">1</span>
        </div>
        <div>
          <h3 class="text-lg font-bold">Create Your Campaign</h3>
          <p class="text-gray-600">Set up your project, tell your story, and set a fundraising goal.</p>
        </div>
      </div>

      {/* <!-- Step 2 --> */}
      <div class="flex items-center">
        <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span class="text-blue-500 text-2xl font-bold">2</span>
        </div>
        <div>
          <h3 class="text-lg font-bold">Share with the Community</h3>
          <p class="text-gray-600">Spread the word about your campaign through social media and personal networks.</p>
        </div>
      </div>

      {/* <!-- Step 3 --> */}
      <div class="flex items-center">
        <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span class="text-blue-500 text-2xl font-bold">3</span>
        </div>
        <div>
          <h3 class="text-lg font-bold">Receive Support & Funds</h3>
          <p class="text-gray-600">Get contributions from people who believe in your cause and watch your project grow.</p>
        </div>
      </div>

      
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

  );
};

export default HowItWorks;
