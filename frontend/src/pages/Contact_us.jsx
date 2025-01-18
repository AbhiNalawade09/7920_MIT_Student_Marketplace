"use client";

import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6 sm:px-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8">
        Get in Touch
      </h2>
      <p className="text-center text-lg text-gray-400 mb-12">
        Have questions about MIT Student Marketplace? We're here to help!
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                MIT Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your MIT email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-4 py-2 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Billing</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-4" />
              <span>MIT Campus, Cambridge, MA</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-4" />
              <span>support@mitstudentmarket.mit.edu</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-blue-500 mr-4" />
              <span>(617) 555-0123</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-6">Hours of Operation</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-6">Connect With Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-500 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
