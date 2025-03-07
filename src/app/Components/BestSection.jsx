
mport Image from "next/image";
import { Briefcase, Building, FileText, Users } from "lucide-react";
mport Image from "next/image";
import React from "react";
mport Image from "next/image";

mport Image from "next/image";
const BestSection = () => {
mport Image from "next/image";
  return (
mport Image from "next/image";
    <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10">
mport Image from "next/image";
      {/* Left Side - Images Grid */}
mport Image from "next/image";
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
mport Image from "next/image";
        <div
mport Image from "next/image";
          className="h-40 sm:h-52 md:h-64 bg-gray-300 rounded-xl bg-cover bg-center"
mport Image from "next/image";
          style={{ backgroundImage: "url('/bestSec_one.avif')" }}
mport Image from "next/image";
        ></div>
mport Image from "next/image";
        <div
mport Image from "next/image";
          className="h-40 sm:h-52 md:h-64 bg-gray-300 rounded-xl bg-cover bg-center"
mport Image from "next/image";
          style={{ backgroundImage: "url('/best_sec.avif')" }}
mport Image from "next/image";
        ></div>
mport Image from "next/image";
        <div
mport Image from "next/image";
          className="h-40 sm:h-52 md:h-64 bg-gray-300 rounded-xl col-span-2 bg-cover bg-center"
mport Image from "next/image";
          style={{ backgroundImage: "url('/best_copy.avif')" }}
mport Image from "next/image";
        ></div>
mport Image from "next/image";
      </div>
mport Image from "next/image";

mport Image from "next/image";
      {/* Right Side - Text & Icons */}
mport Image from "next/image";
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
mport Image from "next/image";
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug">
mport Image from "next/image";
          We’re Only Working <br className="hidden sm:block" /> With The Best
mport Image from "next/image";
        </h2>
mport Image from "next/image";
        <p className="text-gray-600 text-sm sm:text-base">
mport Image from "next/image";
          We connect top talent with leading employers, ensuring only the best
mport Image from "next/image";
          opportunities for ambitious professionals like you.
mport Image from "next/image";
        </p>
mport Image from "next/image";

mport Image from "next/image";
        <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6">
mport Image from "next/image";
          {/* Quality Job */}
mport Image from "next/image";
          <div className="flex items-center space-x-3">
mport Image from "next/image";
            <Briefcase className="w-5 sm:w-6 h-5 sm:h-6 text-primaryGreen" />
mport Image from "next/image";
            <span className="text-black font-medium text-sm sm:text-base">Quality Job</span>
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          {/* Resume Builder */}
mport Image from "next/image";
          <div className="flex items-center space-x-3">
mport Image from "next/image";
            <FileText className="w-5 sm:w-6 h-5 sm:h-6 text-primaryGreen" />
mport Image from "next/image";
            <span className="text-black font-medium text-sm sm:text-base">Resume Builder</span>
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          {/* Top Companies */}
mport Image from "next/image";
          <div className="flex items-center space-x-3">
mport Image from "next/image";
            <Building className="w-5 sm:w-6 h-5 sm:h-6 text-primaryGreen" />
mport Image from "next/image";
            <span className="text-black font-medium text-sm sm:text-base">Top Companies</span>
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          {/* Top Talents */}
mport Image from "next/image";
          <div className="flex items-center space-x-3">
mport Image from "next/image";
            <Users className="w-5 sm:w-6 h-5 sm:h-6 text-primaryGreen" />
mport Image from "next/image";
            <span className="text-black font-medium text-sm sm:text-base">Top Talents</span>
mport Image from "next/image";
          </div>
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
export default BestSection;