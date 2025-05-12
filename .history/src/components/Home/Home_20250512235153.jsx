import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWork"; 
import Testimonials from "../Testimonials/Testimonials"; 
import RunningCampaign from "../RunningCampaign/RunningCampaign"; 
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="rounded-xl ">
      <div className="text-center mt-5  dark:text-gray-100 ">
       <div className="mt-10">
        <h1 className="text-2xl font-bold">Welcome to Crowd Funding</h1>
        <p className="mt-4">
          <Typewriter
            words={['Fundraising made easy.', 'Join our community.', 'Support your dreams.']}
            loop={0}
            cursor
          />
        </p>
       </div>
      </div>

      {/* Adding animations using data-aos attributes */}
      <div data-aos="fade-down" className="banner mb-5">
        <Banner />
      </div>

      <div className="banner dark:bg-gray-800 dark:text-gray-100">
        <RunningCampaign />
      </div>

      <div data-aos="fade-left" className="banner dark:bg-gray-800 dark:text-gray-100">
        <HowItWorks />
      </div>

      <div data-aos="fade-up" className="banner dark:bg-gray-800 dark:text-gray-100">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
