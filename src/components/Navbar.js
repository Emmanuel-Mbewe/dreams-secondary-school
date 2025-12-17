"use client";

import { useState, useRef } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openDepartments = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDepartmentsOpen(true);
  };

  const closeDepartments = () => {
    timeoutRef.current = setTimeout(() => {
      setDepartmentsOpen(false);
    }, 200); // Delay to prevent flicker
  };

  return (
    <nav className="bg-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-4">
            <a href="/">
              <Image
                src="/images/Dreams_Secondary_School.png"
                alt="School Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </a>
            <a href="/" className="text-blue-700 font-bold text-xl">
              Zomba Vocational Training Center
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-black hover:text-gray-700">Home</a>
            <a href="/about" className="text-black hover:text-gray-700">About Us</a>
            <a href="/staff" className="text-black hover:text-gray-700">Staff</a>            
            <a href="/academics" className="text-black hover:text-gray-700">Academics</a>
            <a href="/admissions" className="text-black hover:text-gray-700">Admissions</a>
            <a href="/students" className="text-black hover:text-gray-700">Students</a>            
            <a href="/news" className="text-black hover:text-gray-700">News</a>
            <a href="/contact" className="text-black hover:text-gray-700">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-black focus:outline-none" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="bg-orange-600 text-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block hover:text-black">Home</a>
            <a href="/about" className="block hover:text-black">About Us</a>
            <a href="/staff" className="text-black hover:text-gray-700">Staff</a>
            <a href="/academics" className="block hover:text-black">Academics</a>
            <a href="/admissions" className="block hover:text-black">Admissions</a>
            <a href="/students" className="block hover:text-black">Students</a>
            <a href="/news" className="block hover:text-black">News</a>
            <a href="/contact" className="block hover:text-black">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
