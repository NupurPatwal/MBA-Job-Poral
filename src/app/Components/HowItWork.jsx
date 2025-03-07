
import Image from "next/image";
iimport React from "react";
import Image from "next/image";

import Image from "next/image";
const HowItWork = () => {
import Image from "next/image";
  const steps = [
import Image from "next/image";
    {
import Image from "next/image";
      icon: "👤", // Replace with actual SVG or icon component if needed
import Image from "next/image";
      title: "Create Account",
import Image from "next/image";
      description: "Create account & unlock opportunities!",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      icon: "📤",
import Image from "next/image";
      title: "Upload Resume",
import Image from "next/image";
      description: "Upload resume & get hired!",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      icon: "🔎",
import Image from "next/image";
      title: "Find Jobs",
import Image from "next/image";
      description: "Find jobs, apply easily, and grow your career fast!",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      icon: "✅",
import Image from "next/image";
      title: "Apply Job",
import Image from "next/image";
      description: "Apply for jobs and get hired!",
import Image from "next/image";
    },
import Image from "next/image";
  ];
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <section className="bg-white py-12 px-6 md:px-12 font-sans text-center">
import Image from "next/image";
      <div className="max-w-6xl mx-auto">
import Image from "next/image";
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
import Image from "next/image";
          How it Works
import Image from "next/image";
        </h2>
import Image from "next/image";
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
import Image from "next/image";
          Finding your dream job has never been easier! Follow these simple
import Image from "next/image";
          steps to kickstart your career with Job Portal.
import Image from "next/image";
        </p>
import Image from "next/image";

import Image from "next/image";
        {/* Responsive Card Grid */}
import Image from "next/image";
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
import Image from "next/image";
          {steps.map((step, index) => (
import Image from "next/image";
            <div
import Image from "next/image";
              key={index}
import Image from "next/image";
              className="bg-gray-100 border rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center"
import Image from "next/image";
            >
import Image from "next/image";
              <div className="text-primaryGreen text-5xl mb-4">{step.icon}</div>
import Image from "next/image";
              <h3 className="text-lg font-semibold text-gray-800">
import Image from "next/image";
                {step.title}
import Image from "next/image";
              </h3>
import Image from "next/image";
              <p className="text-gray-600 mt-2 text-center">{step.description}</p>
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
export default HowItWork;