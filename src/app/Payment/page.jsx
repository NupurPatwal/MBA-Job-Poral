
mport Image from "next/image";
"use client"
mport Image from "next/image";
import React, { useState } from "react";
mport Image from "next/image";

mport Image from "next/image";
export default function Payment() {
mport Image from "next/image";
  const [amount, setAmount] = useState(1234); // Default amount
mport Image from "next/image";
  const [email, setEmail] = useState("");
mport Image from "next/image";
  const [phone, setPhone] = useState("");
mport Image from "next/image";
  const [fullName, setFullName] = useState("");
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
mport Image from "next/image";
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md border">
mport Image from "next/image";
        {/* Title */}
mport Image from "next/image";
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
mport Image from "next/image";
          <span className="font-bold italic">PAYMENT DETAILS :</span>
mport Image from "next/image";
        </h2>
mport Image from "next/image";

mport Image from "next/image";
        {/* Input Fields */}
mport Image from "next/image";
        <div className="space-y-3">
mport Image from "next/image";
          {/* Amount Field */}
mport Image from "next/image";
          <div>
mport Image from "next/image";
            <label className="block font-medium">Amount :</label>
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="number"
mport Image from "next/image";
              className="w-full p-2 border rounded-md mt-1"
mport Image from "next/image";
              value={amount}
mport Image from "next/image";
              onChange={(e) => setAmount(e.target.value)}
mport Image from "next/image";
              readOnly
mport Image from "next/image";
            />
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          {/* Email Field */}
mport Image from "next/image";
          <div>
mport Image from "next/image";
            <label className="block font-medium">Email :</label>
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="email"
mport Image from "next/image";
              className="w-full p-2 border rounded-md mt-1"
mport Image from "next/image";
              value={email}
mport Image from "next/image";
              onChange={(e) => setEmail(e.target.value)}
mport Image from "next/image";
              placeholder="Enter your email"
mport Image from "next/image";
            />
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          {/* Phone Field */}
mport Image from "next/image";
          <div>
mport Image from "next/image";
            <label className="block font-medium">Phone :</label>
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="tel"
mport Image from "next/image";
              className="w-full p-2 border rounded-md mt-1"
mport Image from "next/image";
              value={phone}
mport Image from "next/image";
              onChange={(e) => setPhone(e.target.value)}
mport Image from "next/image";
              placeholder="Enter your phone number"
mport Image from "next/image";
            />
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          {/* Full Name Field */}
mport Image from "next/image";
          <div>
mport Image from "next/image";
            <label className="block font-medium">Full Name :</label>
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              className="w-full p-2 border rounded-md mt-1"
mport Image from "next/image";
              value={fullName}
mport Image from "next/image";
              onChange={(e) => setFullName(e.target.value)}
mport Image from "next/image";
              placeholder="Enter your full name"
mport Image from "next/image";
            />
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Payment Button */}
mport Image from "next/image";
        <button
mport Image from "next/image";
          className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600"
mport Image from "next/image";
        >
mport Image from "next/image";
          Pay Amount ₹{amount}
mport Image from "next/image";
        </button>
mport Image from "next/image";
      </div>
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
}