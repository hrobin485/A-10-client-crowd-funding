import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtLnYEqvhKKHET_JzfYOv5hZNV1cngGuY_A&s',
      quote: 'This platform helped me raise funds for my startup. The support from the community was amazing!',
      name: 'John Doe',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIePPSH8NHKgAM7mUa_we9BwPtZ0jilxLl6g&s',
      quote: 'Thanks to this crowdfunding site, I was able to fund my medical expenses. Truly grateful!',
      name: 'Jane Smith',
    },
    {
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'A game changer for small businesses like mine. I reached my funding goal in just two weeks!',
      name: 'Ali Rahman',
    },
    {
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'The platform is easy to use and full of kind-hearted supporters. Highly recommended!',
      name: 'Maria Gonzales',
    },
  ];

  return (
    <section id="testimonials" className="py-12 mb-10 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10">
          What Our Supporters Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-md transition hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {testimonial.name}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaQuoteLeft className="text-blue-500 text-xl mt-1" />
                <p className="text-gray-600 dark:text-gray-200 text-base leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
