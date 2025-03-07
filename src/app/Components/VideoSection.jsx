
mport Image from "next/image";
import React from "react";
mport Image from "next/image";

mport Image from "next/image";
const VideoSection = () => {
mport Image from "next/image";
  const footerItems = [
mport Image from "next/image";
    {
mport Image from "next/image";
      number: "1",
mport Image from "next/image";
      title: "Success Stories & Hired Candidates",
mport Image from "next/image";
      linkText: "Learn more",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      number: "2",
mport Image from "next/image";
      title: "Career Resources & Mentorship",
mport Image from "next/image";
      linkText: "Learn more",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      number: "3",
mport Image from "next/image";
      title: "Call-to-Action - User signing up on the platform",
mport Image from "next/image";
      linkText: "Learn more",
mport Image from "next/image";
    },
mport Image from "next/image";
  ];
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <section
mport Image from "next/image";
      className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[632px] bg-cover bg-center flex items-center justify-center text-center text-white px-4"
mport Image from "next/image";
      style={{ backgroundImage: "url('./VideoS.avif')" }}
mport Image from "next/image";
    >
mport Image from "next/image";
      {/* Dark Overlay */}
mport Image from "next/image";
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
mport Image from "next/image";

mport Image from "next/image";
      {/* Center Content - Play Button + Heading Text */}
mport Image from "next/image";
      <div className="relative z-10 flex flex-col items-center space-y-6">
mport Image from "next/image";
        {/* Play Button */}
mport Image from "next/image";
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primaryGreen text-white flex items-center justify-center rounded-full cursor-pointer text-lg sm:text-xl">
mport Image from "next/image";
          ▶
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Main Heading - Responsive */}
mport Image from "next/image";
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
mport Image from "next/image";
          Good Life Begins With <br /> A Good Company
mport Image from "next/image";
        </h2>
mport Image from "next/image";
      </div>
mport Image from "next/image";

mport Image from "next/image";
      {/* Footer Section - Info Cards */}
mport Image from "next/image";
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 py-4">
mport Image from "next/image";
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12">
mport Image from "next/image";
          {footerItems.map((item, index) => (
mport Image from "next/image";
            <div key={index} className="flex items-start space-x-3">
mport Image from "next/image";
              {/* Number Circle */}
mport Image from "next/image";
              <div className="w-8 h-8 bg-primaryGreen text-white flex items-center justify-center rounded-full font-bold">
mport Image from "next/image";
                {item.number}
mport Image from "next/image";
              </div>
mport Image from "next/image";
              {/* Text Section */}
mport Image from "next/image";
              <div>
mport Image from "next/image";
                <h3 className="font-semibold text-white text-sm sm:text-base">
mport Image from "next/image";
                  {item.title}
mport Image from "next/image";
                </h3>
mport Image from "next/image";
                <p className="text-xs sm:text-sm text-gray-300">
mport Image from "next/image";
                  {item.linkText}
mport Image from "next/image";
                </p>
mport Image from "next/image";
              </div>
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
export default VideoSection;