
import Image from "next/image";
iimport React from "react";
import Image from "next/image";
iimport { FaStar } from "react-icons/fa";
import Image from "next/image";
iimport Image from "next/image";
import Image from "next/image";

import Image from "next/image";
const Testinomials = () => {
import Image from "next/image";
  const testinomialsArray = [
import Image from "next/image";
    {
import Image from "next/image";
      _id: 1,
import Image from "next/image";
      comment: "Amazing services",
import Image from "next/image";
      description: "Range of services to help professionals find the right career opportunities and employers discover top talent.",
import Image from "next/image";
      image: "/testinomial_1.jpeg",
import Image from "next/image";
      name: "Marco Klhn",
import Image from "next/image";
      subtitle: "Happy Client",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 2,
import Image from "next/image";
      comment: "Everything simple",
import Image from "next/image";
      description: "Very simple and easy to use. The interface is clean, navigation is smooth, and job listings are well-organized. It takes just a few clicks to find relevant MBA opportunities without any unnecessary complexity.",
import Image from "next/image";
      image: "/testinomial_2.jpeg",
import Image from "next/image";
      name: "Kristin Hester",
import Image from "next/image";
      subtitle: "Happy Client",
import Image from "next/image";
    },
import Image from "next/image";
    {
import Image from "next/image";
      _id: 3,
import Image from "next/image";
      comment: "Awesome, thank you!",
import Image from "next/image";
      description: "The application process is straightforward, and the platform ensures a hassle-free experience for job seekers. If you're looking for a no-fuss, efficient job search, this portal is a great choice.",
import Image from "next/image";
      image: "/testinomial_3.jpeg",
import Image from "next/image";
      name: "Zion Cisneors",
import Image from "next/image";
      subtitle: "Happy Client",
import Image from "next/image";
    },
import Image from "next/image";
  ];
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="bg-green-50 sm:p-20 p-5 overflow-hidden">
import Image from "next/image";
      <div className="flex flex-col gap-8">
import Image from "next/image";
        <div className="flex flex-col gap-5 items-center justify-center">
import Image from "next/image";
          <h4 className="sm:text-5xl text-4xl font-semibold text-black text-center">Testimonials from Our Customers</h4>
import Image from "next/image";
          <p className="text-lg font-normal text-black">See what the community has to say</p>
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Sliding container */}
import Image from "next/image";
        <div className="relative w-full overflow-hidden">
import Image from "next/image";
          <div className="flex gap-8 animate-slide whitespace-nowrap">
import Image from "next/image";
            {/* Duplicate testimonials for seamless looping */}
import Image from "next/image";
            {[...testinomialsArray, ...testinomialsArray].map((item, index) => (
import Image from "next/image";
              <div
import Image from "next/image";
                className="bg-white w-[320px] sm:w-80 lg:w-96 h-[400px] rounded-2xl shadow-2xl flex flex-col gap-4 p-10"
import Image from "next/image";
                key={index}
import Image from "next/image";
              >
import Image from "next/image";
                <div className="flex gap-2 w-80">
import Image from "next/image";
                  {[...Array(5)].map((_, i) => (
import Image from "next/image";
                    <FaStar key={i} className="text-orange-500 text-lg" />
import Image from "next/image";
                  ))}
import Image from "next/image";
                </div>
import Image from "next/image";
                <div className="flex flex-col gap-8 w-full">
import Image from "next/image";
                  <h4 className="text-2xl font-semibold text-black">{item.comment}</h4>
import Image from "next/image";
                  <p className="text-[15px] font-medium text-gray-600 italic w-40">
import Image from "next/image";
                    {item.description.slice(0, 40)}
import Image from "next/image";
                  </p>
import Image from "next/image";
                </div>
import Image from "next/image";
                <div className="flex justify-end text-7xl text-[#309689]">’’</div>
import Image from "next/image";
                <div className="flex gap-5 items-center">
import Image from "next/image";
                  <Image src={item.image} width={50} height={50} alt="Picture of the author" className="rounded-full" />
import Image from "next/image";
                  <div className="flex flex-col gap-0.5">
import Image from "next/image";
                    <p className="text-lg font-semibold text-black">{item.name}</p>
import Image from "next/image";
                    <p className="text-xs text-gray-600 font-semibold">{item.subtitle}</p>
import Image from "next/image";
                  </div>
import Image from "next/image";
                </div>
import Image from "next/image";
              </div>
import Image from "next/image";
            ))}
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";
      </div>
import Image from "next/image";

import Image from "next/image";
      {/* Tailwind CSS for animation */}
import Image from "next/image";
      <style jsx>{`
import Image from "next/image";
        @keyframes slide {
import Image from "next/image";
          from {
import Image from "next/image";
            transform: translateX(0);
import Image from "next/image";
          }
import Image from "next/image";
          to {
import Image from "next/image";
            transform: translateX(-100%);
import Image from "next/image";
          }
import Image from "next/image";
        }
import Image from "next/image";
        .animate-slide {
import Image from "next/image";
          display: flex;
import Image from "next/image";
          animation: slide 15s linear infinite;
import Image from "next/image";
        }
import Image from "next/image";
      `}</style>
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default Testinomials;
