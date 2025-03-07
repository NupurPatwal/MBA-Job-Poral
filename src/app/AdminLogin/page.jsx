
mport Image from "next/image";
"use client"
mport Image from "next/image";
import Link from "next/link";
mport Image from "next/image";
import React, { useState } from "react";
mport Image from "next/image";
import Image from "next/image";
mport Image from "next/image";
import { useRouter } from "next/navigation"; 
mport Image from "next/image";
import axios from "axios";
mport Image from "next/image";
import toast from "react-hot-toast";
mport Image from "next/image";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
mport Image from "next/image";
import app from "../firebase.js";
mport Image from "next/image";
import Navbar from "../Components/Navbar.jsx";
mport Image from "next/image";

mport Image from "next/image";
const AdminLoginPage = () => {
mport Image from "next/image";
  const [userLoginIn, setUserLoginIn] = useState({
mport Image from "next/image";
    email: "",
mport Image from "next/image";
    password: "",
mport Image from "next/image";
  });
mport Image from "next/image";

mport Image from "next/image";
  const router = useRouter();
mport Image from "next/image";

mport Image from "next/image";
  const inputChangeHandler= (event) => {
mport Image from "next/image";
    const { name, value } = event.target;
mport Image from "next/image";
    setUserLoginIn((prev) => ({
mport Image from "next/image";
      ...prev,
mport Image from "next/image";
      [name]: value,
mport Image from "next/image";
    }));
mport Image from "next/image";
  }
mport Image from "next/image";

mport Image from "next/image";
  const loginUser = async () => {
mport Image from "next/image";
    if (!userLoginIn.email || !userLoginIn.password) {
mport Image from "next/image";
      toast.error("Both fields are required");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/admin/login`;
mport Image from "next/image";
    try {
mport Image from "next/image";
      const response = await axios.post(url, {
mport Image from "next/image";
        email: userLoginIn.email,
mport Image from "next/image";
        password: userLoginIn.password,
mport Image from "next/image";
      });
mport Image from "next/image";
      if (response.status === 200) {
mport Image from "next/image";
        const token = response.data.token;
mport Image from "next/image";
        localStorage.setItem("authToken", token);
mport Image from "next/image";
        toast.success(response.data.message); 
mport Image from "next/image";
        router.push("/AdminEmployer");
mport Image from "next/image";
      }
mport Image from "next/image";
    } catch (error) {
mport Image from "next/image";
      const errorMessage = error.response?.data?.message || "Something went wrong!";
mport Image from "next/image";
      toast.error(errorMessage);
mport Image from "next/image";
    }
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const loginWithGoogle = async () => {
mport Image from "next/image";
    try {
mport Image from "next/image";
      const newURL = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/admin/login/singup`;
mport Image from "next/image";
      const provider = new GoogleAuthProvider();
mport Image from "next/image";
      const auth = getAuth(app);
mport Image from "next/image";
      const result = await signInWithPopup(auth, provider);
mport Image from "next/image";
      const { displayName, email } = result.user;
mport Image from "next/image";
      const response = await axios.post(newURL, {
mport Image from "next/image";
        name: displayName,
mport Image from "next/image";
        email,
mport Image from "next/image";
      });
mport Image from "next/image";
      if (response.data.success) {
mport Image from "next/image";
        const token = response.data.token;
mport Image from "next/image";
        localStorage.setItem("authToken", token);
mport Image from "next/image";
        toast.success("Login successful!");
mport Image from "next/image";
        router.push("/AdminEmployer");
mport Image from "next/image";
      } else {
mport Image from "next/image";
        toast.error("Login failed!");
mport Image from "next/image";
      }
mport Image from "next/image";
    } catch (error) {
mport Image from "next/image";
      toast.error("An error occurred while signing in.");
mport Image from "next/image";
    }
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <>
mport Image from "next/image";
    <Navbar />
mport Image from "next/image";
    <div className="bg-[#0F0F0F] sm:px-20 sm:py-10 p-5">
mport Image from "next/image";
      <div className="flex flex-col sm:flex-row sm:gap-0 gap-5 justify-between w-full min-h-screen relative">
mport Image from "next/image";
        <div className="flex flex-col gap-5 justify-center w-full sm:w-1/3 h-full border-[1px] border-white shadow-2xl p-8 rounded-2xl">
mport Image from "next/image";
          <p className="text-white text-2xl font-semibold text-center">Admin Login</p>
mport Image from "next/image";
          <div className="flex flex-col gap-3 w-full">
mport Image from "next/image";
              <input value={userLoginIn.email} required onChange={inputChangeHandler} name="email" type="email" placeholder="Email" className="text-white text-[16px] border-[1px] border-white rounded-xl px-4 py-3 bg-black w-full placeholder:text-white placeholder:text-lg"/>
mport Image from "next/image";
              <input value={userLoginIn.password} required onChange={inputChangeHandler} name="password" type="password" placeholder="Password" className="text-white text-[16px] border-[1px] border-white rounded-xl px-4 py-3 bg-black w-full placeholder:text-white placeholder:text-lg"/>
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex justify-start gap-3 items-center">
mport Image from "next/image";
            <input type="checkbox" className="peer hidden" id="customCheckbox" />
mport Image from "next/image";
            <p className="w-4 h-4 flex items-center justify-center bg-violet-700 rounded cursor-pointer peer-checked:bg-violet-900">✓</p>
mport Image from "next/image";
            <label htmlFor="customCheckbox" className="text-gray-400 peer-checked:text-white cursor-pointer text-[14px]">Remember me</label>
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex flex-col gap-2 w-full">
mport Image from "next/image";
            <button onClick={loginUser} className="bg-[#309689] rounded-2xl text-white p-2 text-xl font-semibold text-center w-full">Login</button>
mport Image from "next/image";
            <p className="text-white text-center text-[14px]">Forgot Password ?</p>
mport Image from "next/image";
            <Link href="/Login" className="text-white text-center text-[18px] bg-black p-2 rounded-2xl border-2 border-white">User Login</Link>
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex gap-3 items-center w-full">
mport Image from "next/image";
            <div className="w-full h-[1px] bg-gray-400"></div>
mport Image from "next/image";
            <p className="text-gray-400">Or</p>
mport Image from "next/image";
            <div className="w-full h-[1px] bg-gray-400"></div>
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex justify-center items-center gap-5">
mport Image from "next/image";
            <Image onClick={loginWithGoogle} src="/google_icon.jpeg" width={50} height={50} alt="Picture of the author" className="w-10 h-10 rounded-full bg-[#0F0F0F] cursor-pointer"/>
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <Link href="/AdminSignUp" className="text-white text-center text-[14px]">Don’t have an account ? Signup</Link>
mport Image from "next/image";
          <div className="flex gap-10 items-center justify-center">
mport Image from "next/image";
            <p className="text-white text-[14px] font-semibold">Terms & Conditions</p>
mport Image from "next/image";
            <p className="text-white text-[14px] font-semibold">Support</p>
mport Image from "next/image";
            <p className="text-white text-[14px] font-semibold">Customer Care</p>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";
        <div className="flex flex-col items-center justify-center gap-5 sm:w-2/3 w-full h-full mt-[10%]">
mport Image from "next/image";
          <h4 className="text-white sm:text-7xl text-6xl font-semibold text-center">Welcome Back .!</h4>
mport Image from "next/image";
          <div className="justify-end gap-1 absolute right-[400px] top-60 hidden sm:flex">
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";
      </div>
mport Image from "next/image";
    </div>
mport Image from "next/image";
    </>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default AdminLoginPage;
