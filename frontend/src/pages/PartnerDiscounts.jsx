import React from "react";
import { FaShoppingCart, FaTag, FaStore, FaCouch } from "react-icons/fa";

const PartnerDiscounts = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-green-50 py-16 px-6 sm:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-300 opacity-10 pointer-events-none"></div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-6">
        Partner Discounts
      </h2>
      <p className="text-lg text-gray-600 text-center mb-10">
        We've partnered with top vendors to bring you exclusive deals
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* IKEA */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-500 rounded-full mx-auto mb-4">
            <FaCouch className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">IKEA</h3>
          <p className="text-gray-600 text-lg font-semibold">15% Off</p>
        </div>

        {/* Target */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-500 rounded-full mx-auto mb-4">
            <FaTag className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Target</h3>
          <p className="text-gray-600 text-lg font-semibold">20% Off</p>
        </div>

        {/* Best Buy */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-500 rounded-full mx-auto mb-4">
            <FaShoppingCart className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Best Buy</h3>
          <p className="text-gray-600 text-lg font-semibold">10% Off</p>
        </div>

        {/* Bed Bath & Beyond */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-500 rounded-full mx-auto mb-4">
            <FaStore className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Bed Bath & Beyond
          </h3>
          <p className="text-gray-600 text-lg font-semibold">25% Off</p>
        </div>
      </div>
    </div>
  );
};

export default PartnerDiscounts;
