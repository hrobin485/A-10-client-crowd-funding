import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-100 to-blue-200 dark:bg-gray-800 dark:text-gray-100 py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Crowd Funding
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Crowdfunding involves raising small amounts of money from a large number of individuals to finance a new business venture.
        </p>

        <div className="border-t border-gray-300 dark:border-gray-700 my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-0 space-y-6 sm:space-y-0 sm:space-x-10">
          <nav className="text-gray-600 dark:text-gray-300 text-center">
            <p className="font-semibold mb-2">Contact Us:</p>
            <p>Email: <a href="mailto:info@CrowdFunding.org" className="text-blue-500">info@CrowdFunding.org</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-blue-500">+1 234 567 890</a></p>
            <p>Address: 123 Warm Hearts Lane, Winterville, USA</p>
          </nav>

          <nav className="space-x-6 text-2xl text-gray-600 dark:text-gray-300">
            <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <FaFacebook style={{ color: '#3b5998' }} />
            </a>
            <a href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaTwitter style={{ color: '#1da1f2' }} />
            </a>
            <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
              <FaInstagram style={{ color: '#e1306c' }} />
            </a>
            <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
              <FaLinkedin style={{ color: '#0077b5' }} />
            </a>
          </nav>

          <nav className="text-gray-600 dark:text-gray-300 text-center mt-6 sm:mt-0">
            <p className="text-sm">© 2025 Crowd Funding. All Rights Reserved.</p>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
