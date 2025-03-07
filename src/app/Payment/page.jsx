
import Image from "next/image";
"use client"
import Image from "next/image";
iimport React, { useState } from "react";
import Image from "next/image";

import Image from "next/image";
export default function Payment() {
import Image from "next/image";
  const [amount, setAmount] = useState(1234); // Default amount
import Image from "next/image";
  const [email, setEmail] = useState("");
import Image from "next/image";
  const [phone, setPhone] = useState("");
import Image from "next/image";
  const [fullName, setFullName] = useState("");
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
import Image from "next/image";
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md border">
import Image from "next/image";
        {/* Title */}
import Image from "next/image";
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
import Image from "next/image";
          <span className="font-bold italic">PAYMENT DETAILS :</span>
import Image from "next/image";
        </h2>
import Image from "next/image";

import Image from "next/image";
        {/* Input Fields */}
import Image from "next/image";
        <div className="space-y-3">
import Image from "next/image";
          {/* Amount Field */}
import Image from "next/image";
          <div>
import Image from "next/image";
            <label className="block font-medium">Amount :</label>
import Image from "next/image";
            <input
import Image from "next/image";
              type="number"
import Image from "next/image";
              className="w-full p-2 border rounded-md mt-1"
import Image from "next/image";
              value={amount}
import Image from "next/image";
              onChange={(e) => setAmount(e.target.value)}
import Image from "next/image";
              readOnly
import Image from "next/image";
            />
import Image from "next/image";
          </div>
import Image from "next/image";

import Image from "next/image";
          {/* Email Field */}
import Image from "next/image";
          <div>
import Image from "next/image";
            <label className="block font-medium">Email :</label>
import Image from "next/image";
            <input
import Image from "next/image";
              type="email"
import Image from "next/image";
              className="w-full p-2 border rounded-md mt-1"
import Image from "next/image";
              value={email}
import Image from "next/image";
              onChange={(e) => setEmail(e.target.value)}
import Image from "next/image";
              placeholder="Enter your email"
import Image from "next/image";
            />
import Image from "next/image";
          </div>
import Image from "next/image";

import Image from "next/image";
          {/* Phone Field */}
import Image from "next/image";
          <div>
import Image from "next/image";
            <label className="block font-medium">Phone :</label>
import Image from "next/image";
            <input
import Image from "next/image";
              type="tel"
import Image from "next/image";
              className="w-full p-2 border rounded-md mt-1"
import Image from "next/image";
              value={phone}
import Image from "next/image";
              onChange={(e) => setPhone(e.target.value)}
import Image from "next/image";
              placeholder="Enter your phone number"
import Image from "next/image";
            />
import Image from "next/image";
          </div>
import Image from "next/image";

import Image from "next/image";
          {/* Full Name Field */}
import Image from "next/image";
          <div>
import Image from "next/image";
            <label className="block font-medium">Full Name :</label>
import Image from "next/image";
            <input
import Image from "next/image";
              type="text"
import Image from "next/image";
              className="w-full p-2 border rounded-md mt-1"
import Image from "next/image";
              value={fullName}
import Image from "next/image";
              onChange={(e) => setFullName(e.target.value)}
import Image from "next/image";
              placeholder="Enter your full name"
import Image from "next/image";
            />
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Payment Button */}
import Image from "next/image";
        <button
import Image from "next/image";
          className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600"
import Image from "next/image";
        >
import Image from "next/image";
          Pay Amount ₹{amount}
import Image from "next/image";
        </button>
import Image from "next/image";
      </div>
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
}