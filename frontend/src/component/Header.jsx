"use client";

import React, { useState } from "react";

const LoginModal = ({ isOpen, toggleModal }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-96 p-6 relative">
        {/* Close Button */}
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {isRegistering ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Create an Account
            </h2>
            <p className="text-gray-600 text-sm mb-6 text-center">
              Fill in the details to register for a new account.
            </p>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Create a password"
                />
              </div>
              <div className="mb-6">
                <label className="flex items-center text-gray-600 text-sm">
                  <input
                    type="checkbox"
                    className="mr-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline ml-1">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </button>
              <div className="text-center mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsRegistering(false);
                  }}
                >
                  Login
                </a>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-sm mb-6 text-center">
              Login to access your account or register for a new one.
            </p>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </button>

              <div className="text-center mt-4 text-sm text-gray-600">
                Don’t have an account?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsRegistering(true);
                  }}
                >
                  Register
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white w-full shadow-md py-4 px-6 sm:px-10">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">MIT Marketplace</div>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Packages
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Categories
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Reviews
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Deals
          </a>
        </nav>

        <button
          onClick={toggleLoginModal}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 hidden md:block"
        >
          Login
        </button>

        <button
          className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mt-4 md:hidden">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Packages
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Categories
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Reviews
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Deals
            </a>
          </nav>
          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
            onClick={toggleLoginModal}
          >
            Login
          </button>
        </div>
      )}

      <LoginModal isOpen={isLoginModalOpen} toggleModal={toggleLoginModal} />
    </header>
  );
};

export default Header;