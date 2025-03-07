
mport Image from "next/image";
"use client";
mport Image from "next/image";
import { useState } from "react";
mport Image from "next/image";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
mport Image from "next/image";

mport Image from "next/image";
export default function PaymentStatus() {
mport Image from "next/image";
  const [expanded, setExpanded] = useState(null);
mport Image from "next/image";

mport Image from "next/image";
  const toggleExpand = (index) => {
mport Image from "next/image";
    setExpanded(expanded === index ? null : index);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const paymentData = [
mport Image from "next/image";
    { title: "Payment failed", value: 230, action: "Resume Upload", count: 36 },
mport Image from "next/image";
    { title: "Payment Complete today", value: 46, action: "Resume Make", count: 24 },
mport Image from "next/image";
  ];
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="p-4 w-full">
mport Image from "next/image";
      {paymentData.map((item, index) => (
mport Image from "next/image";
        <div
mport Image from "next/image";
          key={index}
mport Image from "next/image";
          className={`flex flex-wrap sm:flex-nowrap justify-between items-center px-4 py-3 rounded-lg shadow-md ${
mport Image from "next/image";
            index % 2 === 0 ? "bg-white" : "bg-gray-100"
mport Image from "next/image";
          } mb-2 w-full`}
mport Image from "next/image";
        >
mport Image from "next/image";
          {/* Title & Amount */}
mport Image from "next/image";
          <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto">
mport Image from "next/image";
            <p className="font-medium text-sm sm:text-base">{item.title}</p>
mport Image from "next/image";
            <p className="font-semibold text-sm sm:ml-4">{item.value}</p>
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          {/* Action & Count */}
mport Image from "next/image";
          <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto mt-2 sm:mt-0">
mport Image from "next/image";
            <p
mport Image from "next/image";
              className={`text-sm sm:text-base cursor-pointer ${
mport Image from "next/image";
                index % 2 !== 0 ? "text-green-600" : "text-black"
mport Image from "next/image";
              }`}
mport Image from "next/image";
            >
mport Image from "next/image";
              {item.action}
mport Image from "next/image";
            </p>
mport Image from "next/image";
            <p className="font-semibold text-sm sm:ml-4">{item.count}</p>
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          {/* Expand/Collapse Button */}
mport Image from "next/image";
          <button
mport Image from "next/image";
            onClick={() => toggleExpand(index)}
mport Image from "next/image";
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition sm:ml-4 mt-2 sm:mt-0"
mport Image from "next/image";
          >
mport Image from "next/image";
            {expanded === index ? <IoIosRemove size={20} /> : <IoIosAdd size={20} />}
mport Image from "next/image";
          </button>
mport Image from "next/image";
        </div>
mport Image from "next/image";
      ))}
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
}
