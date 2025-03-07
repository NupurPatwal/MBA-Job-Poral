
mport Image from "next/image";
"use client";
mport Image from "next/image";
import { useState } from "react";
mport Image from "next/image";

mport Image from "next/image";
const Tabs = () => {
mport Image from "next/image";
  const [activeTab, setActiveTab] = useState("Today");
mport Image from "next/image";

mport Image from "next/image";
  const tabs = ["Today", "Yesterday", "Week", "Month"];
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="bg-green-100 rounded-xl p-3 w-full max-w-3xl mx-auto mt-6">
mport Image from "next/image";
      {/* Tab Container with Scroll on Small Screens */}
mport Image from "next/image";
      <div className="flex overflow-x-auto md:flex-nowrap flex-wrap gap-2">
mport Image from "next/image";
        {tabs.map((tab) => (
mport Image from "next/image";
          <button
mport Image from "next/image";
            key={tab}
mport Image from "next/image";
            className={`flex-1 min-w-[90px] md:min-w-0 text-center py-2 px-4 rounded-xl text-black font-medium transition-all 
mport Image from "next/image";
              ${activeTab === tab ? "bg-gray-400 text-white" : "hover:bg-gray-300"}`}
mport Image from "next/image";
            onClick={() => setActiveTab(tab)}
mport Image from "next/image";
          >
mport Image from "next/image";
            {tab}
mport Image from "next/image";
          </button>
mport Image from "next/image";
        ))}
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
export default Tabs;