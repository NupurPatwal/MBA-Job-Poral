
import Image from "next/image";
"usec client"
import Image from "next/image";
iimport axios from "axios";
import Image from "next/image";
iimport React, { useEffect, useState } from "react";
import Image from "next/image";
iimport { FaBell, FaUser } from "react-icons/fa";
import Image from "next/image";
iimport { useRouter } from "next/navigation";
import Image from "next/image";
iimport toast from "react-hot-toast";
import Image from "next/image";

import Image from "next/image";
const AdminHeader = () => {
import Image from "next/image";
  const router = useRouter();
import Image from "next/image";
  const [adminProfile, setAdminProfile] = useState(null);
import Image from "next/image";
  const [showAdminMenu, setShowAdminMenu] = useState(false);
import Image from "next/image";

import Image from "next/image";
  useEffect(() => {
import Image from "next/image";
    const fetchAdminProfile = async () => {
import Image from "next/image";
      const token = localStorage.getItem("authToken");
import Image from "next/image";
      const newURL = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/admin/profile`;
import Image from "next/image";
      try {
import Image from "next/image";
        const response = await axios.get(newURL, {
import Image from "next/image";
          headers: { Authorization: `Bearer ${token}` },
import Image from "next/image";
        });
import Image from "next/image";
        if (response.status === 200) {
import Image from "next/image";
          setAdminProfile(response?.data); // ✅ Store data in state
import Image from "next/image";
        }        
import Image from "next/image";
      } catch (error) {
import Image from "next/image";
      }
import Image from "next/image";
    };
import Image from "next/image";
  
import Image from "next/image";
    fetchAdminProfile();
import Image from "next/image";
  }, []);
import Image from "next/image";

import Image from "next/image";
  const logoutAmin = async () => {
import Image from "next/image";
    const token = localStorage.getItem("authToken");
import Image from "next/image";
    if (!token) {
import Image from "next/image";
      toast.error("You are not logged in!");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";
    localStorage.removeItem("authToken");
import Image from "next/image";
    const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/admin/logout`;
import Image from "next/image";
    try {
import Image from "next/image";
      const response = await axios.post(url, {}, {
import Image from "next/image";
        headers: { Authorization: `Bearer ${token}` }
import Image from "next/image";
      });
import Image from "next/image";
      toast.success(response.data.message || "Logged out successfully");
import Image from "next/image";
      router.replace("/");
import Image from "next/image";
    } catch (error) {
import Image from "next/image";
      const errorMessage = error.response?.data?.message || "Logout failed!";
import Image from "next/image";
      toast.error(errorMessage);
import Image from "next/image";
    }
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="flex justify-between items-center w-full p-5 bg-gradient-to-tr from-blue-950 to-blue-500 rounded-2xl relative">
import Image from "next/image";
      <div className="flex flex-col gap-1 items-center">
import Image from "next/image";
        <p className="text-white text-xl font-semibold">Welcome {adminProfile?.name}</p>
import Image from "next/image";
        <p className="text-white text-lg font-normal">Here’s what happening with you today.</p>
import Image from "next/image";
      </div>
import Image from "next/image";
      <div className="flex gap-3 items-center">
import Image from "next/image";
        <FaBell className="text-2xl text-white" />
import Image from "next/image";
        <hr className="w-[2px] h-8 bg-white" />
import Image from "next/image";
        <FaUser onClick={()=>setShowAdminMenu((prev) =>!prev)} className="text-3xl text-white cursor-pointer" />
import Image from "next/image";
      </div>
import Image from "next/image";
      {
import Image from "next/image";
        showAdminMenu ?
import Image from "next/image";
        (
import Image from "next/image";
          <div className="flex flex-col absolute right-2 top-20 bg-black p-2 rounded-2xl z-50">
import Image from "next/image";
            <p onClick={logoutAmin} className="text-lg font-semibold text-white px-4 cursor-pointer">Logout</p>
import Image from "next/image";
          </div>
import Image from "next/image";
        )
import Image from "next/image";
        :
import Image from "next/image";
        null
import Image from "next/image";
      }
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default AdminHeader;
