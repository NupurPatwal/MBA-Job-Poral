
import Image from "next/image";
"use client";
import Image from "next/image";
iimport { useState } from "react";
import Image from "next/image";
iimport { FaSearch } from "react-icons/fa";
import Image from "next/image";
iimport { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
iimport { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Image from "next/image";

import Image from "next/image";
export default function User() {
import Image from "next/image";
  const employeesData = [
import Image from "next/image";
    { name: "Mharde Marshall", role: "Marketing Consultant", status: "Active", id: 26, joinDate: "6/3/22" },
import Image from "next/image";
    { name: "Caesar Vance", role: "Operations Manager", status: "Active", id: 35, joinDate: "12/2/22" },
import Image from "next/image";
    { name: "Grill Ross", role: "Investment Banker", status: "Inactive", id: 48, joinDate: "4/19/23" },
import Image from "next/image";
    { name: "Brielle Williamson", role: "Finance Manager", status: "Suspended", id: 90, joinDate: "1/2/23" },
import Image from "next/image";
    { name: "Bradley Greer", role: "Head of Marketing", status: "Active", id: 67, joinDate: "9/4/23" },
import Image from "next/image";
    { name: "Ashton Cox", role: "Director of Management", status: "Active", id: 35, joinDate: "6/3/22" },
import Image from "next/image";
    { name: "MaDai Rios", role: "IT Manager", status: "Active", id: 48, joinDate: "12/2/22" },
import Image from "next/image";
    { name: "Colleen ", role: "Chief Financial Officer", status: "Inactive", id: 90, joinDate: "4/4/23" },
import Image from "next/image";
  ];
import Image from "next/image";

import Image from "next/image";
  const [search, setSearch] = useState("");
import Image from "next/image";
  const [selectedEmployee, setSelectedEmployee] = useState(null);
import Image from "next/image";
  const [isExpanded, setIsExpanded] = useState(true);
import Image from "next/image";

import Image from "next/image";
  const filteredEmployees = employeesData.filter((emp) =>
import Image from "next/image";
    emp.name.toLowerCase().includes(search.toLowerCase())
import Image from "next/image";
  );
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="p-4 max-w-6xl mx-auto">
import Image from "next/image";
      <h1 className="text-2xl font-bold text-center sm:text-left">User Management</h1>
import Image from "next/image";

import Image from "next/image";
      <div className="bg-white p-4 mt-4 rounded-lg shadow-lg">
import Image from "next/image";
        {/* Header with Toggle Button */}
import Image from "next/image";
        <div className="flex justify-between items-center border-b pb-2">
import Image from "next/image";
          <p className="font-semibold text-lg">Employees Details...</p>
import Image from "next/image";
          <button
import Image from "next/image";
            onClick={() => setIsExpanded(!isExpanded)}
import Image from "next/image";
            className="text-lg bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 transition"
import Image from "next/image";
          >
import Image from "next/image";
            {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
import Image from "next/image";
          </button>
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Search & Filters */}
import Image from "next/image";
        {isExpanded && (
import Image from "next/image";
          <>
import Image from "next/image";
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
import Image from "next/image";
              {/* Search Bar */}
import Image from "next/image";
              <div className="flex items-center bg-gray-100 p-2 rounded-md w-full sm:w-72">
import Image from "next/image";
                <FaSearch className="text-gray-400 mx-2" />
import Image from "next/image";
                <input
import Image from "next/image";
                  type="text"
import Image from "next/image";
                  placeholder="Search..."
import Image from "next/image";
                  value={search}
import Image from "next/image";
                  onChange={(e) => setSearch(e.target.value)}
import Image from "next/image";
                  className="bg-transparent outline-none w-full"
import Image from "next/image";
                />
import Image from "next/image";
              </div>
import Image from "next/image";

import Image from "next/image";
              {/* Sortable Buttons with Proper Spacing */}
import Image from "next/image";
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
import Image from "next/image";
                {["Status", "User ID", "Join Date", "Options"].map((label, index) => (
import Image from "next/image";
                  <button
import Image from "next/image";
                    key={index}
import Image from "next/image";
                    className="flex items-center justify-center bg-gray-200 px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-gray-300 transition"
import Image from "next/image";
                  >
import Image from "next/image";
                    {label}
import Image from "next/image";
                    <span className="ml-2 flex flex-col">
import Image from "next/image";
                      <IoIosArrowUp className="text-xs" />
import Image from "next/image";
                      <IoIosArrowDown className="text-xs" />
import Image from "next/image";
                    </span>
import Image from "next/image";
                  </button>
import Image from "next/image";
                ))}
import Image from "next/image";
              </div>
import Image from "next/image";
            </div>
import Image from "next/image";

import Image from "next/image";
            {/* Employee List - Scrollable on Mobile */}
import Image from "next/image";
            <div className="mt-4 overflow-x-auto">
import Image from "next/image";
              <table className="w-full bg-white border rounded-lg shadow-lg text-sm">
import Image from "next/image";
                <thead className="bg-gray-100">
import Image from "next/image";
                  <tr>
import Image from "next/image";
                    {["Employee", "Status", "User ID", "Join Date", "Options"].map((heading, index) => (
import Image from "next/image";
                      <th key={index} className="px-4 py-3 text-left whitespace-nowrap">
import Image from "next/image";
                        {heading}
import Image from "next/image";
                      </th>
import Image from "next/image";
                    ))}
import Image from "next/image";
                  </tr>
import Image from "next/image";
                </thead>
import Image from "next/image";
                <tbody>
import Image from "next/image";
                  {filteredEmployees.length > 0 ? (
import Image from "next/image";
                    filteredEmployees.map((emp, index) => (
import Image from "next/image";
                      <tr key={index} className="border-t text-sm hover:bg-gray-50">
import Image from "next/image";
                        {/* Employee Name & Role with Radio */}
import Image from "next/image";
                        <td className="px-4 py-3 flex items-center gap-2 whitespace-nowrap">
import Image from "next/image";
                          <input
import Image from "next/image";
                            type="radio"
import Image from "next/image";
                            name="employee"
import Image from "next/image";
                            value={emp.name}
import Image from "next/image";
                            checked={selectedEmployee === emp.name}
import Image from "next/image";
                            onChange={() => setSelectedEmployee(emp.name)}
import Image from "next/image";
                            className="cursor-pointer"
import Image from "next/image";
                          />
import Image from "next/image";
                          <div>
import Image from "next/image";
                            <p className="font-semibold">{emp.name}</p>
import Image from "next/image";
                            <p className="text-xs sm:text-sm text-gray-500">{emp.role}</p>
import Image from "next/image";
                          </div>
import Image from "next/image";
                        </td>
import Image from "next/image";
                        <td className="px-4 py-3 text-center">{emp.status}</td>
import Image from "next/image";
                        <td className="px-4 py-3 text-center">{emp.id}</td>
import Image from "next/image";
                        <td className="px-4 py-3 text-center">{emp.joinDate}</td>
import Image from "next/image";
                        <td className="px-4 py-3 text-center">...</td>
import Image from "next/image";
                      </tr>
import Image from "next/image";
                    ))
import Image from "next/image";
                  ) : (
import Image from "next/image";
                    <tr>
import Image from "next/image";
                      <td colSpan="5" className="text-center text-gray-500 py-4">
import Image from "next/image";
                        No employees found
import Image from "next/image";
                      </td>
import Image from "next/image";
                    </tr>
import Image from "next/image";
                  )}
import Image from "next/image";
                </tbody>
import Image from "next/image";
              </table>
import Image from "next/image";
            </div>
import Image from "next/image";
          </>
import Image from "next/image";
        )}
import Image from "next/image";
      </div>
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
}
import Image from "next/image";

