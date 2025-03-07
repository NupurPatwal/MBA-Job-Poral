
mport Image from "next/image";
"use client";
mport Image from "next/image";
import React from "react";
mport Image from "next/image";
import { Bookmark, Briefcase, Clock, DollarSign, MapPin } from "lucide-react";
mport Image from "next/image";
import Link from "next/link";
mport Image from "next/image";

mport Image from "next/image";
const JobCard = ({ job }) => {
mport Image from "next/image";
	return (
mport Image from "next/image";
		<div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border rounded-lg shadow-md bg-white w-full mx-auto mb-4">
mport Image from "next/image";
			<div className="flex items-start md:items-center gap-4 w-full">
mport Image from "next/image";
				<div className="flex-shrink-0 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
mport Image from "next/image";
					<Image
mport Image from "next/image";
						src={job.companyLogo}
mport Image from "next/image";
						alt="Company Logo"
mport Image from "next/image";
						className="w-12 h-12 rounded-full object-cover"
mport Image from "next/image";
					/>
mport Image from "next/image";
				</div>
mport Image from "next/image";
				<div className="w-full">
mport Image from "next/image";
					<span className="text-xs text-gray-500">
mport Image from "next/image";
						{job.createdAt.split("T")[0]}
mport Image from "next/image";
					</span>
mport Image from "next/image";
					<h3 className="text-lg sm:text-xl font-bold">
mport Image from "next/image";
						{job.jobTitle}
mport Image from "next/image";
					</h3>
mport Image from "next/image";
					<p className="text-gray-600 text-sm">{job.company}</p>
mport Image from "next/image";
					<div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 mt-3 text-gray-600 text-sm">
mport Image from "next/image";
						<div className="flex items-center gap-2">
mport Image from "next/image";
							<Briefcase size={18} /> {job.category}
mport Image from "next/image";
						</div>
mport Image from "next/image";
						<div className="flex items-center gap-2">
mport Image from "next/image";
							<Clock size={18} /> {job.jobType}
mport Image from "next/image";
						</div>
mport Image from "next/image";
						<div className="flex items-center gap-2">
mport Image from "next/image";
							<DollarSign size={18} />{" "}
mport Image from "next/image";
							{job.jobPackage ? job.jobPackage : "Not Disclosed"}
mport Image from "next/image";
						</div>
mport Image from "next/image";
						<div className="flex items-center gap-2">
mport Image from "next/image";
							<MapPin size={18} /> {job.location}
mport Image from "next/image";
						</div>
mport Image from "next/image";
					</div>
mport Image from "next/image";
				</div>
mport Image from "next/image";
			</div>
mport Image from "next/image";
			<div className="flex items-center gap-4 mt-4 md:mt-0">
mport Image from "next/image";
				<Bookmark
mport Image from "next/image";
					className="text-gray-400 cursor-pointer hover:text-gray-600"
mport Image from "next/image";
					size={22}
mport Image from "next/image";
				/>
mport Image from "next/image";
				<Link href={`/JobDetails/${job._id}`}>
mport Image from "next/image";
					<button className="bg-teal-500 text-white px-4 py-2 rounded-lg whitespace-nowrap">
mport Image from "next/image";
						Job Details
mport Image from "next/image";
					</button>
mport Image from "next/image";
				</Link>
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
const JobList = ({ jobs, setJobs }) => {
mport Image from "next/image";

mport Image from "next/image";
	return (
mport Image from "next/image";
		<div className="p-4 sm:p-6 w-full">
mport Image from "next/image";
			{/* Header Section with Job Count & Sort Dropdown */}
mport Image from "next/image";
			<div className="flex justify-between items-center mb-4">
mport Image from "next/image";
				<p className="text-gray-600 text-sm">
mport Image from "next/image";
					Showing 1-{jobs.length} of {jobs.length} results
mport Image from "next/image";
				</p>
mport Image from "next/image";
				<select className="border border-gray-300 rounded px-3 py-1 text-sm text-gray-700 cursor-pointer">
mport Image from "next/image";
					<option>Sort by latest</option>
mport Image from "next/image";
					<option>Sort by oldest</option>
mport Image from "next/image";
					<option>Sort by salary</option>
mport Image from "next/image";
				</select>
mport Image from "next/image";
			</div>
mport Image from "next/image";

mport Image from "next/image";
			{/* Job Listings */}
mport Image from "next/image";
			{jobs?.map((job, index) => (
mport Image from "next/image";
				<JobCard key={index} job={job} />
mport Image from "next/image";
			))}
mport Image from "next/image";
		</div>
mport Image from "next/image";
	);
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default JobList;