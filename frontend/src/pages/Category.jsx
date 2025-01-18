import React from "react";
import { FaUtensils, FaCouch, FaTv, FaBoxOpen } from "react-icons/fa";

const Category = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
        Shop by Categories
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Browse through our curated collection of essential items
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Kitchen Appliances */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
          <FaUtensils className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800">
            Kitchen Appliances
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Essential cooking equipment for your dorm life
          </p>
          <p className="text-sm text-gray-500 mb-4">Starting from $49</p>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300">
            Browse Kitchen
          </button>
        </div>

        {/* Furniture */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
          <FaCouch className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800">Furniture</h3>
          <p className="text-gray-600 text-sm mb-4">
            Comfortable and space-saving solutions
          </p>
          <p className="text-sm text-gray-500 mb-4">Starting from $99</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
            Browse Furniture
          </button>
        </div>

        {/* Electronics */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
          <FaTv className="text-purple-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800">Electronics</h3>
          <p className="text-gray-600 text-sm mb-4">
            Study and entertainment essentials
          </p>
          <p className="text-sm text-gray-500 mb-4">Starting from $149</p>
          <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-all duration-300">
            Browse Electronics
          </button>
        </div>

        {/* Storage Solutions */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
          <FaBoxOpen className="text-green-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800">
            Storage Solutions
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Maximize your living space
          </p>
          <p className="text-sm text-gray-500 mb-4">Starting from $29</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-300">
            Browse Storage
          </button>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition-all duration-300">
          View All Categories →
        </button>
      </div>
    </div>
  );
};

export default Category;