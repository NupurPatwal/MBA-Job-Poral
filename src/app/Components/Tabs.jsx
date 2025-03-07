
import Image from "next/image";
"use client";
import Image from "next/image";
iimport { useState } from "react";
import Image from "next/image";

import Image from "next/image";
const Tabs = () => {
import Image from "next/image";
  const [activeTab, setActiveTab] = useState("Today");
import Image from "next/image";

import Image from "next/image";
  const tabs = ["Today", "Yesterday", "Week", "Month"];
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="bg-green-100 rounded-xl p-3 w-full max-w-3xl mx-auto mt-6">
import Image from "next/image";
      {/* Tab Container with Scroll on Small Screens */}
import Image from "next/image";
      <div className="flex overflow-x-auto md:flex-nowrap flex-wrap gap-2">
import Image from "next/image";
        {tabs.map((tab) => (
import Image from "next/image";
          <button
import Image from "next/image";
            key={tab}
import Image from "next/image";
            className={`flex-1 min-w-[90px] md:min-w-0 text-center py-2 px-4 rounded-xl text-black font-medium transition-all 
import Image from "next/image";
              ${activeTab === tab ? "bg-gray-400 text-white" : "hover:bg-gray-300"}`}
import Image from "next/image";
            onClick={() => setActiveTab(tab)}
import Image from "next/image";
          >
import Image from "next/image";
            {tab}
import Image from "next/image";
          </button>
import Image from "next/image";
        ))}
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
export default Tabs;