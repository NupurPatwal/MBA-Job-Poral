
import Image from "next/image";
"use client";
import Image from "next/image";
iimport { Bell, Bookmark, Eye, User2Icon, UserIcon } from "lucide-react";
import Image from "next/image";
iimport Image from "next/image";
import Image from "next/image";
iimport { BiMoneyWithdraw, BiShoppingBag } from "react-icons/bi";
import Image from "next/image";
iimport {
import Image from "next/image";
  FaBell,
import Image from "next/image";
  FaBlog,
import Image from "next/image";
  FaCog,
import Image from "next/image";
  FaEnvelope,
import Image from "next/image";
  FaLocationArrow,
import Image from "next/image";
  FaStar,
import Image from "next/image";
  FaUser,
import Image from "next/image";
} from "react-icons/fa";
import Image from "next/image";
iimport { MdLiveHelp } from "react-icons/md";
import Image from "next/image";
iimport {
import Image from "next/image";
  HiOutlineDocument,
import Image from "next/image";
  HiOutlineMenu,
import Image from "next/image";
  HiOutlineQuestionMarkCircle,
import Image from "next/image";
  HiOutlineUser,
import Image from "next/image";
} from "react-icons/hi";
import Image from "next/image";
iimport React, { useEffect, useState } from "react";
import Image from "next/image";
iimport AdminMainContent from "../Components/AdminMainContent";
import Image from "next/image";
iimport GeneralSettings from "../Components/GeneralSettings";
import Image from "next/image";
iimport Tabs from "../Components/Tabs";
import Image from "next/image";
iimport SortableTable from "../Components/SortableTable";
import Image from "next/image";
iimport BlogManager from "../Components/BlogManager";
import Image from "next/image";
iimport JobSearchComponent from "../Components/JobSearchComponent";
import Image from "next/image";
iimport EmailSettings from "../Components/Email";
import Image from "next/image";
iimport Reports from "../Components/Reports";
import Image from "next/image";
iimport UserManagement from "./UserManagement";
import Image from "next/image";
iimport AdminHeader from "./AdminHeader";
import Image from "next/image";

