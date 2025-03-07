
mport Image from "next/image";
"use client"
mport Image from "next/image";
import React, { useEffect, useState } from "react";
mport Image from "next/image";
import { BiShoppingBag } from "react-icons/bi";
mport Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
mport Image from "next/image";
import { motion } from "framer-motion";
mport Image from "next/image";
import Link from "next/link";
mport Image from "next/image";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
mport Image from "next/image";
import { usePathname } from "next/navigation";
mport Image from "next/image";
import axios from "axios";
mport Image from "next/image";
import { useRouter } from "next/navigation";
mport Image from "next/image";
import toast from "react-hot-toast";
mport Image from "next/image";

mport Image from "next/image";
const Navbar = () => {
mport Image from "next/image";
  const router = useRouter();
mport Image from "next/image";
  const [menu, setMenu] = useState("home");
mport Image from "next/image";
  const [toggle, setToggle] = useState("sun");
mport Image from "next/image";
  const [openMenus, setOpenMenus] = useState(false);
mport Image from "next/image";
  const [slide, setSlide] = useState(null);
mport Image from "next/image";
  const [viewProfile, setViewProfile] = useState(false);
mport Image from "next/image";
  const [tokenFromLocalStorage, setTokenFromLocalStorage] = useState(false);
mport Image from "next/image";
  const pathname = usePathname();
mport Image from "next/image";
  const [_id, setID] = useState(null);
mport Image from "next/image";
  const [profileData, setProfileData] = useState(null);
mport Image from "next/image";

mport Image from "next/image";
  const fetchToken = () => {
mport Image from "next/image";
    const token = localStorage.getItem("authToken");
mport Image from "next/image";
    setTokenFromLocalStorage(!!token); // Converts to boolean
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    fetchToken(); 
mport Image from "next/image";
  }, [pathname]);
mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    const fetchJobDetails = async () => {
mport Image from "next/image";
      const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/job/listAllJobs`;
mport Image from "next/image";
      try {
mport Image from "next/image";
        const response = await axios.get(url);
mport Image from "next/image";
        if (response.data.success && response.data.jobs.length > 0) {
mport Image from "next/image";
          const firstJobId = response.data.jobs[0]._id;
mport Image from "next/image";
          setID(firstJobId);
mport Image from "next/image";
        }
mport Image from "next/image";
      } catch (error) {
mport Image from "next/image";
        console.error("Error fetching jobs:", error);
mport Image from "next/image";
      }
mport Image from "next/image";
    };
mport Image from "next/image";
  
mport Image from "next/image";
    fetchJobDetails();
mport Image from "next/image";
  }, []);
mport Image from "next/image";

mport Image from "next/image";
  const fetchUserProfile = async () => {
mport Image from "next/image";
    const token = localStorage.getItem("authToken");
mport Image from "next/image";
    const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/getProfile`;
mport Image from "next/image";
    try {
mport Image from "next/image";
      const response = await axios.get(url, { 
mport Image from "next/image";
        headers: { Authorization: `Bearer ${token}` }
mport Image from "next/image";
      });
mport Image from "next/image";
      if (response.data.success) {
mport Image from "next/image";
        setProfileData(response.data.profile);
mport Image from "next/image";
      }
mport Image from "next/image";
    } catch (error) {
mport Image from "next/image";
      console.error("Error fetching profile:", error);
mport Image from "next/image";
    }
mport Image from "next/image";
  };
mport Image from "next/image";
  
mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    const token = localStorage.getItem("authToken");
mport Image from "next/image";
    if(token) {
mport Image from "next/image";
      fetchUserProfile();
mport Image from "next/image";
    } else {
mport Image from "next/image";
      return;
mport Image from "next/image";
    };
mport Image from "next/image";
  }, []);
mport Image from "next/image";
  
mport Image from "next/image";

