
mport Image from "next/image";
"usec client"
mport Image from "next/image";
import axios from "axios";
mport Image from "next/image";
import React, { useEffect, useState } from "react";
mport Image from "next/image";
import { FaBell, FaUser } from "react-icons/fa";
mport Image from "next/image";
import { useRouter } from "next/navigation";
mport Image from "next/image";
import toast from "react-hot-toast";
mport Image from "next/image";

mport Image from "next/image";
const AdminHeader = () => {
mport Image from "next/image";
  const router = useRouter();
mport Image from "next/image";
  const [adminProfile, setAdminProfile] = useState(null);
mport Image from "next/image";
  const [showAdminMenu, setShowAdminMenu] = useState(false);
mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    const fetchAdminProfile = async () => {
mport Image from "next/image";
      const token = localStorage.getItem("authToken");
mport Image from "next/image";
      const newURL = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/admin/profile`;
mport Image from "next/image";
      try {
mport Image from "next/image";
        const response = await axios.get(newURL, {
mport Image from "next/image";
          headers: { Authorization: `Bearer ${token}` },
mport Image from "next/image";
        });
mport Image from "next/image";
        if (response.status === 200) {
mport Image from "next/image";
          setAdminProfile(response?.data); // ✅ Store data in state
mport Image from "next/image";
        }        
mport Image from "next/image";
      } catch (error) {
mport Image from "next/image";
      }
mport Image from "next/image";
    };
mport Image from "next/image";
  
mport Image from "next/image";
    fetchAdminProfile();
mport Image from "next/image";
  }, []);
mport Image from "next/image";

mport Image from "next/image";
  const logoutAmin = async () => {
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
    const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/admin/logout`;
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
  return (
mport Image from "next/image";
    <div className="flex justify-between items-center w-full p-5 bg-gradient-to-tr from-blue-950 to-blue-500 rounded-2xl relative">
mport Image from "next/image";
      <div className="flex flex-col gap-1 items-center">
mport Image from "next/image";
        <p className="text-white text-xl font-semibold">Welcome {adminProfile?.name}</p>
mport Image from "next/image";
        <p className="text-white text-lg font-normal">Here’s what happening with you today.</p>
mport Image from "next/image";
      </div>
mport Image from "next/image";
      <div className="flex gap-3 items-center">
mport Image from "next/image";
        <FaBell className="text-2xl text-white" />
mport Image from "next/image";
        <hr className="w-[2px] h-8 bg-white" />
mport Image from "next/image";
        <FaUser onClick={()=>setShowAdminMenu((prev) =>!prev)} className="text-3xl text-white cursor-pointer" />
mport Image from "next/image";
      </div>
mport Image from "next/image";
      {
mport Image from "next/image";
        showAdminMenu ?
mport Image from "next/image";
        (
mport Image from "next/image";
          <div className="flex flex-col absolute right-2 top-20 bg-black p-2 rounded-2xl z-50">
mport Image from "next/image";
            <p onClick={logoutAmin} className="text-lg font-semibold text-white px-4 cursor-pointer">Logout</p>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        )
mport Image from "next/image";
        :
mport Image from "next/image";
        null
mport Image from "next/image";
      }
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default AdminHeader;
