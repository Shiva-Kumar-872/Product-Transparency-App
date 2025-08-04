import React from 'react';

const Footer: React.FC = () => {
  return (
   
    <footer className=" ">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center md:justify-between text-gray-600">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          {/* Twitter */}
          <a href="#" aria-label="Twitter" className="hover:text-green-600 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 19c9 0 14-7.5 14-14v-.6A10 10 0 0024 3a9.6 9.6 0 01-2.8.8A5 5 0 0023 1a9.5 9.5 0 01-3 1.2A4.8 4.8 0 0016.5 0c-2.6 0-4.8 2.1-4.8 4.8 0 .4 0 .8.1 1.1A13.6 13.6 0 013 1.4a4.8 4.8 0 001.5 6.4 4.8 4.8 0 01-2.2-.6v.1c0 2.4 1.7 4.4 4 4.8a4.9 4.9 0 01-2.2.1 4.8 4.8 0 004.5 3.4A9.6 9.6 0 012 17.8 13.7 13.7 0 008 19" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="hover:text-green-600 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 110 2 1 1 0 010-2z" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="hover:text-green-600 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9V15h-2v-3h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v6.9A10 10 0 0022 12z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 md:text-right w-full md:w-auto">
          © 2025 ClearTrace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;