
mport Image from "next/image";
"use client";
mport Image from "next/image";

mport Image from "next/image";
import axios from "axios";
mport Image from "next/image";
import { useEffect, useState } from "react";
mport Image from "next/image";
import { FaSortUp, FaSortDown, FaEllipsisH, FaSearch } from "react-icons/fa";
mport Image from "next/image";

mport Image from "next/image";
const jobData = [
mport Image from "next/image";
    {
mport Image from "next/image";
        jobApplied: "Business Consultant",
mport Image from "next/image";
        companyName: "McKinsey & Company",
mport Image from "next/image";
        status: "Under Review",
mport Image from "next/image";
        jobId: 26,
mport Image from "next/image";
        applyOn: "6/3/22",
mport Image from "next/image";
      },
mport Image from "next/image";
      {
mport Image from "next/image";
        jobApplied: "Management Trainee",
mport Image from "next/image";
        companyName: "Bain & Company",
mport Image from "next/image";
        status: "Under Review",
mport Image from "next/image";
        jobId: 35,
mport Image from "next/image";
        applyOn: "12/2/22",
mport Image from "next/image";
      },
mport Image from "next/image";
      {
mport Image from "next/image";
        jobApplied: "Strategy Analyst",
mport Image from "next/image";
        companyName: "",
mport Image from "next/image";
        status: "Rejected",
mport Image from "next/image";
        jobId: 48,
mport Image from "next/image";
        applyOn: "4/19/23",
mport Image from "next/image";
      },
mport Image from "next/image";
      {
mport Image from "next/image";
        jobApplied: "Operations Manager",
mport Image from "next/image";
        companyName: "Goldman Sachs",
mport Image from "next/image";
        status: "Shortlisted",
mport Image from "next/image";
        jobId: 90,
mport Image from "next/image";
        applyOn: "1/2/23",
mport Image from "next/image";
      },
mport Image from "next/image";
      {
mport Image from "next/image";
        jobApplied: "Business Development",
mport Image from "next/image";
        companyName: "",
mport Image from "next/image";
        status: "Shortlisted",
mport Image from "next/image";
        jobId: 67,
mport Image from "next/image";
        applyOn: "9/4/23",
mport Image from "next/image";
      },
mport Image from "next/image";
      {
mport Image from "next/image";
        jobApplied: "Project Manager",
mport Image from "next/image";
        companyName: "Morgan Stanley",
mport Image from "next/image";
        status: "Rejected",
mport Image from "next/image";
        jobId: 35,
mport Image from "next/image";
        applyOn: "6/3/22",
mport Image from "next/image";
      },
mport Image from "next/image";
      {
mport Image from "next/image";
        jobApplied: "Marketing Manager",
mport Image from "next/image";
        companyName: "Deutsche Bank",
mport Image from "next/image";
        status: "Rejected",
mport Image from "next/image";
        jobId: 48,
mport Image from "next/image";
        applyOn: "12/2/22",
mport Image from "next/image";
      },
mport Image from "next/image";
      {
mport Image from "next/image";
        jobApplied: "Sales Manager",
mport Image from "next/image";
        companyName: "Microsoft",
mport Image from "next/image";
        status: "Under Review",
mport Image from "next/image";
        jobId: 90,
mport Image from "next/image";
        applyOn: "4/19/23",
mport Image from "next/image";
      },
mport Image from "next/image";
      {
mport Image from "next/image";
        jobApplied: "Product Manager",
mport Image from "next/image";
        companyName: "Johnson & Johnson",
mport Image from "next/image";
        status: "Shortlisted",
mport Image from "next/image";
        jobId: 67,
mport Image from "next/image";
        applyOn: "1/2/23",
mport Image from "next/image";
      },
mport Image from "next/image";
];
mport Image from "next/image";

mport Image from "next/image";

