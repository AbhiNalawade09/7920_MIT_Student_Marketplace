"use client";

import React, { useState } from "react";
// import faqImage from "../../public/faq-vector.png"; // Replace with your vector image path
import faqImage from "./faq-vector.png"



const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the MIT Marketplace?",
      answer:
        "MIT Marketplace is a one-stop shop for students to find curated packages tailored to their needs, including essentials for dorm life and more.",
    },
    {
      question: "How do I sign up?",
      answer:
        "You can sign up using your MIT email address to get access to exclusive student deals and offers.",
    },
    {
      question: "Are the packages customizable?",
      answer:
        "Yes, you can customize packages based on your specific needs and preferences.",
    },
    {
      question: "What is the return policy?",
      answer: "We offer a hassle-free 30-day return policy on all purchases.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 24/7 to assist you. You can reach us via email or phone.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Image */}
         
         
        <div className="flex items-center justify-center">
        {/* <img src="https://img.lovepik.com/png/20231009/Hand-drawn-cartoon-faq-business-plant-illustration-dai-social_136911_wh300.png" alt="Image" className="w-full h-auto"/>   */}

        <img src={faqImage}  alt="faq image" />
        </div>

        {/* Right Side - FAQs */}
        <div className="mt-20">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-300">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 text-lg font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
              >
                {faq.question}
                <span className="text-gray-500">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="py-2 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
