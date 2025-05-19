import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWork";
import Testimonials from "../Testimonials/Testimonials";
import RunningCampaign from "../RunningCampaign/RunningCampaign";
import WhyChooseCrowdcube from "../WhyChooseCrowdcube/WhyChooseCrowdcube";
import ImpactStats from "../ImpactStats/ImpactStats";
import SuccessStories from "../SuccessStories/SuccessStories";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="rounded-xl">
      
      {/* Banner Section */}
      <div className="mb-5">
        <Banner />
      </div>

      {/* Running Campaign */}
      <div >
        <RunningCampaign />
      </div>

      {/* How It Works */}
      <div data-aos="fade-left">
        <HowItWorks />
      </div>

      {/* Why Choose Crowdcube */}
      <div data-aos="fade-right">
        <WhyChooseCrowdcube />
      </div>

      {/* Impact Stats */}
      <div data-aos="zoom-in-up">
        <ImpactStats />
      </div>

      {/* Success Stories */}
      <div data-aos="flip-left">
        <SuccessStories />
      </div>

      {/* Testimonials */}
      <div data-aos="fade-up">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
