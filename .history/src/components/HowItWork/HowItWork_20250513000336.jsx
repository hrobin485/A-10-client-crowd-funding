import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className=" py-10 rounded-xl mb-10 dark:bg-gray-800 dark:text-gray-100">
  <div className="container mx-auto">
    <h2 className="text-2xl font-bold text-center mb-6">How Crowdfunding Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 dark:text-gray-100">
      
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span className="text-blue-500 text-2xl font-bold">1</span>
        </div>
        <div>
          <h3 className="text-lg font-bold">Create Your Campaign</h3>
          <p className="text-gray-600 dark:text-gray-100">Set up your project, tell your story, and set a fundraising goal.</p>
        </div>
      </div>

     
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span className="text-blue-500 text-2xl font-bold">2</span>
        </div>
        <div>
          <h3 className="text-lg font-bold">Share with the Community</h3>
          <p className="text-gray-600 dark:text-gray-100">Spread the word about your campaign through social media and personal networks.</p>
        </div>
      </div>


      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span className="text-blue-500 text-2xl font-bold">3</span>
        </div>
        <div>
          <h3 className="text-lg font-bold">Receive Support & Funds</h3>
          <p className="text-gray-600 dark:text-gray-100">Get contributions from people who believe in your cause and watch your project grow.</p>
        </div>
      </div>

      
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span className="text-blue-500 text-2xl font-bold">4</span>
        </div>
        <div>
          <h3 className="text-lg font-bold">Achieve Your Goal</h3>
          <p className="text-gray-600 dark:text-gray-200">With community support, reach your funding goal and make your project a reality.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default HowItWorks;
