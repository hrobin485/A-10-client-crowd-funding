import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";         // Importing Banner component
import HowItWorks from "../HowItWork/HowItWork"; // Importing HowItWorks component
import Testimonials from "../Testimonials/Testimonials"; // Importing Testimonials component
import RunningCampaign from "../RunningCampaign/RunningCampaign"; // Importing RunningCampaign component

const Home = () => {
  const [theme, setTheme] = useState("light"); // Default theme is light

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // Set the global data-theme attribute
    document.body.className = theme; // Apply the theme to the body element
  }, [theme]);

  return (
    <div className='bg-black text-white'>
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      {/* Page Sections */}
      <div className="container mx-auto px-4">
        {/* Banner Section */}
        <div>
          <Banner />               {/* Displaying Banner */}
        </div>

        {/* Running Campaign Section */}
        <div>
          <RunningCampaign />      {/* Displaying RunningCampaign */}
        </div>

        {/* How It Works Section */}
        <div>
          <HowItWorks />           {/* Displaying HowItWorks */}
        </div>

        {/* Testimonials Section */}
        <div>
          <Testimonials />          {/* Displaying Testimonials */}
        </div>
      </div>
    </div>
  );
};

export default Home;
