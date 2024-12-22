import React, { useEffect, useContext } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import { ThemeContext } from "../Firebase/ThemeContext"; // Import Theme Context
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWork";
import Testimonials from "../Testimonials/Testimonials";
import RunningCampaign from "../RunningCampaign/RunningCampaign";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use Theme Context

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
    document.body.setAttribute("data-theme", theme); // Apply the theme
  }, [theme]);

  return (
    <div className={`home-container ${theme}`}>
      <header className="header">
        <h1>Welcome to Crowdfunding Platform</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "dark" ? "Light" : "Dark"} Theme
        </button>
      </header>

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
