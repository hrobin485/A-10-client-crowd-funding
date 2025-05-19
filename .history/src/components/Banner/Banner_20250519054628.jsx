import React from "react";

const slides = [
  {
    id: "slide1",
    image: "https://images.pexels.com/photos/23496627/pexels-photo-23496627/free-photo-of-group-of-friends-taking-selfie-in-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Empower Dreams with Your Support",
    subtitle: "Join our mission to help real people reach real goals through crowdfunding.",
  },
  {
    id: "slide2",
    image: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg",
    title: "Your Generosity Creates Impact",
    subtitle: "Support meaningful campaigns that change lives.",
  },
  {
    id: "slide3",
    image: "https://images.pexels.com/photos/7414020/pexels-photo-7414020.jpeg",
    title: "Start Your Own Campaign Today",
    subtitle: "It's fast, easy, and completely free to get started.",
  },
  {
    id: "slide4",
    image: "https://images.pexels.com/photos/7413919/pexels-photo-7413919.jpeg",
    title: "Together, We Can Make a Difference",
    subtitle: "Every donation counts, no matter the size.",
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full rounded-b-xl overflow-hidden overflow-x-hidden"
>
      {slides.map((slide, index) => {
        const next = slides[(index + 1) % slides.length].id;
        const prev = slides[(index - 1 + slides.length) % slides.length].id;
        return (
          <div key={slide.id} id={slide.id} className="carousel-item relative w-full h-[500px]">
            <img
              src={slide.image}
              className="w-full object-cover h-full"
              alt="Banner Slide"
            />

            {/* Overlay Content with Get Started Button */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center px-4">
              <div className="bg-black/60 backdrop-blur-sm p-4 rounded-lg text-white w-[90%] max-w-md">
                <h2 className="text-xl md:text-2xl font-bold mb-2">{slide.title}</h2>
                <p className="text-sm md:text-base mb-3">{slide.subtitle}</p>
                <a href="#get-started" className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition duration-300">
                  Get Started
                </a>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href={`#${prev}`} className="btn btn-circle bg-white/70 hover:bg-white">❮</a>
              <a href={`#${next}`} className="btn btn-circle bg-white/70 hover:bg-white">❯</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
