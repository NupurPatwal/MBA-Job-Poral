
mport Image from "next/image";
"use client"
mport Image from "next/image";
import React, { useState } from "react";
mport Image from "next/image";
import { motion } from "framer-motion";
mport Image from "next/image";
import { FaLeaf, FaTools, FaBriefcase, FaWrench, FaGraduationCap, FaHandHoldingUsd, FaBus } from "react-icons/fa";
mport Image from "next/image";
import { BiShoppingBag } from "react-icons/bi";
mport Image from "next/image";

mport Image from "next/image";
const Tilt = ({ children, rotationFactor = 15, isReverse = false }) => {
mport Image from "next/image";
  const [transform, setTransform] = useState("");
mport Image from "next/image";

mport Image from "next/image";
  const handleMouseMove = (e) => {
mport Image from "next/image";
    const { currentTarget, clientX, clientY } = e;
mport Image from "next/image";
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
mport Image from "next/image";

mport Image from "next/image";
    const x = (clientX - left) / width;
mport Image from "next/image";
    const y = (clientY - top) / height;
mport Image from "next/image";

mport Image from "next/image";
    const rotateX = (1 - y) * rotationFactor * (isReverse ? -1 : 1);
mport Image from "next/image";
    const rotateY = (x - 1) * rotationFactor * (isReverse ? -1 : 1);
mport Image from "next/image";

mport Image from "next/image";
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const handleMouseLeave = () => {
mport Image from "next/image";
    setTransform("");
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform, transition: "transform 0.1s ease-out" }} className="hover:shadow-lg">
mport Image from "next/image";
      {children}
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
const JobsCategory = () => {
mport Image from "next/image";
  const jobsCategory = [
mport Image from "next/image";
    { _id: 1, title: "Agriculture", icon: <FaLeaf />, number: "1254" },
mport Image from "next/image";
    { _id: 2, title: "Metal Production", icon: <FaTools />, number: "816" },
mport Image from "next/image";
    { _id: 3, title: "Commerce", icon: <FaBriefcase />, number: "2082" },
mport Image from "next/image";
    { _id: 4, title: "Construction", icon: <FaWrench />, number: "1520" },
mport Image from "next/image";
    { _id: 5, title: "Hotel & Tourism", icon: <BiShoppingBag />, number: "1022" },
mport Image from "next/image";
    { _id: 6, title: "Education", icon: <FaGraduationCap />, number: "1496" },
mport Image from "next/image";
    { _id: 7, title: "Financial Services", icon: <FaHandHoldingUsd />, number: "1529" },
mport Image from "next/image";
    { _id: 8, title: "Transport", icon: <FaBus />, number: "1244" },
mport Image from "next/image";
  ];
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="bg-green-50 sm:p-20 p-5 flex flex-col gap-10">
mport Image from "next/image";
      <div className="flex flex-col my-5 items-center gap-5">
mport Image from "next/image";
        <p className="text-black text-3xl sm:text-5xl font-semibold ">Browse by Category</p>
mport Image from "next/image";
        <p className="text-black font-normal text-lg text-center">Connecting ambitious MBAs with top companies!</p>
mport Image from "next/image";
      </div>
mport Image from "next/image";
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-5 mx-auto">
mport Image from "next/image";
      {
mport Image from "next/image";
        jobsCategory.map((item, index) => (
mport Image from "next/image";
          <Tilt key={item._id}>
mport Image from "next/image";
            <motion.div
mport Image from "next/image";
              initial={{ opacity: 0, x: -20 }}
mport Image from "next/image";
              whileInView={{ opacity: 1, x: 0 }}
mport Image from "next/image";
              transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.1 }}
mport Image from "next/image";
              viewport={{ once: false, amount: 0.2 }}
mport Image from "next/image";
              className="flex flex-col cursor-pointer items-center gap-4 rounded-2xl shadow-2xl bg-white w-[280px] h-52 p-10"
mport Image from "next/image";
            >
mport Image from "next/image";
              <span className="text-3xl text-[#309689]">{item.icon}</span>
mport Image from "next/image";
              <p className="text-xl font-semibold text-black">{item.title}</p>
mport Image from "next/image";
              <p className="text-[#309689] bg-green-100 px-2 text-[13px] py-1 rounded-2xl">
mport Image from "next/image";
                {item.number} jobs
mport Image from "next/image";
              </p>
mport Image from "next/image";
            </motion.div>
mport Image from "next/image";
          </Tilt>
mport Image from "next/image";
        ))
mport Image from "next/image";
      }
mport Image from "next/image";
      </div>
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default JobsCategory;
