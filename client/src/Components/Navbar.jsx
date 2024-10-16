/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 transform -translate-x-1/2 w-full mt-2 z-50"
    >
      <div className="w-[80%] mx-auto bg-white/10 backdrop-blur-lg py-3 px-6 rounded-xl shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center"
          >
            <Link to='/' className='flex'>
            <svg
              className="h-8 w-8 mr-2 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            <span className="font-semibold text-lg text-white">PicoFolio</span></Link>
          </motion.div>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center text-white">
            <Link to="/about" className="hover:text-white/10 flex items-center">
              About
            </Link>
            <Link to="/event" className="hover:text-white/10">
              Event
            </Link>
            <Link to="/features" className="hover:text-white/10 flex items-center">
              Features
            </Link>
            <Link to="/contact" className="hover:text-white/10">
              Contact
            </Link>
          </div>

          {/* Right Side Links (Desktop) */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/signin" className="hover:text-white/10 flex items-center text-white">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="py-2 px-4 bg-black text-white rounded-full hover:bg-whtext-white transition duration-300 flex items-center"
            >
              Sign Up
            </Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="h-6 w-6 text-white" />
            ) : (
              <FiMenu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden p-4"
          >
            <Link to="/about" className="block py-2 text-white hover:text-white/10 transition duration-300">
              About
            </Link>
            <Link to="/event" className="block py-2 text-white hover:text-white/10 transition duration-300">
              Event
            </Link>
            <Link to="/features" className="block py-2 text-white hover:text-white/10 transition duration-300">
              Features
            </Link>
            <Link to="/contact" className="block py-2 text-white hover:text-white/10 transition duration-300">
              Contact
            </Link>
            <Link to="/signin" className="block py-2 text-white hover:text-white/10 transition duration-300">
              Sign In
            </Link>
            <Link to="/signup" className="block py-2 bg-black text-white text-center rounded-full mt-2 hover:bg-whtext-white transition duration-300">
              Sign Up
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