import Image from "next/image";
const AdminEmployerPage = () => {
import Image from "next/image";
  const [isCollapsed, setIsCollapsed] = useState(false);
import Image from "next/image";
  const [currentSideTitle, setCurrentSideTitle] = useState("Dashboard");
import Image from "next/image";
  const [sortOrder, setSortOrder] = useState("asc");
import Image from "next/image";
  const [activeMenu, setActiveMenu] = useState("Dashboard");
import Image from "next/image";
  const [showMenu, setShowMenu] = useState(false);
import Image from "next/image";

import Image from "next/image";
  const jobData = [
import Image from "next/image";
    {
import Image from "next/image";
      name: "Banking",
import Image from "next/image";
      start: "24-Jan-2025",
import Image from "next/image";
      end: "1-Feb-2025",
import Image from "next/image";
      priority: "High",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      name: "Finance Jobs",
import Image from "next/image";
      start: "07-March-2025",
import Image from "next/image";
      end: "NA",
import Image from "next/image";
      priority: "Medium",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      name: "IT Manager",
import Image from "next/image";
      start: "17-Feb-2025",
import Image from "next/image";
      end: "16-March-2025",
import Image from "next/image";
      priority: "High",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      name: "Operations Posting",
import Image from "next/image";
      start: "03-March-2025",
import Image from "next/image";
      end: "NA",
import Image from "next/image";
      priority: "Low",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      name: "Consulting Jobs",
import Image from "next/image";
      start: "26-Feb-2025",
import Image from "next/image";
      end: "20-March-2025",
import Image from "next/image";
      priority: "High",
import Image from "next/image";
    },
import Image from "next/image";
  ];
import Image from "next/image";
  const [sortedData, setSortedData] = useState(jobData);
import Image from "next/image";
  const sortTable = (key) => {
import Image from "next/image";
    const sorted = [...sortedData].sort((a, b) =>
import Image from "next/image";
      sortOrder === "asc"
import Image from "next/image";
        ? a[key].localeCompare(b[key])
import Image from "next/image";
        : b[key].localeCompare(a[key])
import Image from "next/image";
    );
import Image from "next/image";
    setSortedData(sorted);
import Image from "next/image";
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const toggleSidebar = () => {
import Image from "next/image";
    setIsCollapsed(!isCollapsed);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const sideBarDashboard = [
import Image from "next/image";
    { _id: 1, title: "Dashboard", icon: <FaStar /> },
import Image from "next/image";
    { _id: 2, title: "User Management", icon: <UserIcon /> },
import Image from "next/image";
    { _id: 3, title: "Job Management", icon: <User2Icon /> },
import Image from "next/image";
    { _id: 4, title: "Payment", icon: <BiMoneyWithdraw /> },
import Image from "next/image";
    { _id: 5, title: "Blog", icon: <FaBlog /> },
import Image from "next/image";
    { _id: 6, title: "Job Search", icon: <HiOutlineUser /> },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 7,
import Image from "next/image";
      title: "Help and Support",
import Image from "next/image";
      icon: <HiOutlineQuestionMarkCircle />,
import Image from "next/image";
    },
import Image from "next/image";
    { _id: 8, title: "Reports", icon: <HiOutlineDocument /> },
import Image from "next/image";
    { _id: 9, title: "Email Support", icon: <FaEnvelope /> },
import Image from "next/image";
    { _id: 10, title: "Settings", icon: <FaCog /> },
import Image from "next/image";
  ];
import Image from "next/image";

import Image from "next/image";
  const handleActivity = (title) => {
import Image from "next/image";
    setCurrentSideTitle(title);
import Image from "next/image";
    setActiveMenu(title);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";

import Image from "next/image";
  useEffect(() => {
import Image from "next/image";
    const handleResize = () => {
import Image from "next/image";
      if (window.innerWidth < 800) {
import Image from "next/image";
        setIsCollapsed(true);
import Image from "next/image";
      }
import Image from "next/image";
    };
import Image from "next/image";
    handleResize();
import Image from "next/image";

import Image from "next/image";
    window.addEventListener("resize", handleResize);
import Image from "next/image";
    return () => window.removeEventListener("resize", handleResize);
import Image from "next/image";
  },);
import Image from "next/image";

import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="sm:px-5 sm:py-2 flex-col min-h-screen w-full">
import Image from "next/image";
      <div className="flex justify-between w-full gap-5 min-h-screen">
import Image from "next/image";
        <div
import Image from "next/image";
          className={`flex flex-col gap-5 rounded-2xl bg-[#211C84] ${
import Image from "next/image";
            isCollapsed ? "w-[70px]" : "w-1/5"
import Image from "next/image";
          } min-h-screen transition-all duration-300 ease-in-out`}
import Image from "next/image";
        >
import Image from "next/image";
          <div className="flex flex-col gap-2 p-5">
import Image from "next/image";
            <div className="flex justify-between items-center">
import Image from "next/image";
              {!isCollapsed && (
import Image from "next/image";
                <div className="flex gap-2 items-center">
import Image from "next/image";
                  <p className="text-2xl font-semibold text-white">
import Image from "next/image";
                    JOB PORTAL
import Image from "next/image";
                  </p>
import Image from "next/image";
                  <BiShoppingBag className="text-2xl text-white font-semibold" />
import Image from "next/image";
                </div>
import Image from "next/image";
              )}
import Image from "next/image";
              <div
import Image from "next/image";
                onClick={toggleSidebar}
import Image from "next/image";
                className="hover:bg-gray-500 transition-colors duration-300 ease-in-out p-1 rounded-2xl cursor-pointer"
import Image from "next/image";
              >
import Image from "next/image";
                <HiOutlineMenu className="text-2xl text-white hover:text-black transition-colors duration-300 ease-in-out" />
import Image from "next/image";
              </div>
import Image from "next/image";
            </div>
import Image from "next/image";
            <hr className="w-full h-[2px] bg-white" />
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="flex flex-col gap-3">
import Image from "next/image";
            <div className="flex flex-col gap-1 mt-5">
import Image from "next/image";
              {sideBarDashboard.slice(0, 6).map((item) => (
import Image from "next/image";
                <div
import Image from "next/image";
                  onClick={() => handleActivity(item.title)}
import Image from "next/image";
                  key={item._id}
import Image from "next/image";
                  className={`flex items-center gap-5 ${
import Image from "next/image";
                    activeMenu === item.title
import Image from "next/image";
                      ? "bg-[#003092]"
import Image from "next/image";
                      : null
import Image from "next/image";
                  } cursor-pointer hover:bg-[#4635B1] py-2 px-5 rounded-2xl`}
import Image from "next/image";
                >
import Image from "next/image";
                  <span className="text-lg font-semibold text-white">
import Image from "next/image";
                    {item.icon}
import Image from "next/image";
                  </span>
import Image from "next/image";
                  {!isCollapsed && (
import Image from "next/image";
                    <p className="text-lg font-semibold text-white">
import Image from "next/image";
                      {item.title}
import Image from "next/image";
                    </p>
import Image from "next/image";
                  )}
import Image from "next/image";
                </div>
import Image from "next/image";
              ))}
import Image from "next/image";
            </div>
import Image from "next/image";
            <div
import Image from "next/image";
              onClick={() => setShowMenu((prev) => !prev)}
import Image from "next/image";
              className="flex items-center gap-5 cursor-pointer hover:bg-[#4635B1] py-2 px-5 rounded-2xl"
import Image from "next/image";
            >
import Image from "next/image";
              <span className="text-lg font-semibold text-white">
import Image from "next/image";
                <HiOutlineQuestionMarkCircle />
import Image from "next/image";
              </span>
import Image from "next/image";
              {!isCollapsed && (
import Image from "next/image";
                <p className="text-lg font-semibold text-white">
import Image from "next/image";
                  Help & Support
import Image from "next/image";
                </p>
import Image from "next/image";
              )}
import Image from "next/image";
            </div>
import Image from "next/image";
            {showMenu ? (
import Image from "next/image";
              <>
import Image from "next/image";
                <hr className="w-full h-[2px] bg-white" />
import Image from "next/image";
                <div className="flex flex-col gap-1">
import Image from "next/image";
                  {sideBarDashboard.slice(7).map((item) => (
import Image from "next/image";
                    <div
import Image from "next/image";
                      onClick={() => handleActivity(item.title)}
import Image from "next/image";
                      key={item._id}
import Image from "next/image";
                      className={`flex items-center gap-5 ${
import Image from "next/image";
                        activeMenu === item.title
import Image from "next/image";
                          ? "bg-[#003092]"
import Image from "next/image";
                          : null
import Image from "next/image";
                      } cursor-pointer hover:bg-[#4635B1] py-2 px-5 rounded-2xl`}
import Image from "next/image";
                    >
import Image from "next/image";
                      <span className="text-lg font-semibold text-white">
import Image from "next/image";
                        {item.icon}
import Image from "next/image";
                      </span>
import Image from "next/image";
                      {!isCollapsed && (
import Image from "next/image";
                        <p className="text-lg font-semibold text-white">
import Image from "next/image";
                          {item.title}
import Image from "next/image";
                        </p>
import Image from "next/image";
                      )}
import Image from "next/image";
                    </div>
import Image from "next/image";
                  ))}
import Image from "next/image";
                </div>
import Image from "next/image";
              </>
import Image from "next/image";
            ) : null}
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";
        {currentSideTitle === "Dashboard" && (
import Image from "next/image";
          <AdminMainContent isCollapsed={isCollapsed} />
import Image from "next/image";
        )}
import Image from "next/image";
        {currentSideTitle === "Settings" && (
import Image from "next/image";
          <div className="flex-1 flex flex-col max-w-screen-xl mx-auto w-full">
import Image from "next/image";
            <AdminHeader />
import Image from "next/image";
            <main className="p-6">
import Image from "next/image";
              <SettingsHeading />
import Image from "next/image";
              <GeneralSettings />
import Image from "next/image";
            </main>
import Image from "next/image";
          </div>
import Image from "next/image";
        )}
import Image from "next/image";
        {currentSideTitle === "Payment" && (
import Image from "next/image";
          <div className="flex-1 flex flex-col max-w-screen-xl mx-auto w-full">
import Image from "next/image";
            <AdminHeader />
import Image from "next/image";
            <Tabs />
import Image from "next/image";
            <div className="overflow-x-auto">
import Image from "next/image";
              <SortableTable />
import Image from "next/image";
            </div>
import Image from "next/image";
          </div>
import Image from "next/image";
        )}
import Image from "next/image";
        {currentSideTitle === "Job Management" && (
import Image from "next/image";
          <div className="flex-1 flex flex-col max-w-screen-xl mx-auto w-full">
import Image from "next/image";
            <AdminHeader />
import Image from "next/image";
            <div className="flex flex-wrap gap-4 mb-6">
import Image from "next/image";
              <select className="p-2 border rounded">
import Image from "next/image";
                <option>Timeframe: All-time</option>
import Image from "next/image";
                <option>Last 30 days</option>
import Image from "next/image";
                <option>Last 7 days</option>
import Image from "next/image";
              </select>
import Image from "next/image";
              <select className="p-2 border rounded">
import Image from "next/image";
                <option>Source: All</option>
import Image from "next/image";
                <option>LinkedIn</option>
import Image from "next/image";
                <option>Indeed</option>
import Image from "next/image";
              </select>
import Image from "next/image";
              <select className="p-2 border rounded">
import Image from "next/image";
                <option>Medium: All</option>
import Image from "next/image";
                <option>Referral</option>
import Image from "next/image";
                <option>Direct</option>
import Image from "next/image";
              </select>
import Image from "next/image";
            </div>
import Image from "next/image";

import Image from "next/image";
            {/* User Insights */}
import Image from "next/image";
            <div className="grid grid-cols-3 gap-4 mb-6">
import Image from "next/image";
              <div className="p-4 bg-white shadow-md rounded-lg text-center">
import Image from "next/image";
                <h3 className="text-lg font-bold">Pending</h3>
import Image from "next/image";
                <p className="text-xl">500</p>
import Image from "next/image";
              </div>
import Image from "next/image";
              <div className="p-4 bg-white shadow-md rounded-lg text-center">
import Image from "next/image";
                <h3 className="text-lg font-bold">Shortlisted</h3>
import Image from "next/image";
                <p className="text-xl">150</p>
import Image from "next/image";
              </div>
import Image from "next/image";
              <div className="p-4 bg-white shadow-md rounded-lg text-center">
import Image from "next/image";
                <h3 className="text-lg font-bold">Hired</h3>
import Image from "next/image";
                <p className="text-xl">9800</p>
import Image from "next/image";
              </div>
import Image from "next/image";
            </div>
import Image from "next/image";

import Image from "next/image";
            {/* Image */}
import Image from "next/image";

import Image from "next/image";
            {/* Job Posting Table */}
import Image from "next/image";
            <div className="bg-white p-4 shadow-md rounded-lg overflow-auto">
import Image from "next/image";
              <table className="w-full">
import Image from "next/image";
                <thead>
import Image from "next/image";
                  <tr className="text-left bg-gray-200">
import Image from "next/image";
                    <th
import Image from "next/image";
                      className="p-2 cursor-pointer"
import Image from "next/image";
                      onClick={() => sortTable("name")}
import Image from "next/image";
                    >
import Image from "next/image";
                      Job Posting Name ⬆⬇
import Image from "next/image";
                    </th>
import Image from "next/image";
                    <th
import Image from "next/image";
                      className="p-2 cursor-pointer"
import Image from "next/image";
                      onClick={() => sortTable("start")}
import Image from "next/image";
                    >
import Image from "next/image";
                      Start Date ⬆⬇
import Image from "next/image";
                    </th>
import Image from "next/image";
                    <th
import Image from "next/image";
                      className="p-2 cursor-pointer"
import Image from "next/image";
                      onClick={() => sortTable("end")}
import Image from "next/image";
                    >
import Image from "next/image";
                      End Date ⬆⬇
import Image from "next/image";
                    </th>
import Image from "next/image";
                    <th
import Image from "next/image";
                      className="p-2 cursor-pointer"
import Image from "next/image";
                      onClick={() => sortTable("priority")}
import Image from "next/image";
                    >
import Image from "next/image";
                      Priority ⬆⬇
import Image from "next/image";
                    </th>
import Image from "next/image";
                  </tr>
import Image from "next/image";
                </thead>
import Image from "next/image";
                <tbody>
import Image from "next/image";
                  {sortedData.map((job, index) => (
import Image from "next/image";
                    <tr key={index} className="border-b">
import Image from "next/image";
                      <td className="p-2">{job.name}</td>
import Image from "next/image";
                      <td className="p-2">{job.start}</td>
import Image from "next/image";
                      <td className="p-2">{job.end}</td>
import Image from "next/image";
                      <td className="p-2">{job.priority}</td>
import Image from "next/image";
                    </tr>
import Image from "next/image";
                  ))}
import Image from "next/image";
                </tbody>
import Image from "next/image";
              </table>
import Image from "next/image";
            </div>
import Image from "next/image";

import Image from "next/image";
            {/* Statistics */}
import Image from "next/image";
            <div className="grid grid-cols-2 gap-4 mt-6">
import Image from "next/image";
              <div className="p-4 bg-white shadow-md rounded-lg">
import Image from "next/image";
                <h3 className="font-bold mb-2">Job Statistics & Insights</h3>
import Image from "next/image";
                <p>
import Image from "next/image";
                  Total Jobs Posted Monthly:{" "}
import Image from "next/image";
                  <span className="font-bold">900+</span>
import Image from "next/image";
                </p>
import Image from "next/image";
                <p>
import Image from "next/image";
                  Active Jobs: <span className="font-bold">560+</span>
import Image from "next/image";
                </p>
import Image from "next/image";
                <p>
import Image from "next/image";
                  Expired Jobs: <span className="font-bold">150</span>
import Image from "next/image";
                </p>
import Image from "next/image";
              </div>
import Image from "next/image";
              <div className="p-4 bg-white shadow-md rounded-lg">
import Image from "next/image";
                <h3 className="font-bold mb-2">Companies & Hiring Insights</h3>
import Image from "next/image";
                <p>
import Image from "next/image";
                  Top Hiring Companies: <span className="font-bold">60+</span>
import Image from "next/image";
                </p>
import Image from "next/image";
                <p>
import Image from "next/image";
                  List of Pending Jobs: <span className="font-bold">NA</span>
import Image from "next/image";
                </p>
import Image from "next/image";
                <p>
import Image from "next/image";
                  Candidate Hired Daily: <span className="font-bold">10+</span>
import Image from "next/image";
                </p>
import Image from "next/image";
              </div>
import Image from "next/image";
            </div>
import Image from "next/image";
          </div>
import Image from "next/image";
        )}
import Image from "next/image";
        {currentSideTitle === "Blog" && (
import Image from "next/image";
          <div
import Image from "next/image";
            className={`flex flex-col gap-3 min-h-screen transition-all duration-300 ease-in-out ${
import Image from "next/image";
              isCollapsed ? "w-full" : "w-4/5"
import Image from "next/image";
            }`}
import Image from "next/image";
          >
import Image from "next/image";
            <AdminHeader />
import Image from "next/image";
            <BlogManager />
import Image from "next/image";
          </div>
import Image from "next/image";
        )}
import Image from "next/image";
        {currentSideTitle === "Job Search" && (
import Image from "next/image";
          <div
import Image from "next/image";
            className={`flex flex-col gap-3 min-h-screen transition-all duration-300 ease-in-out ${
import Image from "next/image";
              isCollapsed ? "w-full" : "w-4/5"
import Image from "next/image";
            }`}
import Image from "next/image";
          >
import Image from "next/image";
            <AdminHeader />
import Image from "next/image";
            <JobSearchComponent />
import Image from "next/image";
          </div>
import Image from "next/image";
        )}
import Image from "next/image";
        {currentSideTitle === "Email Support" && (
import Image from "next/image";
          <div
import Image from "next/image";
            className={`flex flex-col gap-3 min-h-screen transition-all duration-300 ease-in-out ${
import Image from "next/image";
              isCollapsed ? "w-full" : "w-4/5"
import Image from "next/image";
            }`}
import Image from "next/image";
          >
import Image from "next/image";
            <AdminHeader />
import Image from "next/image";
            <EmailSettings />
import Image from "next/image";
          </div>
import Image from "next/image";
        )}
import Image from "next/image";
        {currentSideTitle === "Reports" && (
import Image from "next/image";
          <div
import Image from "next/image";
            className={`flex flex-col gap-3 min-h-screen transition-all duration-300 ease-in-out ${
import Image from "next/image";
              isCollapsed ? "w-full" : "w-4/5"
import Image from "next/image";
            }`}
import Image from "next/image";
          >
import Image from "next/image";
            <AdminHeader />
import Image from "next/image";
            <Reports />
import Image from "next/image";
          </div>
import Image from "next/image";
        )}
import Image from "next/image";
        {currentSideTitle === "User Management" && (
import Image from "next/image";
          <div
import Image from "next/image";
            className={`flex flex-col gap-3 min-h-screen transition-all duration-300 ease-in-out ${
import Image from "next/image";
              isCollapsed ? "w-full" : "w-4/5"
import Image from "next/image";
            }`}
import Image from "next/image";
          >
import Image from "next/image";
            <AdminHeader />
import Image from "next/image";
            <UserManagement />
import Image from "next/image";
          </div>
import Image from "next/image";
        )}
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
export default AdminEmployerPage;
import Image from "next/image";

import Image from "next/image";
const SettingsHeading = () => (
import Image from "next/image";
  <div className="bg-gray-300 text-black text-lg md:text-xl font-bold text-center p-3 md:p-4 rounded-lg shadow-md w-full max-w-4xl mx-auto">
import Image from "next/image";
    Settings
import Image from "next/image";
  </div>
import Image from "next/image";
);
