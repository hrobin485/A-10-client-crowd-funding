import React from 'react';

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
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'A game changer for small businesses like mine. I reached my funding goal in just two weeks!',
      name: 'Ali Rahman',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3jK0U1bxTPRvhfGVUFKLyDIKtuLGgh0MMg&s',
      quote: 'The platform is easy to use and full of kind-hearted supporters. Highly recommended!',
      name: 'Maria Gonzales',
    },
  ];

  return (
    <section id="testimonials" className="py-10 rounded-xl mb-10 bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">What Our Supporters Say</h2>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center w-full max-w-md dark:bg-gray-700 dark:text-gray-100"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="text-gray-600 mb-2 dark:text-gray-100">"{testimonial.quote}"</p>
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
