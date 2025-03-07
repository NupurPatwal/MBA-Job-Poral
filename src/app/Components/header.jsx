
mport Image from "next/image";
"use client";
mport Image from "next/image";
import { FaBookmark, FaEye, FaBell } from "react-icons/fa";
mport Image from "next/image";

mport Image from "next/image";
const Header = () => {
mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="bg-teal-700 text-white flex justify-between items-center p-4 rounded-xl">
mport Image from "next/image";
      {/* Left Side: Welcome Message */}
mport Image from "next/image";
      <div className="flex items-center space-x-2">
mport Image from "next/image";
        {/* Hamburger Icon (Only on Mobile) */}
mport Image from "next/image";
        <button className="md:hidden p-2 text-white text-2xl">
mport Image from "next/image";
          ☰ {/* Menu Icon */}
mport Image from "next/image";
        </button>
mport Image from "next/image";

mport Image from "next/image";
        <div className="flex flex-col">
mport Image from "next/image";
          <p className="text-sm font-medium whitespace-nowrap">
mport Image from "next/image";
            Welcome <span className="font-bold">Divya Sain</span> 👋
mport Image from "next/image";
          </p>
mport Image from "next/image";
          <p className="text-xs hidden sm:block">
mport Image from "next/image";
            Here&apos;s what&apos;s happening with you today.
mport Image from "next/image";
          </p>
mport Image from "next/image";
        </div>
mport Image from "next/image";
      </div>
mport Image from "next/image";

mport Image from "next/image";
      {/* Right Side: Icons & Profile */}
mport Image from "next/image";
      <div className="flex items-center space-x-3 md:space-x-4">
mport Image from "next/image";
        {/* Hide some icons on small screens */}
mport Image from "next/image";
        <FaBookmark className="text-lg cursor-pointer hover:text-gray-200 hidden sm:block" />
mport Image from "next/image";
        <FaEye className="text-lg cursor-pointer hover:text-gray-200 hidden sm:block" />
mport Image from "next/image";
        <FaBell className="text-lg cursor-pointer hover:text-gray-200" />
mport Image from "next/image";

mport Image from "next/image";
        {/* Profile Image */}
mport Image from "next/image";
        <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center border border-white overflow-hidden">
mport Image from "next/image";
          <Image
mport Image from "next/image";
            src="user.png"
mport Image from "next/image";
            alt="User"
mport Image from "next/image";
            className="h-full w-full object-cover"
mport Image from "next/image";
            onError={(e) => (e.target.style.display = "none")}
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
export default Header;