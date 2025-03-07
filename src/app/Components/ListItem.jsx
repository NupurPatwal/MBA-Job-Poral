
import Image from "next/image";
"use client";
import Image from "next/image";

import Image from "next/image";
iimport axios from "axios";
import Image from "next/image";
iimport { useEffect, useState } from "react";
import Image from "next/image";
iimport { FaSortUp, FaSortDown, FaEllipsisH, FaSearch } from "react-icons/fa";
import Image from "next/image";

import Image from "next/image";
const jobData = [
import Image from "next/image";
    {
import Image from "next/image";
        jobApplied: "Business Consultant",
import Image from "next/image";
        companyName: "McKinsey & Company",
import Image from "next/image";
        status: "Under Review",
import Image from "next/image";
        jobId: 26,
import Image from "next/image";
        applyOn: "6/3/22",
import Image from "next/image";
      },
import Image from "next/image";
      {
import Image from "next/image";
        jobApplied: "Management Trainee",
import Image from "next/image";
        companyName: "Bain & Company",
import Image from "next/image";
        status: "Under Review",
import Image from "next/image";
        jobId: 35,
import Image from "next/image";
        applyOn: "12/2/22",
import Image from "next/image";
      },
import Image from "next/image";
      {
import Image from "next/image";
        jobApplied: "Strategy Analyst",
import Image from "next/image";
        companyName: "",
import Image from "next/image";
        status: "Rejected",
import Image from "next/image";
        jobId: 48,
import Image from "next/image";
        applyOn: "4/19/23",
import Image from "next/image";
      },
import Image from "next/image";
      {
import Image from "next/image";
        jobApplied: "Operations Manager",
import Image from "next/image";
        companyName: "Goldman Sachs",
import Image from "next/image";
        status: "Shortlisted",
import Image from "next/image";
        jobId: 90,
import Image from "next/image";
        applyOn: "1/2/23",
import Image from "next/image";
      },
import Image from "next/image";
      {
import Image from "next/image";
        jobApplied: "Business Development",
import Image from "next/image";
        companyName: "",
import Image from "next/image";
        status: "Shortlisted",
import Image from "next/image";
        jobId: 67,
import Image from "next/image";
        applyOn: "9/4/23",
import Image from "next/image";
      },
import Image from "next/image";
      {
import Image from "next/image";
        jobApplied: "Project Manager",
import Image from "next/image";
        companyName: "Morgan Stanley",
import Image from "next/image";
        status: "Rejected",
import Image from "next/image";
        jobId: 35,
import Image from "next/image";
        applyOn: "6/3/22",
import Image from "next/image";
      },
import Image from "next/image";
      {
import Image from "next/image";
        jobApplied: "Marketing Manager",
import Image from "next/image";
        companyName: "Deutsche Bank",
import Image from "next/image";
        status: "Rejected",
import Image from "next/image";
        jobId: 48,
import Image from "next/image";
        applyOn: "12/2/22",
import Image from "next/image";
      },
import Image from "next/image";
      {
import Image from "next/image";
        jobApplied: "Sales Manager",
import Image from "next/image";
        companyName: "Microsoft",
import Image from "next/image";
        status: "Under Review",
import Image from "next/image";
        jobId: 90,
import Image from "next/image";
        applyOn: "4/19/23",
import Image from "next/image";
      },
import Image from "next/image";
      {
import Image from "next/image";
        jobApplied: "Product Manager",
import Image from "next/image";
        companyName: "Johnson & Johnson",
import Image from "next/image";
        status: "Shortlisted",
import Image from "next/image";
        jobId: 67,
import Image from "next/image";
        applyOn: "1/2/23",
import Image from "next/image";
      },
import Image from "next/image";
];
import Image from "next/image";

import Image from "next/image";

