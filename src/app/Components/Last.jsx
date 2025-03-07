
mport Image from "next/image";
import { useEffect, useState } from "react";
mport Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
mport Image from "next/image";
import "swiper/css";
mport Image from "next/image";
import "swiper/css/pagination";
mport Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
mport Image from "next/image";

mport Image from "next/image";
const companies = [
mport Image from "next/image";
  { name: "ABC Inc.", jobs: 8, logo: "📷" },
mport Image from "next/image";
  { name: "Global Solutions", jobs: 18, logo: "⚡" },
mport Image from "next/image";
  { name: "The Group", jobs: 12, logo: "🍔" },
mport Image from "next/image";
  { name: "Elite Corp.", jobs: 25, logo: "🔍" },
mport Image from "next/image";
  { name: "AGrowthTech Ltd.", jobs: 30, logo: "📦" },
mport Image from "next/image";
  { name: "XYZ Ltd", jobs: 10, logo: "🎬" },
mport Image from "next/image";
];
mport Image from "next/image";

mport Image from "next/image";
export default function CompanyCarousel() {
mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
mport Image from "next/image";
      <h2 className="text-2xl sm:text-3xl font-bold text-center">Top Company</h2>
mport Image from "next/image";
      <p className="text-center text-gray-500 mb-6">Our Top Recruiters!</p>
mport Image from "next/image";
      <Swiper
mport Image from "next/image";
        slidesPerView={1}
mport Image from "next/image";
        breakpoints={{
mport Image from "next/image";
          640: { slidesPerView: 2, spaceBetween: 20 },
mport Image from "next/image";
          1024: { slidesPerView: 3, spaceBetween: 30 },
mport Image from "next/image";
        }}
mport Image from "next/image";
        loop={true}
mport Image from "next/image";
        autoplay={{ delay: 2500, disableOnInteraction: false }}
mport Image from "next/image";
        modules={[Pagination, Autoplay]}
mport Image from "next/image";
        className="w-full max-w-5xl mx-auto"
mport Image from "next/image";
      >
mport Image from "next/image";
        {companies.map((company, index) => (
mport Image from "next/image";
          <SwiperSlide key={index} className="flex justify-center">
mport Image from "next/image";
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center w-60">
mport Image from "next/image";
              <div className="text-5xl">{company.logo}</div>
mport Image from "next/image";
              <h3 className="text-lg sm:text-xl font-semibold mt-4 text-center">{company.name}</h3>
mport Image from "next/image";
              <span className="mt-2 bg-green-100 text-green-700 text-xs sm:text-sm px-4 py-1 rounded-full">
mport Image from "next/image";
                {company.jobs} open jobs
mport Image from "next/image";
              </span>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          </SwiperSlide>
mport Image from "next/image";
        ))}
mport Image from "next/image";
      </Swiper>
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
}