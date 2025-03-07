
mport Image from "next/image";
"use client";
mport Image from "next/image";
import React, { useEffect } from "react";
mport Image from "next/image";
import { BiShoppingBag } from "react-icons/bi";
mport Image from "next/image";

mport Image from "next/image";
const Footer = () => {
mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    if (!document.querySelector('script[src*="dialogflow-console/fast/messenger/bootstrap.js"]')) {
mport Image from "next/image";
      const script = document.createElement("script");
mport Image from "next/image";
      script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
mport Image from "next/image";
      script.async = true;
mport Image from "next/image";
      document.body.appendChild(script);
mport Image from "next/image";
    }
mport Image from "next/image";
  }, []);
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="bg-black w-full h-[1000px] sm:h-[500px] sm:p-20 p-5 relative">
mport Image from "next/image";
      <div className="flex flex-col gap-14">
mport Image from "next/image";
        <div className="flex flex-col sm:flex-row justify-between gap-5 mt-10 w-full">
mport Image from "next/image";
          <div className="flex flex-col gap-10 w-96">
mport Image from "next/image";
            <div className="flex gap-5 items-center cursor-pointer">
mport Image from "next/image";
              <BiShoppingBag className="text-white text-3xl" />
mport Image from "next/image";
              <h3 className="text-white text-2xl font-semibold">Job Portal</h3>
mport Image from "next/image";
            </div>
mport Image from "next/image";
            <p className="text-white text-xl font-semibold">
mport Image from "next/image";
              Elite jobs for elite minds—start your journey and meet your dream employer!
mport Image from "next/image";
            </p>
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex flex-col gap-5 w-36">
mport Image from "next/image";
            <h4 className="text-white text-2xl">Company</h4>
mport Image from "next/image";
            <div className="flex flex-col gap-2">
mport Image from "next/image";
              <p className="text-white text-[15px]">About Us</p>
mport Image from "next/image";
              <p className="text-white text-[15px]">Our Team</p>
mport Image from "next/image";
              <p className="text-white text-[15px]">Partners</p>
mport Image from "next/image";
              <p className="text-white text-[15px]">For Candidate</p>
mport Image from "next/image";
              <p className="text-white text-[15px]">For Employers</p>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex flex-col gap-5 w-36">
mport Image from "next/image";
            <h4 className="text-white text-2xl">Company</h4>
mport Image from "next/image";
            <div className="flex flex-col gap-2">
mport Image from "next/image";
              <p className="text-white text-[15px]">About Us</p>
mport Image from "next/image";
              <p className="text-white text-[15px]">Our Team</p>
mport Image from "next/image";
              <p className="text-white text-[15px]">Partners</p>
mport Image from "next/image";
              <p className="text-white text-[15px]">For Candidate</p>
mport Image from "next/image";
              <p className="text-white text-[15px]">For Employers</p>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex flex-col gap-4 w-96">
mport Image from "next/image";
            <h4 className="text-white text-2xl">Newsletter</h4>
mport Image from "next/image";
            <p className="text-gray-300 text-[15px]">Subscribe to our Newsletter</p>
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              className="w-full border-2 border-gray-600 rounded-xl p-3 placeholder:text-gray-500"
mport Image from "next/image";
              placeholder="Email Address"
mport Image from "next/image";
            />
mport Image from "next/image";
            <p className="bg-[#309689] text-white p-3 rounded-xl text-center font-semibold">
mport Image from "next/image";
              Subscribe Now
mport Image from "next/image";
            </p>
mport Image from "next/image";
            <div className="flex gap-2 items-center justify-center">
mport Image from "next/image";
              <p className="text-gray-300 underline">Privacy Terms</p>
mport Image from "next/image";
              <p className="text-gray-300 underline">Terms & Conditions</p>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";
        <div className="flex items-center justify-center w-full -mt-8 sm:mt-0">
mport Image from "next/image";
          <p className="text-gray-400">Copyright Job Portal 2025, Designed by Team-5</p>
mport Image from "next/image";
        </div>
mport Image from "next/image";
      </div>
mport Image from "next/image";

mport Image from "next/image";
      {/* Dialogflow Messenger */}
mport Image from "next/image";
      <df-messenger
mport Image from "next/image";
  intent="WELCOME"
mport Image from "next/image";
  chat-title="JobBuddy"
mport Image from "next/image";
  agent-id="593fa4ae-4881-441d-9659-e78e3f0e860c"
mport Image from "next/image";
  language-code="en"
mport Image from "next/image";
></df-messenger>
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default Footer;