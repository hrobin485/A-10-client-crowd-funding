import React, { useEffect, useState } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWork"; 
import Testimonials from "../Testimonials/Testimonials"; 
import RunningCampaign from "../RunningCampaign/RunningCampaign"; 

const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // Retrieve theme from localStorage or default to light

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS

    // Apply the current theme class to the body
    document.body.className = theme; 
  }, [theme]);

  // Toggle dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); // Update theme
    localStorage.setItem("theme", newTheme); // Save to localStorage
  };

  return (
    <div>
      <div className="flex justify-end mt-3">
        <button onClick={toggleTheme} className="bg-red-500 text-black">
          Dark Mode
        </button>
      </div>
      
      {/* Adding animations using data-aos attributes */}
      <div data-aos="fade-down" className="banner bg-white text-black dark:bg-black dark:text-white">
        <Banner />
      </div>
      <div  className="banner bg-white text-black dark:bg-black dark:text-white">
      <RunningCampaign />
      </div>
      <div data-aos="fade-left" className="banner bg-white text-black dark:bg-black dark:text-white">
        <HowItWorks />
      </div>
      <div data-aos="fade-up"  className="banner bg-white text-black dark:bg-black dark:text-white">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
