
mport Image from "next/image";
"use client";
mport Image from "next/image";
import { useState } from "react";
mport Image from "next/image";
import { FaSearch } from "react-icons/fa";
mport Image from "next/image";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
mport Image from "next/image";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
mport Image from "next/image";

mport Image from "next/image";
export default function User() {
mport Image from "next/image";
  const employeesData = [
mport Image from "next/image";
    { name: "Mharde Marshall", role: "Marketing Consultant", status: "Active", id: 26, joinDate: "6/3/22" },
mport Image from "next/image";
    { name: "Caesar Vance", role: "Operations Manager", status: "Active", id: 35, joinDate: "12/2/22" },
mport Image from "next/image";
    { name: "Grill Ross", role: "Investment Banker", status: "Inactive", id: 48, joinDate: "4/19/23" },
mport Image from "next/image";
    { name: "Brielle Williamson", role: "Finance Manager", status: "Suspended", id: 90, joinDate: "1/2/23" },
mport Image from "next/image";
    { name: "Bradley Greer", role: "Head of Marketing", status: "Active", id: 67, joinDate: "9/4/23" },
mport Image from "next/image";
    { name: "Ashton Cox", role: "Director of Management", status: "Active", id: 35, joinDate: "6/3/22" },
mport Image from "next/image";
    { name: "MaDai Rios", role: "IT Manager", status: "Active", id: 48, joinDate: "12/2/22" },
mport Image from "next/image";
    { name: "Colleen ", role: "Chief Financial Officer", status: "Inactive", id: 90, joinDate: "4/4/23" },
mport Image from "next/image";
  ];
mport Image from "next/image";

mport Image from "next/image";
  const [search, setSearch] = useState("");
mport Image from "next/image";
  const [selectedEmployee, setSelectedEmployee] = useState(null);
mport Image from "next/image";
  const [isExpanded, setIsExpanded] = useState(true);
mport Image from "next/image";

mport Image from "next/image";
  const filteredEmployees = employeesData.filter((emp) =>
mport Image from "next/image";
    emp.name.toLowerCase().includes(search.toLowerCase())
mport Image from "next/image";
  );
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="p-4 max-w-6xl mx-auto">
mport Image from "next/image";
      <h1 className="text-2xl font-bold text-center sm:text-left">User Management</h1>
mport Image from "next/image";

mport Image from "next/image";
      <div className="bg-white p-4 mt-4 rounded-lg shadow-lg">
mport Image from "next/image";
        {/* Header with Toggle Button */}
mport Image from "next/image";
        <div className="flex justify-between items-center border-b pb-2">
mport Image from "next/image";
          <p className="font-semibold text-lg">Employees Details...</p>
mport Image from "next/image";
          <button
mport Image from "next/image";
            onClick={() => setIsExpanded(!isExpanded)}
mport Image from "next/image";
            className="text-lg bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 transition"
mport Image from "next/image";
          >
mport Image from "next/image";
            {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
mport Image from "next/image";
          </button>
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Search & Filters */}
mport Image from "next/image";
        {isExpanded && (
mport Image from "next/image";
          <>
mport Image from "next/image";
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
mport Image from "next/image";
              {/* Search Bar */}
mport Image from "next/image";
              <div className="flex items-center bg-gray-100 p-2 rounded-md w-full sm:w-72">
mport Image from "next/image";
                <FaSearch className="text-gray-400 mx-2" />
mport Image from "next/image";
                <input
mport Image from "next/image";
                  type="text"
mport Image from "next/image";
                  placeholder="Search..."
mport Image from "next/image";
                  value={search}
mport Image from "next/image";
                  onChange={(e) => setSearch(e.target.value)}
mport Image from "next/image";
                  className="bg-transparent outline-none w-full"
mport Image from "next/image";
                />
mport Image from "next/image";
              </div>
mport Image from "next/image";

mport Image from "next/image";
              {/* Sortable Buttons with Proper Spacing */}
mport Image from "next/image";
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
mport Image from "next/image";
                {["Status", "User ID", "Join Date", "Options"].map((label, index) => (
mport Image from "next/image";
                  <button
mport Image from "next/image";
                    key={index}
mport Image from "next/image";
                    className="flex items-center justify-center bg-gray-200 px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-gray-300 transition"
mport Image from "next/image";
                  >
mport Image from "next/image";
                    {label}
mport Image from "next/image";
                    <span className="ml-2 flex flex-col">
mport Image from "next/image";
                      <IoIosArrowUp className="text-xs" />
mport Image from "next/image";
                      <IoIosArrowDown className="text-xs" />
mport Image from "next/image";
                    </span>
mport Image from "next/image";
                  </button>
mport Image from "next/image";
                ))}
mport Image from "next/image";
              </div>
mport Image from "next/image";
            </div>
mport Image from "next/image";

mport Image from "next/image";
            {/* Employee List - Scrollable on Mobile */}
mport Image from "next/image";
            <div className="mt-4 overflow-x-auto">
mport Image from "next/image";
              <table className="w-full bg-white border rounded-lg shadow-lg text-sm">
mport Image from "next/image";
                <thead className="bg-gray-100">
mport Image from "next/image";
                  <tr>
mport Image from "next/image";
                    {["Employee", "Status", "User ID", "Join Date", "Options"].map((heading, index) => (
mport Image from "next/image";
                      <th key={index} className="px-4 py-3 text-left whitespace-nowrap">
mport Image from "next/image";
                        {heading}
mport Image from "next/image";
                      </th>
mport Image from "next/image";
                    ))}
mport Image from "next/image";
                  </tr>
mport Image from "next/image";
                </thead>
mport Image from "next/image";
                <tbody>
mport Image from "next/image";
                  {filteredEmployees.length > 0 ? (
mport Image from "next/image";
                    filteredEmployees.map((emp, index) => (
mport Image from "next/image";
                      <tr key={index} className="border-t text-sm hover:bg-gray-50">
mport Image from "next/image";
                        {/* Employee Name & Role with Radio */}
mport Image from "next/image";
                        <td className="px-4 py-3 flex items-center gap-2 whitespace-nowrap">
mport Image from "next/image";
                          <input
mport Image from "next/image";
                            type="radio"
mport Image from "next/image";
                            name="employee"
mport Image from "next/image";
                            value={emp.name}
mport Image from "next/image";
                            checked={selectedEmployee === emp.name}
mport Image from "next/image";
                            onChange={() => setSelectedEmployee(emp.name)}
mport Image from "next/image";
                            className="cursor-pointer"
mport Image from "next/image";
                          />
mport Image from "next/image";
                          <div>
mport Image from "next/image";
                            <p className="font-semibold">{emp.name}</p>
mport Image from "next/image";
                            <p className="text-xs sm:text-sm text-gray-500">{emp.role}</p>
mport Image from "next/image";
                          </div>
mport Image from "next/image";
                        </td>
mport Image from "next/image";
                        <td className="px-4 py-3 text-center">{emp.status}</td>
mport Image from "next/image";
                        <td className="px-4 py-3 text-center">{emp.id}</td>
mport Image from "next/image";
                        <td className="px-4 py-3 text-center">{emp.joinDate}</td>
mport Image from "next/image";
                        <td className="px-4 py-3 text-center">...</td>
mport Image from "next/image";
                      </tr>
mport Image from "next/image";
                    ))
mport Image from "next/image";
                  ) : (
mport Image from "next/image";
                    <tr>
mport Image from "next/image";
                      <td colSpan="5" className="text-center text-gray-500 py-4">
mport Image from "next/image";
                        No employees found
mport Image from "next/image";
                      </td>
mport Image from "next/image";
                    </tr>
mport Image from "next/image";
                  )}
mport Image from "next/image";
                </tbody>
mport Image from "next/image";
              </table>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          </>
mport Image from "next/image";
        )}
mport Image from "next/image";
      </div>
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
}
mport Image from "next/image";

