"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menu, setMenu] = useState("home");
  const [toggle, setToggle] = useState("sun");
  const [openMenus, setOpenMenus] = useState(false);
  const [slide, setSlide] = useState(null);
  const [viewProfile, setViewProfile] = useState(false);
  const [tokenFromLocalStorage, setTokenFromLocalStorage] = useState(false);
  const [_id, setID] = useState(null);
  const [profileData, setProfileData] = useState(null);

  // Fetch authentication token from localStorage
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setTokenFromLocalStorage(!!token);
  }, [pathname]);

  // Fetch Job Details
  useEffect(() => {
    const fetchJobDetails = async () => {
      const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/job/listAllJobs`;

      try {
        const response = await axios.get(url);
        if (response.data.success && response.data.jobs.length > 0) {
          setID(response.data.jobs[0]._id);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobDetails();
  }, []);

  // Fetch User Profile
  const fetchUserProfile = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) return;

    const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/getProfile`;
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setProfileData(response.data.profile);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    if (tokenFromLocalStorage) {
      fetchUserProfile();
    }
  }, [tokenFromLocalStorage]);

  // Logout User
  const logOutUser = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("You are not logged in!");
      return;
    }

    localStorage.removeItem("authToken");
    setTokenFromLocalStorage(false);

    const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/auth/logout`;
    try {
      const response = await axios.post(
        url,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success(response.data.message || "Logged out successfully");
      router.replace("/");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Logout failed!";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex justify-between items-center px-3 py-5 sm:px-2 sm:py-4 lg:p-6 lg:px-20 bg-black overflow-x-hidden">
      <a href="/" className="flex gap-5 items-center cursor-pointer border-none outline-none">
        <BiShoppingBag className="text-white text-3xl" />
        <h3 className="text-white text-2xl font-semibold">Job Portal</h3>
      </a>

      {tokenFromLocalStorage === false ? (
        <HiOutlineMenu
          className="block sm:hidden text-3xl text-white cursor-pointer"
          onClick={() => setOpenMenus((prev) => !prev)}
        />
      ) : null}

      <div className="hidden sm:flex gap-5 items-center">
        <Link
          href="/"
          className={`${
            menu === "home" ? "text-white" : "text-gray-500"
          } hover:text-gray-300 text-[15px] font-semibold cursor-pointer transition-colors duration-300`}
          onClick={() => setMenu("home")}
        >
          Home
        </Link>

        <Link
          href="/Jobs"
          className={`${
            menu === "job" ? "text-white" : "text-gray-500"
          } hover:text-gray-300 text-[15px] font-semibold cursor-pointer transition-colors duration-300`}
          onClick={() => setMenu("job")}
        >
          Jobs
        </Link>

        <Link
          href={`/JobDetails/${_id}`}
          className={`${
            menu === "job-details" ? "text-white" : "text-gray-500"
          } hover:text-gray-300 text-[15px] font-semibold cursor-pointer transition-colors duration-300`}
          onClick={() => setMenu("job-details")}
        >
          Job Details
        </Link>

        <Link
          href="/AboutUs"
          className={`${
            menu === "about" ? "text-white" : "text-gray-500"
          } hover:text-gray-300 text-[15px] font-semibold cursor-pointer transition-colors duration-300`}
          onClick={() => setMenu("about")}
        >
          About Us
        </Link>

        <Link
          href="/ContactUs"
          onClick={() => setMenu("contact")}
          className={`${
            menu === "contact" ? "text-white" : "text-gray-500"
          } hover:text-gray-300 text-[15px] font-semibold cursor-pointer transition-colors duration-300`}
        >
          Contact Us
        </Link>
      </div>

      {tokenFromLocalStorage ? (
        <div>
          <div
            onClick={() => setViewProfile((prev) => !prev)}
            className="bg-slate-500 hover:bg-slate-600 cursor-pointer transition-colors duration-300 rounded-full p-2"
          >
            <FaUser className="text-white text-2xl" />
          </div>
          {viewProfile && (
            <motion.div
              initial={{ x: 6, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="absolute right-4 w-56 top-16 bg-gray-900 text-white p-3 rounded-xl"
            >
              <p className="text-center">{profileData?.email}</p>
              <hr className="my-2" />
              <p className="text-center cursor-pointer" onClick={logOutUser}>
                LOGOUT
              </p>
            </motion.div>
          )}
        </div>
      ) : (
        <div className="hidden sm:flex items-center gap-7">
          <Link href="/Login" className="text-white text-lg font-semibold">
            Login
          </Link>
          <Link href="/Register" className="text-white text-lg font-semibold px-5 py-2 bg-[#309689] rounded-2xl">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
