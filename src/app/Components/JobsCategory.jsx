
import Image from "next/image";
"use client"
import Image from "next/image";
iimport React, { useState } from "react";
import Image from "next/image";
iimport { motion } from "framer-motion";
import Image from "next/image";
iimport { FaLeaf, FaTools, FaBriefcase, FaWrench, FaGraduationCap, FaHandHoldingUsd, FaBus } from "react-icons/fa";
import Image from "next/image";
iimport { BiShoppingBag } from "react-icons/bi";
import Image from "next/image";

import Image from "next/image";
const Tilt = ({ children, rotationFactor = 15, isReverse = false }) => {
import Image from "next/image";
  const [transform, setTransform] = useState("");
import Image from "next/image";

import Image from "next/image";
  const handleMouseMove = (e) => {
import Image from "next/image";
    const { currentTarget, clientX, clientY } = e;
import Image from "next/image";
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
import Image from "next/image";

import Image from "next/image";
    const x = (clientX - left) / width;
import Image from "next/image";
    const y = (clientY - top) / height;
import Image from "next/image";

import Image from "next/image";
    const rotateX = (1 - y) * rotationFactor * (isReverse ? -1 : 1);
import Image from "next/image";
    const rotateY = (x - 1) * rotationFactor * (isReverse ? -1 : 1);
import Image from "next/image";

import Image from "next/image";
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const handleMouseLeave = () => {
import Image from "next/image";
    setTransform("");
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform, transition: "transform 0.1s ease-out" }} className="hover:shadow-lg">
import Image from "next/image";
      {children}
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
const JobsCategory = () => {
import Image from "next/image";
  const jobsCategory = [
import Image from "next/image";
    { _id: 1, title: "Agriculture", icon: <FaLeaf />, number: "1254" },
import Image from "next/image";
    { _id: 2, title: "Metal Production", icon: <FaTools />, number: "816" },
import Image from "next/image";
    { _id: 3, title: "Commerce", icon: <FaBriefcase />, number: "2082" },
import Image from "next/image";
    { _id: 4, title: "Construction", icon: <FaWrench />, number: "1520" },
import Image from "next/image";
    { _id: 5, title: "Hotel & Tourism", icon: <BiShoppingBag />, number: "1022" },
import Image from "next/image";
    { _id: 6, title: "Education", icon: <FaGraduationCap />, number: "1496" },
import Image from "next/image";
    { _id: 7, title: "Financial Services", icon: <FaHandHoldingUsd />, number: "1529" },
import Image from "next/image";
    { _id: 8, title: "Transport", icon: <FaBus />, number: "1244" },
import Image from "next/image";
  ];
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="bg-green-50 sm:p-20 p-5 flex flex-col gap-10">
import Image from "next/image";
      <div className="flex flex-col my-5 items-center gap-5">
import Image from "next/image";
        <p className="text-black text-3xl sm:text-5xl font-semibold ">Browse by Category</p>
import Image from "next/image";
        <p className="text-black font-normal text-lg text-center">Connecting ambitious MBAs with top companies!</p>
import Image from "next/image";
      </div>
import Image from "next/image";
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-5 mx-auto">
import Image from "next/image";
      {
import Image from "next/image";
        jobsCategory.map((item, index) => (
import Image from "next/image";
          <Tilt key={item._id}>
import Image from "next/image";
            <motion.div
import Image from "next/image";
              initial={{ opacity: 0, x: -20 }}
import Image from "next/image";
              whileInView={{ opacity: 1, x: 0 }}
import Image from "next/image";
              transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.1 }}
import Image from "next/image";
              viewport={{ once: false, amount: 0.2 }}
import Image from "next/image";
              className="flex flex-col cursor-pointer items-center gap-4 rounded-2xl shadow-2xl bg-white w-[280px] h-52 p-10"
import Image from "next/image";
            >
import Image from "next/image";
              <span className="text-3xl text-[#309689]">{item.icon}</span>
import Image from "next/image";
              <p className="text-xl font-semibold text-black">{item.title}</p>
import Image from "next/image";
              <p className="text-[#309689] bg-green-100 px-2 text-[13px] py-1 rounded-2xl">
import Image from "next/image";
                {item.number} jobs
import Image from "next/image";
              </p>
import Image from "next/image";
            </motion.div>
import Image from "next/image";
          </Tilt>
import Image from "next/image";
        ))
import Image from "next/image";
      }
import Image from "next/image";
      </div>
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default JobsCategory;
