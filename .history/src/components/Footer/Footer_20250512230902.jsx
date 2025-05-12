import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" bg-white pt-10 dark:bg-gray-800 dark:text-gray-100" >
          <div className="text-center ">
          <h1 className="text-2xl font-bold">Crowd Funding</h1>
          <p>Crowdfunding involves raising small amounts of money from a large number of individuals to finance a new business venture. </p>
          </div>
          <div className="divider mx-20 mt-6"></div>
       <div className="footer text-base-content p-10">
       <nav>
       <p><strong>Contact Us:</strong></p>
      <p>Email: info@CrowdFunding.org</p>
      <p>Phone: +1 234 567 890</p>
      <p>Address: 123 Warm Hearts Lane, Winterville, USA</p>
        </nav>
        <nav>
      
        <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
        <FaFacebook style={{ color: '#3b5998', fontSize: '24px' }} /> Facebook
        </a>
        <a href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer">
        <FaTwitter style={{ color: '#1da1f2', fontSize: '24px' }} /> Twitter
        </a>
        <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer">
           <FaInstagram style={{ color: '#e1306c', fontSize: '24px' }}/> Instagram
        </a>
        <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={{ color: '#0077b5', fontSize: '24px' }} /> LinkedIn
        </a>
        </nav>
        <nav>
        <p>© 2025 Crowd Funding. All Rights Reserved.</p>
        </nav>
       </div>
      </footer>
    );
};

export default Footer;