
import Image from "next/image";
"use client";
import Image from "next/image";
iimport { useState } from "react";
import Image from "next/image";
iimport { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import Image from "next/image";
iimport React from "react";
import Image from "next/image";

import Image from "next/image";
const FaqSection = () => {
import Image from "next/image";
  const [openFaq, setOpenFaq] = useState(1); // Default open FAQ item (first one)
import Image from "next/image";

import Image from "next/image";
  const toggleFaq = (id) => {
import Image from "next/image";
    setOpenFaq(openFaq === id ? null : id);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const faqs = [
import Image from "next/image";
    {
import Image from "next/image";
      id: 1,
import Image from "next/image";
      question: "Can I upload a CV?",
import Image from "next/image";
      answer:
import Image from "next/image";
        "Yes! You can upload your CV to showcase your skills and experience, making it easier for recruiters to find you.",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      id: 2,
import Image from "next/image";
      question: "How long will the recruitment process take?",
import Image from "next/image";
      answer:
import Image from "next/image";
        "The recruitment process duration varies depending on the job role, company, and the number of applications received.",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      id: 3,
import Image from "next/image";
      question: "Do you recruit for Graduates, Apprentices and Students?",
import Image from "next/image";
      answer:
import Image from "next/image";
        "Yes, we provide opportunities for graduates, apprentices, and students to find suitable roles.",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      id: 4,
import Image from "next/image";
      question: "What does the recruitment and selection process involve?",
import Image from "next/image";
      answer:
import Image from "next/image";
        "Our recruitment process typically includes application screening, assessments, interviews, and final selection.",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      id: 5,
import Image from "next/image";
      question:
import Image from "next/image";
        "Can I receive notifications for any future jobs that may interest me?",
import Image from "next/image";
      answer:
import Image from "next/image";
        "Yes, you can set up job alerts to receive notifications for jobs that match your preferences.",
import Image from "next/image";
    },
import Image from "next/image";
  ];
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
import Image from "next/image";
      <div className="max-w-4xl mx-auto">
import Image from "next/image";
        {/* Heading */}
import Image from "next/image";
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
import Image from "next/image";
          Frequently Asked Questions
import Image from "next/image";
        </h2>
import Image from "next/image";
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
import Image from "next/image";
          Find answers to common job portal queries below
import Image from "next/image";
        </p>
import Image from "next/image";

import Image from "next/image";
        {/* FAQ Items */}
import Image from "next/image";
        <div className="space-y-4">
import Image from "next/image";
          {faqs.map((faq) => (
import Image from "next/image";
            <div
import Image from "next/image";
              key={faq.id}
import Image from "next/image";
              className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 
import Image from "next/image";
                ${openFaq === faq.id ? "bg-primaryGreen bg-opacity-10" : ""}`}
import Image from "next/image";
            >
import Image from "next/image";
              {/* Question Button */}
import Image from "next/image";
              <button
import Image from "next/image";
                onClick={() => toggleFaq(faq.id)}
import Image from "next/image";
                className="w-full flex items-center justify-between px-4 py-3 text-left focus:outline-none transition-all duration-300"
import Image from "next/image";
              >
import Image from "next/image";
                <div className="flex items-center space-x-3">
import Image from "next/image";
                  <span className="font-bold text-lg text-gray-800">0{faq.id}</span>
import Image from "next/image";
                  <span
import Image from "next/image";
                    className={`font-semibold transition-colors duration-300 ${
import Image from "next/image";
                      openFaq === faq.id ? "text-primaryGreen" : "text-gray-800"
import Image from "next/image";
                    }`}
import Image from "next/image";
                  >
import Image from "next/image";
                    {faq.question}
import Image from "next/image";
                  </span>
import Image from "next/image";
                </div>
import Image from "next/image";
                {openFaq === faq.id ? (
import Image from "next/image";
                  <MinusCircleIcon className="w-6 h-6 text-primaryGreen transition-transform transform rotate-180" />
import Image from "next/image";
                ) : (
import Image from "next/image";
                  <PlusCircleIcon className="w-6 h-6 text-primaryGreen transition-transform transform rotate-0" />
import Image from "next/image";
                )}
import Image from "next/image";
              </button>
import Image from "next/image";

import Image from "next/image";
              {/* Answer Section */}
import Image from "next/image";
              {openFaq === faq.id && faq.answer && (
import Image from "next/image";
                <div className="px-4 pb-4 text-gray-700 text-sm sm:text-base">
import Image from "next/image";
                  {faq.answer}
import Image from "next/image";
                </div>
import Image from "next/image";
              )}
import Image from "next/image";
            </div>
import Image from "next/image";
          ))}
import Image from "next/image";
        </div>
import Image from "next/image";
      </div>
import Image from "next/image";
    </section>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default FaqSection;