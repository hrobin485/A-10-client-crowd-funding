import React from "react";
import { FaBullhorn, FaRocket, FaUsers, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaBullhorn className="text-white text-2xl" />,
    title: "Create Your Campaign",
    description: "Set up your project, tell your story, and set a fundraising goal.",
  },
  {
    icon: <FaUsers className="text-white text-2xl" />,
    title: "Share with the Community",
    description: "Spread the word through social media and your personal network.",
  },
  {
    icon: <FaRocket className="text-white text-2xl" />,
    title: "Receive Support & Funds",
    description: "Get contributions from supporters and watch your project grow.",
  },
  {
    icon: <FaCheckCircle className="text-white text-2xl" />,
    title: "Achieve Your Goal",
    description: "With enough support, reach your goal and bring your vision to life.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 mb-10 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          How Crowdfunding Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-inner">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
