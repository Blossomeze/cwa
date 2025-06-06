import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-700">
      {/* Top area: Logo + Columns */}
      <div className="max-w-7xl px-[5%] py-12">
        <div className="grid grid-cols-3 md:grid-cols-7 gap-8">
          {/* Logo & Description */}
          <div className="col-span-3 pb-5 md:pb-0 md:col-span-4 space-y-4">
            <div className="flex items-center">
              {/* Inline SVG for “Miracle” icon */}
              <Link href="/" className="inline-block">
                <Image
                  src="/bluelogo.png"
                  alt="Cloud With Anne"
                  width={80}
                  height={40}
                  className="h-auto w-auto max-w-[150px]"
                />
              </Link>
            </div>
            <p className="text-gray-500 md:max-w-2/3">
            Free cloud computing education for everyone. Learn AWS skills and launch<br className='hidden md:flex' /> your career in cloud engineering
            without spending a penny.
            </p>
            {/* Social icons */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0059bf] transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0059bf] transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0059bf] transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0059bf] transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Column: Home */}
          <div>
            <h4 className="text-lg font-semibold text-[#00000099] mb-4">Home</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/about" className="hover:text-[#00000099] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/get-involved" className="hover:text-[#00000099] transition-colors">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#00000099] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#00000099] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Pages */}
          <div>
            <h4 className="text-lg font-semibold text-[#00000099] mb-4">Join Us</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#about-us" className="hover:text-[#00000099] transition-colors">
                  Whatsapp
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-[#00000099] transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Blog */}
          <div>
            <h4 className="text-lg font-semibold text-[#00000099] mb-4">Follow Us</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#blog-listing" className="hover:text-[#00000099] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#blog-article" className="hover:text-[#00000099] transition-colors">
                  X
                </a>
              </li>
              <li>
                <a href="#newsroom" className="hover:text-[#00000099] transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            ©2025 Cloud With Anne Academy | Built & Designed by Blyn™
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
