import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Banner from "../Banner/Banner";
import About from "../AboutUs/AboutUs";
import HowItWorks from "../HowItWork/HowItWork";
import ExtraSections from "../ExtraSection/ExtraSection";

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
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-left">
        <HowItWorks />
      </div>
      <div data-aos="fade-right">
        <ExtraSections />
      </div>
    </div>
  );
};

export default Home;
