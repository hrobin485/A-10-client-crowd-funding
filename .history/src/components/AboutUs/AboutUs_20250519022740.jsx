import React from 'react';

const AboutUs = () => {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
     <h1 className="text-4xl font-bold dark:text-white text-center mb-8">About <span className='font-bold text-blue-600'>Us</span></h1>


      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Who We Are</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We are a passionate team dedicated to helping individuals and organizations bring their visions to life through crowdfunding. Our platform connects compassionate donors with meaningful campaigns, making it easy to raise funds for medical emergencies, education, community projects, and more.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Our Mission</h3>
          <p className="text-gray-700 dark:text-gray-300">
            To empower everyday people and communities by providing a secure and simple platform to fund dreams, needs, and causes that matter.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Our Vision</h3>
          <p className="text-gray-700 dark:text-gray-300">
            A world where everyone has the resources and support to overcome challenges and pursue opportunities through collective action.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">How It Works</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Create an account and start a campaign in just minutes.</li>
          <li>Share your campaign via social media and email.</li>
          <li>Receive donations directly through our secure payment gateway.</li>
          <li>Track your progress and thank your supporters.</li>
        </ul>
      </section>

      {/* Trust & Safety */}
      <section className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-white">Why Trust Us?</h2>
        <ul className="text-gray-700 dark:text-gray-200 space-y-2">
          <li>✅ Secure payment processing (Stripe integration)</li>
          <li>✅ Verified campaigns and real-time moderation</li>
          <li>✅ 24/7 support team ready to assist you</li>
          <li>✅ Transparent fees and clear policies</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
