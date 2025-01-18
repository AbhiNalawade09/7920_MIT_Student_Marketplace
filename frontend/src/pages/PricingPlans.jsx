import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingPlans = () => {
  return (
    <div className="bg-gray-50  flex flex-col items-center py-10 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
        MIT Marketplace
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl">
        Curated bundles tailored for MIT students' needs
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Starter Package */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            Starter Package
          </h2>
          <p className="text-3xl font-bold text-gray-800 mb-4">
            $499<span className="text-lg font-normal">/package</span>
          </p>
          <ul className="space-y-2">
            <li className="text-gray-600 flex items-center">
              <FaCheckCircle className="text-blue-500 mr-2" /> Basic Kitchen
              Essentials
            </li>
            <li className="text-gray-600 flex items-center">
              <FaCheckCircle className="text-blue-500 mr-2" /> Bedding Set
            </li>
            <li className="text-gray-600 flex items-center">
              <FaCheckCircle className="text-blue-500 mr-2" /> Study Lamp
            </li>
          </ul>
          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
            Select Package
          </button>
        </div>

        {/* Premium Package */}
        <div className="bg-purple-50 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 relative">
          <span className="absolute top-0 right-0 bg-yellow-500 text-white text-sm font-bold px-2 py-1 rounded-bl-lg">
            Popular
          </span>
          <h2 className="text-xl font-semibold text-purple-600 mb-3">
            Premium Package
          </h2>
          <p className="text-3xl font-bold text-gray-800 mb-4">
            $899<span className="text-lg font-normal">/package</span>
          </p>
          <ul className="space-y-2">
            <li className="text-gray-600 flex items-center">
              <FaCheckCircle className="text-purple-500 mr-2" /> Everything in
              Starter
            </li>
            <li className="text-gray-600 flex items-center">
              <FaCheckCircle className="text-purple-500 mr-2" /> Mini
              Refrigerator
            </li>
            <li className="text-gray-600 flex items-center">
              <FaCheckCircle className="text-purple-500 mr-2" /> Microwave
            </li>
            <li className="text-gray-600 flex items-center">
              <FaCheckCircle className="text-purple-500 mr-2" /> Storage
              Solutions
            </li>
          </ul>
          <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all duration-300">
            Select Package
          </button>
        </div>

        {/* International Package */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold text-green-600 mb-3">
            International Package
          </h2>
          <p className="text-3xl font-bold text-gray-800 mb-4">
            $1299<span className="text-lg font-normal">/package</span>
          </p>
          <ul className="space-y-2">
            <li className="text-gray-600 flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Everything in
              Premium
            </li>
            <li className="text-gray-600 flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Voltage
              Converters
            </li>
            <li className="text-gray-600 flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Cultural
              Essentials
            </li>
            <li className="text-gray-600 flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> SIM Card Setup
            </li>
          </ul>
          <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300">
            Select Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;