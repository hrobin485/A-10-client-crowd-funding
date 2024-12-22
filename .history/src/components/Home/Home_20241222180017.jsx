import React, { useEffect, useState } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWork";
import Testimonials from "../Testimonials/Testimonials";
import RunningCampaign from "../RunningCampaign/RunningCampaign";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 

    // Set theme on initial load based on system preference or default to light
    const preferredTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", preferredTheme);
    setIsDarkMode(preferredTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
        <h1 className="text-xl font-bold dark:text-white">Crowdfunding</h1>
        <button
          onClick={toggleTheme}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Adding animations using data-aos attributes */}
      <div data-aos="fade-down">
        <Banner />
      </div>
      <RunningCampaign />
      <div data-aos="fade-left">
        <HowItWorks />
      </div>
      <div data-aos="fade-up">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
