
import Image from "next/image";
"use client";
import Image from "next/image";
iimport React from "react";
import Image from "next/image";
iimport { Bookmark, Briefcase, Clock, DollarSign, MapPin } from "lucide-react";
import Image from "next/image";
iimport Link from "next/link";
import Image from "next/image";

import Image from "next/image";
const JobCard = ({ job }) => {
import Image from "next/image";
	return (
import Image from "next/image";
		<div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border rounded-lg shadow-md bg-white w-full mx-auto mb-4">
import Image from "next/image";
			<div className="flex items-start md:items-center gap-4 w-full">
import Image from "next/image";
				<div className="flex-shrink-0 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
import Image from "next/image";
					<Image
import Image from "next/image";
						src={job.companyLogo}
import Image from "next/image";
						alt="Company Logo"
import Image from "next/image";
						className="w-12 h-12 rounded-full object-cover"
import Image from "next/image";
					/>
import Image from "next/image";
				</div>
import Image from "next/image";
				<div className="w-full">
import Image from "next/image";
					<span className="text-xs text-gray-500">
import Image from "next/image";
						{job.createdAt.split("T")[0]}
import Image from "next/image";
					</span>
import Image from "next/image";
					<h3 className="text-lg sm:text-xl font-bold">
import Image from "next/image";
						{job.jobTitle}
import Image from "next/image";
					</h3>
import Image from "next/image";
					<p className="text-gray-600 text-sm">{job.company}</p>
import Image from "next/image";
					<div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 mt-3 text-gray-600 text-sm">
import Image from "next/image";
						<div className="flex items-center gap-2">
import Image from "next/image";
							<Briefcase size={18} /> {job.category}
import Image from "next/image";
						</div>
import Image from "next/image";
						<div className="flex items-center gap-2">
import Image from "next/image";
							<Clock size={18} /> {job.jobType}
import Image from "next/image";
						</div>
import Image from "next/image";
						<div className="flex items-center gap-2">
import Image from "next/image";
							<DollarSign size={18} />{" "}
import Image from "next/image";
							{job.jobPackage ? job.jobPackage : "Not Disclosed"}
import Image from "next/image";
						</div>
import Image from "next/image";
						<div className="flex items-center gap-2">
import Image from "next/image";
							<MapPin size={18} /> {job.location}
import Image from "next/image";
						</div>
import Image from "next/image";
					</div>
import Image from "next/image";
				</div>
import Image from "next/image";
			</div>
import Image from "next/image";
			<div className="flex items-center gap-4 mt-4 md:mt-0">
import Image from "next/image";
				<Bookmark
import Image from "next/image";
					className="text-gray-400 cursor-pointer hover:text-gray-600"
import Image from "next/image";
					size={22}
import Image from "next/image";
				/>
import Image from "next/image";
				<Link href={`/JobDetails/${job._id}`}>
import Image from "next/image";
					<button className="bg-teal-500 text-white px-4 py-2 rounded-lg whitespace-nowrap">
import Image from "next/image";
						Job Details
import Image from "next/image";
					</button>
import Image from "next/image";
				</Link>
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
const JobList = ({ jobs, setJobs }) => {
import Image from "next/image";

import Image from "next/image";
	return (
import Image from "next/image";
		<div className="p-4 sm:p-6 w-full">
import Image from "next/image";
			{/* Header Section with Job Count & Sort Dropdown */}
import Image from "next/image";
			<div className="flex justify-between items-center mb-4">
import Image from "next/image";
				<p className="text-gray-600 text-sm">
import Image from "next/image";
					Showing 1-{jobs.length} of {jobs.length} results
import Image from "next/image";
				</p>
import Image from "next/image";
				<select className="border border-gray-300 rounded px-3 py-1 text-sm text-gray-700 cursor-pointer">
import Image from "next/image";
					<option>Sort by latest</option>
import Image from "next/image";
					<option>Sort by oldest</option>
import Image from "next/image";
					<option>Sort by salary</option>
import Image from "next/image";
				</select>
import Image from "next/image";
			</div>
import Image from "next/image";

import Image from "next/image";
			{/* Job Listings */}
import Image from "next/image";
			{jobs?.map((job, index) => (
import Image from "next/image";
				<JobCard key={index} job={job} />
import Image from "next/image";
			))}
import Image from "next/image";
		</div>
import Image from "next/image";
	);
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default JobList;