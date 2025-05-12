import { Typewriter } from 'react-simple-typewriter';


const WelcomeSection = () => {
  return (
    <div className="text-center mt-12 px-4 dark:text-gray-100">
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl shadow-xl">
        
        {/* Optional Icon */}
        {/* <div className="flex justify-center mb-4">
          <Sparkles className="h-10 w-10 text-blue-500 dark:text-white animate-bounce" />
        </div> */}

        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">
          Welcome to Crowd Funding
        </h1>

        <div className="mt-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-lg inline-block shadow-inner">
          <span className="text-lg font-medium text-blue-600 dark:text-blue-400">
            <Typewriter
              words={['Fundraising made easy.', 'Join our community.', 'Support your dreams.']}
              loop={0}
              cursor
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
