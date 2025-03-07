
import Image from "next/image";
"use client";
import Image from "next/image";
iimport { useState } from "react";
import Image from "next/image";
iimport { IoIosAdd, IoIosRemove } from "react-icons/io";
import Image from "next/image";

import Image from "next/image";
export default function PaymentStatus() {
import Image from "next/image";
  const [expanded, setExpanded] = useState(null);
import Image from "next/image";

import Image from "next/image";
  const toggleExpand = (index) => {
import Image from "next/image";
    setExpanded(expanded === index ? null : index);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const paymentData = [
import Image from "next/image";
    { title: "Payment failed", value: 230, action: "Resume Upload", count: 36 },
import Image from "next/image";
    { title: "Payment Complete today", value: 46, action: "Resume Make", count: 24 },
import Image from "next/image";
  ];
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="p-4 w-full">
import Image from "next/image";
      {paymentData.map((item, index) => (
import Image from "next/image";
        <div
import Image from "next/image";
          key={index}
import Image from "next/image";
          className={`flex flex-wrap sm:flex-nowrap justify-between items-center px-4 py-3 rounded-lg shadow-md ${
import Image from "next/image";
            index % 2 === 0 ? "bg-white" : "bg-gray-100"
import Image from "next/image";
          } mb-2 w-full`}
import Image from "next/image";
        >
import Image from "next/image";
          {/* Title & Amount */}
import Image from "next/image";
          <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto">
import Image from "next/image";
            <p className="font-medium text-sm sm:text-base">{item.title}</p>
import Image from "next/image";
            <p className="font-semibold text-sm sm:ml-4">{item.value}</p>
import Image from "next/image";
          </div>
import Image from "next/image";

import Image from "next/image";
          {/* Action & Count */}
import Image from "next/image";
          <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto mt-2 sm:mt-0">
import Image from "next/image";
            <p
import Image from "next/image";
              className={`text-sm sm:text-base cursor-pointer ${
import Image from "next/image";
                index % 2 !== 0 ? "text-green-600" : "text-black"
import Image from "next/image";
              }`}
import Image from "next/image";
            >
import Image from "next/image";
              {item.action}
import Image from "next/image";
            </p>
import Image from "next/image";
            <p className="font-semibold text-sm sm:ml-4">{item.count}</p>
import Image from "next/image";
          </div>
import Image from "next/image";

import Image from "next/image";
          {/* Expand/Collapse Button */}
import Image from "next/image";
          <button
import Image from "next/image";
            onClick={() => toggleExpand(index)}
import Image from "next/image";
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition sm:ml-4 mt-2 sm:mt-0"
import Image from "next/image";
          >
import Image from "next/image";
            {expanded === index ? <IoIosRemove size={20} /> : <IoIosAdd size={20} />}
import Image from "next/image";
          </button>
import Image from "next/image";
        </div>
import Image from "next/image";
      ))}
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
}
