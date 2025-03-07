
mport Image from "next/image";
"use client";
mport Image from "next/image";

mport Image from "next/image";
import { useState } from "react";
mport Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
mport Image from "next/image";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
mport Image from "next/image";

mport Image from "next/image";
const JobFilterSidebar = ({ jobs, setFilteredJobs }) => {
mport Image from "next/image";
	const router = useRouter();
mport Image from "next/image";
	const searchParams = useSearchParams();
mport Image from "next/image";

mport Image from "next/image";
	const categories = [
mport Image from "next/image";
		"commerce",
mport Image from "next/image";
		"telecommunication",
mport Image from "next/image";
		"hotels & tourism",
mport Image from "next/image";
		"education",
mport Image from "next/image";
		"financial services",
mport Image from "next/image";
	];
mport Image from "next/image";
	const jobTypes = [
mport Image from "next/image";
		"full time",
mport Image from "next/image";
		"part time",
mport Image from "next/image";
		"freelance",
mport Image from "next/image";
		"seasonal",
mport Image from "next/image";
		"fixed-price",
mport Image from "next/image";
	];
mport Image from "next/image";
	const experienceLevels = [
mport Image from "next/image";
		"no-experience",
mport Image from "next/image";
		"fresher",
mport Image from "next/image";
		"intermediate",
mport Image from "next/image";
		"expert",
mport Image from "next/image";
	];
mport Image from "next/image";
	const tags = [
mport Image from "next/image";
		"operations",
mport Image from "next/image";
		"consulting",
mport Image from "next/image";
		"marketing",
mport Image from "next/image";
		"management",
mport Image from "next/image";
		"it",
mport Image from "next/image";
		"international business",
mport Image from "next/image";
	];
mport Image from "next/image";

mport Image from "next/image";
	const [searchQuery, setSearchQuery] = useState(
mport Image from "next/image";
		searchParams.get("search") || ""
mport Image from "next/image";
	);
mport Image from "next/image";
	const [selectedCity, setSelectedCity] = useState(
mport Image from "next/image";
		searchParams.get("city") || ""
mport Image from "next/image";
	);
mport Image from "next/image";
	const [selectedCategories, setSelectedCategories] = useState(
mport Image from "next/image";
		searchParams.getAll("category") || []
mport Image from "next/image";
	);
mport Image from "next/image";
	const [selectedJobTypes, setSelectedJobTypes] = useState(
mport Image from "next/image";
		searchParams.getAll("jobType") || []
mport Image from "next/image";
	);
mport Image from "next/image";
	const [selectedExperienceLevels, setSelectedExperienceLevels] = useState(
mport Image from "next/image";
		searchParams.getAll("experience") || []
mport Image from "next/image";
	);
mport Image from "next/image";
	const [selectedTags, setSelectedTags] = useState(
mport Image from "next/image";
		searchParams.getAll("tag") || []
mport Image from "next/image";
	);
mport Image from "next/image";
	const [salary, setSalary] = useState(searchParams.get("salary") || 9999);
mport Image from "next/image";

mport Image from "next/image";
	const filtersApplied = {
mport Image from "next/image";
		searchQuery,
mport Image from "next/image";
		selectedCity,
mport Image from "next/image";
		selectedCategories,
mport Image from "next/image";
		selectedJobTypes,
mport Image from "next/image";
		selectedExperienceLevels,
mport Image from "next/image";
		selectedTags,
mport Image from "next/image";
		salary,
mport Image from "next/image";
	};
mport Image from "next/image";

mport Image from "next/image";
	const filterJobs = () => {
mport Image from "next/image";
		let filtered = jobs.filter((job) => {
mport Image from "next/image";
			// console.log("job category", selectedCategories);
mport Image from "next/image";

mport Image from "next/image";
			return (
mport Image from "next/image";
				(searchQuery
mport Image from "next/image";
					? job.title
mport Image from "next/image";
							.toLowerCase()
mport Image from "next/image";
							.includes(searchQuery.toLowerCase()) ||
mport Image from "next/image";
					  job.company
mport Image from "next/image";
							.toLowerCase()
mport Image from "next/image";
							.includes(searchQuery.toLowerCase())
mport Image from "next/image";
					: true) &&
mport Image from "next/image";
				(selectedCity
mport Image from "next/image";
					? job.location?.toLowerCase() === selectedCity.toLowerCase()
mport Image from "next/image";
					: true) &&
mport Image from "next/image";
				(selectedCategories.length > 0
mport Image from "next/image";
					? selectedCategories.includes(job.category.toLowerCase())
mport Image from "next/image";
					: true) &&
mport Image from "next/image";
				(selectedJobTypes.length > 0
mport Image from "next/image";
					? selectedJobTypes.includes(job.jobType.toLowerCase())
mport Image from "next/image";
					: true) &&
mport Image from "next/image";
				(selectedExperienceLevels.length > 0
mport Image from "next/image";
					? selectedExperienceLevels.includes(job.experience)
mport Image from "next/image";
					: true) &&
mport Image from "next/image";
				(selectedTags.length > 0
mport Image from "next/image";
					? selectedTags.some((tag) => job.tags.includes(tag))
mport Image from "next/image";
					: true) &&
mport Image from "next/image";
				job.jobPackage >= salary
mport Image from "next/image";
			);
mport Image from "next/image";
		});
mport Image from "next/image";
		setFilteredJobs(filtered);
mport Image from "next/image";
	};
mport Image from "next/image";

mport Image from "next/image";
	const updateFiltersInURL = () => {
mport Image from "next/image";
		const params = new URLSearchParams();
mport Image from "next/image";

mport Image from "next/image";
		if (searchQuery) params.set("search", searchQuery);
mport Image from "next/image";
		if (selectedCity) params.set("city", selectedCity);
mport Image from "next/image";
		selectedCategories.forEach((cat) => params.append("category", cat));
mport Image from "next/image";
		selectedJobTypes.forEach((type) => params.append("jobType", type));
mport Image from "next/image";
		selectedExperienceLevels.forEach((exp) =>
mport Image from "next/image";
			params.append("experience", exp)
mport Image from "next/image";
		);
mport Image from "next/image";
		selectedTags.forEach((tag) => params.append("tag", tag));
mport Image from "next/image";
		if (salary) params.set("salary", salary);
mport Image from "next/image";

mport Image from "next/image";
		router.push(`?${params.toString().toLowerCase()}`, undefined, { scroll: false });
mport Image from "next/image";
		filterJobs();
mport Image from "next/image";
	};
mport Image from "next/image";

mport Image from "next/image";
	const toggleSelection = (item, setter, selectedItems) => {
mport Image from "next/image";
		setter((prev) =>
mport Image from "next/image";
			prev.includes(item)
mport Image from "next/image";
				? prev.filter((i) => i !== item)
mport Image from "next/image";
				: [...prev, item]
mport Image from "next/image";
		);
mport Image from "next/image";
	};
mport Image from "next/image";
	return (
mport Image from "next/image";
		<div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xs mx-auto">
mport Image from "next/image";
			{/* 🔍 Job Search */}
mport Image from "next/image";
			<h2 className="font-semibold text-lg mb-3">Search by Job Title</h2>
mport Image from "next/image";
			<div className="relative mb-4">
mport Image from "next/image";
				<FaSearch className="absolute left-3 top-3 text-gray-400" />
mport Image from "next/image";
				<input
mport Image from "next/image";
					type="text"
mport Image from "next/image";
					placeholder="Job title or company"
mport Image from "next/image";
					className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-teal-400"
mport Image from "next/image";
					value={searchQuery}
mport Image from "next/image";
					onChange={(e) => setSearchQuery(e.target.value)}
mport Image from "next/image";
				/>
mport Image from "next/image";
			</div>
mport Image from "next/image";

mport Image from "next/image";
			{/* 📍 Location Filter */}
mport Image from "next/image";
			<h2 className="font-semibold text-lg mb-3">Location</h2>
mport Image from "next/image";
			<div className="relative mb-4">
mport Image from "next/image";
				<FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
mport Image from "next/image";
				<select
mport Image from "next/image";
					className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-teal-400"
mport Image from "next/image";
					value={selectedCity}
mport Image from "next/image";
					onChange={(e) => setSelectedCity(e.target.value)}
mport Image from "next/image";
				>
mport Image from "next/image";
					<option value="">Choose city</option>
mport Image from "next/image";
					<option value="New York">New York</option>
mport Image from "next/image";
					<option value="Los Angeles">Los Angeles</option>
mport Image from "next/image";
					<option value="Chicago">Chicago</option>
mport Image from "next/image";
				</select>
mport Image from "next/image";
			</div>
mport Image from "next/image";

mport Image from "next/image";
			{/* 📌 Category */}
mport Image from "next/image";
			<h2 className="font-semibold text-lg mb-3">Category</h2>
mport Image from "next/image";
			{categories.map((category, index) => (
mport Image from "next/image";
				<label
mport Image from "next/image";
					key={index}
mport Image from "next/image";
					className="flex items-center justify-between mb-2 cursor-pointer"
mport Image from "next/image";
				>
mport Image from "next/image";
					<div className="flex items-center">
mport Image from "next/image";
						<input
mport Image from "next/image";
							type="checkbox"
mport Image from "next/image";
							checked={selectedCategories.includes(
mport Image from "next/image";
								category.replaceAll(" ", "-")
mport Image from "next/image";
							)}
mport Image from "next/image";
							onChange={() =>
mport Image from "next/image";
								toggleSelection(
mport Image from "next/image";
									category.replaceAll(" ", "-"),
mport Image from "next/image";
									setSelectedCategories,
mport Image from "next/image";
									selectedCategories
mport Image from "next/image";
								)
mport Image from "next/image";
							}
mport Image from "next/image";
							className="mr-2 accent-teal-500"
mport Image from "next/image";
						/>
mport Image from "next/image";
						{category}
mport Image from "next/image";
					</div>
mport Image from "next/image";
				</label>
mport Image from "next/image";
			))}
mport Image from "next/image";

mport Image from "next/image";
			{/* 📌 Job Type */}
mport Image from "next/image";
			<h2 className="font-semibold text-lg mt-4 mb-3">Job Type</h2>
mport Image from "next/image";
			{jobTypes.map((type, index) => (
mport Image from "next/image";
				<label
mport Image from "next/image";
					key={index}
mport Image from "next/image";
					className="flex items-center justify-between mb-2 cursor-pointer"
mport Image from "next/image";
				>
mport Image from "next/image";
					<div className="flex items-center">
mport Image from "next/image";
						<input
mport Image from "next/image";
							type="checkbox"
mport Image from "next/image";
							checked={selectedJobTypes.includes(
mport Image from "next/image";
								type.replaceAll(" ", "-")
mport Image from "next/image";
							)}
mport Image from "next/image";
							onChange={() =>
mport Image from "next/image";
								toggleSelection(
mport Image from "next/image";
									type.replaceAll(" ", "-"),
mport Image from "next/image";
									setSelectedJobTypes,
mport Image from "next/image";
									selectedJobTypes
mport Image from "next/image";
								)
mport Image from "next/image";
							}
mport Image from "next/image";
							className="mr-2 accent-teal-500"
mport Image from "next/image";
						/>
mport Image from "next/image";
						{type}
mport Image from "next/image";
					</div>
mport Image from "next/image";
				</label>
mport Image from "next/image";
			))}
mport Image from "next/image";

mport Image from "next/image";
			{/* 🎯 Experience Level */}
mport Image from "next/image";
			<h2 className="font-semibold text-lg mt-4 mb-3">
mport Image from "next/image";
				Experience Level
mport Image from "next/image";
			</h2>
mport Image from "next/image";
			{experienceLevels.map((level, index) => (
mport Image from "next/image";
				<label
mport Image from "next/image";
					key={index}
mport Image from "next/image";
					className="flex items-center justify-between mb-2 cursor-pointer"
mport Image from "next/image";
				>
mport Image from "next/image";
					<div className="flex items-center">
mport Image from "next/image";
						<input
mport Image from "next/image";
							type="checkbox"
mport Image from "next/image";
							checked={selectedExperienceLevels.includes(level)}
mport Image from "next/image";
							onChange={() =>
mport Image from "next/image";
								toggleSelection(
mport Image from "next/image";
									level,
mport Image from "next/image";
									setSelectedExperienceLevels,
mport Image from "next/image";
									selectedExperienceLevels
mport Image from "next/image";
								)
mport Image from "next/image";
							}
mport Image from "next/image";
							className="mr-2 accent-teal-500"
mport Image from "next/image";
						/>
mport Image from "next/image";
						{level}
mport Image from "next/image";
					</div>
mport Image from "next/image";
				</label>
mport Image from "next/image";
			))}
mport Image from "next/image";

mport Image from "next/image";
			{/* 💰 Salary Range */}
mport Image from "next/image";
			<h2 className="font-semibold text-lg mt-4 mb-3">Salary</h2>
mport Image from "next/image";
			<input
mport Image from "next/image";
				type="range"
mport Image from "next/image";
				min="0"
mport Image from "next/image";
				max="9999"
mport Image from "next/image";
				value={salary}
mport Image from "next/image";
				onChange={(e) => setSalary(e.target.value)}
mport Image from "next/image";
				className="w-full accent-teal-500"
mport Image from "next/image";
			/>
mport Image from "next/image";
			<p className="mt-2 text-gray-700">Salary: ${salary}</p>
mport Image from "next/image";

mport Image from "next/image";
			{/* 📌 Tags */}
mport Image from "next/image";
			<h2 className="font-semibold text-lg mt-4 mb-3">Tags</h2>
mport Image from "next/image";
			<div className="flex flex-wrap gap-2">
mport Image from "next/image";
				{tags.map((tag, index) => (
mport Image from "next/image";
					<button
mport Image from "next/image";
						key={index}
mport Image from "next/image";
						className={`px-3 py-1 rounded-full text-sm transition ${
mport Image from "next/image";
							selectedTags.includes(tag)
mport Image from "next/image";
								? "bg-teal-600 text-white"
mport Image from "next/image";
								: "bg-gray-200 text-gray-700"
mport Image from "next/image";
						}`}
mport Image from "next/image";
						onClick={() =>
mport Image from "next/image";
							toggleSelection(tag, setSelectedTags, selectedTags)
mport Image from "next/image";
						}
mport Image from "next/image";
					>
mport Image from "next/image";
						{tag}
mport Image from "next/image";
					</button>
mport Image from "next/image";
				))}
mport Image from "next/image";
			</div>
mport Image from "next/image";

mport Image from "next/image";
			{/* 🎯 Apply Button */}
mport Image from "next/image";
			<button
mport Image from "next/image";
				className="w-full bg-teal-600 text-white py-2 rounded-md mt-4 hover:bg-teal-700 transition duration-200"
mport Image from "next/image";
				onClick={updateFiltersInURL}
mport Image from "next/image";
			>
mport Image from "next/image";
				Apply Filters
mport Image from "next/image";
			</button>
mport Image from "next/image";
		</div>
mport Image from "next/image";
	);
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default JobFilterSidebar;