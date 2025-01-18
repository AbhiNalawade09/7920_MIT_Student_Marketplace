"use client";

import React from "react";
import { FaShoppingCart, FaTags, FaUsers } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white h-[500px] w-full flex items-center justify-between px-6 sm:px-10 overflow-hidden">
      {/* Left Content */}
      <div className="max-w-xl z-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight drop-shadow-md mb-6">
          Empower Your <span className="text-purple-400">MIT Journey</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
          Access exclusive deals, curated packages, and a thriving community designed to enhance your student experience at MIT.
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
          Explore Now
        </button>
      </div>

      {/* Right Side Animated Icons */}
      <div className="relative hidden lg:flex flex-col items-center space-y-10 z-0">
        <div className="w-28 h-28 rounded-full bg-purple-600 bg-opacity-30 flex items-center justify-center animate-bounce-slow">
          <FaShoppingCart size={40} className="text-purple-300" />
        </div>
        <div className="w-28 h-28 rounded-full bg-blue-600 bg-opacity-30 flex items-center justify-center animate-spin">
          <FaTags size={40} className="text-blue-300" />
        </div>
        <div className="w-28 h-28 rounded-full bg-pink-600 bg-opacity-30 flex items-center justify-center animate-pulse">
          <FaUsers size={40} className="text-pink-300" />
        </div>
      </div>

      {/* Background Animations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full opacity-20 blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-700 to-purple-700 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000" />
    </div>
  );
};

export default HeroSection;