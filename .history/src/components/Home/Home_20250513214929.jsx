import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWork"; 
import Testimonials from "../Testimonials/Testimonials"; 
import RunningCampaign from "../RunningCampaign/RunningCampaign"; 
import { Typewriter } from "react-simple-typewriter";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import WhyChooseCrowdcube from "../WhyChooseCrowdcube/WhyChooseCrowdcube";
import ImpactStats from "../ImpactStats/ImpactStats";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="rounded-xl ">
      <div>
        <WelcomeSection></WelcomeSection>
      </div>

      {/* Adding animations using data-aos attributes */}
      <div data-aos="fade-down" className="banner mb-5">
        <Banner />
      </div>

      <div className="banner">
        <RunningCampaign />
      </div>

      <div data-aos="fade-left" className="banner ">
        <HowItWorks />
      </div>

      <div>
        <WhyChooseCrowdcube/>
      </div>

      <div>
        <ImpactStats/>
      </div>

      <div data-aos="fade-up" className="banner">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
