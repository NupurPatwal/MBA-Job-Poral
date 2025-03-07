
mport Image from "next/image";
"use client";
mport Image from "next/image";
import React, { useState } from "react";
mport Image from "next/image";
import { 
mport Image from "next/image";
  FaTachometerAlt, FaUsersCog, FaBriefcase, FaCreditCard, FaBlog, FaSearch, 
mport Image from "next/image";
  FaQuestionCircle, FaFileAlt, FaEnvelope, FaCog, FaTicketAlt, FaQuestion, 
mport Image from "next/image";
  FaSignOutAlt, FaBars, FaTimes 
mport Image from "next/image";
} from "react-icons/fa";
mport Image from "next/image";

mport Image from "next/image";
const Side = () => {
mport Image from "next/image";
  const [isHelpOpen, setIsHelpOpen] = useState(false);
mport Image from "next/image";
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Controls sidebar visibility
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="relative">
mport Image from "next/image";
      {/* Mobile Menu Button */}
mport Image from "next/image";
      <button 
mport Image from "next/image";
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
mport Image from "next/image";
        className="sm:hidden absolute top-4 left-4 z-50 p-2 bg-teal-600 text-white rounded-md"
mport Image from "next/image";
      >
mport Image from "next/image";
        {isSidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
mport Image from "next/image";
      </button>
mport Image from "next/image";

mport Image from "next/image";
      {/* Sidebar */}
mport Image from "next/image";
      <div className={`fixed sm:relative bg-teal-600 text-white p-4 h-screen transition-transform duration-300 
mport Image from "next/image";
        ${isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-0"} sm:w-64 sm:translate-x-0`}
mport Image from "next/image";
      >
mport Image from "next/image";
        {/* Logo */}
mport Image from "next/image";
        <div className="flex items-center text-lg font-bold mb-6">
mport Image from "next/image";
          <span className="mr-2">💼</span> JOB PORTAL
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Menu Items */}
mport Image from "next/image";
        <nav className="flex flex-col space-y-4">
mport Image from "next/image";
          <a href="#" className="flex items-center space-x-2 hover:opacity-75">
mport Image from "next/image";
            <FaTachometerAlt />
mport Image from "next/image";
            <span>Dashboard</span>
mport Image from "next/image";
          </a>
mport Image from "next/image";
          <a href="#" className="flex items-center space-x-2 hover:opacity-75">
mport Image from "next/image";
            <FaUsersCog />
mport Image from "next/image";
            <span>User Management</span>
mport Image from "next/image";
          </a>
mport Image from "next/image";
          <a href="#" className="flex items-center space-x-2 hover:opacity-75">
mport Image from "next/image";
            <FaBriefcase />
mport Image from "next/image";
            <span>Job Management</span>
mport Image from "next/image";
          </a>
mport Image from "next/image";
          <a href="#" className="flex items-center space-x-2 hover:opacity-75">
mport Image from "next/image";
            <FaCreditCard />
mport Image from "next/image";
            <span>Payment</span>
mport Image from "next/image";
          </a>
mport Image from "next/image";
          <a href="#" className="flex items-center space-x-2 hover:opacity-75">
mport Image from "next/image";
            <FaBlog />
mport Image from "next/image";
            <span>Blog</span>
mport Image from "next/image";
          </a>
mport Image from "next/image";
          <a href="#" className="flex items-center space-x-2 hover:opacity-75">
mport Image from "next/image";
            <FaSearch />
mport Image from "next/image";
            <span>Job Search</span>
mport Image from "next/image";
          </a>
mport Image from "next/image";

mport Image from "next/image";
          {/* Help and Support Section */}
mport Image from "next/image";
          <button 
mport Image from "next/image";
            onClick={() => setIsHelpOpen(!isHelpOpen)} 
mport Image from "next/image";
            className="flex items-center justify-between w-full text-left hover:opacity-75"
mport Image from "next/image";
          >
mport Image from "next/image";
            <div className="flex items-center space-x-2">
mport Image from "next/image";
              <FaQuestionCircle />
mport Image from "next/image";
              <span>Help & Support</span>
mport Image from "next/image";
            </div>
mport Image from "next/image";
            <span>{isHelpOpen ? "▲" : "▼"}</span>
mport Image from "next/image";
          </button>
mport Image from "next/image";
          {isHelpOpen && (
mport Image from "next/image";
            <div className="flex flex-col space-y-2 mt-2 ml-4">
mport Image from "next/image";
              <a href="#" className="flex items-center space-x-2 hover:opacity-75">
mport Image from "next/image";
                <FaFileAlt />
mport Image from "next/image";
                <span>Reports</span>
mport Image from "next/image";
              </a>
mport Image from "next/image";
              <a href="#" className="flex items-center space-x-2 hover:opacity-75">
mport Image from "next/image";
                <FaEnvelope />
mport Image from "next/image";
                <span>Email Support</span>
mport Image from "next/image";
              </a>
mport Image from "next/image";
              <a href="#" className="flex items-center space-x-2 hover:opacity-75">
mport Image from "next/image";
                <FaCog />
mport Image from "next/image";
                <span>Settings</span>
mport Image from "next/image";
              </a>
mport Image from "next/image";
              <a href="#" className="flex items-center space-x-2 hover:opacity-75">
mport Image from "next/image";
                <FaTicketAlt />
mport Image from "next/image";
                <span>Support Ticket</span>
mport Image from "next/image";
              </a>
mport Image from "next/image";
              <a href="#" className="flex items-center space-x-2 hover:opacity-75">
mport Image from "next/image";
                <FaQuestion />
mport Image from "next/image";
                <span>FAQ</span>
mport Image from "next/image";
              </a>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          )}
mport Image from "next/image";

mport Image from "next/image";
          {/* Logout Button */}
mport Image from "next/image";
          <div className="flex justify-center items-center mt-6">
mport Image from "next/image";
            <button className="bg-gray-300 hover:bg-gray-400 p-4 rounded-2xl flex items-center justify-center w-32 h-16 shadow-lg">
mport Image from "next/image";
              <FaSignOutAlt className="text-black text-2xl" />
mport Image from "next/image";
            </button>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </nav>
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
export default Side;
