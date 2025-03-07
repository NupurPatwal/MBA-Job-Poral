
mport Image from "next/image";
"use client";
mport Image from "next/image";
import { useState } from "react";
mport Image from "next/image";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
mport Image from "next/image";

mport Image from "next/image";
import React from "react";
mport Image from "next/image";

mport Image from "next/image";
const FaqSection = () => {
mport Image from "next/image";
  const [openFaq, setOpenFaq] = useState(1); // Default open FAQ item (first one)
mport Image from "next/image";

mport Image from "next/image";
  const toggleFaq = (id) => {
mport Image from "next/image";
    setOpenFaq(openFaq === id ? null : id);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const faqs = [
mport Image from "next/image";
    {
mport Image from "next/image";
      id: 1,
mport Image from "next/image";
      question: "Can I upload a CV?",
mport Image from "next/image";
      answer:
mport Image from "next/image";
        "Yes! You can upload your CV to showcase your skills and experience, making it easier for recruiters to find you.",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      id: 2,
mport Image from "next/image";
      question: "How long will the recruitment process take?",
mport Image from "next/image";
      answer:
mport Image from "next/image";
        "The recruitment process duration varies depending on the job role, company, and the number of applications received.",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      id: 3,
mport Image from "next/image";
      question: "Do you recruit for Graduates, Apprentices and Students?",
mport Image from "next/image";
      answer:
mport Image from "next/image";
        "Yes, we provide opportunities for graduates, apprentices, and students to find suitable roles.",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      id: 4,
mport Image from "next/image";
      question: "What does the recruitment and selection process involve?",
mport Image from "next/image";
      answer:
mport Image from "next/image";
        "Our recruitment process typically includes application screening, assessments, interviews, and final selection.",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      id: 5,
mport Image from "next/image";
      question:
mport Image from "next/image";
        "Can I receive notifications for any future jobs that may interest me?",
mport Image from "next/image";
      answer:
mport Image from "next/image";
        "Yes, you can set up job alerts to receive notifications for jobs that match your preferences.",
mport Image from "next/image";
    },
mport Image from "next/image";
  ];
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
mport Image from "next/image";
      <div className="max-w-4xl mx-auto">
mport Image from "next/image";
        {/* Heading */}
mport Image from "next/image";
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
mport Image from "next/image";
          Frequently Asked Questions
mport Image from "next/image";
        </h2>
mport Image from "next/image";
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
mport Image from "next/image";
          Find answers to common job portal queries below
mport Image from "next/image";
        </p>
mport Image from "next/image";

mport Image from "next/image";
        {/* FAQ Items */}
mport Image from "next/image";
        <div className="space-y-4">
mport Image from "next/image";
          {faqs.map((faq) => (
mport Image from "next/image";
            <div
mport Image from "next/image";
              key={faq.id}
mport Image from "next/image";
              className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 
mport Image from "next/image";
                ${openFaq === faq.id ? "bg-primaryGreen bg-opacity-10" : ""}`}
mport Image from "next/image";
            >
mport Image from "next/image";
              {/* Question Button */}
mport Image from "next/image";
              <button
mport Image from "next/image";
                onClick={() => toggleFaq(faq.id)}
mport Image from "next/image";
                className="w-full flex items-center justify-between px-4 py-3 text-left focus:outline-none transition-all duration-300"
mport Image from "next/image";
              >
mport Image from "next/image";
                <div className="flex items-center space-x-3">
mport Image from "next/image";
                  <span className="font-bold text-lg text-gray-800">0{faq.id}</span>
mport Image from "next/image";
                  <span
mport Image from "next/image";
                    className={`font-semibold transition-colors duration-300 ${
mport Image from "next/image";
                      openFaq === faq.id ? "text-primaryGreen" : "text-gray-800"
mport Image from "next/image";
                    }`}
mport Image from "next/image";
                  >
mport Image from "next/image";
                    {faq.question}
mport Image from "next/image";
                  </span>
mport Image from "next/image";
                </div>
mport Image from "next/image";
                {openFaq === faq.id ? (
mport Image from "next/image";
                  <MinusCircleIcon className="w-6 h-6 text-primaryGreen transition-transform transform rotate-180" />
mport Image from "next/image";
                ) : (
mport Image from "next/image";
                  <PlusCircleIcon className="w-6 h-6 text-primaryGreen transition-transform transform rotate-0" />
mport Image from "next/image";
                )}
mport Image from "next/image";
              </button>
mport Image from "next/image";

mport Image from "next/image";
              {/* Answer Section */}
mport Image from "next/image";
              {openFaq === faq.id && faq.answer && (
mport Image from "next/image";
                <div className="px-4 pb-4 text-gray-700 text-sm sm:text-base">
mport Image from "next/image";
                  {faq.answer}
mport Image from "next/image";
                </div>
mport Image from "next/image";
              )}
mport Image from "next/image";
            </div>
mport Image from "next/image";
          ))}
mport Image from "next/image";
        </div>
mport Image from "next/image";
      </div>
mport Image from "next/image";
    </section>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default FaqSection;