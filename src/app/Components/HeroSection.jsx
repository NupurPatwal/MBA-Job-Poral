
mport Image from "next/image";
"use client"
mport Image from "next/image";
import React, { useEffect, useState } from "react";
mport Image from "next/image";
import { FaBuilding, FaSearch, FaUser } from "react-icons/fa";
mport Image from "next/image";
import { BiShoppingBag } from "react-icons/bi";
mport Image from "next/image";
import { motion } from "framer-motion";
mport Image from "next/image";
import axios from "axios";
mport Image from "next/image";
import { useRouter } from "next/navigation";
mport Image from "next/image";
import toast from "react-hot-toast";
mport Image from "next/image";

mport Image from "next/image";
const HeroSection = () => {
mport Image from "next/image";
  const router = useRouter();
mport Image from "next/image";
  const [jobLists, setJobLists] = useState(false);
mport Image from "next/image";
  const [companyLists, setCompanyLists] = useState(false);
mport Image from "next/image";
  const [locationLists, setLocationLists] = useState(false);
mport Image from "next/image";
  const [categoryLists, setCategoryLists] = useState(false);
mport Image from "next/image";
  const [locationArray, setLocationArray] = useState([]);
mport Image from "next/image";
  const [companyArray, setCompanyArray] = useState([]);
mport Image from "next/image";
  const [categoryArray, setCategoryArray] = useState([]);
mport Image from "next/image";
  const [jobtitleArray, setJobtitleArray] = useState([]);
mport Image from "next/image";

mport Image from "next/image";
  const [formData, setFormData] = useState({
mport Image from "next/image";
    company: "",
mport Image from "next/image";
    location: "",
mport Image from "next/image";
    category: "",
mport Image from "next/image";
    jobtitle: "",
mport Image from "next/image";
  });
mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    const fetchLocationsJobsCompanyLocations = async () => {
mport Image from "next/image";
      const url =` ${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/job/listAllJobs`;
mport Image from "next/image";
      try {
mport Image from "next/image";
        const response = await axios.get(url);
mport Image from "next/image";
        if (response.data.success) {
mport Image from "next/image";
          const jobs = response.data.jobs;
mport Image from "next/image";
          const uniqueLocations = [...new Set(jobs.map((job) => job.location))];
mport Image from "next/image";
          const uniqueCompanies = [...new Set(jobs.map((job) => job.company))];
mport Image from "next/image";
          const uniqueCategories = [...new Set(jobs.map((job) => job.category))];
mport Image from "next/image";
          const uniqueJobTitles = [...new Set(jobs.map((job) => job.jobTitle))];
mport Image from "next/image";
          setLocationArray(uniqueLocations);
mport Image from "next/image";
          setCompanyArray(uniqueCompanies);
mport Image from "next/image";
          setCategoryArray(uniqueCategories);
mport Image from "next/image";
          setJobtitleArray(uniqueJobTitles);
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
  const inputChangeHandler = (event) => {
mport Image from "next/image";
    const {name, value} = event.target;
mport Image from "next/image";
    setFormData((prev) => ({ ...prev, [name]: value }))
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    if (formData.jobtitle.length > 0) {
mport Image from "next/image";
      setJobLists(true);
mport Image from "next/image";
    } else {
mport Image from "next/image";
      setJobLists(false);
mport Image from "next/image";
    }
mport Image from "next/image";
  }, [formData.jobtitle]);
mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    if (formData.company.length > 0) {
mport Image from "next/image";
      setCompanyLists(true);
mport Image from "next/image";
    } else {
mport Image from "next/image";
      setCompanyLists(false);
mport Image from "next/image";
    }
mport Image from "next/image";
  }, [formData.company]);
mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    if (formData.location.length > 0) {
mport Image from "next/image";
      setLocationLists(true);
mport Image from "next/image";
    } else {
mport Image from "next/image";
      setLocationLists(false);
mport Image from "next/image";
    }
mport Image from "next/image";
  }, [formData.location]); 
mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    if (formData.category.length > 0) {
mport Image from "next/image";
      setCategoryLists(true);
mport Image from "next/image";
    } else {
mport Image from "next/image";
      setCategoryLists(false);
mport Image from "next/image";
    }
mport Image from "next/image";
  }, [formData.category]); 
mport Image from "next/image";
  
