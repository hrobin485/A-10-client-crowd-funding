import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Updated X (Twitter) icon

/*
 * Responsive Footer Component
 * --------------------------------------------------
 * - Four‑column layout on desktop, single column on mobile
 * - Clear visual hierarchy & generous spacing
 * - Dark‑mode ready using Tailwind `dark:` variants
 * --------------------------------------------------
 */
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white">
            Crowd <span className="text-blue-600 dark:text-blue-400">Funding</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-300">
            Crowdfunding involves raising small amounts of money from a large number of individuals to finance a new business venture.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 mb-10" />

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-4 text-sm text-gray-600 dark:text-gray-300">
          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Contact Us</h3>
            <p>Email: <a href="mailto:info@crowdfunding.org" className="hover:text-blue-600">info@crowdfunding.org</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-blue-600">+1&nbsp;234&nbsp;567&nbsp;890</a></p>
            <p>Address: 123 Warm Hearts Lane, Winterville, USA</p>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                  <FaFacebook className="text-xl group-hover:text-blue-600 transition-transform transform group-hover:scale-110" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                  <FaXTwitter className="text-xl group-hover:text-black transition-transform transform group-hover:scale-110" />
                  X
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                  <FaInstagram className="text-xl group-hover:text-pink-500 transition-transform transform group-hover:scale-110" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                  <FaLinkedin className="text-xl group-hover:text-blue-700 transition-transform transform group-hover:scale-110" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="/blog" className="hover:text-blue-600">Blog</a></li>
              <li><a href="/faq" className="hover:text-blue-600">FAQ</a></li>
              <li><a href="/support" className="hover:text-blue-600">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3 md:text-right">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Legal</h3>
            <p>© {new Date().getFullYear()} StudyHive</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
