
mport Image from "next/image";
"use client";
mport Image from "next/image";
import React from "react";
mport Image from "next/image";
import { FaRegBookmark, FaBell } from "react-icons/fa";
mport Image from "next/image";
import { BsToggleOn } from "react-icons/bs";
mport Image from "next/image";
import Image from "next/image";
mport Image from "next/image";

mport Image from "next/image";
const Nav = () => {
mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="bg-teal-600 p-4 w-full flex flex-wrap justify-between items-center rounded-xl shadow-md text-white">
mport Image from "next/image";
      {/* Left Section */}
mport Image from "next/image";
      <div className="mb-2 sm:mb-0">
mport Image from "next/image";
        <p className="text-sm font-medium">Welcome, Divya Sain 👋</p>
mport Image from "next/image";
        <p className="text-xs">Here’s what happening with you today.</p>
mport Image from "next/image";
      </div>
mport Image from "next/image";

mport Image from "next/image";
      {/* Right Section */}
mport Image from "next/image";
      <div className="flex items-center space-x-4">
mport Image from "next/image";
        <FaRegBookmark className="text-lg cursor-pointer" />
mport Image from "next/image";
        <BsToggleOn className="text-2xl cursor-pointer" />
mport Image from "next/image";
        <FaBell className="text-lg cursor-pointer" />
mport Image from "next/image";

mport Image from "next/image";
        {/* Profile Image */}
mport Image from "next/image";
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
mport Image from "next/image";
          <Image
mport Image from "next/image";
            src="/logo.jpg" // Ensure this is the correct path
mport Image from "next/image";
            alt="Profile"
mport Image from "next/image";
            width={40}
mport Image from "next/image";
            height={40}
mport Image from "next/image";
            className="object-cover"
mport Image from "next/image";
          />
mport Image from "next/image";
        </div>
mport Image from "next/image";
      </div>
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default Nav;
