
import Image from "next/image";
"use client";
import Image from "next/image";
iimport React, { useState } from "react";
import Image from "next/image";
iimport User from "../Components/Userdetails";
import Image from "next/image";
iimport Nav from "../Components/out";
import Image from "next/image";
iimport PaymentStatus from "../Components/Lastone";
import Image from "next/image";
iimport Side from "../Components/Emailx";
import Image from "next/image";
iimport { FaBars } from "react-icons/fa";
import Image from "next/image";

import Image from "next/image";
const UserManagementPage = () => {
import Image from "next/image";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="flex flex-col md:flex-row min-h-screen">
import Image from "next/image";
      {/* Sidebar (Hidden on mobile, toggles open) */}
import Image from "next/image";
      <div
import Image from "next/image";
        className={`fixed inset-y-0 left-0 z-50 bg-white shadow-lg transform ${
import Image from "next/image";
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
import Image from "next/image";
        } transition-transform duration-300 md:relative md:translate-x-0 md:w-1/4 lg:w-1/5`}
import Image from "next/image";
      >
import Image from "next/image";
        <Side />
import Image from "next/image";
      </div>
import Image from "next/image";

import Image from "next/image";
      {/* Main Content Area */}
import Image from "next/image";
      <div className="flex-1 p-4 md:pl-6">
import Image from "next/image";
        {/* Navbar + Sidebar Toggle Button */}
import Image from "next/image";
        <div className="flex justify-between items-center mb-4">
import Image from "next/image";
          {/* Mobile Menu Button */}
import Image from "next/image";
          <button
import Image from "next/image";
            className="md:hidden text-gray-700 focus:outline-none"
import Image from "next/image";
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
import Image from "next/image";
          >
import Image from "next/image";
            <FaBars className="text-2xl" />
import Image from "next/image";
          </button>
import Image from "next/image";
          <Nav />
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Main Components */}
import Image from "next/image";
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
import Image from "next/image";
          <User />
import Image from "next/image";
          <PaymentStatus />
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
export default UserManagementPage;
