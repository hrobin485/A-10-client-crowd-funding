import React, { useEffect, useState } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWorks"; 
import Testimonials from "../Testimonials/Testimonials"; 
import RunningCampaign from "../RunningCampaign/RunningCampaign"; 

const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
    document.body.className = theme; // Apply theme class to body
  }, [theme]);

  // Toggle dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); 
    localStorage.setItem("theme", newTheme); 
  };

  return (
    <div>
      <div className="flex justify-end mt-3">
        <button onClick={toggleTheme} className="bg-red-500 text-black">
          Dark Mode
        </button>
      </div>

      {/* Animations with AOS and components */}
      <div data-aos="fade-down" className="banner">
        <Banner />
      </div>
      <RunningCampaign />
      <div data-aos="fade-left" className="how-it-works">
        <HowItWorks />
      </div>
      <div data-aos="fade-up" className="testimonials">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
