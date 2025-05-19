import { Typewriter } from 'react-simple-typewriter';


const WelcomeSection = () => {
  return (
    <section className="relative overflow-hidden pt-4  sm:px-4 lg:pb-3 px-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Floating sparkles or background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-blue-200 dark:bg-gray-700 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-300 dark:bg-gray-600 rounded-full opacity-20 blur-2xl animate-pulse delay-200"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">


        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-6">
          Welcome to <span className="text-blue-600 dark:text-blue-400">Crowd Funding</span>
        </h1>


        <div className="text-lg sm:text-xl font-medium text-blue-700 dark:text-blue-300 bg-white/60 dark:bg-gray-900/50 px-6 py-3 rounded-xl shadow-lg inline-block">
          <Typewriter
            words={['Fundraising made easy.', 'Join our community.', 'Support your dreams.']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
