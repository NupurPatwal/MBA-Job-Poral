
mport Image from "next/image";
import React from "react";
mport Image from "next/image";

mport Image from "next/image";
const EmailSettings = () => {
mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="min-h-screen  text-white flex flex-col items-center p-4">
mport Image from "next/image";
      {/* Email Header */}
mport Image from "next/image";
      <div className="w-full bg-gray-300 text-black text-center py-4 mt-4 rounded-lg text-xl font-bold">
mport Image from "next/image";
        Email
mport Image from "next/image";
      </div>
mport Image from "next/image";

mport Image from "next/image";
      {/* Email Settings Section */}
mport Image from "next/image";
      <div className="bg-white text-black w-full max-w-4xl mt-6 p-6 rounded-lg shadow-lg">
mport Image from "next/image";
        <h2 className="text-center font-semibold text-lg mb-4">
mport Image from "next/image";
          Email Settings
mport Image from "next/image";
        </h2>
mport Image from "next/image";

mport Image from "next/image";
        <div className="space-y-4">
mport Image from "next/image";
          {[
mport Image from "next/image";
            "Host Name*",
mport Image from "next/image";
            "Sender Email*",
mport Image from "next/image";
            "Sender Display Name*",
mport Image from "next/image";
            "Authentication Email",
mport Image from "next/image";
            "Authentication Password",
mport Image from "next/image";
          ].map((label, index) => (
mport Image from "next/image";
            <div key={index} className="flex flex-col">
mport Image from "next/image";
              <label className="font-medium">{label}:</label>
mport Image from "next/image";
              <input className="bg-gray-300 h-10 rounded-md" type="text" />
mport Image from "next/image";
            </div>
mport Image from "next/image";
          ))}
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Buttons Section */}
mport Image from "next/image";
        <div className="flex flex-col items-center mt-6 gap-4">
mport Image from "next/image";
          <button className="bg-blue-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-blue-400 transition">
mport Image from "next/image";
            Validate Email
mport Image from "next/image";
          </button>
mport Image from "next/image";
          <div className="flex flex-wrap justify-center gap-4">
mport Image from "next/image";
            {["Start", "Restart", "Delete"].map((btn, index) => (
mport Image from "next/image";
              <button
mport Image from "next/image";
                key={index}
mport Image from "next/image";
                className="bg-blue-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-blue-400 transition"
mport Image from "next/image";
              >
mport Image from "next/image";
                {btn}
mport Image from "next/image";
              </button>
mport Image from "next/image";
            ))}
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
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
export default EmailSettings;
