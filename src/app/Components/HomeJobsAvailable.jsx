
mport Image from "next/image";
import React, { useEffect, useState } from "react";
mport Image from "next/image";
import Image from "next/image";
mport Image from "next/image";
import { FaHotel, FaClock, FaLocationArrow } from "react-icons/fa";
mport Image from "next/image";
import { MdWork } from "react-icons/md"
mport Image from "next/image";
import Link from "next/link";
mport Image from "next/image";
import { Bookmark } from "lucide-react";
mport Image from "next/image";
import { useRouter } from "next/navigation";
mport Image from "next/image";
import axios from "axios";
mport Image from "next/image";

mport Image from "next/image";
const HomeJobsAvailable = () => {
mport Image from "next/image";
  const router = useRouter();
mport Image from "next/image";
  const [jobFromDatabase, setJobFromDatabase] = useState(null);
mport Image from "next/image";

mport Image from "next/image";
  const navigateToJobDetails = (id) => {
mport Image from "next/image";
    router.push(`/JobDetails/${id}`);
mport Image from "next/image";
  }
mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    const fetchLocationsJobsCompanyLocations = async () => {
mport Image from "next/image";
      const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/job/listAllJobs`;
mport Image from "next/image";
      try {
mport Image from "next/image";
        const response = await axios.get(url);
mport Image from "next/image";
        if (response.data.success) {
mport Image from "next/image";
          const sortedJobs = response.data.jobs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
mport Image from "next/image";
          setJobFromDatabase(sortedJobs);
mport Image from "next/image";
        }
mport Image from "next/image";
      } catch (error) {
mport Image from "next/image";
        console.log(error);
mport Image from "next/image";
      }
mport Image from "next/image";
    };
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
  const capitalizeWords = (str) => {
mport Image from "next/image";
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="bg-white sm:p-20 p-5 flex flex-col gap-4">
mport Image from "next/image";
      <h4 className="sm:text-4xl text-3xl text-black font-semibold text-left">MBA/BBA Jobs Available</h4>
mport Image from "next/image";
      <div className="flex flex-col gap-8">
mport Image from "next/image";
        <div className="flex flex-col sm:flex-row w-full justify-between items-center">
mport Image from "next/image";
          <p className="text-lg text-black sm:text-left text-center">Elite jobs for elite minds - start your journey!</p>
mport Image from "next/image";
          <p className="text-[#309689] text-lg font-semibold underline sm:mt-0 mt-3">View all</p>
mport Image from "next/image";
        </div>
mport Image from "next/image";
        <div className="flex flex-col gap-8">
mport Image from "next/image";
          {
mport Image from "next/image";
            jobFromDatabase && jobFromDatabase.map((item) => (
mport Image from "next/image";
              <div className="sm:p-10 p-5 flex flex-col gap-4 w-full shadow-2xl rounded-2xl" key={item._id}>
mport Image from "next/image";
                <div className="flex justify-between items-center w-full">
mport Image from "next/image";
                    <p className="text-[#309689] bg-green-100 px-4 py-2 rounded-2xl">{timeAgo(item.createdAt)}</p>
mport Image from "next/image";
                    <Bookmark className="text-black text-2xl"/>
mport Image from "next/image";
                </div>
mport Image from "next/image";
                <div className="flex items-center gap-5">
mport Image from "next/image";
                  <Image src="/job.jpeg" className="rounded-full" width={40} height={40} style={{width: "auto"}} alt="Picture of the author"/>
mport Image from "next/image";
                  <div className="flex flex-col gap-1">
mport Image from "next/image";
                    <p className="text-xl font-semibold">{capitalizeWords(item.jobTitle)}</p>
mport Image from "next/image";
                    <p className="text-lg font-medium">{capitalizeWords(item.company)}</p>
mport Image from "next/image";
                  </div>
mport Image from "next/image";
                </div>
mport Image from "next/image";
                <div className="flex justify-between items-center w-full">
mport Image from "next/image";
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 gap-5">
mport Image from "next/image";
                    {
mport Image from "next/image";
                      item.category && (
mport Image from "next/image";
                        <div className="flex gap-3 items-center">
mport Image from "next/image";
                          <FaHotel className="text-xl text-[#309689]" />
mport Image from "next/image";
                          <p className="text-gray-600">{capitalizeWords(item.category)}</p>
mport Image from "next/image";
                        </div>
mport Image from "next/image";
                      )
mport Image from "next/image";
                    }
mport Image from "next/image";
                    {
mport Image from "next/image";
                      item.jobType && (
mport Image from "next/image";
                        <div className="flex gap-3 items-center">
mport Image from "next/image";
                          <FaClock className="text-xl text-[#309689]" />
mport Image from "next/image";
                          <p className="text-gray-600">{capitalizeWords(item.jobType)}</p>
mport Image from "next/image";
                        </div>
mport Image from "next/image";
                      )
mport Image from "next/image";
                    }
mport Image from "next/image";
                    {
mport Image from "next/image";
                      item.location && (
mport Image from "next/image";
                        <div className="flex gap-3 items-center">
mport Image from "next/image";
                          <FaLocationArrow className="text-xl text-[#309689]" />
mport Image from "next/image";
                          <p className="text-gray-600">{capitalizeWords(item.location)}</p>
mport Image from "next/image";
                        </div>
mport Image from "next/image";
                      )
mport Image from "next/image";
                    }
mport Image from "next/image";
                    {
mport Image from "next/image";
                      item.experience && (
mport Image from "next/image";
                        <div className="flex gap-3 items-center">
mport Image from "next/image";
                          <MdWork className="text-xl text-[#309689]" />
mport Image from "next/image";
                          <p className="text-gray-600">{item.experience} experience</p>
mport Image from "next/image";
                        </div>
mport Image from "next/image";
                      )
mport Image from "next/image";
                    }
mport Image from "next/image";
                  </div>
mport Image from "next/image";
                  <p onClick={()=>navigateToJobDetails(item._id)} className="cursor-pointer text-white bg-[#309689] px-4 py-2 rounded-2xl">Job Details</p>
mport Image from "next/image";
                </div>
mport Image from "next/image";
              </div>
mport Image from "next/image";
            ))
mport Image from "next/image";
          }
mport Image from "next/image";
        </div>
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
export default HomeJobsAvailable;