mport Image from "next/image";
const capitalizeWords = (str) => {
mport Image from "next/image";
  if (!str) return "";
mport Image from "next/image";
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default function JobApplications() {
mport Image from "next/image";
  const [search, setSearch] = useState("");
mport Image from "next/image";
  const [sortedBy, setSortedBy] = useState(null);
mport Image from "next/image";
  const [isAscending, setIsAscending] = useState(true);
mport Image from "next/image";
  const [applicationData, setApplicationData] = useState(null);
mport Image from "next/image";

mport Image from "next/image";
  const sortData = (key) => {
mport Image from "next/image";
    setIsAscending(sortedBy === key ? !isAscending : true);
mport Image from "next/image";
    setSortedBy(key);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    const fetchLocationsJobsCompanyLocations = async () => {
mport Image from "next/image";
      const token = localStorage.getItem("authToken");
mport Image from "next/image";
      if (!token) {
mport Image from "next/image";
        return;
mport Image from "next/image";
      }
mport Image from "next/image";
      const url = `http://localhost:5000/api/applications/listApplicationsByUserId`;
mport Image from "next/image";
      try {
mport Image from "next/image";
        const response = await axios.get(url, {
mport Image from "next/image";
          headers: { Authorization: `Bearer ${token}` }
mport Image from "next/image";
        });
mport Image from "next/image";
  
mport Image from "next/image";
        if (response.data.success) {
mport Image from "next/image";
          if (response.data.applications.length > 0) {
mport Image from "next/image";
            setApplicationData(response.data.applications);
mport Image from "next/image";
          } else {
mport Image from "next/image";
            setApplicationData(null); 
mport Image from "next/image";
          }
mport Image from "next/image";
        } else {
mport Image from "next/image";
          console.log("API returned success: false");
mport Image from "next/image";
        }
mport Image from "next/image";
      } catch (error) {
mport Image from "next/image";
        console.error("Error fetching applications:", error.response?.data || error.message);
mport Image from "next/image";
      }
mport Image from "next/image";
    };
mport Image from "next/image";
  
mport Image from "next/image";
    fetchLocationsJobsCompanyLocations();
mport Image from "next/image";
  }, []);
mport Image from "next/image";

mport Image from "next/image";
  const timeAgo = (timestamp) => {
mport Image from "next/image";
    const now = new Date();
mport Image from "next/image";
    const postedDate = new Date(timestamp);
mport Image from "next/image";
    const diffInSeconds = Math.floor((now - postedDate) / 1000);
mport Image from "next/image";
    if (diffInSeconds < 60) {
mport Image from "next/image";
      return `${diffInSeconds} sec ago`;
mport Image from "next/image";
    } else if (diffInSeconds < 3600) {
mport Image from "next/image";
      return `${Math.floor(diffInSeconds / 60)} min ago`;
mport Image from "next/image";
    } else if (diffInSeconds < 86400) {
mport Image from "next/image";
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
mport Image from "next/image";
    } else {
mport Image from "next/image";
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
mport Image from "next/image";
    }
mport Image from "next/image";
  };
mport Image from "next/image";
  
mport Image from "next/image";
  
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="p-4 max-w-6xl mx-auto">
mport Image from "next/image";
      {/* Search Bar */}
mport Image from "next/image";
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 px-4">
mport Image from "next/image";
        <h2 className="text-lg font-semibold mb-2 md:mb-0">Job Applications</h2>
mport Image from "next/image";
        <div className="relative w-full md:w-64">
mport Image from "next/image";
          <input
mport Image from "next/image";
            type="text"
mport Image from "next/image";
            placeholder="Search..."
mport Image from "next/image";
            className="w-full border px-3 py-2 pl-8 rounded-md focus:outline-none"
mport Image from "next/image";
            value={search}
mport Image from "next/image";
            onChange={(e) => setSearch(e.target.value)}
mport Image from "next/image";
          />
mport Image from "next/image";
          <FaSearch className="absolute left-2 top-3 text-gray-400" />
mport Image from "next/image";
        </div>
mport Image from "next/image";
      </div>
mport Image from "next/image";

mport Image from "next/image";
      {/* Desktop Table View */}
mport Image from "next/image";
      <div className="hidden md:block overflow-x-auto">
mport Image from "next/image";
        <table className="w-full bg-white border rounded-lg shadow-lg">
mport Image from "next/image";
          <thead className="bg-gray-100 text-sm text-gray-600">
mport Image from "next/image";
            <tr>
mport Image from "next/image";
              {["Job Applied", "Company Name", "Status", "Apply On", "Options"].map((heading, index) => (
mport Image from "next/image";
                <th key={index} className="px-4 py-3 text-left whitespace-nowrap">
mport Image from "next/image";
                  <button
mport Image from "next/image";
                    onClick={() => sortData(heading.toLowerCase().replace(/ /g, ""))}
mport Image from "next/image";
                    className="flex items-center gap-1 hover:text-gray-800"
mport Image from "next/image";
                  >
mport Image from "next/image";
                    {heading}
mport Image from "next/image";
                    {sortedBy === heading.toLowerCase().replace(/ /g, "") && (
mport Image from "next/image";
                      isAscending ? <FaSortUp /> : <FaSortDown />
mport Image from "next/image";
                    )}
mport Image from "next/image";
                  </button>
mport Image from "next/image";
                </th>
mport Image from "next/image";
              ))}
mport Image from "next/image";
            </tr>
mport Image from "next/image";
          </thead>
mport Image from "next/image";
          <tbody className="text-sm">
mport Image from "next/image";
            {applicationData && applicationData?.map((job, index) => (
mport Image from "next/image";
              <tr key={index} className="border-t">
mport Image from "next/image";
                <td className="px-4 py-3 flex items-center gap-2 whitespace-nowrap">
mport Image from "next/image";
                  <input type="radio" className="accent-gray-600" /> {capitalizeWords(job.job.jobTitle)}
mport Image from "next/image";
                </td>
mport Image from "next/image";
                <td className="px-4 py-3 whitespace-nowrap">{capitalizeWords(job.job.company)}</td>
mport Image from "next/image";
                <td className={`px-4 py-3 whitespace-nowrap font-semibold ${
mport Image from "next/image";
                  job.status === "pending"
mport Image from "next/image";
                    ? "text-blue-600"
mport Image from "next/image";
                    : job.status === "Rejected"
mport Image from "next/image";
                    ? "text-red-500"
mport Image from "next/image";
                    : "text-green-600"
mport Image from "next/image";
                }`}>
mport Image from "next/image";
                  {capitalizeWords(job.status)}
mport Image from "next/image";
                </td>
mport Image from "next/image";
                {/* <td className="px-4 py-3 text-center whitespace-nowrap">{job._id}</td> */}
mport Image from "next/image";
                <td className="px-4 py-3 whitespace-nowrap">{timeAgo(job.createdAt)}</td>
mport Image from "next/image";
                <td className="px-4 py-3 text-center">
mport Image from "next/image";
                  <FaEllipsisH className="text-gray-600 cursor-pointer hover:text-gray-800" />
mport Image from "next/image";
                </td>
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
      {/* Mobile Card View */}
mport Image from "next/image";
      <div className="md:hidden">
mport Image from "next/image";
        {applicationData && applicationData?.map((job, index) => (
mport Image from "next/image";
          <div key={index} className="bg-white border rounded-lg shadow-md p-4 mb-3">
mport Image from "next/image";
            <div className="flex justify-between">
mport Image from "next/image";
              <h3 className="font-semibold text-lg">{capitalizeWords(job.job.jobTitle)}</h3>
mport Image from "next/image";
              <FaEllipsisH className="text-gray-500 cursor-pointer hover:text-gray-700" />
mport Image from "next/image";
            </div>
mport Image from "next/image";
            <p className="text-sm text-gray-600">{capitalizeWords(job.job.company)}</p>
mport Image from "next/image";
            <p className={`text-sm font-semibold ${
mport Image from "next/image";
              job.status === "Under Review"
mport Image from "next/image";
                ? "text-blue-600"
mport Image from "next/image";
                : job.status === "Rejected"
mport Image from "next/image";
                ? "text-red-500"
mport Image from "next/image";
                : "text-green-600"
mport Image from "next/image";
            }`}>
mport Image from "next/image";
              {job.status}
mport Image from "next/image";
            </p>
mport Image from "next/image";
            <div className="flex justify-between text-xs text-gray-500 mt-2">
mport Image from "next/image";
              <p>Applied On: {timeAgo(job.createdAt)}</p>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        ))}
mport Image from "next/image";
      </div>
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
}
