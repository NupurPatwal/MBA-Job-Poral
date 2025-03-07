
mport Image from "next/image";
"use client";
mport Image from "next/image";
import React, { useEffect, useState } from "react";
mport Image from "next/image";
import JobList from "../Components/Comp";
mport Image from "next/image";
import Hero from "../Components/Upper";
mport Image from "next/image";
import JobFilterSidebar from "../Components/Sidebar";
mport Image from "next/image";
import CompanyCarousel from "../Components/Last";
mport Image from "next/image";
import axios from "axios";
mport Image from "next/image";
import Navbar from "../Components/Navbar";
mport Image from "next/image";

mport Image from "next/image";
const JobsPage = () => {
mport Image from "next/image";
  const [jobs, setJobs] = useState([]);
mport Image from "next/image";
  const [filteredJobs, setFilteredJobs] = useState([]);
mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    const fetchAllJobs = async () => {
mport Image from "next/image";
      try {
mport Image from "next/image";
        const response = await axios.get(
mport Image from "next/image";
          `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/job/listAllJobs`
mport Image from "next/image";
        );
mport Image from "next/image";

mport Image from "next/image";
        setJobs(response.data.jobs);
mport Image from "next/image";
      } catch (error) {
mport Image from "next/image";
        console.error("Error fetching data", error);
mport Image from "next/image";
      }
mport Image from "next/image";
    };
mport Image from "next/image";
    fetchAllJobs();
mport Image from "next/image";
  }, []);
mport Image from "next/image";
  return (
mport Image from "next/image";
    <div>
mport Image from "next/image";
		<Navbar/>
mport Image from "next/image";
      <Hero />
mport Image from "next/image";
      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
mport Image from "next/image";
        <aside className="w-full md:w-1/4">
mport Image from "next/image";
          <JobFilterSidebar jobs={jobs} setFilteredJobs={setFilteredJobs} />
mport Image from "next/image";
        </aside>
mport Image from "next/image";

mport Image from "next/image";
        <main className="w-full md:w-3/4">
mport Image from "next/image";
          {filteredJobs.length > 0 ? (
mport Image from "next/image";
            <JobList jobs={filteredJobs} setJobs={setFilteredJobs} />
mport Image from "next/image";
          ) : (
mport Image from "next/image";
            <JobList jobs={jobs} setJobs={setJobs} />
mport Image from "next/image";
          )}
mport Image from "next/image";
        </main>
mport Image from "next/image";
      </div>
mport Image from "next/image";

mport Image from "next/image";
      <CompanyCarousel />
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default JobsPage;
