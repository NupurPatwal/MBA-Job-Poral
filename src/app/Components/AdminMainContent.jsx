
mport Image from "next/image";
"use client"
mport Image from "next/image";
import React, { useEffect, useState } from "react";
mport Image from "next/image";
import { FaBell, FaUser, FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa";
mport Image from "next/image";
import "../globals.css";
mport Image from "next/image";
import axios from "axios";
mport Image from "next/image";
import AdminHeader from "./AdminHeader";
mport Image from "next/image";

mport Image from "next/image";
const AdminMainContent = ({ isCollapsed }) => {
mport Image from "next/image";
  const employeesData = [
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 1,
mport Image from "next/image";
      name: "Alan Liveli",
mport Image from "next/image";
      position: "Operations",
mport Image from "next/image";
      salary: "$45,234",
mport Image from "next/image";
      mobileNo: "852356412",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 2,
mport Image from "next/image";
      name: "Dexter",
mport Image from "next/image";
      position: "IT Manager",
mport Image from "next/image";
      salary: "$23,345",
mport Image from "next/image";
      mobileNo: "625471236",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 3,
mport Image from "next/image";
      name: "Alan Liveli",
mport Image from "next/image";
      position: "Operations",
mport Image from "next/image";
      salary: "$45,234",
mport Image from "next/image";
      mobileNo: "785235642",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 4,
mport Image from "next/image";
      name: "Dexter",
mport Image from "next/image";
      position: "IT Manager",
mport Image from "next/image";
      salary: "$23,345",
mport Image from "next/image";
      mobileNo: "625471236",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 5,
mport Image from "next/image";
      name: "Vasco DIgama",
mport Image from "next/image";
      position: "Management",
mport Image from "next/image";
      salary: "$54,090",
mport Image from "next/image";
      mobileNo: "478937894",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 6,
mport Image from "next/image";
      name: "Alan Liveli",
mport Image from "next/image";
      position: "Operations",
mport Image from "next/image";
      salary: "$45,234",
mport Image from "next/image";
      mobileNo: "785235642",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 7,
mport Image from "next/image";
      name: "Dexter",
mport Image from "next/image";
      position: "IT Manager",
mport Image from "next/image";
      salary: "$23,345",
mport Image from "next/image";
      mobileNo: "625471236",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 8,
mport Image from "next/image";
      name: "Vasco DIgama",
mport Image from "next/image";
      position: "Management",
mport Image from "next/image";
      salary: "$54,090",
mport Image from "next/image";
      mobileNo: "478937894",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 9,
mport Image from "next/image";
      name: "Sophia Wilson",
mport Image from "next/image";
      position: "HR Manager",
mport Image from "next/image";
      salary: "$60,500",
mport Image from "next/image";
      mobileNo: "789654123",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 10,
mport Image from "next/image";
      name: "James Anderson",
mport Image from "next/image";
      position: "Finance Analyst",
mport Image from "next/image";
      salary: "$48,750",
mport Image from "next/image";
      mobileNo: "654789321",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 11,
mport Image from "next/image";
      name: "Emily Carter",
mport Image from "next/image";
      position: "Marketing Lead",
mport Image from "next/image";
      salary: "$52,600",
mport Image from "next/image";
      mobileNo: "741852963",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 12,
mport Image from "next/image";
      name: "Michael Brown",
mport Image from "next/image";
      position: "Software Engineer",
mport Image from "next/image";
      salary: "$70,000",
mport Image from "next/image";
      mobileNo: "369852147",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 13,
mport Image from "next/image";
      name: "Olivia Taylor",
mport Image from "next/image";
      position: "Product Manager",
mport Image from "next/image";
      salary: "$80,200",
mport Image from "next/image";
      mobileNo: "258147369",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 14,
mport Image from "next/image";
      name: "William Scott",
mport Image from "next/image";
      position: "Data Scientist",
mport Image from "next/image";
      salary: "$75,450",
mport Image from "next/image";
      mobileNo: "159753468",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 15,
mport Image from "next/image";
      name: "Ava Martinez",
mport Image from "next/image";
      position: "UI/UX Designer",
mport Image from "next/image";
      salary: "$55,300",
mport Image from "next/image";
      mobileNo: "753951852",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 16,
mport Image from "next/image";
      name: "Ethan Davis",
mport Image from "next/image";
      position: "DevOps Engineer",
mport Image from "next/image";
      salary: "$68,900",
mport Image from "next/image";
      mobileNo: "852741963",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 17,
mport Image from "next/image";
      name: "Liam Wilson",
mport Image from "next/image";
      position: "Cybersecurity Analyst",
mport Image from "next/image";
      salary: "$74,500",
mport Image from "next/image";
      mobileNo: "965874123",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 18,
mport Image from "next/image";
      name: "Emma Rodriguez",
mport Image from "next/image";
      position: "Project Manager",
mport Image from "next/image";
      salary: "$79,200",
mport Image from "next/image";
      mobileNo: "896574321",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 19,
mport Image from "next/image";
      name: "Noah Johnson",
mport Image from "next/image";
      position: "AI Engineer",
mport Image from "next/image";
      salary: "$85,700",
mport Image from "next/image";
      mobileNo: "789123654",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 20,
mport Image from "next/image";
      name: "Isabella Moore",
mport Image from "next/image";
      position: "Business Analyst",
mport Image from "next/image";
      salary: "$62,300",
mport Image from "next/image";
      mobileNo: "951236478",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 21,
mport Image from "next/image";
      name: "Mason Lee",
mport Image from "next/image";
      position: "Quality Assurance",
mport Image from "next/image";
      salary: "$58,900",
mport Image from "next/image";
      mobileNo: "753468159",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 22,
mport Image from "next/image";
      name: "Mia Thompson",
mport Image from "next/image";
      position: "Customer Support",
mport Image from "next/image";
      salary: "$40,600",
mport Image from "next/image";
      mobileNo: "369741258",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 23,
mport Image from "next/image";
      name: "Elijah Clark",
mport Image from "next/image";
      position: "Network Engineer",
mport Image from "next/image";
      salary: "$67,200",
mport Image from "next/image";
      mobileNo: "147258369",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 24,
mport Image from "next/image";
      name: "Charlotte Hall",
mport Image from "next/image";
      position: "Legal Advisor",
mport Image from "next/image";
      salary: "$92,400",
mport Image from "next/image";
      mobileNo: "951753468",
mport Image from "next/image";
    },
mport Image from "next/image";
  ];
mport Image from "next/image";

mport Image from "next/image";
  const [prevIndex, setPrevIndex] = useState(0);
mport Image from "next/image";
  const [nextIndex, setNextIndex] = useState(10);
mport Image from "next/image";
  const [hrData, setHrData] = useState(null);
mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    const fetchData = async () => {
mport Image from "next/image";
      const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/hr/data`
mport Image from "next/image";
      try {
mport Image from "next/image";
        const response = await axios.get(url);
mport Image from "next/image";
        setHrData(response.data);
mport Image from "next/image";
      } catch (error) {
mport Image from "next/image";
        console.error("Error fetching data:", error.response?.data || error.message);
mport Image from "next/image";
      }
mport Image from "next/image";
    };
mport Image from "next/image";
    fetchData();
mport Image from "next/image";
  }, []);
mport Image from "next/image";
  
mport Image from "next/image";
  const previousData = () => {
mport Image from "next/image";

mport Image from "next/image";
  }
mport Image from "next/image";

mport Image from "next/image";
  const nextData = () => {
mport Image from "next/image";
  }
mport Image from "next/image";
  
mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className={`flex flex-col gap-3 min-h-screen transition-all duration-300 ease-in-out ${ isCollapsed ? "w-full" : "w-3/5 sm:w-4/5"}`}>
mport Image from "next/image";
      <AdminHeader />
mport Image from "next/image";
      <p className="text-2xl text-black font-semibold p-2 text-center bg-gray-200 rounded-2xl">Dashboard</p>
mport Image from "next/image";
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-5 place-items-center">
mport Image from "next/image";
        <div className="flex flex-col rounded-xl p-3 items-center justify-center border-2 border-gray-300 bg-white w-44 shadow-2xl">
mport Image from "next/image";
          <p className="text-2xl font-semibold text-black">Views</p>
mport Image from "next/image";
          <div className="flex gap-2 w-full justify-between items-center">
mport Image from "next/image";
            <p className="text-xl font-semibold">2,314</p>
mport Image from "next/image";
            <FaArrowRight className="transform -rotate-45 text-2xl text-green-600" />
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";
        <div className="flex flex-col rounded-xl p-3 items-center justify-center border-2 border-gray-300 bg-white w-44 shadow-2xl">
mport Image from "next/image";
          <p className="text-2xl font-semibold text-black">Visits</p>
mport Image from "next/image";
          <div className="flex gap-2 w-full justify-between items-center">
mport Image from "next/image";
            <p className="text-xl font-semibold">2,45</p>
mport Image from "next/image";
            <FaArrowRight className="transform -rotate-45 text-2xl text-red-700" />
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";
        <div className="flex flex-col rounded-xl p-3 items-center justify-center border-2 border-gray-300 bg-white w-44 shadow-2xl">
mport Image from "next/image";
          <p className="text-2xl font-semibold text-black">New Users</p>
mport Image from "next/image";
          <div className="flex gap-2 w-full justify-between items-center">
mport Image from "next/image";
            <p className="text-xl font-semibold">2,158</p>
mport Image from "next/image";
            <FaArrowRight className="transform -rotate-45 text-2xl text-green-600" />
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";
        <div className="flex flex-col rounded-xl p-3 items-center justify-center border-2 border-gray-300 bg-white w-44 shadow-2xl">
mport Image from "next/image";
          <p className="text-2xl font-semibold text-black">Active Users</p>
mport Image from "next/image";
          <div className="flex gap-2 w-full justify-between items-center">
mport Image from "next/image";
            <p className="text-xl font-semibold">1088</p>
mport Image from "next/image";
            <FaArrowRight className="transform rotate-45 text-2xl text-red-700" />
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";
      </div>
mport Image from "next/image";
      <div className="flex flex-col border-[1px] h-full w-full border-black rounded-2xl">
mport Image from "next/image";
        <div className="flex flex-col p-2 gap-5">
mport Image from "next/image";
          <div className="flex items-center justify-center gap-10">
mport Image from "next/image";
            <p className="text-3xl font-semibold text-black text-center">HR Information</p>
mport Image from "next/image";
            <div className="flex items-center gap-2 p-2 bg-gray-200 rounded-2xl">
mport Image from "next/image";
              <FaSearch />
mport Image from "next/image";
              <span className="text-lg">Search</span>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex justify-between w-full">
mport Image from "next/image";
            <span className="sm:text-2xl md:text-3xl text-lg font-semibold text-black w-1/4">Name</span>
mport Image from "next/image";
            <span className="sm:text-2xl md:text-3xl text-lg font-semibold text-black w-1/4 text-center">Position</span>
mport Image from "next/image";
            <span className="sm:text-2xl md:text-3xl text-lg font-semibold text-black w-1/4 text-center">Salary</span>
mport Image from "next/image";
            <span className="sm:text-2xl md:text-3xl text-lg font-semibold text-black w-1/4 text-right">Mobile No</span>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";
        <hr className="w-full h-[2px] bg-black" />
mport Image from "next/image";
        <div className="flex flex-col px-2 py-5">
mport Image from "next/image";
          {
mport Image from "next/image";
            hrData?.map((item, index) => (
mport Image from "next/image";
              <div key={item._id} className={`flex justify-between w-full items-center px-2 py-2 rounded-2xl ${ index % 2 != 0 ? "bg-gray-200" : "bg-white"}`}>
mport Image from "next/image";
                <p className="sm:text-xl text-lg font-normal sm:font-medium text-black w-1/4">{item.name}</p>
mport Image from "next/image";
                <p className="sm:text-xl text-lg font-normal sm:font-medium text-black w-1/4 text-center">{item.position}</p>
mport Image from "next/image";
                <p className="sm:text-xl text-lg font-normal sm:font-medium text-black w-1/4 text-center">${item.salary}</p>
mport Image from "next/image";
                <p className="sm:text-xl text-lg font-normal sm:font-medium text-black w-1/4 text-right">{item.mobile}</p>
mport Image from "next/image";
              </div>
mport Image from "next/image";
            ))
mport Image from "next/image";
          }
mport Image from "next/image";
        </div>
mport Image from "next/image";
        {/* <div className="flex justify-end gap-5 p-5">
mport Image from "next/image";
          <button disabled={prevIndex === 0} onClick={previousData} id={prevIndex === 0 ? undefined : "animation"} className="disabled:cursor-not-allowed w-40 justify-center cursor-pointer flex gap-2 items-center bg-gradient-to-br from-slate-950 to-gray-400 p-3 rounded-2xl">
mport Image from "next/image";
            <FaArrowLeft className="text-xl text-white font-semibold" />
mport Image from "next/image";
            <p className="text-white text-lg font-semibold">Previous</p>
mport Image from "next/image";
          </button>
mport Image from "next/image";
          <button disabled={nextIndex === employeesData.length} onClick={nextData} id={nextIndex === employeesData.length ? undefined : "animation"}className="disabled:cursor-not-allowed w-40 justify-center cursor-pointer flex gap-2 items-center bg-gradient-to-br from-slate-950 to-gray-400 p-3 rounded-2xl">
mport Image from "next/image";
            <p className="text-white text-lg font-semibold">Next</p>
mport Image from "next/image";
            <FaArrowRight className="text-xl text-white font-semibold" />
mport Image from "next/image";
          </button>
mport Image from "next/image";
        </div> */}
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
export default AdminMainContent;
