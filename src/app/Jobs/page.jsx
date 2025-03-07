
import Image from "next/image";
"use client";
import Image from "next/image";
iimport React, { useEffect, useState } from "react";
import Image from "next/image";
iimport JobList from "../Components/Comp";
import Image from "next/image";
iimport Hero from "../Components/Upper";
import Image from "next/image";
iimport JobFilterSidebar from "../Components/Sidebar";
import Image from "next/image";
iimport CompanyCarousel from "../Components/Last";
import Image from "next/image";
iimport axios from "axios";
import Image from "next/image";
iimport Navbar from "../Components/Navbar";
import Image from "next/image";

import Image from "next/image";
const JobsPage = () => {
import Image from "next/image";
  const [jobs, setJobs] = useState([]);
import Image from "next/image";
  const [filteredJobs, setFilteredJobs] = useState([]);
import Image from "next/image";
  useEffect(() => {
import Image from "next/image";
    const fetchAllJobs = async () => {
import Image from "next/image";
      try {
import Image from "next/image";
        const response = await axios.get(
import Image from "next/image";
          `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/job/listAllJobs`
import Image from "next/image";
        );
import Image from "next/image";

import Image from "next/image";
        setJobs(response.data.jobs);
import Image from "next/image";
      } catch (error) {
import Image from "next/image";
        console.error("Error fetching data", error);
import Image from "next/image";
      }
import Image from "next/image";
    };
import Image from "next/image";
    fetchAllJobs();
import Image from "next/image";
  }, []);
import Image from "next/image";
  return (
import Image from "next/image";
    <div>
import Image from "next/image";
		<Navbar/>
import Image from "next/image";
      <Hero />
import Image from "next/image";
      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
import Image from "next/image";
        <aside className="w-full md:w-1/4">
import Image from "next/image";
          <JobFilterSidebar jobs={jobs} setFilteredJobs={setFilteredJobs} />
import Image from "next/image";
        </aside>
import Image from "next/image";

import Image from "next/image";
        <main className="w-full md:w-3/4">
import Image from "next/image";
          {filteredJobs.length > 0 ? (
import Image from "next/image";
            <JobList jobs={filteredJobs} setJobs={setFilteredJobs} />
import Image from "next/image";
          ) : (
import Image from "next/image";
            <JobList jobs={jobs} setJobs={setJobs} />
import Image from "next/image";
          )}
import Image from "next/image";
        </main>
import Image from "next/image";
      </div>
import Image from "next/image";

import Image from "next/image";
      <CompanyCarousel />
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default JobsPage;
