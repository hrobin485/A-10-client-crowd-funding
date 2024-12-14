import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWork";
import Testimonials from "../Testimonials/Testimonials";
import RunningCampaign from "../RunningCampaign/RunningCampaign";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  return (
    <div>
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
