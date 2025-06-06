"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle hide-on-scroll-down, show-on-scroll-up logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // If we scroll down, hide; if scroll up, show
      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  // Toggle mobile menu open/close
  const toggleMobileMenu = () => {
    setMobileMenuOpen((p) => !p);
  };

  return (
    <header
      className={`
        fixed top-0 md:py-2 left-0 w-full z-50 
        transition-transform duration-300 ease-in-out
        ${isHidden ? '-translate-y-full' : 'translate-y-0'}
        bg-white bg-opacity-70 backdrop-blur
        shadow-md
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* Inline SVG for “zams” logo */}
            <Link href="/" className="inline-block">
                <Image
                  src="/svg.png"
                  alt="Cloud With Anne"
                  width={50}
                  height={40}
                  className="h-auto w-auto max-w-[150px]"
                />
              </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="/about" className="text-gray-800 hover:text-black transition-colors">About</a>
            <a href="/get-involved" className="text-gray-800 hover:text-black transition-colors">Get Involved</a>
            <a href="/contact" className="text-gray-800 hover:text-black transition-colors">Contact</a>
            <a href="/blog" className="text-gray-800 hover:text-black transition-colors">Blog</a>
          </nav>

          {/* Right side: buttons & mobile menu toggle */}
          <div className="flex items-center">
            {/* Desktop buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#login"
                className="py-1 px-5 bg-[#121212] text-white border-2 border-black dark:border-white rounded-[6px] hover:bg-[#0059bf] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
              >
                Login
              </a>
              <a
                href="#get-started"
                className="py-1 px-5 bg-white border-4 border-black rounded-[6px] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
              >
                Get Started
              </a>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                className="text-gray-800 focus:outline-none"
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-95 backdrop-blur shadow-lg">
          <nav className="px-4 pt-2 pb-6 space-y-4">
            <a
              href="#product"
              className="block text-gray-800 hover:text-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </a>
            <a
              href="#playground"
              className="block text-gray-800 hover:text-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Playground
            </a>
            <a
              href="#integrations"
              className="block text-gray-800 hover:text-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Integrations
            </a>
            <a
              href="#customers"
              className="block text-gray-800 hover:text-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Customers
            </a>
            <a
              href="#pricing"
              className="block text-gray-800 hover:text-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#blog"
              className="block text-gray-800 hover:text-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <div className="mt-4 border-t border-gray-200 pt-4 space-y-3">
              <a
                href="#login"
                className="block px-4 py-3 border border-gray-800 text-center text-gray-800 rounded-full hover:bg-gray-100 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </a>
              <a
                href="#get-started"
                className="block px-4 py-3 bg-black text-white text-center rounded-full hover:opacity-90 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
