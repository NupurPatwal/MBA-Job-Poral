
mport Image from "next/image";
import React from "react";
mport Image from "next/image";

mport Image from "next/image";
const HowItWork = () => {
mport Image from "next/image";
  const steps = [
mport Image from "next/image";
    {
mport Image from "next/image";
      icon: "👤", // Replace with actual SVG or icon component if needed
mport Image from "next/image";
      title: "Create Account",
mport Image from "next/image";
      description: "Create account & unlock opportunities!",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      icon: "📤",
mport Image from "next/image";
      title: "Upload Resume",
mport Image from "next/image";
      description: "Upload resume & get hired!",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      icon: "🔎",
mport Image from "next/image";
      title: "Find Jobs",
mport Image from "next/image";
      description: "Find jobs, apply easily, and grow your career fast!",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      icon: "✅",
mport Image from "next/image";
      title: "Apply Job",
mport Image from "next/image";
      description: "Apply for jobs and get hired!",
mport Image from "next/image";
    },
mport Image from "next/image";
  ];
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <section className="bg-white py-12 px-6 md:px-12 font-sans text-center">
mport Image from "next/image";
      <div className="max-w-6xl mx-auto">
mport Image from "next/image";
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
mport Image from "next/image";
          How it Works
mport Image from "next/image";
        </h2>
mport Image from "next/image";
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
mport Image from "next/image";
          Finding your dream job has never been easier! Follow these simple
mport Image from "next/image";
          steps to kickstart your career with Job Portal.
mport Image from "next/image";
        </p>
mport Image from "next/image";

mport Image from "next/image";
        {/* Responsive Card Grid */}
mport Image from "next/image";
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
mport Image from "next/image";
          {steps.map((step, index) => (
mport Image from "next/image";
            <div
mport Image from "next/image";
              key={index}
mport Image from "next/image";
              className="bg-gray-100 border rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center"
mport Image from "next/image";
            >
mport Image from "next/image";
              <div className="text-primaryGreen text-5xl mb-4">{step.icon}</div>
mport Image from "next/image";
              <h3 className="text-lg font-semibold text-gray-800">
mport Image from "next/image";
                {step.title}
mport Image from "next/image";
              </h3>
mport Image from "next/image";
              <p className="text-gray-600 mt-2 text-center">{step.description}</p>
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
export default HowItWork;