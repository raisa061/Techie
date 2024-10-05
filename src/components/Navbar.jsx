import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.jpg';
import {BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';


function Navbar(){
 

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <BrowserRouter>
    <nav className={`fixed z-50 w-full top-0 left-0 transition-colors duration-300 ${isScrolled ? 'bg-sky-200' : ' bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 font-latoR">
          <div className="flex items-center">
            {/* Logo */}
            <a href="#" className="text-black text-lg font-semibold">
              <img className="rounded-md shadow-md shadow-gray-400" src={logo} alt="logo"/>
            </a>
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to='#home' smooth
              className=" text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to='#services' smooth
              className=" text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to='#about' smooth
              className=" text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to='#projects' smooth
              className=" text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
            <Link
              to='#tech' smooth
              className=" text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Technologies
            </Link>
            <Link
              to='#team' smooth
              className=" text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </Link>
            <Link
              to='#contact' smooth
              className=" text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-900 hover:text-white hover:cursor-pointer focus:outline-none focus:text-white"
              onClick={toggleMenu} //show mobile menu when clicked
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75a.75.75 0 011.5 0v14.5a.75.75 0 01-1.5 0V4.75zM7.75 8a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5zm4.5-.75a.75.75 0 10-1.5 0v9a.75.75 0 001.5 0v-9zm4.5 2.25a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0v-4.5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
             to='#services' smooth
              className=" text-black hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to='#about' smooth
              className="text-gray-800 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to='#services' smooth
              className="text-gray-800 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to='#projects' smooth
              className=" text-gray-800 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
            <Link
              to='#tech' smooth
              className=" text-gray-800 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Technologies
            </Link>
            <Link
              to='#team' smooth
              className=" text-gray-800 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </Link>
            <Link
              to='#contact' smooth
              className="text-gray-800 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
    </BrowserRouter>
  );
};

export default Navbar;
