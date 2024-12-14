import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      image: 'data:image/jpeg;base64,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',
      quote: 'This platform helped me raise funds for my startup. The support from the community was amazing!',
      name: 'John Doe',
    },
    {
      image: 'https://via.placeholder.com/100',
      quote: 'Thanks to this crowdfunding site, I was able to fund my medical expenses. Truly grateful!',
      name: 'Jane Smith',
    },
    // Add more testimonials here
  ];

  return (
    <section id="testimonials" className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">What Our Supporters Say</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <p className="text-gray-600 mb-2">"{testimonial.quote}"</p>
                <p className="font-bold">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
