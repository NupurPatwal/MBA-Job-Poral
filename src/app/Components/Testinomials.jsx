
mport Image from "next/image";
import React from "react";
mport Image from "next/image";
import { FaStar } from "react-icons/fa";
mport Image from "next/image";
import Image from "next/image";
mport Image from "next/image";

mport Image from "next/image";
const Testinomials = () => {
mport Image from "next/image";
  const testinomialsArray = [
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 1,
mport Image from "next/image";
      comment: "Amazing services",
mport Image from "next/image";
      description: "Range of services to help professionals find the right career opportunities and employers discover top talent.",
mport Image from "next/image";
      image: "/testinomial_1.jpeg",
mport Image from "next/image";
      name: "Marco Klhn",
mport Image from "next/image";
      subtitle: "Happy Client",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 2,
mport Image from "next/image";
      comment: "Everything simple",
mport Image from "next/image";
      description: "Very simple and easy to use. The interface is clean, navigation is smooth, and job listings are well-organized. It takes just a few clicks to find relevant MBA opportunities without any unnecessary complexity.",
mport Image from "next/image";
      image: "/testinomial_2.jpeg",
mport Image from "next/image";
      name: "Kristin Hester",
mport Image from "next/image";
      subtitle: "Happy Client",
mport Image from "next/image";
    },
mport Image from "next/image";
    {
mport Image from "next/image";
      _id: 3,
mport Image from "next/image";
      comment: "Awesome, thank you!",
mport Image from "next/image";
      description: "The application process is straightforward, and the platform ensures a hassle-free experience for job seekers. If you're looking for a no-fuss, efficient job search, this portal is a great choice.",
mport Image from "next/image";
      image: "/testinomial_3.jpeg",
mport Image from "next/image";
      name: "Zion Cisneors",
mport Image from "next/image";
      subtitle: "Happy Client",
mport Image from "next/image";
    },
mport Image from "next/image";
  ];
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="bg-green-50 sm:p-20 p-5 overflow-hidden">
mport Image from "next/image";
      <div className="flex flex-col gap-8">
mport Image from "next/image";
        <div className="flex flex-col gap-5 items-center justify-center">
mport Image from "next/image";
          <h4 className="sm:text-5xl text-4xl font-semibold text-black text-center">Testimonials from Our Customers</h4>
mport Image from "next/image";
          <p className="text-lg font-normal text-black">See what the community has to say</p>
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Sliding container */}
mport Image from "next/image";
        <div className="relative w-full overflow-hidden">
mport Image from "next/image";
          <div className="flex gap-8 animate-slide whitespace-nowrap">
mport Image from "next/image";
            {/* Duplicate testimonials for seamless looping */}
mport Image from "next/image";
            {[...testinomialsArray, ...testinomialsArray].map((item, index) => (
mport Image from "next/image";
              <div
mport Image from "next/image";
                className="bg-white w-[320px] sm:w-80 lg:w-96 h-[400px] rounded-2xl shadow-2xl flex flex-col gap-4 p-10"
mport Image from "next/image";
                key={index}
mport Image from "next/image";
              >
mport Image from "next/image";
                <div className="flex gap-2 w-80">
mport Image from "next/image";
                  {[...Array(5)].map((_, i) => (
mport Image from "next/image";
                    <FaStar key={i} className="text-orange-500 text-lg" />
mport Image from "next/image";
                  ))}
mport Image from "next/image";
                </div>
mport Image from "next/image";
                <div className="flex flex-col gap-8 w-full">
mport Image from "next/image";
                  <h4 className="text-2xl font-semibold text-black">{item.comment}</h4>
mport Image from "next/image";
                  <p className="text-[15px] font-medium text-gray-600 italic w-40">
mport Image from "next/image";
                    {item.description.slice(0, 40)}
mport Image from "next/image";
                  </p>
mport Image from "next/image";
                </div>
mport Image from "next/image";
                <div className="flex justify-end text-7xl text-[#309689]">’’</div>
mport Image from "next/image";
                <div className="flex gap-5 items-center">
mport Image from "next/image";
                  <Image src={item.image} width={50} height={50} alt="Picture of the author" className="rounded-full" />
mport Image from "next/image";
                  <div className="flex flex-col gap-0.5">
mport Image from "next/image";
                    <p className="text-lg font-semibold text-black">{item.name}</p>
mport Image from "next/image";
                    <p className="text-xs text-gray-600 font-semibold">{item.subtitle}</p>
mport Image from "next/image";
                  </div>
mport Image from "next/image";
                </div>
mport Image from "next/image";
              </div>
mport Image from "next/image";
            ))}
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";
      </div>
mport Image from "next/image";

mport Image from "next/image";
      {/* Tailwind CSS for animation */}
mport Image from "next/image";
      <style jsx>{`
mport Image from "next/image";
        @keyframes slide {
mport Image from "next/image";
          from {
mport Image from "next/image";
            transform: translateX(0);
mport Image from "next/image";
          }
mport Image from "next/image";
          to {
mport Image from "next/image";
            transform: translateX(-100%);
mport Image from "next/image";
          }
mport Image from "next/image";
        }
mport Image from "next/image";
        .animate-slide {
mport Image from "next/image";
          display: flex;
mport Image from "next/image";
          animation: slide 15s linear infinite;
mport Image from "next/image";
        }
mport Image from "next/image";
      `}</style>
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default Testinomials;
