
import Image from "next/image";
"use client";
import Image from "next/image";
iimport React, { useEffect } from "react";
import Image from "next/image";
iimport { BiShoppingBag } from "react-icons/bi";
import Image from "next/image";

import Image from "next/image";
const Footer = () => {
import Image from "next/image";
  useEffect(() => {
import Image from "next/image";
    if (!document.querySelector('script[src*="dialogflow-console/fast/messenger/bootstrap.js"]')) {
import Image from "next/image";
      const script = document.createElement("script");
import Image from "next/image";
      script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
import Image from "next/image";
      script.async = true;
import Image from "next/image";
      document.body.appendChild(script);
import Image from "next/image";
    }
import Image from "next/image";
  }, []);
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="bg-black w-full h-[1000px] sm:h-[500px] sm:p-20 p-5 relative">
import Image from "next/image";
      <div className="flex flex-col gap-14">
import Image from "next/image";
        <div className="flex flex-col sm:flex-row justify-between gap-5 mt-10 w-full">
import Image from "next/image";
          <div className="flex flex-col gap-10 w-96">
import Image from "next/image";
            <div className="flex gap-5 items-center cursor-pointer">
import Image from "next/image";
              <BiShoppingBag className="text-white text-3xl" />
import Image from "next/image";
              <h3 className="text-white text-2xl font-semibold">Job Portal</h3>
import Image from "next/image";
            </div>
import Image from "next/image";
            <p className="text-white text-xl font-semibold">
import Image from "next/image";
              Elite jobs for elite minds—start your journey and meet your dream employer!
import Image from "next/image";
            </p>
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="flex flex-col gap-5 w-36">
import Image from "next/image";
            <h4 className="text-white text-2xl">Company</h4>
import Image from "next/image";
            <div className="flex flex-col gap-2">
import Image from "next/image";
              <p className="text-white text-[15px]">About Us</p>
import Image from "next/image";
              <p className="text-white text-[15px]">Our Team</p>
import Image from "next/image";
              <p className="text-white text-[15px]">Partners</p>
import Image from "next/image";
              <p className="text-white text-[15px]">For Candidate</p>
import Image from "next/image";
              <p className="text-white text-[15px]">For Employers</p>
import Image from "next/image";
            </div>
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="flex flex-col gap-5 w-36">
import Image from "next/image";
            <h4 className="text-white text-2xl">Company</h4>
import Image from "next/image";
            <div className="flex flex-col gap-2">
import Image from "next/image";
              <p className="text-white text-[15px]">About Us</p>
import Image from "next/image";
              <p className="text-white text-[15px]">Our Team</p>
import Image from "next/image";
              <p className="text-white text-[15px]">Partners</p>
import Image from "next/image";
              <p className="text-white text-[15px]">For Candidate</p>
import Image from "next/image";
              <p className="text-white text-[15px]">For Employers</p>
import Image from "next/image";
            </div>
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="flex flex-col gap-4 w-96">
import Image from "next/image";
            <h4 className="text-white text-2xl">Newsletter</h4>
import Image from "next/image";
            <p className="text-gray-300 text-[15px]">Subscribe to our Newsletter</p>
import Image from "next/image";
            <input
import Image from "next/image";
              type="text"
import Image from "next/image";
              className="w-full border-2 border-gray-600 rounded-xl p-3 placeholder:text-gray-500"
import Image from "next/image";
              placeholder="Email Address"
import Image from "next/image";
            />
import Image from "next/image";
            <p className="bg-[#309689] text-white p-3 rounded-xl text-center font-semibold">
import Image from "next/image";
              Subscribe Now
import Image from "next/image";
            </p>
import Image from "next/image";
            <div className="flex gap-2 items-center justify-center">
import Image from "next/image";
              <p className="text-gray-300 underline">Privacy Terms</p>
import Image from "next/image";
              <p className="text-gray-300 underline">Terms & Conditions</p>
import Image from "next/image";
            </div>
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";
        <div className="flex items-center justify-center w-full -mt-8 sm:mt-0">
import Image from "next/image";
          <p className="text-gray-400">Copyright Job Portal 2025, Designed by Team-5</p>
import Image from "next/image";
        </div>
import Image from "next/image";
      </div>
import Image from "next/image";

import Image from "next/image";
      {/* Dialogflow Messenger */}
import Image from "next/image";
      <df-messenger
import Image from "next/image";
  intent="WELCOME"
import Image from "next/image";
  chat-title="JobBuddy"
import Image from "next/image";
  agent-id="593fa4ae-4881-441d-9659-e78e3f0e860c"
import Image from "next/image";
  language-code="en"
import Image from "next/image";
></df-messenger>
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default Footer;