import Image from "next/image";
const capitalizeWords = (str) => {
import Image from "next/image";
  if (!str) return "";
import Image from "next/image";
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default function JobApplications() {
import Image from "next/image";
  const [search, setSearch] = useState("");
import Image from "next/image";
  const [sortedBy, setSortedBy] = useState(null);
import Image from "next/image";
  const [isAscending, setIsAscending] = useState(true);
import Image from "next/image";
  const [applicationData, setApplicationData] = useState(null);
import Image from "next/image";

import Image from "next/image";
  const sortData = (key) => {
import Image from "next/image";
    setIsAscending(sortedBy === key ? !isAscending : true);
import Image from "next/image";
    setSortedBy(key);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  useEffect(() => {
import Image from "next/image";
    const fetchLocationsJobsCompanyLocations = async () => {
import Image from "next/image";
      const token = localStorage.getItem("authToken");
import Image from "next/image";
      if (!token) {
import Image from "next/image";
        return;
import Image from "next/image";
      }
import Image from "next/image";
      const url = `http://localhost:5000/api/applications/listApplicationsByUserId`;
import Image from "next/image";
      try {
import Image from "next/image";
        const response = await axios.get(url, {
import Image from "next/image";
          headers: { Authorization: `Bearer ${token}` }
import Image from "next/image";
        });
import Image from "next/image";
  
import Image from "next/image";
        if (response.data.success) {
import Image from "next/image";
          if (response.data.applications.length > 0) {
import Image from "next/image";
            setApplicationData(response.data.applications);
import Image from "next/image";
          } else {
import Image from "next/image";
            setApplicationData(null); 
import Image from "next/image";
          }
import Image from "next/image";
        } else {
import Image from "next/image";
          console.log("API returned success: false");
import Image from "next/image";
        }
import Image from "next/image";
      } catch (error) {
import Image from "next/image";
        console.error("Error fetching applications:", error.response?.data || error.message);
import Image from "next/image";
      }
import Image from "next/image";
    };
import Image from "next/image";
  
import Image from "next/image";
    fetchLocationsJobsCompanyLocations();
import Image from "next/image";
  }, []);
import Image from "next/image";

import Image from "next/image";
  const timeAgo = (timestamp) => {
import Image from "next/image";
    const now = new Date();
import Image from "next/image";
    const postedDate = new Date(timestamp);
import Image from "next/image";
    const diffInSeconds = Math.floor((now - postedDate) / 1000);
import Image from "next/image";
    if (diffInSeconds < 60) {
import Image from "next/image";
      return `${diffInSeconds} sec ago`;
import Image from "next/image";
    } else if (diffInSeconds < 3600) {
import Image from "next/image";
      return `${Math.floor(diffInSeconds / 60)} min ago`;
import Image from "next/image";
    } else if (diffInSeconds < 86400) {
import Image from "next/image";
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
import Image from "next/image";
    } else {
import Image from "next/image";
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
import Image from "next/image";
    }
import Image from "next/image";
  };
import Image from "next/image";
  
import Image from "next/image";
  
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="p-4 max-w-6xl mx-auto">
import Image from "next/image";
      {/* Search Bar */}
import Image from "next/image";
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 px-4">
import Image from "next/image";
        <h2 className="text-lg font-semibold mb-2 md:mb-0">Job Applications</h2>
import Image from "next/image";
        <div className="relative w-full md:w-64">
import Image from "next/image";
          <input
import Image from "next/image";
            type="text"
import Image from "next/image";
            placeholder="Search..."
import Image from "next/image";
            className="w-full border px-3 py-2 pl-8 rounded-md focus:outline-none"
import Image from "next/image";
            value={search}
import Image from "next/image";
            onChange={(e) => setSearch(e.target.value)}
import Image from "next/image";
          />
import Image from "next/image";
          <FaSearch className="absolute left-2 top-3 text-gray-400" />
import Image from "next/image";
        </div>
import Image from "next/image";
      </div>
import Image from "next/image";

import Image from "next/image";
      {/* Desktop Table View */}
import Image from "next/image";
      <div className="hidden md:block overflow-x-auto">
import Image from "next/image";
        <table className="w-full bg-white border rounded-lg shadow-lg">
import Image from "next/image";
          <thead className="bg-gray-100 text-sm text-gray-600">
import Image from "next/image";
            <tr>
import Image from "next/image";
              {["Job Applied", "Company Name", "Status", "Apply On", "Options"].map((heading, index) => (
import Image from "next/image";
                <th key={index} className="px-4 py-3 text-left whitespace-nowrap">
import Image from "next/image";
                  <button
import Image from "next/image";
                    onClick={() => sortData(heading.toLowerCase().replace(/ /g, ""))}
import Image from "next/image";
                    className="flex items-center gap-1 hover:text-gray-800"
import Image from "next/image";
                  >
import Image from "next/image";
                    {heading}
import Image from "next/image";
                    {sortedBy === heading.toLowerCase().replace(/ /g, "") && (
import Image from "next/image";
                      isAscending ? <FaSortUp /> : <FaSortDown />
import Image from "next/image";
                    )}
import Image from "next/image";
                  </button>
import Image from "next/image";
                </th>
import Image from "next/image";
              ))}
import Image from "next/image";
            </tr>
import Image from "next/image";
          </thead>
import Image from "next/image";
          <tbody className="text-sm">
import Image from "next/image";
            {applicationData && applicationData?.map((job, index) => (
import Image from "next/image";
              <tr key={index} className="border-t">
import Image from "next/image";
                <td className="px-4 py-3 flex items-center gap-2 whitespace-nowrap">
import Image from "next/image";
                  <input type="radio" className="accent-gray-600" /> {capitalizeWords(job.job.jobTitle)}
import Image from "next/image";
                </td>
import Image from "next/image";
                <td className="px-4 py-3 whitespace-nowrap">{capitalizeWords(job.job.company)}</td>
import Image from "next/image";
                <td className={`px-4 py-3 whitespace-nowrap font-semibold ${
import Image from "next/image";
                  job.status === "pending"
import Image from "next/image";
                    ? "text-blue-600"
import Image from "next/image";
                    : job.status === "Rejected"
import Image from "next/image";
                    ? "text-red-500"
import Image from "next/image";
                    : "text-green-600"
import Image from "next/image";
                }`}>
import Image from "next/image";
                  {capitalizeWords(job.status)}
import Image from "next/image";
                </td>
import Image from "next/image";
                {/* <td className="px-4 py-3 text-center whitespace-nowrap">{job._id}</td> */}
import Image from "next/image";
                <td className="px-4 py-3 whitespace-nowrap">{timeAgo(job.createdAt)}</td>
import Image from "next/image";
                <td className="px-4 py-3 text-center">
import Image from "next/image";
                  <FaEllipsisH className="text-gray-600 cursor-pointer hover:text-gray-800" />
import Image from "next/image";
                </td>
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
      {/* Mobile Card View */}
import Image from "next/image";
      <div className="md:hidden">
import Image from "next/image";
        {applicationData && applicationData?.map((job, index) => (
import Image from "next/image";
          <div key={index} className="bg-white border rounded-lg shadow-md p-4 mb-3">
import Image from "next/image";
            <div className="flex justify-between">
import Image from "next/image";
              <h3 className="font-semibold text-lg">{capitalizeWords(job.job.jobTitle)}</h3>
import Image from "next/image";
              <FaEllipsisH className="text-gray-500 cursor-pointer hover:text-gray-700" />
import Image from "next/image";
            </div>
import Image from "next/image";
            <p className="text-sm text-gray-600">{capitalizeWords(job.job.company)}</p>
import Image from "next/image";
            <p className={`text-sm font-semibold ${
import Image from "next/image";
              job.status === "Under Review"
import Image from "next/image";
                ? "text-blue-600"
import Image from "next/image";
                : job.status === "Rejected"
import Image from "next/image";
                ? "text-red-500"
import Image from "next/image";
                : "text-green-600"
import Image from "next/image";
            }`}>
import Image from "next/image";
              {job.status}
import Image from "next/image";
            </p>
import Image from "next/image";
            <div className="flex justify-between text-xs text-gray-500 mt-2">
import Image from "next/image";
              <p>Applied On: {timeAgo(job.createdAt)}</p>
import Image from "next/image";
            </div>
import Image from "next/image";
          </div>
import Image from "next/image";
        ))}
import Image from "next/image";
      </div>
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
}