mport Image from "next/image";
  const setJobInput = (title) => {
mport Image from "next/image";
    setFormData((prev) => {
mport Image from "next/image";
      return { ...prev, jobtitle: title };
mport Image from "next/image";
    });
mport Image from "next/image";
    setTimeout(() => setJobLists(false), 0); 
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const setCompanyInput = (title) => {
mport Image from "next/image";
    setFormData((prev) => {
mport Image from "next/image";
      return { ...prev, company: title };
mport Image from "next/image";
    });
mport Image from "next/image";
    setTimeout(() => setCompanyLists(false), 0); 
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const setLocationInput = (title) => {
mport Image from "next/image";
    setFormData((prev) => {
mport Image from "next/image";
      return { ...prev, location: title };
mport Image from "next/image";
    });
mport Image from "next/image";
    setTimeout(() => setLocationLists(false), 0); 
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const setCategoryInput = (title) => {
mport Image from "next/image";
    setFormData((prev) => {
mport Image from "next/image";
      return { ...prev, category: title };
mport Image from "next/image";
    });
mport Image from "next/image";
    setTimeout(() => setCategoryLists(false), 0); 
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const navigateToJobPage = () => {
mport Image from "next/image";
    if (!formData.category || !formData.company || !formData.jobtitle || !formData.location) {
mport Image from "next/image";
      toast.error("Please select all the fields");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    const searchTerm = `${formData.category} + ${formData.location} + ${formData.jobtitle} + ${formData.company}`;
mport Image from "next/image";
    const urlParams = new URLSearchParams();
mport Image from "next/image";
    urlParams.set("searchTerm", searchTerm);
mport Image from "next/image";
    router.push(`/Jobs?${urlParams.toString()}`);
mport Image from "next/image";
  };
mport Image from "next/image";
  
mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="opacity-100 h-[800px] sm:h-[700px] w-full bg-cover bg-center flex flex-col gap-2 sm:gap-8 items-center justify-center" style={{ backgroundImage: "url('/home_hero_bg.png')" }}>
mport Image from "next/image";
      <div className="flex flex-col items-center gap-4 sm:p-0 px-2 w-full">
mport Image from "next/image";
        <h3 className="text-white text-3xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-semibold">Find Your Dream Job Today!</h3>
mport Image from "next/image";
        <p className="text-gray-300 text-lg text-center">Connecting Talent with Opportunity: Your Gateway to Career Success</p>
mport Image from "next/image";
      </div>
mport Image from "next/image";
      <div className="relative flex sm:h-20 flex-col sm:flex-row h-auto">
mport Image from "next/image";
        <div className="sm:rounded-l-xl sm:bg-white px-7 py-3.5 flex flex-col sm:flex-row sm:gap-3 gap-5">
mport Image from "next/image";
          <input value={formData.jobtitle} onChange={inputChangeHandler} name="jobtitle" type="text" className="border-none sm:rounded-none rounded-2xl sm:p-0 p-3 outline-none text-lg placeholder:text-lg" placeholder="Job Title" />
mport Image from "next/image";
          <hr className="w-[1px] h-full bg-gray-500 hidden sm:block" />
mport Image from "next/image";
          <input value={formData.company} onChange={inputChangeHandler} name="company" type="text" className="border-none sm:rounded-none rounded-2xl sm:p-0 p-3 outline-none text-lg placeholder:text-lg" placeholder="Company" />
mport Image from "next/image";
          <hr className="w-[1px] h-full bg-gray-500 hidden sm:block" />
mport Image from "next/image";
          <input value={formData.location} onChange={inputChangeHandler} name="location" type="text" className="border-none sm:rounded-none rounded-2xl outline-none sm:p-0 p-3 text-lg placeholder:text-lg" placeholder="Select Location" />
mport Image from "next/image";
          <hr className="w-[1px] h-full bg-gray-500 hidden sm:block" />
mport Image from "next/image";
          <input value={formData.category} onChange={inputChangeHandler} name="category" type="text" className="border-none sm:rounded-none rounded-2xl outline-none sm:p-0 p-3 text-lg placeholder:text-lg" placeholder="Select Category" />
mport Image from "next/image";
        </div>
mport Image from "next/image";
        <button onClick={navigateToJobPage} className="rounded-2xl justify-center sm:w-auto w-56 sm:ml-0 ml-7 sm:rounded-r-xl sm:rounded-l-none flex items-center gap-5 bg-[#309689] sm:px-7 sm:py-3.5 p-3">
mport Image from "next/image";
          <FaSearch className="text-white text-lg" />
mport Image from "next/image";
          <p className="text-white text-lg font-semibold">Search Job</p>
mport Image from "next/image";
        </button>
mport Image from "next/image";
        {
mport Image from "next/image";
          jobLists ? 
mport Image from "next/image";
          (
mport Image from "next/image";
            <div className="absolute left-7 sm:left-2 top-[68px] sm:top-[85px] w-56 bg-white p-2 rounded-xl overflow-y-auto h-auto">
mport Image from "next/image";
              {
mport Image from "next/image";
                jobtitleArray.map((title, index) => (
mport Image from "next/image";
                  <p key={index} onClick={() => setJobInput(title)}  className="text-black text-lg py-2 px-3 transition-colors duration-300 cursor-pointer hover:text-white hover:bg-black bg-white rounded-xl">{title}</p>
mport Image from "next/image";
                ))
mport Image from "next/image";
              }
mport Image from "next/image";
            </div>
mport Image from "next/image";
          ) : null
mport Image from "next/image";
        }
mport Image from "next/image";
        {
mport Image from "next/image";
          companyLists ? 
mport Image from "next/image";
          (
mport Image from "next/image";
            <div className="absolute left-8 sm:left-[245px] top-36 sm:top-[85px] w-56 bg-white p-2 rounded-xl overflow-y-auto h-auto">
mport Image from "next/image";
              {
mport Image from "next/image";
                companyArray.map((title, index) => (
mport Image from "next/image";
                  <p key={index} onClick={() => setCompanyInput(title)}  className="text-black text-lg py-2 px-3 transition-colors duration-300 cursor-pointer hover:text-white hover:bg-black bg-white rounded-xl">{title}</p>
mport Image from "next/image";
                ))
mport Image from "next/image";
              }
mport Image from "next/image";
            </div>
mport Image from "next/image";
          ) : null
mport Image from "next/image";
        }
mport Image from "next/image";
         {
mport Image from "next/image";
          locationLists ? 
mport Image from "next/image";
          (
mport Image from "next/image";
            <div className="absolute left-7 sm:left-[475px] top-56 sm:top-[85px] w-56 bg-white p-2 rounded-xl overflow-y-auto h-auto">
mport Image from "next/image";
              {
mport Image from "next/image";
                locationArray.map((title, index) => (
mport Image from "next/image";
                  <p key={index} onClick={() => setLocationInput(title)}  className="text-black text-lg py-2 px-3 transition-colors duration-300 cursor-pointer hover:text-white hover:bg-black bg-white rounded-xl">{title}</p>
mport Image from "next/image";
                ))
mport Image from "next/image";
              }
mport Image from "next/image";
            </div>
mport Image from "next/image";
          ) : null
mport Image from "next/image";
        }
mport Image from "next/image";
         {
mport Image from "next/image";
          categoryLists ? 
mport Image from "next/image";
          (
mport Image from "next/image";
            <div className="absolute right-8 sm:right-48 top-72 sm:top-[85px] w-56 bg-white p-2 rounded-xl overflow-y-auto h-auto">
mport Image from "next/image";
              {
mport Image from "next/image";
                categoryArray.map((title, index) => (
mport Image from "next/image";
                  <p key={index} onClick={() => setCategoryInput(title)}  className="text-black text-lg py-2 px-3 transition-colors duration-300 cursor-pointer hover:text-white hover:bg-black bg-white rounded-xl">{title}</p>
mport Image from "next/image";
                ))
mport Image from "next/image";
              }
mport Image from "next/image";
            </div>
mport Image from "next/image";
          ) : null
mport Image from "next/image";
        }
mport Image from "next/image";
      </div>
mport Image from "next/image";
      <div className="w-full flex flex-col sm:flex-row sm:w-[600px] justify-between items-center mt-20 gap-5 sm:gap-0">
mport Image from "next/image";
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} viewport={{ once: false, amount: 0.2 }}  className="sm:w-40 w-52 flex sm:gap-3 gap-8 items-center justify-center">
mport Image from "next/image";
          <div className="sm:p-4 p-2 bg-[#309689] rounded-full">
mport Image from "next/image";
            <BiShoppingBag className="text-white text-2xl sm:text-3xl" />
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex flex-col sm:gap-1 gap-0">
mport Image from "next/image";
            <p className="text-white font-semibold text-lg sm:text-xl">25, 850</p>
mport Image from "next/image";
            <span className="sm:text-lg text-[14px] text-gray-300">Jobs</span>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </motion.div>
mport Image from "next/image";
        <div className="sm:w-40 w-52 flex sm:gap-3 gap-8 items-center justify-center">
mport Image from "next/image";
          <div className="sm:p-4 p-2 bg-[#309689] rounded-full">
mport Image from "next/image";
            <FaUser className="text-white text-2xl sm:text-3xl" />
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex flex-col sm:gap-1 gap-0">
mport Image from "next/image";
            <p className="text-white font-semibold text-lg sm:text-xl">10, 250</p>
mport Image from "next/image";
            <span className="sm:text-lg text-[14px] text-gray-300">Candidates</span>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";
        <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} viewport={{ once: false, amount: 0.2 }} className="sm:w-40 w-52 flex sm:gap-3 gap-8 items-center justify-center">
mport Image from "next/image";
          <div className="sm:p-4 p-2 bg-[#309689] rounded-full">
mport Image from "next/image";
            <FaBuilding className="text-white text-2xl sm:text-3xl" />
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex flex-col sm:gap-1 gap-0">
mport Image from "next/image";
            <p className="text-white font-semibold text-lg sm:text-xl">18, 400</p>
mport Image from "next/image";
            <span className="sm:text-lg text-[14px] text-gray-300">Companies</span>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </motion.div>
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
export default HeroSection;