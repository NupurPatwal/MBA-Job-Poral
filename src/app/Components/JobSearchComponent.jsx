
mport Image from "next/image";
import { useState } from "react";
mport Image from "next/image";
import { Search } from "lucide-react";
mport Image from "next/image";

mport Image from "next/image";
export default function JobList() {
mport Image from "next/image";
  const jobs = [
mport Image from "next/image";
    { name: "Marshal & Company", status: "Active", id: "CER7826", startDate: "6/3/25", lastDate: "6/4/25" },
mport Image from "next/image";
    { name: "Caesar Tech Solutions", status: "Active", id: "76893V5", startDate: "12/2/25", lastDate: "12/5/25" },
mport Image from "next/image";
    { name: "JPMC", status: "Inactive", id: "87bvb48", startDate: "4/3/25", lastDate: "4/5/25" },
mport Image from "next/image";
    { name: "Brian & Sons", status: "Suspended", id: "654VF90", startDate: "1/2/26", lastDate: "12/2/26" },
mport Image from "next/image";
    { name: "Meta", status: "Active", id: "654UHJ7", startDate: "9/4/25", lastDate: "19/4/25" },
mport Image from "next/image";
    { name: "PhonePay", status: "Active", id: "3MJ54N5", startDate: "6/3/25", lastDate: "26/3/25" },
mport Image from "next/image";
    { name: "DIAS", status: "Active", id: "48YGY6", startDate: "12/12/24", lastDate: "12/12/25" },
mport Image from "next/image";
    { name: "Sprint", status: "Inactive", id: "90gh78M", startDate: "4/10/25", lastDate: "24/11/25" },
mport Image from "next/image";
    { name: "Garrett & Company", status: "Suspended", id: "6FGH467", startDate: "1/2/25", lastDate: "11/2/25" },
mport Image from "next/image";
  ];
mport Image from "next/image";

mport Image from "next/image";
  const [searchTerm, setSearchTerm] = useState("");
mport Image from "next/image";
  const [filteredJobs, setFilteredJobs] = useState(jobs);
mport Image from "next/image";

mport Image from "next/image";
  const handleSearch = (event) => {
mport Image from "next/image";
    const value = event.target.value.toLowerCase();
mport Image from "next/image";
    setSearchTerm(value);
mport Image from "next/image";

mport Image from "next/image";
    const filtered = jobs.filter(
mport Image from "next/image";
      (job) =>
mport Image from "next/image";
        job.name.toLowerCase().includes(value) ||
mport Image from "next/image";
        job.status.toLowerCase().includes(value) ||
mport Image from "next/image";
        job.id.toLowerCase().includes(value)
mport Image from "next/image";
    );
mport Image from "next/image";

mport Image from "next/image";
    setFilteredJobs(filtered);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="bg-white p-4 md:p-6 rounded shadow-lg max-w-5xl mx-auto w-full">
mport Image from "next/image";
      <h2 className="text-lg font-semibold mb-4 text-center">Job Search Details</h2>
mport Image from "next/image";

mport Image from "next/image";
      {/* Search Bar */}
mport Image from "next/image";
      <div className="flex items-center p-2 rounded mb-6 bg-gray-50 border border-gray-300">
mport Image from "next/image";
        <Search className="text-gray-400" />
mport Image from "next/image";
        <input
mport Image from "next/image";
          type="text"
mport Image from "next/image";
          placeholder="Search"
mport Image from "next/image";
          value={searchTerm}
mport Image from "next/image";
          onChange={handleSearch}
mport Image from "next/image";
          className="ml-2 outline-none w-full bg-gray-50 p-2"
mport Image from "next/image";
        />
mport Image from "next/image";
      </div>
mport Image from "next/image";
      
mport Image from "next/image";
      {/* Responsive Table */}
mport Image from "next/image";
      <div className="overflow-x-auto">
mport Image from "next/image";
        <table className="w-full text-left border-collapse min-w-max">
mport Image from "next/image";
          <thead>
mport Image from "next/image";
            <tr className="bg-gray-100 text-xs sm:text-sm md:text-base">
mport Image from "next/image";
              <th className="p-2 whitespace-nowrap">Job</th>
mport Image from "next/image";
              <th className="p-2 whitespace-nowrap">Status</th>
mport Image from "next/image";
              <th className="p-2 whitespace-nowrap">Job ID</th>
mport Image from "next/image";
              <th className="p-2 whitespace-nowrap">Start Date</th>
mport Image from "next/image";
              <th className="p-2 whitespace-nowrap">Last Date</th>
mport Image from "next/image";
            </tr>
mport Image from "next/image";
          </thead>
mport Image from "next/image";
          <tbody>
mport Image from "next/image";
            {filteredJobs.length > 0 ? (
mport Image from "next/image";
              filteredJobs.map((job, index) => (
mport Image from "next/image";
                <tr key={index} className="border-b hover:bg-gray-50 text-xs sm:text-sm md:text-base">
mport Image from "next/image";
                  <td className="p-2 whitespace-nowrap">{job.name}</td>
mport Image from "next/image";
                  <td className="p-2 whitespace-nowrap">{job.status}</td>
mport Image from "next/image";
                  <td className="p-2 whitespace-nowrap">{job.id}</td>
mport Image from "next/image";
                  <td className="p-2 whitespace-nowrap">{job.startDate}</td>
mport Image from "next/image";
                  <td className="p-2 whitespace-nowrap">{job.lastDate}</td>
mport Image from "next/image";
                </tr>
mport Image from "next/image";
              ))
mport Image from "next/image";
            ) : (
mport Image from "next/image";
              <tr>
mport Image from "next/image";
                <td colSpan="5" className="text-center p-2 text-sm sm:text-base">
mport Image from "next/image";
                  No jobs found
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
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
}
mport Image from "next/image";

mport Image from "next/image";
// Sample Job Data
