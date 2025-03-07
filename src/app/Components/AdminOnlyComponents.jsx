
mport Image from "next/image";
"use client";
mport Image from "next/image";
import { Bell, Bookmark, Eye, User2Icon, UserIcon } from "lucide-react";
mport Image from "next/image";
import Image from "next/image";
mport Image from "next/image";
import { BiMoneyWithdraw, BiShoppingBag } from "react-icons/bi";
mport Image from "next/image";
import {
mport Image from "next/image";
  FaBell,
mport Image from "next/image";
  FaBlog,
mport Image from "next/image";
  FaCog,
mport Image from "next/image";
  FaEnvelope,
mport Image from "next/image";
  FaLocationArrow,
mport Image from "next/image";
  FaStar,
mport Image from "next/image";
  FaUser,
mport Image from "next/image";
} from "react-icons/fa";
mport Image from "next/image";
import { MdLiveHelp } from "react-icons/md";
mport Image from "next/image";
import {
mport Image from "next/image";
  HiOutlineDocument,
mport Image from "next/image";
  HiOutlineMenu,
mport Image from "next/image";
  HiOutlineQuestionMarkCircle,
mport Image from "next/image";
  HiOutlineUser,
mport Image from "next/image";
} from "react-icons/hi";
mport Image from "next/image";
import React, { useEffect, useState } from "react";
mport Image from "next/image";
import AdminMainContent from "../Components/AdminMainContent";
mport Image from "next/image";
import GeneralSettings from "../Components/GeneralSettings";
mport Image from "next/image";
import Tabs from "../Components/Tabs";
mport Image from "next/image";
import SortableTable from "../Components/SortableTable";
mport Image from "next/image";
import BlogManager from "../Components/BlogManager";
mport Image from "next/image";
import JobSearchComponent from "../Components/JobSearchComponent";
mport Image from "next/image";
import EmailSettings from "../Components/Email";
mport Image from "next/image";
import Reports from "../Components/Reports";
mport Image from "next/image";
import UserManagement from "./UserManagement";
mport Image from "next/image";
import AdminHeader from "./AdminHeader";
mport Image from "next/image";

