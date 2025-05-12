import React from "react";

const slides = [
  {
    id: "slide1",
    image: "https://images.pexels.com/photos/7414108/pexels-photo-7414108.jpeg",
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
    <div className="carousel w-full mt-6 rounded-xl overflow-hidden">
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
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
              <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg text-white max-w-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{slide.title}</h2>
                <p className="mb-4 text-sm md:text-base">{slide.subtitle}</p>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold text-white transition">
                  Get Started
                </button>
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
