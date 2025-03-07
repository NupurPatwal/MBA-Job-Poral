
import Image from "next/image";
iimport { useState } from "react";
import Image from "next/image";
iimport { Search } from "lucide-react";
import Image from "next/image";

import Image from "next/image";
export default function JobList() {
import Image from "next/image";
  const jobs = [
import Image from "next/image";
    { name: "Marshal & Company", status: "Active", id: "CER7826", startDate: "6/3/25", lastDate: "6/4/25" },
import Image from "next/image";
    { name: "Caesar Tech Solutions", status: "Active", id: "76893V5", startDate: "12/2/25", lastDate: "12/5/25" },
import Image from "next/image";
    { name: "JPMC", status: "Inactive", id: "87bvb48", startDate: "4/3/25", lastDate: "4/5/25" },
import Image from "next/image";
    { name: "Brian & Sons", status: "Suspended", id: "654VF90", startDate: "1/2/26", lastDate: "12/2/26" },
import Image from "next/image";
    { name: "Meta", status: "Active", id: "654UHJ7", startDate: "9/4/25", lastDate: "19/4/25" },
import Image from "next/image";
    { name: "PhonePay", status: "Active", id: "3MJ54N5", startDate: "6/3/25", lastDate: "26/3/25" },
import Image from "next/image";
    { name: "DIAS", status: "Active", id: "48YGY6", startDate: "12/12/24", lastDate: "12/12/25" },
import Image from "next/image";
    { name: "Sprint", status: "Inactive", id: "90gh78M", startDate: "4/10/25", lastDate: "24/11/25" },
import Image from "next/image";
    { name: "Garrett & Company", status: "Suspended", id: "6FGH467", startDate: "1/2/25", lastDate: "11/2/25" },
import Image from "next/image";
  ];
import Image from "next/image";

import Image from "next/image";
  const [searchTerm, setSearchTerm] = useState("");
import Image from "next/image";
  const [filteredJobs, setFilteredJobs] = useState(jobs);
import Image from "next/image";

import Image from "next/image";
  const handleSearch = (event) => {
import Image from "next/image";
    const value = event.target.value.toLowerCase();
import Image from "next/image";
    setSearchTerm(value);
import Image from "next/image";

import Image from "next/image";
    const filtered = jobs.filter(
import Image from "next/image";
      (job) =>
import Image from "next/image";
        job.name.toLowerCase().includes(value) ||
import Image from "next/image";
        job.status.toLowerCase().includes(value) ||
import Image from "next/image";
        job.id.toLowerCase().includes(value)
import Image from "next/image";
    );
import Image from "next/image";

import Image from "next/image";
    setFilteredJobs(filtered);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="bg-white p-4 md:p-6 rounded shadow-lg max-w-5xl mx-auto w-full">
import Image from "next/image";
      <h2 className="text-lg font-semibold mb-4 text-center">Job Search Details</h2>
import Image from "next/image";

import Image from "next/image";
      {/* Search Bar */}
import Image from "next/image";
      <div className="flex items-center p-2 rounded mb-6 bg-gray-50 border border-gray-300">
import Image from "next/image";
        <Search className="text-gray-400" />
import Image from "next/image";
        <input
import Image from "next/image";
          type="text"
import Image from "next/image";
          placeholder="Search"
import Image from "next/image";
          value={searchTerm}
import Image from "next/image";
          onChange={handleSearch}
import Image from "next/image";
          className="ml-2 outline-none w-full bg-gray-50 p-2"
import Image from "next/image";
        />
import Image from "next/image";
      </div>
import Image from "next/image";
      
import Image from "next/image";
      {/* Responsive Table */}
import Image from "next/image";
      <div className="overflow-x-auto">
import Image from "next/image";
        <table className="w-full text-left border-collapse min-w-max">
import Image from "next/image";
          <thead>
import Image from "next/image";
            <tr className="bg-gray-100 text-xs sm:text-sm md:text-base">
import Image from "next/image";
              <th className="p-2 whitespace-nowrap">Job</th>
import Image from "next/image";
              <th className="p-2 whitespace-nowrap">Status</th>
import Image from "next/image";
              <th className="p-2 whitespace-nowrap">Job ID</th>
import Image from "next/image";
              <th className="p-2 whitespace-nowrap">Start Date</th>
import Image from "next/image";
              <th className="p-2 whitespace-nowrap">Last Date</th>
import Image from "next/image";
            </tr>
import Image from "next/image";
          </thead>
import Image from "next/image";
          <tbody>
import Image from "next/image";
            {filteredJobs.length > 0 ? (
import Image from "next/image";
              filteredJobs.map((job, index) => (
import Image from "next/image";
                <tr key={index} className="border-b hover:bg-gray-50 text-xs sm:text-sm md:text-base">
import Image from "next/image";
                  <td className="p-2 whitespace-nowrap">{job.name}</td>
import Image from "next/image";
                  <td className="p-2 whitespace-nowrap">{job.status}</td>
import Image from "next/image";
                  <td className="p-2 whitespace-nowrap">{job.id}</td>
import Image from "next/image";
                  <td className="p-2 whitespace-nowrap">{job.startDate}</td>
import Image from "next/image";
                  <td className="p-2 whitespace-nowrap">{job.lastDate}</td>
import Image from "next/image";
                </tr>
import Image from "next/image";
              ))
import Image from "next/image";
            ) : (
import Image from "next/image";
              <tr>
import Image from "next/image";
                <td colSpan="5" className="text-center p-2 text-sm sm:text-base">
import Image from "next/image";
                  No jobs found
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
    </div>
import Image from "next/image";
  );
import Image from "next/image";
}
import Image from "next/image";

import Image from "next/image";
// Sample Job Data
