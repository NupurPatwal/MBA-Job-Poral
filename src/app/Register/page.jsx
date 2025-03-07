
mport Image from "next/image";
"use client";
mport Image from "next/image";
import Link from "next/link";
mport Image from "next/image";
import React, { useState } from "react";
mport Image from "next/image";
import Image from "next/image";
mport Image from "next/image";
import { useRouter } from "next/navigation";
mport Image from "next/image";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
mport Image from "next/image";
import app from "../firebase.js";
mport Image from "next/image";
import axios from "axios";
mport Image from "next/image";
import toast from "react-hot-toast";
mport Image from "next/image";
import Navbar from "../Components/Navbar.jsx";
mport Image from "next/image";

mport Image from "next/image";
const RegisterPage = () => {
mport Image from "next/image";
  const router = useRouter();
mport Image from "next/image";
  const [userSignUp, setUserSignUp] = useState({
mport Image from "next/image";
    name: "",
mport Image from "next/image";
    email: "",
mport Image from "next/image";
    password: "",
mport Image from "next/image";
    confirmPassword: "",
mport Image from "next/image";
  });
mport Image from "next/image";
  
mport Image from "next/image";
  const inputChangeHandler = (event) => {
mport Image from "next/image";
    const { name, value } = event.target;
mport Image from "next/image";
    setUserSignUp((prev) => ({
mport Image from "next/image";
      ...prev,
mport Image from "next/image";
      [name]: value,
mport Image from "next/image";
    }));
mport Image from "next/image";
  };
mport Image from "next/image";
  
mport Image from "next/image";
  const registerUser = async (event) => {
mport Image from "next/image";
    event.preventDefault();
mport Image from "next/image";
    if (!userSignUp.name) {
mport Image from "next/image";
      toast.error("Name is required");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    if (!userSignUp.email) {
mport Image from "next/image";
      toast.error("Email is required");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    if (!userSignUp.password) {
mport Image from "next/image";
      toast.error("Password is required");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    if (!userSignUp.confirmPassword) {
mport Image from "next/image";
      toast.error("Confirm Password is required");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    if (userSignUp.confirmPassword !== userSignUp.password) {
mport Image from "next/image";
      toast.error("Passwords do not match");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/auth/register`;
mport Image from "next/image";
    try {
mport Image from "next/image";
      const response = await axios.post(url, {
mport Image from "next/image";
        name: userSignUp.name,
mport Image from "next/image";
        email: userSignUp.email,
mport Image from "next/image";
        password: userSignUp.password,
mport Image from "next/image";
      });
mport Image from "next/image";

mport Image from "next/image";
      if (response.status === 201) {
mport Image from "next/image";
        toast.success("Registration successful!");
mport Image from "next/image";
        setUserSignUp({ name: "", email: "", password: "", confirmPassword: "" });
mport Image from "next/image";
        router.push("/Login");
mport Image from "next/image";
      }
mport Image from "next/image";
    } catch (error) {
mport Image from "next/image";
      toast.error(error.response?.data?.message || "Something went wrong!");
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
      const newURL = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/auth/sign/with/google`;
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
        router.push("/");
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
        <div className="flex flex-col items-center justify-center gap-5 sm:w-2/3 w-full h-full mt-[10%]">
mport Image from "next/image";
          <h4 className="text-white sm:text-7xl text-6xl font-semibold text-center">Welcome Back .!</h4>
mport Image from "next/image";
          <div className="sm:flex hidden justify-end gap-1 absolute left-[425px] top-60">
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
        <form onSubmit={(event)=>registerUser(event)} className="flex flex-col gap-5 justify-center sm:w-1/3 w-full h-full border-[1px] border-white shadow-2xl p-8 rounded-2xl">
mport Image from "next/image";
          <p className="text-white text-2xl font-semibold text-center">User Sign up</p>
mport Image from "next/image";
          <div className="flex flex-col gap-3 w-full">
mport Image from "next/image";
            <input required onChange={inputChangeHandler} value={userSignUp.name} name="name" type="text" placeholder="Name" className="text-white text-[16px] border-[1px] border-white rounded-xl px-4 py-3 bg-black w-full placeholder:text-white placeholder:text-lg"/>
mport Image from "next/image";
            <input required onChange={inputChangeHandler} value={userSignUp.email} name="email" type="email" placeholder="Email / Phone" className="text-white text-[16px] border-[1px] border-white rounded-xl px-4 py-3 bg-black w-full placeholder:text-white placeholder:text-lg"/>
mport Image from "next/image";
            <input required onChange={inputChangeHandler} value={userSignUp.password} name="password" type="password" placeholder="Password" className="text-white text-[16px] border-[1px] border-white rounded-xl px-4 py-3 bg-black w-full placeholder:text-white placeholder:text-lg"/>
mport Image from "next/image";
            <input required onChange={inputChangeHandler} value={userSignUp.confirmPassword} name="confirmPassword" type="password" placeholder="Confirm Password" className="text-white text-[16px] border-[1px] border-white rounded-xl px-4 py-3 bg-black w-full placeholder:text-white placeholder:text-lg"/>
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex flex-col gap-2 w-full">
mport Image from "next/image";
            <button type="submit" className="bg-[#309689] rounded-2xl text-white p-2 text-xl font-semibold text-center w-full">Sign up</button>
mport Image from "next/image";
            <Link href="/AdminLogin" className="text-white text-center text-[18px] bg-black p-2 rounded-2xl border-2 border-white">Admin Sign Up</Link>
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
            <Image onClick={loginWithGoogle} src="/google_icon.jpeg" width={50} height={50} alt="Picture of the author" className="w-10 h-10 cursor-pointer rounded-full bg-[#0F0F0F]"/>
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <Link href="/Login" className="text-white text-center text-[14px]">Already Register? Login</Link>
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
        </form>
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
export default RegisterPage;