mport Image from "next/image";
const AdminEmployerPage = () => {
mport Image from "next/image";
  const [isCollapsed, setIsCollapsed] = useState(false);
mport Image from "next/image";
  const [currentSideTitle, setCurrentSideTitle] = useState("Dashboard");
mport Image from "next/image";
  const [sortOrder, setSortOrder] = useState("asc");
mport Image from "next/image";
  const [activeMenu, setActiveMenu] = useState("Dashboard");
mport Image from "next/image";
  const [showMenu, setShowMenu] = useState(false);
mport Image from "next/image";

mport Image from "next/image";
  const jobData = [
mport Image from "next/image";
    {
mport Image from "next/image";
      name: "Banking",
mport Image from "next/image";
      start: "24-Jan-2025",
mport Image from "next/image";
      end: "1-Feb-2025",
mport Image from "next/image";
      priority: "High",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      name: "Finance Jobs",
mport Image from "next/image";
      start: "07-March-2025",
mport Image from "next/image";
      end: "NA",
mport Image from "next/image";
      priority: "Medium",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      name: "IT Manager",
mport Image from "next/image";
      start: "17-Feb-2025",
mport Image from "next/image";
      end: "16-March-2025",
mport Image from "next/image";
      priority: "High",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      name: "Operations Posting",
mport Image from "next/image";
      start: "03-March-2025",
mport Image from "next/image";
      end: "NA",
mport Image from "next/image";
      priority: "Low",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      name: "Consulting Jobs",
mport Image from "next/image";
      start: "26-Feb-2025",
mport Image from "next/image";
      end: "20-March-2025",
mport Image from "next/image";
      priority: "High",
mport Image from "next/image";
    },
mport Image from "next/image";
  ];
mport Image from "next/image";
  const [sortedData, setSortedData] = useState(jobData);
mport Image from "next/image";
  const sortTable = (key) => {
mport Image from "next/image";
    const sorted = [...sortedData].sort((a, b) =>
mport Image from "next/image";
      sortOrder === "asc"
mport Image from "next/image";
        ? a[key].localeCompare(b[key])
mport Image from "next/image";
        : b[key].localeCompare(a[key])
mport Image from "next/image";
    );
mport Image from "next/image";
    setSortedData(sorted);
mport Image from "next/image";
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const toggleSidebar = () => {
mport Image from "next/image";
    setIsCollapsed(!isCollapsed);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const sideBarDashboard = [
mport Image from "next/image";
    { _id: 1, title: "Dashboard", icon: <FaStar /> },
mport Image from "next/image";
    { _id: 2, title: "User Management", icon: <UserIcon /> },
mport Image from "next/image";
    { _id: 3, title: "Job Management", icon: <User2Icon /> },
mport Image from "next/image";
    { _id: 4, title: "Payment", icon: <BiMoneyWithdraw /> },
mport Image from "next/image";
    { _id: 5, title: "Blog", icon: <FaBlog /> },
mport Image from "next/image";
    { _id: 6, title: "Job Search", icon: <HiOutlineUser /> },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 7,
mport Image from "next/image";
      title: "Help and Support",
mport Image from "next/image";
      icon: <HiOutlineQuestionMarkCircle />,
mport Image from "next/image";
    },
mport Image from "next/image";
    { _id: 8, title: "Reports", icon: <HiOutlineDocument /> },
mport Image from "next/image";
    { _id: 9, title: "Email Support", icon: <FaEnvelope /> },
mport Image from "next/image";
    { _id: 10, title: "Settings", icon: <FaCog /> },
mport Image from "next/image";
  ];
mport Image from "next/image";

mport Image from "next/image";
  const handleActivity = (title) => {
mport Image from "next/image";
    setCurrentSideTitle(title);
mport Image from "next/image";
    setActiveMenu(title);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    const handleResize = () => {
mport Image from "next/image";
      if (window.innerWidth < 800) {
mport Image from "next/image";
        setIsCollapsed(true);
mport Image from "next/image";
      }
mport Image from "next/image";
    };
mport Image from "next/image";
    handleResize();
mport Image from "next/image";

mport Image from "next/image";
    window.addEventListener("resize", handleResize);
mport Image from "next/image";
    return () => window.removeEventListener("resize", handleResize);
mport Image from "next/image";
  },);
mport Image from "next/image";

mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="sm:px-5 sm:py-2 flex-col min-h-screen w-full">
mport Image from "next/image";
      <div className="flex justify-between w-full gap-5 min-h-screen">
mport Image from "next/image";
        <div
mport Image from "next/image";
          className={`flex flex-col gap-5 rounded-2xl bg-[#211C84] ${
mport Image from "next/image";
            isCollapsed ? "w-[70px]" : "w-1/5"
mport Image from "next/image";
          } min-h-screen transition-all duration-300 ease-in-out`}
mport Image from "next/image";
        >
mport Image from "next/image";
          <div className="flex flex-col gap-2 p-5">
mport Image from "next/image";
            <div className="flex justify-between items-center">
mport Image from "next/image";
              {!isCollapsed && (
mport Image from "next/image";
                <div className="flex gap-2 items-center">
mport Image from "next/image";
                  <p className="text-2xl font-semibold text-white">
mport Image from "next/image";
                    JOB PORTAL
mport Image from "next/image";
                  </p>
mport Image from "next/image";
                  <BiShoppingBag className="text-2xl text-white font-semibold" />
mport Image from "next/image";
                </div>
mport Image from "next/image";
              )}
mport Image from "next/image";
              <div
mport Image from "next/image";
                onClick={toggleSidebar}
mport Image from "next/image";
                className="hover:bg-gray-500 transition-colors duration-300 ease-in-out p-1 rounded-2xl cursor-pointer"
mport Image from "next/image";
              >
mport Image from "next/image";
                <HiOutlineMenu className="text-2xl text-white hover:text-black transition-colors duration-300 ease-in-out" />
mport Image from "next/image";
              </div>
mport Image from "next/image";
            </div>
mport Image from "next/image";
            <hr className="w-full h-[2px] bg-white" />
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex flex-col gap-3">
mport Image from "next/image";
            <div className="flex flex-col gap-1 mt-5">
mport Image from "next/image";
              {sideBarDashboard.slice(0, 6).map((item) => (
mport Image from "next/image";
                <div
mport Image from "next/image";
                  onClick={() => handleActivity(item.title)}
mport Image from "next/image";
                  key={item._id}
mport Image from "next/image";
                  className={`flex items-center gap-5 ${
mport Image from "next/image";
                    activeMenu === item.title
mport Image from "next/image";
                      ? "bg-[#003092]"
mport Image from "next/image";
                      : null
mport Image from "next/image";
                  } cursor-pointer hover:bg-[#4635B1] py-2 px-5 rounded-2xl`}
mport Image from "next/image";
                >
mport Image from "next/image";
                  <span className="text-lg font-semibold text-white">
mport Image from "next/image";
                    {item.icon}
mport Image from "next/image";
                  </span>
mport Image from "next/image";
                  {!isCollapsed && (
mport Image from "next/image";
                    <p className="text-lg font-semibold text-white">
mport Image from "next/image";
                      {item.title}
mport Image from "next/image";
                    </p>
mport Image from "next/image";
                  )}
mport Image from "next/image";
                </div>
mport Image from "next/image";
              ))}
mport Image from "next/image";
            </div>
mport Image from "next/image";
            <div
mport Image from "next/image";
              onClick={() => setShowMenu((prev) => !prev)}
mport Image from "next/image";
              className="flex items-center gap-5 cursor-pointer hover:bg-[#4635B1] py-2 px-5 rounded-2xl"
mport Image from "next/image";
            >
mport Image from "next/image";
              <span className="text-lg font-semibold text-white">
mport Image from "next/image";
                <HiOutlineQuestionMarkCircle />
mport Image from "next/image";
              </span>
mport Image from "next/image";
              {!isCollapsed && (
mport Image from "next/image";
                <p className="text-lg font-semibold text-white">
mport Image from "next/image";
                  Help & Support
mport Image from "next/image";
                </p>
mport Image from "next/image";
              )}
mport Image from "next/image";
            </div>
mport Image from "next/image";
            {showMenu ? (
mport Image from "next/image";
              <>
mport Image from "next/image";
                <hr className="w-full h-[2px] bg-white" />
mport Image from "next/image";
                <div className="flex flex-col gap-1">
mport Image from "next/image";
                  {sideBarDashboard.slice(7).map((item) => (
mport Image from "next/image";
                    <div
mport Image from "next/image";
                      onClick={() => handleActivity(item.title)}
mport Image from "next/image";
                      key={item._id}
mport Image from "next/image";
                      className={`flex items-center gap-5 ${
mport Image from "next/image";
                        activeMenu === item.title
mport Image from "next/image";
                          ? "bg-[#003092]"
mport Image from "next/image";
                          : null
mport Image from "next/image";
                      } cursor-pointer hover:bg-[#4635B1] py-2 px-5 rounded-2xl`}
mport Image from "next/image";
                    >
mport Image from "next/image";
                      <span className="text-lg font-semibold text-white">
mport Image from "next/image";
                        {item.icon}
mport Image from "next/image";
                      </span>
mport Image from "next/image";
                      {!isCollapsed && (
mport Image from "next/image";
                        <p className="text-lg font-semibold text-white">
mport Image from "next/image";
                          {item.title}
mport Image from "next/image";
                        </p>
mport Image from "next/image";
                      )}
mport Image from "next/image";
                    </div>
mport Image from "next/image";
                  ))}
mport Image from "next/image";
                </div>
mport Image from "next/image";
              </>
mport Image from "next/image";
            ) : null}
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";
        {currentSideTitle === "Dashboard" && (
mport Image from "next/image";
          <AdminMainContent isCollapsed={isCollapsed} />
mport Image from "next/image";
        )}
mport Image from "next/image";
        {currentSideTitle === "Settings" && (
mport Image from "next/image";
          <div className="flex-1 flex flex-col max-w-screen-xl mx-auto w-full">
mport Image from "next/image";
            <AdminHeader />
mport Image from "next/image";
            <main className="p-6">
mport Image from "next/image";
              <SettingsHeading />
mport Image from "next/image";
              <GeneralSettings />
mport Image from "next/image";
            </main>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        )}
mport Image from "next/image";
        {currentSideTitle === "Payment" && (
mport Image from "next/image";
          <div className="flex-1 flex flex-col max-w-screen-xl mx-auto w-full">
mport Image from "next/image";
            <AdminHeader />
mport Image from "next/image";
            <Tabs />
mport Image from "next/image";
            <div className="overflow-x-auto">
mport Image from "next/image";
              <SortableTable />
mport Image from "next/image";
            </div>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        )}
mport Image from "next/image";
        {currentSideTitle === "Job Management" && (
mport Image from "next/image";
          <div className="flex-1 flex flex-col max-w-screen-xl mx-auto w-full">
mport Image from "next/image";
            <AdminHeader />
mport Image from "next/image";
            <div className="flex flex-wrap gap-4 mb-6">
mport Image from "next/image";
              <select className="p-2 border rounded">
mport Image from "next/image";
                <option>Timeframe: All-time</option>
mport Image from "next/image";
                <option>Last 30 days</option>
mport Image from "next/image";
                <option>Last 7 days</option>
mport Image from "next/image";
              </select>
mport Image from "next/image";
              <select className="p-2 border rounded">
mport Image from "next/image";
                <option>Source: All</option>
mport Image from "next/image";
                <option>LinkedIn</option>
mport Image from "next/image";
                <option>Indeed</option>
mport Image from "next/image";
              </select>
mport Image from "next/image";
              <select className="p-2 border rounded">
mport Image from "next/image";
                <option>Medium: All</option>
mport Image from "next/image";
                <option>Referral</option>
mport Image from "next/image";
                <option>Direct</option>
mport Image from "next/image";
              </select>
mport Image from "next/image";
            </div>
mport Image from "next/image";

mport Image from "next/image";
            {/* User Insights */}
mport Image from "next/image";
            <div className="grid grid-cols-3 gap-4 mb-6">
mport Image from "next/image";
              <div className="p-4 bg-white shadow-md rounded-lg text-center">
mport Image from "next/image";
                <h3 className="text-lg font-bold">Pending</h3>
mport Image from "next/image";
                <p className="text-xl">500</p>
mport Image from "next/image";
              </div>
mport Image from "next/image";
              <div className="p-4 bg-white shadow-md rounded-lg text-center">
mport Image from "next/image";
                <h3 className="text-lg font-bold">Shortlisted</h3>
mport Image from "next/image";
                <p className="text-xl">150</p>
mport Image from "next/image";
              </div>
mport Image from "next/image";
              <div className="p-4 bg-white shadow-md rounded-lg text-center">
mport Image from "next/image";
                <h3 className="text-lg font-bold">Hired</h3>
mport Image from "next/image";
                <p className="text-xl">9800</p>
mport Image from "next/image";
              </div>
mport Image from "next/image";
            </div>
mport Image from "next/image";

mport Image from "next/image";
            {/* Image */}
mport Image from "next/image";

mport Image from "next/image";
            {/* Job Posting Table */}
mport Image from "next/image";
            <div className="bg-white p-4 shadow-md rounded-lg overflow-auto">
mport Image from "next/image";
              <table className="w-full">
mport Image from "next/image";
                <thead>
mport Image from "next/image";
                  <tr className="text-left bg-gray-200">
mport Image from "next/image";
                    <th
mport Image from "next/image";
                      className="p-2 cursor-pointer"
mport Image from "next/image";
                      onClick={() => sortTable("name")}
mport Image from "next/image";
                    >
mport Image from "next/image";
                      Job Posting Name ⬆⬇
mport Image from "next/image";
                    </th>
mport Image from "next/image";
                    <th
mport Image from "next/image";
                      className="p-2 cursor-pointer"
mport Image from "next/image";
                      onClick={() => sortTable("start")}
mport Image from "next/image";
                    >
mport Image from "next/image";
                      Start Date ⬆⬇
mport Image from "next/image";
                    </th>
mport Image from "next/image";
                    <th
mport Image from "next/image";
                      className="p-2 cursor-pointer"
mport Image from "next/image";
                      onClick={() => sortTable("end")}
mport Image from "next/image";
                    >
mport Image from "next/image";
                      End Date ⬆⬇
mport Image from "next/image";
                    </th>
mport Image from "next/image";
                    <th
mport Image from "next/image";
                      className="p-2 cursor-pointer"
mport Image from "next/image";
                      onClick={() => sortTable("priority")}
mport Image from "next/image";
                    >
mport Image from "next/image";
                      Priority ⬆⬇
mport Image from "next/image";
                    </th>
mport Image from "next/image";
                  </tr>
mport Image from "next/image";
                </thead>
mport Image from "next/image";
                <tbody>
mport Image from "next/image";
                  {sortedData.map((job, index) => (
mport Image from "next/image";
                    <tr key={index} className="border-b">
mport Image from "next/image";
                      <td className="p-2">{job.name}</td>
mport Image from "next/image";
                      <td className="p-2">{job.start}</td>
mport Image from "next/image";
                      <td className="p-2">{job.end}</td>
mport Image from "next/image";
                      <td className="p-2">{job.priority}</td>
mport Image from "next/image";
                    </tr>
mport Image from "next/image";
                  ))}
mport Image from "next/image";
                </tbody>
mport Image from "next/image";
              </table>
mport Image from "next/image";
            </div>
mport Image from "next/image";

mport Image from "next/image";
            {/* Statistics */}
mport Image from "next/image";
            <div className="grid grid-cols-2 gap-4 mt-6">
mport Image from "next/image";
              <div className="p-4 bg-white shadow-md rounded-lg">
mport Image from "next/image";
                <h3 className="font-bold mb-2">Job Statistics & Insights</h3>
mport Image from "next/image";
                <p>
mport Image from "next/image";
                  Total Jobs Posted Monthly:{" "}
mport Image from "next/image";
                  <span className="font-bold">900+</span>
mport Image from "next/image";
                </p>
mport Image from "next/image";
                <p>
mport Image from "next/image";
                  Active Jobs: <span className="font-bold">560+</span>
mport Image from "next/image";
                </p>
mport Image from "next/image";
                <p>
mport Image from "next/image";
                  Expired Jobs: <span className="font-bold">150</span>
mport Image from "next/image";
                </p>
mport Image from "next/image";
              </div>
mport Image from "next/image";
              <div className="p-4 bg-white shadow-md rounded-lg">
mport Image from "next/image";
                <h3 className="font-bold mb-2">Companies & Hiring Insights</h3>
mport Image from "next/image";
                <p>
mport Image from "next/image";
                  Top Hiring Companies: <span className="font-bold">60+</span>
mport Image from "next/image";
                </p>
mport Image from "next/image";
                <p>
mport Image from "next/image";
                  List of Pending Jobs: <span className="font-bold">NA</span>
mport Image from "next/image";
                </p>
mport Image from "next/image";
                <p>
mport Image from "next/image";
                  Candidate Hired Daily: <span className="font-bold">10+</span>
mport Image from "next/image";
                </p>
mport Image from "next/image";
              </div>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        )}
mport Image from "next/image";
        {currentSideTitle === "Blog" && (
mport Image from "next/image";
          <div
mport Image from "next/image";
            className={`flex flex-col gap-3 min-h-screen transition-all duration-300 ease-in-out ${
mport Image from "next/image";
              isCollapsed ? "w-full" : "w-4/5"
mport Image from "next/image";
            }`}
mport Image from "next/image";
          >
mport Image from "next/image";
            <AdminHeader />
mport Image from "next/image";
            <BlogManager />
mport Image from "next/image";
          </div>
mport Image from "next/image";
        )}
mport Image from "next/image";
        {currentSideTitle === "Job Search" && (
mport Image from "next/image";
          <div
mport Image from "next/image";
            className={`flex flex-col gap-3 min-h-screen transition-all duration-300 ease-in-out ${
mport Image from "next/image";
              isCollapsed ? "w-full" : "w-4/5"
mport Image from "next/image";
            }`}
mport Image from "next/image";
          >
mport Image from "next/image";
            <AdminHeader />
mport Image from "next/image";
            <JobSearchComponent />
mport Image from "next/image";
          </div>
mport Image from "next/image";
        )}
mport Image from "next/image";
        {currentSideTitle === "Email Support" && (
mport Image from "next/image";
          <div
mport Image from "next/image";
            className={`flex flex-col gap-3 min-h-screen transition-all duration-300 ease-in-out ${
mport Image from "next/image";
              isCollapsed ? "w-full" : "w-4/5"
mport Image from "next/image";
            }`}
mport Image from "next/image";
          >
mport Image from "next/image";
            <AdminHeader />
mport Image from "next/image";
            <EmailSettings />
mport Image from "next/image";
          </div>
mport Image from "next/image";
        )}
mport Image from "next/image";
        {currentSideTitle === "Reports" && (
mport Image from "next/image";
          <div
mport Image from "next/image";
            className={`flex flex-col gap-3 min-h-screen transition-all duration-300 ease-in-out ${
mport Image from "next/image";
              isCollapsed ? "w-full" : "w-4/5"
mport Image from "next/image";
            }`}
mport Image from "next/image";
          >
mport Image from "next/image";
            <AdminHeader />
mport Image from "next/image";
            <Reports />
mport Image from "next/image";
          </div>
mport Image from "next/image";
        )}
mport Image from "next/image";
        {currentSideTitle === "User Management" && (
mport Image from "next/image";
          <div
mport Image from "next/image";
            className={`flex flex-col gap-3 min-h-screen transition-all duration-300 ease-in-out ${
mport Image from "next/image";
              isCollapsed ? "w-full" : "w-4/5"
mport Image from "next/image";
            }`}
mport Image from "next/image";
          >
mport Image from "next/image";
            <AdminHeader />
mport Image from "next/image";
            <UserManagement />
mport Image from "next/image";
          </div>
mport Image from "next/image";
        )}
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
export default AdminEmployerPage;
mport Image from "next/image";

mport Image from "next/image";
const SettingsHeading = () => (
mport Image from "next/image";
  <div className="bg-gray-300 text-black text-lg md:text-xl font-bold text-center p-3 md:p-4 rounded-lg shadow-md w-full max-w-4xl mx-auto">
mport Image from "next/image";
    Settings
mport Image from "next/image";
  </div>
mport Image from "next/image";
);
