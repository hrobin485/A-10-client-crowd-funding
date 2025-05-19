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
    <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* left text area */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
            Welcome to <span className="text-blue-600 dark:text-blue-400">Crowd Funding</span>
          </h1>

          <span className="inline-block bg-white/60 dark:bg-gray-900/50 px-6 py-3 rounded-xl text-blue-700 dark:text-blue-300 text-lg">
            <Typewriter
              words={['Fundraising made easy.',
                'Join our community.',
                'Support your dreams.']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>

          <p className="text-gray-600 dark:text-gray-300">
            Empower dreams with your support. Start or back campaigns that matter.
          </p>

          <a
            href="#get-started"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Get Started
          </a>
        </div>

        {/* right hero image */}
        {/* right hero mini‑carousel */}
        <div className="relative h-72 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden shadow-lg">
          <div className="carousel w-full h-full">
            {slides.map(({ id, image }) => (
              <div key={id} className="carousel-item w-full">
                <img src={image}
                  className="w-full h-full object-cover object-center"
                  alt="hero slide" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-black/10 dark:bg-black/20 mix-blend-multiply" />
        </div>

      </div>
    </section>

  );
};

export default Banner;
