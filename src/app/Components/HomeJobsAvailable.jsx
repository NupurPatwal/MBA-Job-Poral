
import Image from "next/image";
iimport React, { useEffect, useState } from "react";
import Image from "next/image";
iimport Image from "next/image";
import Image from "next/image";
iimport { FaHotel, FaClock, FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
iimport { MdWork } from "react-icons/md"
import Image from "next/image";
iimport Link from "next/link";
import Image from "next/image";
iimport { Bookmark } from "lucide-react";
import Image from "next/image";
iimport { useRouter } from "next/navigation";
import Image from "next/image";
iimport axios from "axios";
import Image from "next/image";

import Image from "next/image";
const HomeJobsAvailable = () => {
import Image from "next/image";
  const router = useRouter();
import Image from "next/image";
  const [jobFromDatabase, setJobFromDatabase] = useState(null);
import Image from "next/image";

import Image from "next/image";
  const navigateToJobDetails = (id) => {
import Image from "next/image";
    router.push(`/JobDetails/${id}`);
import Image from "next/image";
  }
import Image from "next/image";

import Image from "next/image";
  useEffect(() => {
import Image from "next/image";
    const fetchLocationsJobsCompanyLocations = async () => {
import Image from "next/image";
      const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/job/listAllJobs`;
import Image from "next/image";
      try {
import Image from "next/image";
        const response = await axios.get(url);
import Image from "next/image";
        if (response.data.success) {
import Image from "next/image";
          const sortedJobs = response.data.jobs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
import Image from "next/image";
          setJobFromDatabase(sortedJobs);
import Image from "next/image";
        }
import Image from "next/image";
      } catch (error) {
import Image from "next/image";
        console.log(error);
import Image from "next/image";
      }
import Image from "next/image";
    };
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
  const capitalizeWords = (str) => {
import Image from "next/image";
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="bg-white sm:p-20 p-5 flex flex-col gap-4">
import Image from "next/image";
      <h4 className="sm:text-4xl text-3xl text-black font-semibold text-left">MBA/BBA Jobs Available</h4>
import Image from "next/image";
      <div className="flex flex-col gap-8">
import Image from "next/image";
        <div className="flex flex-col sm:flex-row w-full justify-between items-center">
import Image from "next/image";
          <p className="text-lg text-black sm:text-left text-center">Elite jobs for elite minds - start your journey!</p>
import Image from "next/image";
          <p className="text-[#309689] text-lg font-semibold underline sm:mt-0 mt-3">View all</p>
import Image from "next/image";
        </div>
import Image from "next/image";
        <div className="flex flex-col gap-8">
import Image from "next/image";
          {
import Image from "next/image";
            jobFromDatabase && jobFromDatabase.map((item) => (
import Image from "next/image";
              <div className="sm:p-10 p-5 flex flex-col gap-4 w-full shadow-2xl rounded-2xl" key={item._id}>
import Image from "next/image";
                <div className="flex justify-between items-center w-full">
import Image from "next/image";
                    <p className="text-[#309689] bg-green-100 px-4 py-2 rounded-2xl">{timeAgo(item.createdAt)}</p>
import Image from "next/image";
                    <Bookmark className="text-black text-2xl"/>
import Image from "next/image";
                </div>
import Image from "next/image";
                <div className="flex items-center gap-5">
import Image from "next/image";
                  <Image src="/job.jpeg" className="rounded-full" width={40} height={40} style={{width: "auto"}} alt="Picture of the author"/>
import Image from "next/image";
                  <div className="flex flex-col gap-1">
import Image from "next/image";
                    <p className="text-xl font-semibold">{capitalizeWords(item.jobTitle)}</p>
import Image from "next/image";
                    <p className="text-lg font-medium">{capitalizeWords(item.company)}</p>
import Image from "next/image";
                  </div>
import Image from "next/image";
                </div>
import Image from "next/image";
                <div className="flex justify-between items-center w-full">
import Image from "next/image";
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 gap-5">
import Image from "next/image";
                    {
import Image from "next/image";
                      item.category && (
import Image from "next/image";
                        <div className="flex gap-3 items-center">
import Image from "next/image";
                          <FaHotel className="text-xl text-[#309689]" />
import Image from "next/image";
                          <p className="text-gray-600">{capitalizeWords(item.category)}</p>
import Image from "next/image";
                        </div>
import Image from "next/image";
                      )
import Image from "next/image";
                    }
import Image from "next/image";
                    {
import Image from "next/image";
                      item.jobType && (
import Image from "next/image";
                        <div className="flex gap-3 items-center">
import Image from "next/image";
                          <FaClock className="text-xl text-[#309689]" />
import Image from "next/image";
                          <p className="text-gray-600">{capitalizeWords(item.jobType)}</p>
import Image from "next/image";
                        </div>
import Image from "next/image";
                      )
import Image from "next/image";
                    }
import Image from "next/image";
                    {
import Image from "next/image";
                      item.location && (
import Image from "next/image";
                        <div className="flex gap-3 items-center">
import Image from "next/image";
                          <FaLocationArrow className="text-xl text-[#309689]" />
import Image from "next/image";
                          <p className="text-gray-600">{capitalizeWords(item.location)}</p>
import Image from "next/image";
                        </div>
import Image from "next/image";
                      )
import Image from "next/image";
                    }
import Image from "next/image";
                    {
import Image from "next/image";
                      item.experience && (
import Image from "next/image";
                        <div className="flex gap-3 items-center">
import Image from "next/image";
                          <MdWork className="text-xl text-[#309689]" />
import Image from "next/image";
                          <p className="text-gray-600">{item.experience} experience</p>
import Image from "next/image";
                        </div>
import Image from "next/image";
                      )
import Image from "next/image";
                    }
import Image from "next/image";
                  </div>
import Image from "next/image";
                  <p onClick={()=>navigateToJobDetails(item._id)} className="cursor-pointer text-white bg-[#309689] px-4 py-2 rounded-2xl">Job Details</p>
import Image from "next/image";
                </div>
import Image from "next/image";
              </div>
import Image from "next/image";
            ))
import Image from "next/image";
          }
import Image from "next/image";
        </div>
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
export default HomeJobsAvailable;