mport Image from "next/image";
  const logOutUser = async () => {
mport Image from "next/image";
    const token = localStorage.getItem("authToken");
mport Image from "next/image";
    if (!token) {
mport Image from "next/image";
      toast.error("You are not logged in!");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    localStorage.removeItem("authToken");
mport Image from "next/image";
    setTokenFromLocalStorage(false);
mport Image from "next/image";
    const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/auth/logout`;
mport Image from "next/image";
    try {
mport Image from "next/image";
      const response = await axios.post(url, {}, {
mport Image from "next/image";
        headers: { Authorization: `Bearer ${token}` }
mport Image from "next/image";
      });
mport Image from "next/image";
      toast.success(response.data.message || "Logged out successfully");
mport Image from "next/image";
      router.replace("/");
mport Image from "next/image";
    } catch (error) {
mport Image from "next/image";
      const errorMessage = error.response?.data?.message || "Logout failed!";
mport Image from "next/image";
      toast.error(errorMessage);
mport Image from "next/image";
    }
mport Image from "next/image";
  };
mport Image from "next/image";
  
mport Image from "next/image";
  
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="flex justify-between items-center px-3 py-5 sm:px-2 sm:py-4 lg:p-6 lg:px-20 bg-black overflow-x-hidden">
mport Image from "next/image";
      <a href="/" className="flex gap-5 items-center cursor-pointer border-none outline-none">
mport Image from "next/image";
        <BiShoppingBag className="text-white text-3xl" />
mport Image from "next/image";
        <h3 className="text-white text-2xl font-semibold">Job Portal</h3>
mport Image from "next/image";
      </a>
mport Image from "next/image";
      {
mport Image from "next/image";
        tokenFromLocalStorage === false ? <HiOutlineMenu className="block sm:hidden text-3xl text-white cursor-pointer" onClick={()=>setOpenMenus((prev) => !prev)} />  : null
mport Image from "next/image";
      }
mport Image from "next/image";
      <div className="hidden sm:flex gap-5 items-center">
mport Image from "next/image";
        <Link href="/" className={`${menu === "home" ? "text-white" : "text-gray-500"} hover:text-gray-300 text-[15px] font-semibold cursor-pointer transition-colors duration-300`} onClick={() => setMenu("home")}>Home</Link>
mport Image from "next/image";
        <Link href="/Jobs" className={`${menu === "job" ? "text-white" : "text-gray-500"} hover:text-gray-300 text-[15px] font-semibold cursor-pointer transition-colors duration-300`} onClick={() => setMenu("job")}>Jobs</Link>
mport Image from "next/image";
        <Link href={`/JobDetails/${_id}`}  className={`${menu === "job-details" ? "text-white" : "text-gray-500"} hover:text-gray-300 text-[15px] font-semibold cursor-pointer transition-colors duration-300`} onClick={() => setMenu("job-details")}>Job Details</Link>
mport Image from "next/image";
        <Link href="/AboutUs" className={`${menu === "about" ? "text-white" : "text-gray-500"} hover:text-gray-300 text-[15px] font-semibold cursor-pointer transition-colors duration-300`} onClick={() => setMenu("about")}>About Us</Link>
mport Image from "next/image";
        <Link href="/ContactUs" onClick={() => setMenu("contact")} className={`${menu === "contact" ? "text-white" : "text-gray-500"} hover:text-gray-300 text-[15px] font-semibold cursor-pointer transition-colors duration-300`}>Contact Us</Link>
mport Image from "next/image";
      </div>
mport Image from "next/image";
      {/* <div className="hidden lg:flex items-center justify-center cursor-pointer p-2 hover:bg-gray-900 hover:shadow-[20px_0_50px_rgba(255,255,255,0.5),inset_20px_0_30px_rgba(255,255,255,0.3)] transition-colors duration-300 rounded-2xl">
mport Image from "next/image";
        {
mport Image from "next/image";
          toggle === "sun" ? <FaSun onClick={()=>setToggle("moon")} className="text-white text-xl drop-shadow-[0_0_30px_rgba(255,255,255,1)]" /> : <FaMoon onClick={()=>setToggle("sun")} className="text-white text-xl drop-shadow-[0_0_30px_rgba(255,255,255,1)]" />
mport Image from "next/image";
        }
mport Image from "next/image";
      </div> */}
mport Image from "next/image";
      {
mport Image from "next/image";
        tokenFromLocalStorage ? 
mport Image from "next/image";
        (
mport Image from "next/image";
          <div>
mport Image from "next/image";
            <div onClick={()=>setViewProfile((prev) => !prev)} className="bg-slate-500 hover:bg-slate-600 cursor-pointer transition-colors duration-300 rounded-full p-2">
mport Image from "next/image";
              <FaUser className="text-white text-2xl" />
mport Image from "next/image";
            </div>
mport Image from "next/image";
            {
mport Image from "next/image";
              viewProfile && 
mport Image from "next/image";
              (
mport Image from "next/image";
                <motion.div 
mport Image from "next/image";
                  initial={{ x: 6, opacity: 0 }}
mport Image from "next/image";
                  animate={{ x: 0, opacity: 1 }}
mport Image from "next/image";
                  transition={{ type: "spring", stiffness: 100 }}
mport Image from "next/image";
                  className="flex flex-col gap-4 px-2 py-3 bg-gradient-to-tr from-slate-950 to-slate-600 rounded-2xl z-50 absolute right-4 w-56 top-16">
mport Image from "next/image";
                  <Link onClick={()=>setViewProfile(false)} href="/Profile" onMouseEnter={() => setSlide(1)} onMouseLeave={() => setSlide(null)} className={`text-white text-center text-[14px] cursor-pointer font-semibold transition-transform duration-300 ease-in-out ${slide === 1 ? "translate-x-1" : ""}`}>{profileData?.email}</Link>
mport Image from "next/image";
                  <Link onClick={()=>setViewProfile(false)} href="/MyApplication" onMouseEnter={() => setSlide(2)} onMouseLeave={() => setSlide(null)} className={`text-white text-center text-[14px] cursor-pointer font-semibold transition-transform duration-300 ease-in-out ${slide === 2 ? "translate-x-1" : ""}`}>MY APPLICATION</Link>
mport Image from "next/image";
                  <Link onClick={()=>setViewProfile(false)} href="/Resume" onMouseEnter={() => setSlide(3)} onMouseLeave={() => setSlide(null)} className={`text-white text-center text-[14px] cursor-pointer font-semibold transition-transform duration-300 ease-in-out ${slide === 3 ? "translate-x-1" : ""}`}>RESUME</Link>
mport Image from "next/image";
                  <Link onClick={()=>setViewProfile(false)} href="/Payment" onMouseEnter={() => setSlide(4)} onMouseLeave={() => setSlide(null)} className={`text-white text-center text-[14px] cursor-pointer font-semibold transition-transform duration-300 ease-in-out ${slide === 4 ? "translate-x-1" : ""}`}>PAYMENT</Link>
mport Image from "next/image";
                  <Link onClick={()=>setViewProfile(false)} href="/HelpSupport" onMouseEnter={() => setSlide(5)} onMouseLeave={() => setSlide(null)} className={`text-white text-center text-[14px] cursor-pointer font-semibold transition-transform duration-300 ease-in-out ${slide === 5 ? "translate-x-1" : ""}`}>HELP CENTER</Link>
mport Image from "next/image";
                  <p onClick={logOutUser} onMouseEnter={() => setSlide(6)} onMouseLeave={() => setSlide(null)} className={`text-white text-center text-[14px] cursor-pointer font-semibold transition-transform duration-300 ease-in-out ${slide === 6 ? "translate-x-1" : ""}`}>LOGOUT</p>
mport Image from "next/image";
                </motion.div>
mport Image from "next/image";
              )
mport Image from "next/image";
            }
mport Image from "next/image";
          </div>
mport Image from "next/image";
        )
mport Image from "next/image";
        :
mport Image from "next/image";
        <div className="hidden sm:flex items-center gap-7">
mport Image from "next/image";
          <Link href="/Login" className="text-white text-lg font-semibold">Login</Link>
mport Image from "next/image";
          <Link href="/Register" className="text-white text-lg font-semibold px-5 py-2 bg-[#309689] rounded-2xl">Register</Link>
mport Image from "next/image";
        </div>
mport Image from "next/image";
      }
mport Image from "next/image";
      <motion.div 
mport Image from "next/image";
        initial={{ y: 150, opacity: 0 }}
mport Image from "next/image";
        animate={{ y: openMenus ? 0 : 50, opacity: openMenus ? 1 : 0 }}
mport Image from "next/image";
        transition={{ type: "spring", stiffness: 100 }}
mport Image from "next/image";
        className="flex sm:hidden flex-col gap-2 px-4 py-6 bg-gradient-to-tr from-slate-950 to-slate-600 rounded-2xl z-50 absolute right-4 w-44 top-16">
mport Image from "next/image";
        <Link onClick={()=>setOpenMenus(false)} href="/" onMouseEnter={() => setSlide(1)} onMouseLeave={() => setSlide(null)} className={`text-white text-[14px] cursor-pointer font-semibold transition-transform duration-300 ease-in-out ${slide === 1 ? "translate-x-1" : ""}`}>Home</Link>
mport Image from "next/image";
        <hr className="w-full h-2" />
mport Image from "next/image";
        <Link onClick={()=>setOpenMenus(false)} href="/Jobs" onMouseEnter={() => setSlide(2)} onMouseLeave={() => setSlide(null)} className={`text-white text-[14px] cursor-pointer font-semibold transition-transform duration-300 ease-in-out ${slide === 2 ? "translate-x-1" : ""}`}>Jobs</Link>
mport Image from "next/image";
        <hr className="w-full h-2" />
mport Image from "next/image";
        <Link onClick={()=>setOpenMenus(false)} href="/JobDetails" onMouseEnter={() => setSlide(3)} onMouseLeave={() => setSlide(null)} className={`text-white text-[14px] cursor-pointer font-semibold transition-transform duration-300 ease-in-out ${slide === 3 ? "translate-x-1" : ""}`}>Job Details</Link>
mport Image from "next/image";
        <hr className="w-full h-2" />
mport Image from "next/image";
        <Link onClick={()=>setOpenMenus(false)} href="/AboutUs" onMouseEnter={() => setSlide(4)} onMouseLeave={() => setSlide(null)} className={`text-white text-[14px] cursor-pointer font-semibold transition-transform duration-300 ease-in-out ${slide === 4 ? "translate-x-1" : ""}`}>About Us</Link>
mport Image from "next/image";
        <hr className="w-full h-2" />
mport Image from "next/image";
        <p onMouseEnter={() => setSlide(5)} onMouseLeave={() => setSlide(null)} className={`text-white text-[14px] cursor-pointer font-semibold transition-transform duration-300 ease-in-out ${slide === 5 ? "translate-x-1" : ""}`}>Contact Us</p>
mport Image from "next/image";
        <Link onClick={()=>setOpenMenus(false)} href="/Login" className="text-white text-lg cursor-pointer font-semibold text-center mt-2">Login</Link>
mport Image from "next/image";
        <Link onClick={()=>setOpenMenus(false)} href="/Register" className="text-white text-lg cursor-pointer font-semibold px-5 py-2 bg-[#309689] rounded-2xl text-center">Register</Link>
mport Image from "next/image";
      </motion.div>
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default Navbar;
