
import Image from "next/image";
"use client"
import Image from "next/image";
iimport React, { useEffect, useState } from "react";
import Image from "next/image";
iimport { FaBell, FaUser, FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
iimport "../globals.css";
import Image from "next/image";
iimport axios from "axios";
import Image from "next/image";
iimport AdminHeader from "./AdminHeader";
import Image from "next/image";

import Image from "next/image";
const AdminMainContent = ({ isCollapsed }) => {
import Image from "next/image";
  const employeesData = [
import Image from "next/image";
    {
import Image from "next/image";
      _id: 1,
import Image from "next/image";
      name: "Alan Liveli",
import Image from "next/image";
      position: "Operations",
import Image from "next/image";
      salary: "$45,234",
import Image from "next/image";
      mobileNo: "852356412",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 2,
import Image from "next/image";
      name: "Dexter",
import Image from "next/image";
      position: "IT Manager",
import Image from "next/image";
      salary: "$23,345",
import Image from "next/image";
      mobileNo: "625471236",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 3,
import Image from "next/image";
      name: "Alan Liveli",
import Image from "next/image";
      position: "Operations",
import Image from "next/image";
      salary: "$45,234",
import Image from "next/image";
      mobileNo: "785235642",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 4,
import Image from "next/image";
      name: "Dexter",
import Image from "next/image";
      position: "IT Manager",
import Image from "next/image";
      salary: "$23,345",
import Image from "next/image";
      mobileNo: "625471236",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 5,
import Image from "next/image";
      name: "Vasco DIgama",
import Image from "next/image";
      position: "Management",
import Image from "next/image";
      salary: "$54,090",
import Image from "next/image";
      mobileNo: "478937894",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 6,
import Image from "next/image";
      name: "Alan Liveli",
import Image from "next/image";
      position: "Operations",
import Image from "next/image";
      salary: "$45,234",
import Image from "next/image";
      mobileNo: "785235642",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 7,
import Image from "next/image";
      name: "Dexter",
import Image from "next/image";
      position: "IT Manager",
import Image from "next/image";
      salary: "$23,345",
import Image from "next/image";
      mobileNo: "625471236",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 8,
import Image from "next/image";
      name: "Vasco DIgama",
import Image from "next/image";
      position: "Management",
import Image from "next/image";
      salary: "$54,090",
import Image from "next/image";
      mobileNo: "478937894",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 9,
import Image from "next/image";
      name: "Sophia Wilson",
import Image from "next/image";
      position: "HR Manager",
import Image from "next/image";
      salary: "$60,500",
import Image from "next/image";
      mobileNo: "789654123",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 10,
import Image from "next/image";
      name: "James Anderson",
import Image from "next/image";
      position: "Finance Analyst",
import Image from "next/image";
      salary: "$48,750",
import Image from "next/image";
      mobileNo: "654789321",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 11,
import Image from "next/image";
      name: "Emily Carter",
import Image from "next/image";
      position: "Marketing Lead",
import Image from "next/image";
      salary: "$52,600",
import Image from "next/image";
      mobileNo: "741852963",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 12,
import Image from "next/image";
      name: "Michael Brown",
import Image from "next/image";
      position: "Software Engineer",
import Image from "next/image";
      salary: "$70,000",
import Image from "next/image";
      mobileNo: "369852147",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 13,
import Image from "next/image";
      name: "Olivia Taylor",
import Image from "next/image";
      position: "Product Manager",
import Image from "next/image";
      salary: "$80,200",
import Image from "next/image";
      mobileNo: "258147369",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 14,
import Image from "next/image";
      name: "William Scott",
import Image from "next/image";
      position: "Data Scientist",
import Image from "next/image";
      salary: "$75,450",
import Image from "next/image";
      mobileNo: "159753468",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 15,
import Image from "next/image";
      name: "Ava Martinez",
import Image from "next/image";
      position: "UI/UX Designer",
import Image from "next/image";
      salary: "$55,300",
import Image from "next/image";
      mobileNo: "753951852",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 16,
import Image from "next/image";
      name: "Ethan Davis",
import Image from "next/image";
      position: "DevOps Engineer",
import Image from "next/image";
      salary: "$68,900",
import Image from "next/image";
      mobileNo: "852741963",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 17,
import Image from "next/image";
      name: "Liam Wilson",
import Image from "next/image";
      position: "Cybersecurity Analyst",
import Image from "next/image";
      salary: "$74,500",
import Image from "next/image";
      mobileNo: "965874123",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 18,
import Image from "next/image";
      name: "Emma Rodriguez",
import Image from "next/image";
      position: "Project Manager",
import Image from "next/image";
      salary: "$79,200",
import Image from "next/image";
      mobileNo: "896574321",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 19,
import Image from "next/image";
      name: "Noah Johnson",
import Image from "next/image";
      position: "AI Engineer",
import Image from "next/image";
      salary: "$85,700",
import Image from "next/image";
      mobileNo: "789123654",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 20,
import Image from "next/image";
      name: "Isabella Moore",
import Image from "next/image";
      position: "Business Analyst",
import Image from "next/image";
      salary: "$62,300",
import Image from "next/image";
      mobileNo: "951236478",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 21,
import Image from "next/image";
      name: "Mason Lee",
import Image from "next/image";
      position: "Quality Assurance",
import Image from "next/image";
      salary: "$58,900",
import Image from "next/image";
      mobileNo: "753468159",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 22,
import Image from "next/image";
      name: "Mia Thompson",
import Image from "next/image";
      position: "Customer Support",
import Image from "next/image";
      salary: "$40,600",
import Image from "next/image";
      mobileNo: "369741258",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 23,
import Image from "next/image";
      name: "Elijah Clark",
import Image from "next/image";
      position: "Network Engineer",
import Image from "next/image";
      salary: "$67,200",
import Image from "next/image";
      mobileNo: "147258369",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 24,
import Image from "next/image";
      name: "Charlotte Hall",
import Image from "next/image";
      position: "Legal Advisor",
import Image from "next/image";
      salary: "$92,400",
import Image from "next/image";
      mobileNo: "951753468",
import Image from "next/image";
    },
import Image from "next/image";
  ];
import Image from "next/image";

import Image from "next/image";
  const [prevIndex, setPrevIndex] = useState(0);
import Image from "next/image";
  const [nextIndex, setNextIndex] = useState(10);
import Image from "next/image";
  const [hrData, setHrData] = useState(null);
import Image from "next/image";

import Image from "next/image";
  useEffect(() => {
import Image from "next/image";
    const fetchData = async () => {
import Image from "next/image";
      const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/hr/data`
import Image from "next/image";
      try {
import Image from "next/image";
        const response = await axios.get(url);
import Image from "next/image";
        setHrData(response.data);
import Image from "next/image";
      } catch (error) {
import Image from "next/image";
        console.error("Error fetching data:", error.response?.data || error.message);
import Image from "next/image";
      }
import Image from "next/image";
    };
import Image from "next/image";
    fetchData();
import Image from "next/image";
  }, []);
import Image from "next/image";
  
import Image from "next/image";
  const previousData = () => {
import Image from "next/image";

import Image from "next/image";
  }
import Image from "next/image";

import Image from "next/image";
  const nextData = () => {
import Image from "next/image";
  }
import Image from "next/image";
  
import Image from "next/image";
  return (
import Image from "next/image";
    <div className={`flex flex-col gap-3 min-h-screen transition-all duration-300 ease-in-out ${ isCollapsed ? "w-full" : "w-3/5 sm:w-4/5"}`}>
import Image from "next/image";
      <AdminHeader />
import Image from "next/image";
      <p className="text-2xl text-black font-semibold p-2 text-center bg-gray-200 rounded-2xl">Dashboard</p>
import Image from "next/image";
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-5 place-items-center">
import Image from "next/image";
        <div className="flex flex-col rounded-xl p-3 items-center justify-center border-2 border-gray-300 bg-white w-44 shadow-2xl">
import Image from "next/image";
          <p className="text-2xl font-semibold text-black">Views</p>
import Image from "next/image";
          <div className="flex gap-2 w-full justify-between items-center">
import Image from "next/image";
            <p className="text-xl font-semibold">2,314</p>
import Image from "next/image";
            <FaArrowRight className="transform -rotate-45 text-2xl text-green-600" />
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";
        <div className="flex flex-col rounded-xl p-3 items-center justify-center border-2 border-gray-300 bg-white w-44 shadow-2xl">
import Image from "next/image";
          <p className="text-2xl font-semibold text-black">Visits</p>
import Image from "next/image";
          <div className="flex gap-2 w-full justify-between items-center">
import Image from "next/image";
            <p className="text-xl font-semibold">2,45</p>
import Image from "next/image";
            <FaArrowRight className="transform -rotate-45 text-2xl text-red-700" />
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";
        <div className="flex flex-col rounded-xl p-3 items-center justify-center border-2 border-gray-300 bg-white w-44 shadow-2xl">
import Image from "next/image";
          <p className="text-2xl font-semibold text-black">New Users</p>
import Image from "next/image";
          <div className="flex gap-2 w-full justify-between items-center">
import Image from "next/image";
            <p className="text-xl font-semibold">2,158</p>
import Image from "next/image";
            <FaArrowRight className="transform -rotate-45 text-2xl text-green-600" />
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";
        <div className="flex flex-col rounded-xl p-3 items-center justify-center border-2 border-gray-300 bg-white w-44 shadow-2xl">
import Image from "next/image";
          <p className="text-2xl font-semibold text-black">Active Users</p>
import Image from "next/image";
          <div className="flex gap-2 w-full justify-between items-center">
import Image from "next/image";
            <p className="text-xl font-semibold">1088</p>
import Image from "next/image";
            <FaArrowRight className="transform rotate-45 text-2xl text-red-700" />
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";
      </div>
import Image from "next/image";
      <div className="flex flex-col border-[1px] h-full w-full border-black rounded-2xl">
import Image from "next/image";
        <div className="flex flex-col p-2 gap-5">
import Image from "next/image";
          <div className="flex items-center justify-center gap-10">
import Image from "next/image";
            <p className="text-3xl font-semibold text-black text-center">HR Information</p>
import Image from "next/image";
            <div className="flex items-center gap-2 p-2 bg-gray-200 rounded-2xl">
import Image from "next/image";
              <FaSearch />
import Image from "next/image";
              <span className="text-lg">Search</span>
import Image from "next/image";
            </div>
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="flex justify-between w-full">
import Image from "next/image";
            <span className="sm:text-2xl md:text-3xl text-lg font-semibold text-black w-1/4">Name</span>
import Image from "next/image";
            <span className="sm:text-2xl md:text-3xl text-lg font-semibold text-black w-1/4 text-center">Position</span>
import Image from "next/image";
            <span className="sm:text-2xl md:text-3xl text-lg font-semibold text-black w-1/4 text-center">Salary</span>
import Image from "next/image";
            <span className="sm:text-2xl md:text-3xl text-lg font-semibold text-black w-1/4 text-right">Mobile No</span>
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";
        <hr className="w-full h-[2px] bg-black" />
import Image from "next/image";
        <div className="flex flex-col px-2 py-5">
import Image from "next/image";
          {
import Image from "next/image";
            hrData?.map((item, index) => (
import Image from "next/image";
              <div key={item._id} className={`flex justify-between w-full items-center px-2 py-2 rounded-2xl ${ index % 2 != 0 ? "bg-gray-200" : "bg-white"}`}>
import Image from "next/image";
                <p className="sm:text-xl text-lg font-normal sm:font-medium text-black w-1/4">{item.name}</p>
import Image from "next/image";
                <p className="sm:text-xl text-lg font-normal sm:font-medium text-black w-1/4 text-center">{item.position}</p>
import Image from "next/image";
                <p className="sm:text-xl text-lg font-normal sm:font-medium text-black w-1/4 text-center">${item.salary}</p>
import Image from "next/image";
                <p className="sm:text-xl text-lg font-normal sm:font-medium text-black w-1/4 text-right">{item.mobile}</p>
import Image from "next/image";
              </div>
import Image from "next/image";
            ))
import Image from "next/image";
          }
import Image from "next/image";
        </div>
import Image from "next/image";
        {/* <div className="flex justify-end gap-5 p-5">
import Image from "next/image";
          <button disabled={prevIndex === 0} onClick={previousData} id={prevIndex === 0 ? undefined : "animation"} className="disabled:cursor-not-allowed w-40 justify-center cursor-pointer flex gap-2 items-center bg-gradient-to-br from-slate-950 to-gray-400 p-3 rounded-2xl">
import Image from "next/image";
            <FaArrowLeft className="text-xl text-white font-semibold" />
import Image from "next/image";
            <p className="text-white text-lg font-semibold">Previous</p>
import Image from "next/image";
          </button>
import Image from "next/image";
          <button disabled={nextIndex === employeesData.length} onClick={nextData} id={nextIndex === employeesData.length ? undefined : "animation"}className="disabled:cursor-not-allowed w-40 justify-center cursor-pointer flex gap-2 items-center bg-gradient-to-br from-slate-950 to-gray-400 p-3 rounded-2xl">
import Image from "next/image";
            <p className="text-white text-lg font-semibold">Next</p>
import Image from "next/image";
            <FaArrowRight className="text-xl text-white font-semibold" />
import Image from "next/image";
          </button>
import Image from "next/image";
        </div> */}
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
export default AdminMainContent;
