import React, { useEffect, useState } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWork"; 
import Testimonials from "../Testimonials/Testimonials"; 
import RunningCampaign from "../RunningCampaign/RunningCampaign"; 
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    AOS.init({ duration: 1000 });
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="dark:bg-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {theme === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
        </button>
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome to Crowd Funding</h1>
        <p className="mt-4">
          <Typewriter
            words={['Fundraising made easy.', 'Join our community.', 'Support your dreams.']}
            loop={0}
            cursor
          />
        </p>
      </div>

      {/* Sections with AOS */}
      <div data-aos="fade-down" className="banner">
        <Banner />
      </div>

      <div className="banner">
        <RunningCampaign />
      </div>

      <div data-aos="fade-left" className="banner">
        <HowItWorks />
      </div>

      <div data-aos="fade-up" className="banner">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
