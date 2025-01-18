import React from "react";
import { FaBox, FaGift, FaUsers, FaCheckCircle } from "react-icons/fa";

const Featured = () => {
  return (
    <div className="relative bg-gray-900 py-10 px-6 sm:px-10 ">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
        Why Choose Us?
      </h2>

      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Curated Packages */}
        <div className="bg-black text-white p-6 rounded-lg shadow-md flex items-start space-x-4 hover:bg-gray-800 transition-all duration-300">
          <FaBox className="text-blue-500 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Curated Packages</h3>
            <p className="text-sm text-gray-400">
              Tailored to your needs with a variety of options to suit every
              preference.
            </p>
          </div>
        </div>

        {/* Exclusive Discounts */}
        <div className="bg-black text-white p-6 rounded-lg shadow-md flex items-start space-x-4 hover:bg-gray-800 transition-all duration-300">
          <FaGift className="text-purple-500 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Exclusive Discounts</h3>
            <p className="text-sm text-gray-400">
              Save on every purchase with offers designed just for you.
            </p>
          </div>
        </div>

        {/* Community Driven */}
        <div className="bg-black text-white p-6 rounded-lg shadow-md flex items-start space-x-4 hover:bg-gray-800 transition-all duration-300">
          <FaUsers className="text-green-500 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Community Driven</h3>
            <p className="text-sm text-gray-400">
              Join the MIT family and be part of a thriving student community.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400">
        <p className="text-sm">
          Trusted by thousands of students across the globe. Experience
          convenience and quality like never before.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-blue-500" />
            <p className="text-sm">100+ Packages Available</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-purple-500" />
            <p className="text-sm">20+ Exclusive Discounts</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" />
            <p className="text-sm">5K+ Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;