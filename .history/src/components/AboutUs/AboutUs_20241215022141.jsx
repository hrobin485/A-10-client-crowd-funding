import React from "react";

const About = () => {
  return (
    <section id="about-us" class="py-10 bg-gray-100">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold text-center mb-6">Our Story</h2>
      <div class="flex flex-col md:flex-row items-center justify-between gap-10">
        <div class="w-full md:w-1/2">
          <p class="text-gray-600 leading-relaxed">
            We believe in the power of community and collective support. Our crowdfunding platform was born out of a desire to help individuals raise funds for causes close to their hearts—from personal needs like medical expenses to ambitious creative projects and innovative startups.  
            Our mission is simple: empower people to make a difference by contributing to meaningful projects, transforming dreams into reality, and fostering a community that thrives on generosity and compassion.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="https://via.placeholder.com/500x300" alt="Our Story" class="rounded-lg shadow-lg">
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default About;
