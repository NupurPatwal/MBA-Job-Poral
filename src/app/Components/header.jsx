
import Image from "next/image";
"use client";
import Image from "next/image";
iimport { FaBookmark, FaEye, FaBell } from "react-icons/fa";
import Image from "next/image";

import Image from "next/image";
const Header = () => {
import Image from "next/image";
  return (
import Image from "next/image";
    <div className="bg-teal-700 text-white flex justify-between items-center p-4 rounded-xl">
import Image from "next/image";
      {/* Left Side: Welcome Message */}
import Image from "next/image";
      <div className="flex items-center space-x-2">
import Image from "next/image";
        {/* Hamburger Icon (Only on Mobile) */}
import Image from "next/image";
        <button className="md:hidden p-2 text-white text-2xl">
import Image from "next/image";
          ☰ {/* Menu Icon */}
import Image from "next/image";
        </button>
import Image from "next/image";

import Image from "next/image";
        <div className="flex flex-col">
import Image from "next/image";
          <p className="text-sm font-medium whitespace-nowrap">
import Image from "next/image";
            Welcome <span className="font-bold">Divya Sain</span> 👋
import Image from "next/image";
          </p>
import Image from "next/image";
          <p className="text-xs hidden sm:block">
import Image from "next/image";
            Here&apos;s what&apos;s happening with you today.
import Image from "next/image";
          </p>
import Image from "next/image";
        </div>
import Image from "next/image";
      </div>
import Image from "next/image";

import Image from "next/image";
      {/* Right Side: Icons & Profile */}
import Image from "next/image";
      <div className="flex items-center space-x-3 md:space-x-4">
import Image from "next/image";
        {/* Hide some icons on small screens */}
import Image from "next/image";
        <FaBookmark className="text-lg cursor-pointer hover:text-gray-200 hidden sm:block" />
import Image from "next/image";
        <FaEye className="text-lg cursor-pointer hover:text-gray-200 hidden sm:block" />
import Image from "next/image";
        <FaBell className="text-lg cursor-pointer hover:text-gray-200" />
import Image from "next/image";

import Image from "next/image";
        {/* Profile Image */}
import Image from "next/image";
        <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center border border-white overflow-hidden">
import Image from "next/image";
          <Image
import Image from "next/image";
            src="user.png"
import Image from "next/image";
            alt="User"
import Image from "next/image";
            className="h-full w-full object-cover"
import Image from "next/image";
            onError={(e) => (e.target.style.display = "none")}
import Image from "next/image";
          />
import Image from "next/image";
        </div>
import Image from "next/image";
      </div>
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default Header;