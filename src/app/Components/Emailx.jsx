
import Image from "next/image";
"use client";
import Image from "next/image";
iimport React, { useState } from "react";
import Image from "next/image";
iimport { 
import Image from "next/image";
  FaTachometerAlt, FaUsersCog, FaBriefcase, FaCreditCard, FaBlog, FaSearch, 
import Image from "next/image";
  FaQuestionCircle, FaFileAlt, FaEnvelope, FaCog, FaTicketAlt, FaQuestion, 
import Image from "next/image";
  FaSignOutAlt, FaBars, FaTimes 
import Image from "next/image";
} from "react-icons/fa";
import Image from "next/image";

import Image from "next/image";
const Side = () => {
import Image from "next/image";
  const [isHelpOpen, setIsHelpOpen] = useState(false);
import Image from "next/image";
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Controls sidebar visibility
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="relative">
import Image from "next/image";
      {/* Mobile Menu Button */}
import Image from "next/image";
      <button 
import Image from "next/image";
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
import Image from "next/image";
        className="sm:hidden absolute top-4 left-4 z-50 p-2 bg-teal-600 text-white rounded-md"
import Image from "next/image";
      >
import Image from "next/image";
        {isSidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
import Image from "next/image";
      </button>
import Image from "next/image";

import Image from "next/image";
      {/* Sidebar */}
import Image from "next/image";
      <div className={`fixed sm:relative bg-teal-600 text-white p-4 h-screen transition-transform duration-300 
import Image from "next/image";
        ${isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-0"} sm:w-64 sm:translate-x-0`}
import Image from "next/image";
      >
import Image from "next/image";
        {/* Logo */}
import Image from "next/image";
        <div className="flex items-center text-lg font-bold mb-6">
import Image from "next/image";
          <span className="mr-2">💼</span> JOB PORTAL
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Menu Items */}
import Image from "next/image";
        <nav className="flex flex-col space-y-4">
import Image from "next/image";
          <a href="#" className="flex items-center space-x-2 hover:opacity-75">
import Image from "next/image";
            <FaTachometerAlt />
import Image from "next/image";
            <span>Dashboard</span>
import Image from "next/image";
          </a>
import Image from "next/image";
          <a href="#" className="flex items-center space-x-2 hover:opacity-75">
import Image from "next/image";
            <FaUsersCog />
import Image from "next/image";
            <span>User Management</span>
import Image from "next/image";
          </a>
import Image from "next/image";
          <a href="#" className="flex items-center space-x-2 hover:opacity-75">
import Image from "next/image";
            <FaBriefcase />
import Image from "next/image";
            <span>Job Management</span>
import Image from "next/image";
          </a>
import Image from "next/image";
          <a href="#" className="flex items-center space-x-2 hover:opacity-75">
import Image from "next/image";
            <FaCreditCard />
import Image from "next/image";
            <span>Payment</span>
import Image from "next/image";
          </a>
import Image from "next/image";
          <a href="#" className="flex items-center space-x-2 hover:opacity-75">
import Image from "next/image";
            <FaBlog />
import Image from "next/image";
            <span>Blog</span>
import Image from "next/image";
          </a>
import Image from "next/image";
          <a href="#" className="flex items-center space-x-2 hover:opacity-75">
import Image from "next/image";
            <FaSearch />
import Image from "next/image";
            <span>Job Search</span>
import Image from "next/image";
          </a>
import Image from "next/image";

import Image from "next/image";
          {/* Help and Support Section */}
import Image from "next/image";
          <button 
import Image from "next/image";
            onClick={() => setIsHelpOpen(!isHelpOpen)} 
import Image from "next/image";
            className="flex items-center justify-between w-full text-left hover:opacity-75"
import Image from "next/image";
          >
import Image from "next/image";
            <div className="flex items-center space-x-2">
import Image from "next/image";
              <FaQuestionCircle />
import Image from "next/image";
              <span>Help & Support</span>
import Image from "next/image";
            </div>
import Image from "next/image";
            <span>{isHelpOpen ? "▲" : "▼"}</span>
import Image from "next/image";
          </button>
import Image from "next/image";
          {isHelpOpen && (
import Image from "next/image";
            <div className="flex flex-col space-y-2 mt-2 ml-4">
import Image from "next/image";
              <a href="#" className="flex items-center space-x-2 hover:opacity-75">
import Image from "next/image";
                <FaFileAlt />
import Image from "next/image";
                <span>Reports</span>
import Image from "next/image";
              </a>
import Image from "next/image";
              <a href="#" className="flex items-center space-x-2 hover:opacity-75">
import Image from "next/image";
                <FaEnvelope />
import Image from "next/image";
                <span>Email Support</span>
import Image from "next/image";
              </a>
import Image from "next/image";
              <a href="#" className="flex items-center space-x-2 hover:opacity-75">
import Image from "next/image";
                <FaCog />
import Image from "next/image";
                <span>Settings</span>
import Image from "next/image";
              </a>
import Image from "next/image";
              <a href="#" className="flex items-center space-x-2 hover:opacity-75">
import Image from "next/image";
                <FaTicketAlt />
import Image from "next/image";
                <span>Support Ticket</span>
import Image from "next/image";
              </a>
import Image from "next/image";
              <a href="#" className="flex items-center space-x-2 hover:opacity-75">
import Image from "next/image";
                <FaQuestion />
import Image from "next/image";
                <span>FAQ</span>
import Image from "next/image";
              </a>
import Image from "next/image";
            </div>
import Image from "next/image";
          )}
import Image from "next/image";

import Image from "next/image";
          {/* Logout Button */}
import Image from "next/image";
          <div className="flex justify-center items-center mt-6">
import Image from "next/image";
            <button className="bg-gray-300 hover:bg-gray-400 p-4 rounded-2xl flex items-center justify-center w-32 h-16 shadow-lg">
import Image from "next/image";
              <FaSignOutAlt className="text-black text-2xl" />
import Image from "next/image";
            </button>
import Image from "next/image";
          </div>
import Image from "next/image";
        </nav>
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
export default Side;
