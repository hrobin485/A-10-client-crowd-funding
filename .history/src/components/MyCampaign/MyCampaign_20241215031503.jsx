import React from 'react';

const MyCampaign = () => {
  return (
    <div className="how-to-help">
      <h1 className='text-2xl font-bold'>How You Can Help</h1>

      <p>There are many ways you can help others through our winter clothing donation campaign:</p>
      
      <h2>1. Donate Clothes</h2>
      <p>One of the most direct ways to help is by donating warm clothing like jackets, sweaters, blankets, and more. If you have items in good condition, we would love to receive them!</p>

      <h2>2. Volunteer Your Time</h2>
      <p>If you're interested in volunteering, you can help by sorting donations, distributing items to the less fortunate, or assisting with event management.</p>

      <h2>3. Share the Word</h2>
      <p>Even if you're unable to donate or volunteer, spreading the word about our campaign helps raise awareness and ensures we can reach more people in need.</p>

      <h2>4. Make a Financial Contribution</h2>
      <p>Financial donations help cover transportation costs, storage, and other operational expenses. Your contribution will go directly toward supporting the cause.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions, would like more information, or would like to contribute in any other way, feel free to reach out to us!</p>

      <form className="contact-form">
        <div>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" placeholder="How would you like to help?" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default MyCampaign;
