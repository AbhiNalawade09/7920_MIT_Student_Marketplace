import React from "react";
import {
  FaUserCheck,
  FaBoxOpen,
  FaCreditCard,
  FaClock,
  FaUndo,
  FaHeadset,
} from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-8">
        How It Works
      </h2>
      <p className="text-lg text-gray-600 text-center mb-12">
        Simple steps to get started with MIT Marketplace
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
        {/* Step 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-500 rounded-full mx-auto mb-6">
            <FaUserCheck className="text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Sign Up with MIT Email
          </h3>
          <p className="text-gray-600 mb-4">
            Create your account using your MIT email for exclusive access to
            student deals.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Quick verification →
          </a>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-500 rounded-full mx-auto mb-6">
            <FaBoxOpen className="text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Choose Your Package
          </h3>
          <p className="text-gray-600 mb-4">
            Select from our curated packages or customize based on your needs.
          </p>
          <a href="#" className="text-purple-600 font-semibold hover:underline">
            Personalized options →
          </a>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-500 rounded-full mx-auto mb-6">
            <FaCreditCard className="text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Easy Checkout
          </h3>
          <p className="text-gray-600 mb-4">
            Secure one-click checkout with multiple payment options.
          </p>
          <a href="#" className="text-green-600 font-semibold hover:underline">
            Instant confirmation →
          </a>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="bg-black text-white py-8 px-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-6">
          Additional Benefits
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mx-auto mb-4">
              <FaClock className="text-xl" />
            </div>
            <h4 className="text-lg font-bold mb-2">Free Next-Day Delivery</h4>
            <p className="text-gray-400 text-sm">
              Get your items delivered to your doorstep the very next day, free
              of charge.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-600 text-white rounded-full mx-auto mb-4">
              <FaUndo className="text-xl" />
            </div>
            <h4 className="text-lg font-bold mb-2">30-Day Returns</h4>
            <p className="text-gray-400 text-sm">
              Hassle-free returns within 30 days for a smooth shopping
              experience.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full mx-auto mb-4">
              <FaHeadset className="text-xl" />
            </div>
            <h4 className="text-lg font-bold mb-2">24/7 Support</h4>
            <p className="text-gray-400 text-sm">
              Our dedicated team is available around the clock to assist you
              with any queries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
