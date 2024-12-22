import React, { useEffect, useState } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWork";
import Testimonials from "../Testimonials/Testimonials";
import RunningCampaign from "../RunningCampaign/RunningCampaign";

const Home = () => {
  const [theme, setTheme] = useState("light"); // Default theme is light

  useEffect(() => {
    AOS.init({ duration: 1000 });

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
