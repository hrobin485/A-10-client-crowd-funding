import { Typewriter } from 'react-simple-typewriter';
import { Sparkles } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section className="relative overflow-hidden pb-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Floating sparkles or background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-blue-200 dark:bg-gray-700 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-300 dark:bg-gray-600 rounded-full opacity-20 blur-2xl animate-pulse delay-200"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="h-8 w-8 text-blue-500 dark:text-white animate-bounce" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
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

        <button className="mt-6 px-5 py-2 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
