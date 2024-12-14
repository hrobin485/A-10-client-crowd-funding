import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 leading-relaxed">
              We believe in the power of community and collective support. Our crowdfunding platform was born out of a desire to help individuals raise funds for causes close to their hearts—from personal needs like medical expenses to ambitious creative projects and innovative startups.  
              Our mission is simple: empower people to make a difference by contributing to meaningful projects, transforming dreams into reality, and fostering a community that thrives on generosity and compassion.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="https://via.placeholder.com/500x300" alt="Our Story" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
