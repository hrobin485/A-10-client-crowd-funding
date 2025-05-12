import React from "react";
import { FaBullhorn, FaRocket, FaUsers, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaBullhorn className="text-blue-500 text-2xl" />,
    title: "Create Your Campaign",
    description: "Set up your project, tell your story, and set a fundraising goal.",
  },
  {
    icon: <FaUsers className="text-blue-500 text-2xl" />,
    title: "Share with the Community",
    description: "Spread the word through social media and your personal network.",
  },
  {
    icon: <FaRocket className="text-blue-500 text-2xl" />,
    title: "Receive Support & Funds",
    description: "Get contributions from supporters and watch your project grow.",
  },
  {
    icon: <FaCheckCircle className="text-blue-500 text-2xl" />,
    title: "Achieve Your Goal",
    description: "With enough support, reach your goal and bring your vision to life.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          How Crowdfunding Works
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all text-center"
            >
              <div className="mb-4 flex justify-center items-center w-14 h-14 mx-auto bg-blue-100 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
