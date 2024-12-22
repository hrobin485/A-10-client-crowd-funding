import React, { useEffect, useState } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";
import Banner from "../Banner/Banner";         // Importing Banner component
import HowItWorks from "../HowItWork/HowItWork"; // Importing HowItWorks component
import Testimonials from "../Testimonials/Testimonials"; // Importing Testimonials component
import RunningCampaign from "../RunningCampaign/RunningCampaign"; // Importing RunningCampaign component

const Home = () => {
  const [theme, setTheme] = useState("light"); // Default theme is light

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration

    // Apply the current theme to the document
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      {/* Page Sections with AOS Animations */}
      <div className="container mx-auto px-4">
        {/* Banner Section */}
        <div data-aos="fade-down">
          <Banner />               {/* Displaying Banner */}
        </div>

        {/* Running Campaign Section */}
        <div data-aos="fade-up">
          <RunningCampaign />      {/* Displaying RunningCampaign */}
        </div>

        {/* How It Works Section */}
        <div data-aos="fade-left">
          <HowItWorks />           {/* Displaying HowItWorks */}
        </div>

        {/* Testimonials Section */}
        <div data-aos="fade-right">
          <Testimonials />          {/* Displaying Testimonials */}
        </div>
      </div>
    </div>
  );
};

export default Home;
