
import Image from "next/image";
iimport React from "react";
import Image from "next/image";

import Image from "next/image";
const EmailSettings = () => {
import Image from "next/image";
  return (
import Image from "next/image";
    <div className="min-h-screen  text-white flex flex-col items-center p-4">
import Image from "next/image";
      {/* Email Header */}
import Image from "next/image";
      <div className="w-full bg-gray-300 text-black text-center py-4 mt-4 rounded-lg text-xl font-bold">
import Image from "next/image";
        Email
import Image from "next/image";
      </div>
import Image from "next/image";

import Image from "next/image";
      {/* Email Settings Section */}
import Image from "next/image";
      <div className="bg-white text-black w-full max-w-4xl mt-6 p-6 rounded-lg shadow-lg">
import Image from "next/image";
        <h2 className="text-center font-semibold text-lg mb-4">
import Image from "next/image";
          Email Settings
import Image from "next/image";
        </h2>
import Image from "next/image";

import Image from "next/image";
        <div className="space-y-4">
import Image from "next/image";
          {[
import Image from "next/image";
            "Host Name*",
import Image from "next/image";
            "Sender Email*",
import Image from "next/image";
            "Sender Display Name*",
import Image from "next/image";
            "Authentication Email",
import Image from "next/image";
            "Authentication Password",
import Image from "next/image";
          ].map((label, index) => (
import Image from "next/image";
            <div key={index} className="flex flex-col">
import Image from "next/image";
              <label className="font-medium">{label}:</label>
import Image from "next/image";
              <input className="bg-gray-300 h-10 rounded-md" type="text" />
import Image from "next/image";
            </div>
import Image from "next/image";
          ))}
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Buttons Section */}
import Image from "next/image";
        <div className="flex flex-col items-center mt-6 gap-4">
import Image from "next/image";
          <button className="bg-blue-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-blue-400 transition">
import Image from "next/image";
            Validate Email
import Image from "next/image";
          </button>
import Image from "next/image";
          <div className="flex flex-wrap justify-center gap-4">
import Image from "next/image";
            {["Start", "Restart", "Delete"].map((btn, index) => (
import Image from "next/image";
              <button
import Image from "next/image";
                key={index}
import Image from "next/image";
                className="bg-blue-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-blue-400 transition"
import Image from "next/image";
              >
import Image from "next/image";
                {btn}
import Image from "next/image";
              </button>
import Image from "next/image";
            ))}
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
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
export default EmailSettings;
