"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ExclusiveDeals = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClaimDeal = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative bg-gradient-to-r from-indigo-100 via-purple-100 to-green-100 py-16 px-6 sm:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-300 opacity-10 pointer-events-none"></div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-8">
        Exclusive Deals
      </h2>
      <p className="text-lg text-gray-700 text-center mb-12">
        Unlock special offers crafted just for MIT students
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {/* Bulk Buy & Save */}
        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <span className="inline-block bg-yellow-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            Limited Time
          </span>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Bulk Buy & Save
          </h3>
          <p className="text-gray-600 mb-6">
            Enjoy 30% off when purchasing with your roommates.
          </p>
          <div className="text-4xl font-extrabold text-blue-600 mb-4">
            30% OFF
          </div>
          <p className="text-sm text-gray-500 mb-4">
            *Applicable for group orders only
          </p>
          <button
            onClick={handleClaimDeal}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Claim Deal
          </button>
        </div>

        {/* First Purchase Discount */}
        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <span className="inline-block bg-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            New Students
          </span>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            First Purchase Discount
          </h3>
          <p className="text-gray-600 mb-6">
            Save $50 on your very first order with us.
          </p>
          <div className="text-4xl font-extrabold text-purple-600 mb-4">
            $50 OFF
          </div>
          <p className="text-sm text-gray-500 mb-4">
            *First-time customers only
          </p>
          <button
            onClick={handleClaimDeal}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300"
          >
            Claim Deal
          </button>
        </div>

        {/* Early Bird Special */}
        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <span className="inline-block bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            Seasonal
          </span>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Early Bird Special
          </h3>
          <p className="text-gray-600 mb-6">
            Pre-order now and enjoy 25% off for the next semester.
          </p>
          <div className="text-4xl font-extrabold text-green-600 mb-4">
            25% OFF
          </div>
          <p className="text-sm text-gray-500 mb-4">*Limited slots available</p>
          <button
            onClick={handleClaimDeal}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
          >
            Claim Deal
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl flex relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Left Side Image */}
            <div className="w-1/2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-l-lg p-6 flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-vector/business-deal_52683-7196.jpg?t=st=1737229063~exp=1737232663~hmac=7724949bdc22d69dd125563d8c132c8d3de4816e2e2d43962fd8d50f16fa283b&w=826"
                alt="Claim Deal"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side Form */}
            <div className="w-1/2 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Claim Your Deal
              </h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full"
                >
                  Claim Deal
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExclusiveDeals;