
mport Image from "next/image";
"use client";
mport Image from "next/image";
import React, { useState } from "react";
mport Image from "next/image";
import User from "../Components/Userdetails";
mport Image from "next/image";
import Nav from "../Components/out";
mport Image from "next/image";
import PaymentStatus from "../Components/Lastone";
mport Image from "next/image";
import Side from "../Components/Emailx";
mport Image from "next/image";
import { FaBars } from "react-icons/fa";
mport Image from "next/image";

mport Image from "next/image";
const UserManagementPage = () => {
mport Image from "next/image";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="flex flex-col md:flex-row min-h-screen">
mport Image from "next/image";
      {/* Sidebar (Hidden on mobile, toggles open) */}
mport Image from "next/image";
      <div
mport Image from "next/image";
        className={`fixed inset-y-0 left-0 z-50 bg-white shadow-lg transform ${
mport Image from "next/image";
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
mport Image from "next/image";
        } transition-transform duration-300 md:relative md:translate-x-0 md:w-1/4 lg:w-1/5`}
mport Image from "next/image";
      >
mport Image from "next/image";
        <Side />
mport Image from "next/image";
      </div>
mport Image from "next/image";

mport Image from "next/image";
      {/* Main Content Area */}
mport Image from "next/image";
      <div className="flex-1 p-4 md:pl-6">
mport Image from "next/image";
        {/* Navbar + Sidebar Toggle Button */}
mport Image from "next/image";
        <div className="flex justify-between items-center mb-4">
mport Image from "next/image";
          {/* Mobile Menu Button */}
mport Image from "next/image";
          <button
mport Image from "next/image";
            className="md:hidden text-gray-700 focus:outline-none"
mport Image from "next/image";
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
mport Image from "next/image";
          >
mport Image from "next/image";
            <FaBars className="text-2xl" />
mport Image from "next/image";
          </button>
mport Image from "next/image";
          <Nav />
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Main Components */}
mport Image from "next/image";
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
mport Image from "next/image";
          <User />
mport Image from "next/image";
          <PaymentStatus />
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
export default UserManagementPage;
