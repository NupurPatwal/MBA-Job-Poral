
import Image from "next/image";
iimport { useEffect, useState } from "react";
import Image from "next/image";
iimport { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
iimport "swiper/css";
import Image from "next/image";
iimport "swiper/css/pagination";
import Image from "next/image";
iimport { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import Image from "next/image";
const companies = [
import Image from "next/image";
  { name: "ABC Inc.", jobs: 8, logo: "📷" },
import Image from "next/image";
  { name: "Global Solutions", jobs: 18, logo: "⚡" },
import Image from "next/image";
  { name: "The Group", jobs: 12, logo: "🍔" },
import Image from "next/image";
  { name: "Elite Corp.", jobs: 25, logo: "🔍" },
import Image from "next/image";
  { name: "AGrowthTech Ltd.", jobs: 30, logo: "📦" },
import Image from "next/image";
  { name: "XYZ Ltd", jobs: 10, logo: "🎬" },
import Image from "next/image";
];
import Image from "next/image";

import Image from "next/image";
export default function CompanyCarousel() {
import Image from "next/image";
  return (
import Image from "next/image";
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
import Image from "next/image";
      <h2 className="text-2xl sm:text-3xl font-bold text-center">Top Company</h2>
import Image from "next/image";
      <p className="text-center text-gray-500 mb-6">Our Top Recruiters!</p>
import Image from "next/image";
      <Swiper
import Image from "next/image";
        slidesPerView={1}
import Image from "next/image";
        breakpoints={{
import Image from "next/image";
          640: { slidesPerView: 2, spaceBetween: 20 },
import Image from "next/image";
          1024: { slidesPerView: 3, spaceBetween: 30 },
import Image from "next/image";
        }}
import Image from "next/image";
        loop={true}
import Image from "next/image";
        autoplay={{ delay: 2500, disableOnInteraction: false }}
import Image from "next/image";
        modules={[Pagination, Autoplay]}
import Image from "next/image";
        className="w-full max-w-5xl mx-auto"
import Image from "next/image";
      >
import Image from "next/image";
        {companies.map((company, index) => (
import Image from "next/image";
          <SwiperSlide key={index} className="flex justify-center">
import Image from "next/image";
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center w-60">
import Image from "next/image";
              <div className="text-5xl">{company.logo}</div>
import Image from "next/image";
              <h3 className="text-lg sm:text-xl font-semibold mt-4 text-center">{company.name}</h3>
import Image from "next/image";
              <span className="mt-2 bg-green-100 text-green-700 text-xs sm:text-sm px-4 py-1 rounded-full">
import Image from "next/image";
                {company.jobs} open jobs
import Image from "next/image";
              </span>
import Image from "next/image";
            </div>
import Image from "next/image";
          </SwiperSlide>
import Image from "next/image";
        ))}
import Image from "next/image";
      </Swiper>
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
}