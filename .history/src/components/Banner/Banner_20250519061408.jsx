// BannerHero.jsx
import { Typewriter } from 'react-simple-typewriter';


const slides = [
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/23496627/pexels-photo-23496627/free-photo-of-group-of-friends-taking-selfie-in-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Empower Dreams with Your Support',
    subtitle: 'Join our mission to help real people reach real goals.',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg',
    title: 'Your Generosity Creates Impact',
    subtitle: 'Support meaningful campaigns that change lives.',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/7414020/pexels-photo-7414020.jpeg',
    title: 'Start Your Own Campaign Today',
    subtitle: 'It’s fast, easy, and completely free to get started.',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/7413919/pexels-photo-7413919.jpeg',
    title: 'Together, We Can Make a Difference',
    subtitle: 'Every donation counts, no matter the size.',
  },
];

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-b-xl">
      {/* glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-300 dark:bg-gray-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-300 dark:bg-gray-600 rounded-full blur-2xl opacity-20 animate-pulse delay-200"></div>
      </div>

      {/* carousel */}
      <div className="carousel w-full overflow-x-hidden">
        {slides.map((slide, i) => {
          const prev = i === 0 ? slides.length - 1 : i - 1;
          const next = (i + 1) % slides.length;
          return (
            <div
              key={slide.id}
              id={`slide${slide.id}`}
              className="carousel-item relative w-full h-[500px] md:h-[600px] lg:h-[650px] flex-shrink-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />

              {/* central overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                {/* headline only on first slide for “welcome” */}
                {i === 0 && (
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-6 drop-shadow-lg">
                    Welcome to{' '}
                    <span className="text-blue-600 dark:text-blue-400">
                      Crowd Funding
                    </span>
                  </h1>
                )}

                <div className="bg-black/60 dark:bg-black/50 backdrop-blur-sm p-6 rounded-xl w-[90%] max-w-lg text-white">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-base mb-4">{slide.subtitle}</p>

                  {/* typewriter line only on first slide */}
                  {i === 0 ? (
                    <span className="inline-block text-blue-200 dark:text-blue-300 text-base md:text-lg font-medium">
                      <Typewriter
                        words={[
                          'Fundraising made easy.',
                          'Join our community.',
                          'Support your dreams.',
                        ]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                      />
                    </span>
                  ) : (
                    <a
                      href="#get-started"
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm px-5 py-2 rounded-lg transition duration-300"
                    >
                      Get Started
                    </a>
                  )}
                </div>
              </div>

              {/* nav buttons */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-6">
                <a
                  href={`#slide${slides[prev].id}`}
                  className="btn btn-circle bg-white/70 hover:bg-white shadow"
                >
                  ❮
                </a>
                <a
                  href={`#slide${slides[next].id}`}
                  className="btn btn-circle bg-white/70 hover:bg-white shadow"
                >
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Banner;
