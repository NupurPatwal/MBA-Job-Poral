
import Image from "next/image";
iimport React from "react";
import Image from "next/image";

import Image from "next/image";
const VideoSection = () => {
import Image from "next/image";
  const footerItems = [
import Image from "next/image";
    {
import Image from "next/image";
      number: "1",
import Image from "next/image";
      title: "Success Stories & Hired Candidates",
import Image from "next/image";
      linkText: "Learn more",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      number: "2",
import Image from "next/image";
      title: "Career Resources & Mentorship",
import Image from "next/image";
      linkText: "Learn more",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      number: "3",
import Image from "next/image";
      title: "Call-to-Action - User signing up on the platform",
import Image from "next/image";
      linkText: "Learn more",
import Image from "next/image";
    },
import Image from "next/image";
  ];
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <section
import Image from "next/image";
      className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[632px] bg-cover bg-center flex items-center justify-center text-center text-white px-4"
import Image from "next/image";
      style={{ backgroundImage: "url('./VideoS.avif')" }}
import Image from "next/image";
    >
import Image from "next/image";
      {/* Dark Overlay */}
import Image from "next/image";
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
import Image from "next/image";

import Image from "next/image";
      {/* Center Content - Play Button + Heading Text */}
import Image from "next/image";
      <div className="relative z-10 flex flex-col items-center space-y-6">
import Image from "next/image";
        {/* Play Button */}
import Image from "next/image";
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primaryGreen text-white flex items-center justify-center rounded-full cursor-pointer text-lg sm:text-xl">
import Image from "next/image";
          ▶
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Main Heading - Responsive */}
import Image from "next/image";
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
import Image from "next/image";
          Good Life Begins With <br /> A Good Company
import Image from "next/image";
        </h2>
import Image from "next/image";
      </div>
import Image from "next/image";

import Image from "next/image";
      {/* Footer Section - Info Cards */}
import Image from "next/image";
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 py-4">
import Image from "next/image";
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12">
import Image from "next/image";
          {footerItems.map((item, index) => (
import Image from "next/image";
            <div key={index} className="flex items-start space-x-3">
import Image from "next/image";
              {/* Number Circle */}
import Image from "next/image";
              <div className="w-8 h-8 bg-primaryGreen text-white flex items-center justify-center rounded-full font-bold">
import Image from "next/image";
                {item.number}
import Image from "next/image";
              </div>
import Image from "next/image";
              {/* Text Section */}
import Image from "next/image";
              <div>
import Image from "next/image";
                <h3 className="font-semibold text-white text-sm sm:text-base">
import Image from "next/image";
                  {item.title}
import Image from "next/image";
                </h3>
import Image from "next/image";
                <p className="text-xs sm:text-sm text-gray-300">
import Image from "next/image";
                  {item.linkText}
import Image from "next/image";
                </p>
import Image from "next/image";
              </div>
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
export default VideoSection;