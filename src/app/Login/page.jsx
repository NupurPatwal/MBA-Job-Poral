
import Image from "next/image";
"use client"
import Image from "next/image";
iimport Link from "next/link";
import Image from "next/image";
iimport React, { useState } from "react";
import Image from "next/image";
iimport Image from "next/image";
import Image from "next/image";
iimport { useRouter } from "next/navigation"; 
import Image from "next/image";
iimport axios from "axios";
import Image from "next/image";
iimport toast from "react-hot-toast";
import Image from "next/image";
iimport { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
iimport app from "../firebase.js";
import Image from "next/image";
iimport Navbar from "../Components/Navbar.jsx";
import Image from "next/image";

import Image from "next/image";
const LoginPage = () => {
import Image from "next/image";
  const [userLoginIn, setUserLoginIn] = useState({
import Image from "next/image";
    email: "",
import Image from "next/image";
    password: "",
import Image from "next/image";
  });
import Image from "next/image";

import Image from "next/image";
  const router = useRouter();
import Image from "next/image";

import Image from "next/image";
  const inputChangeHandler= (event) => {
import Image from "next/image";
    const { name, value } = event.target;
import Image from "next/image";
    setUserLoginIn((prev) => ({
import Image from "next/image";
      ...prev,
import Image from "next/image";
      [name]: value,
import Image from "next/image";
    }));
import Image from "next/image";
  }
import Image from "next/image";

import Image from "next/image";
  const loginUser = async () => {
import Image from "next/image";
    event.preventDefault();
import Image from "next/image";
    if (!userLoginIn.email || !userLoginIn.password) {
import Image from "next/image";
      toast.error("Both fields are required");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";
    const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/auth/login`;
import Image from "next/image";
    try {
import Image from "next/image";
      const response = await axios.post(url, {
import Image from "next/image";
        email: userLoginIn.email,
import Image from "next/image";
        password: userLoginIn.password,
import Image from "next/image";
      });
import Image from "next/image";
  
import Image from "next/image";
      if (response.status === 200) {
import Image from "next/image";
        const token = response.data.token;
import Image from "next/image";
        localStorage.setItem("authToken", token);
import Image from "next/image";
        toast.success(response.data.message); 
import Image from "next/image";
        router.push("/");
import Image from "next/image";
      }
import Image from "next/image";
    } catch (error) {
import Image from "next/image";
      const errorMessage = error.response?.data?.message || "Something went wrong!";
import Image from "next/image";
      toast.error(errorMessage);
import Image from "next/image";
    }
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const loginWithGoogle = async () => {
import Image from "next/image";
    try {
import Image from "next/image";
      const newURL = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/auth/sign/with/google`;
import Image from "next/image";
      const provider = new GoogleAuthProvider();
import Image from "next/image";
      const auth = getAuth(app);
import Image from "next/image";
      const result = await signInWithPopup(auth, provider);
import Image from "next/image";
      const { displayName, email } = result.user;
import Image from "next/image";
      const response = await axios.post(newURL, {
import Image from "next/image";
        name: displayName,
import Image from "next/image";
        email,
import Image from "next/image";
      });
import Image from "next/image";
      if (response.data.success) {
import Image from "next/image";
        const token = response.data.token;
import Image from "next/image";
        localStorage.setItem("authToken", token);
import Image from "next/image";
        toast.success("Login successful!");
import Image from "next/image";
        router.push("/");
import Image from "next/image";
      } else {
import Image from "next/image";
        toast.error("Login failed!");
import Image from "next/image";
      }
import Image from "next/image";
    } catch (error) {
import Image from "next/image";
      toast.error("An error occurred while signing in.");
import Image from "next/image";
    }
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <>
import Image from "next/image";
    <Navbar />
import Image from "next/image";
    <div className="bg-[#0F0F0F] sm:px-20 sm:py-10 p-5">
import Image from "next/image";
      <div className="flex flex-col sm:flex-row sm:gap-0 gap-5 justify-between w-full min-h-screen relative">
import Image from "next/image";
        <div className="flex flex-col items-center justify-center gap-5 sm:w-2/3 w-full h-full mt-[10%]">
import Image from "next/image";
          <h4 className="text-white sm:text-7xl text-6xl font-semibold text-center">Welcome Back .!</h4>
import Image from "next/image";
          <div className="justify-end gap-1 absolute left-[425px] top-60 hidden sm:flex">
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";
        <form onSubmit={loginUser} className="flex flex-col gap-5 justify-center w-full sm:w-1/3 h-full border-[1px] border-white shadow-2xl p-8 rounded-2xl">
import Image from "next/image";
          <p className="text-white text-2xl font-semibold text-center">User Login</p>
import Image from "next/image";
          <div className="flex flex-col gap-3 w-full">
import Image from "next/image";
            <input  autoComplete="username" value={userLoginIn.email} required onChange={inputChangeHandler} name="email" type="email" placeholder="Email" className="text-white text-[16px] border-[1px] border-white rounded-xl px-4 py-3 bg-black w-full placeholder:text-white placeholder:text-lg"/>
import Image from "next/image";
            <input autoComplete="current-password" value={userLoginIn.password} required onChange={inputChangeHandler} name="password" type="password" placeholder="Password" className="text-white text-[16px] border-[1px] border-white rounded-xl px-4 py-3 bg-black w-full placeholder:text-white placeholder:text-lg"/>
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="flex justify-start gap-3 items-center">
import Image from "next/image";
            <input type="checkbox" className="peer hidden" id="customCheckbox" />
import Image from "next/image";
            <p className="w-4 h-4 flex items-center justify-center bg-violet-700 rounded cursor-pointer peer-checked:bg-violet-900">✓</p>
import Image from "next/image";
            <label htmlFor="customCheckbox" className="text-gray-400 peer-checked:text-white cursor-pointer text-[14px]">Remember me</label>
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="flex flex-col gap-2 w-full">
import Image from "next/image";
            <button type="submit" className="bg-[#309689] rounded-2xl text-white p-2 text-xl font-semibold text-center w-full">Login</button>
import Image from "next/image";
            <p className="text-white text-center text-[14px]">Forgot Password ?</p>
import Image from "next/image";
            <Link href="/AdminLogin" className="text-white text-center text-[18px] bg-black p-2 rounded-2xl border-2 border-white">Admin Login</Link>
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="flex gap-3 items-center w-full">
import Image from "next/image";
            <div className="w-full h-[1px] bg-gray-400"></div>
import Image from "next/image";
            <p className="text-gray-400">Or</p>
import Image from "next/image";
            <div className="w-full h-[1px] bg-gray-400"></div>
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="flex justify-center items-center gap-5">
import Image from "next/image";
            <Image onClick={loginWithGoogle} src="/google_icon.jpeg" width={50} height={50} alt="Picture of the author" className="w-10 h-10 rounded-full bg-[#0F0F0F] cursor-pointer"/>
import Image from "next/image";
          </div>
import Image from "next/image";
          <Link href="/Register" className="text-white text-center text-[14px]">Don’t have an account ? Signup</Link>
import Image from "next/image";
          <div className="flex gap-10 items-center justify-center">
import Image from "next/image";
            <p className="text-white text-[14px] font-semibold">Terms & Conditions</p>
import Image from "next/image";
            <p className="text-white text-[14px] font-semibold">Support</p>
import Image from "next/image";
            <p className="text-white text-[14px] font-semibold">Customer Care</p>
import Image from "next/image";
          </div>
import Image from "next/image";
        </form>
import Image from "next/image";
      </div>
import Image from "next/image";
    </div>
import Image from "next/image";
    </>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default LoginPage;
