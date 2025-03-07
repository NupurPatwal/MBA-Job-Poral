
import Image from "next/image";
"use client"
import Image from "next/image";
iimport React, { useState } from "react";
import Image from "next/image";

import Image from "next/image";
export default function HelpSupport() {
import Image from "next/image";
  const [priority, setPriority] = useState(1);
import Image from "next/image";
  const [file, setFile] = useState(null);
import Image from "next/image";
  const [fileMessage, setFileMessage] = useState("");
import Image from "next/image";

import Image from "next/image";
  const increasePriority = () => {
import Image from "next/image";
    if (priority < 5) setPriority(priority + 1);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const decreasePriority = () => {
import Image from "next/image";
    if (priority > 1) setPriority(priority - 1);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const handleFileUpload = (e) => {
import Image from "next/image";
    setFile(e.target.files[0]);
import Image from "next/image";
    setFileMessage("File selected: " + e.target.files[0].name);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const handleSubmit = (e) => {
import Image from "next/image";
    e.preventDefault();
import Image from "next/image";
    alert("Ticket Raised Successfully!");
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
import Image from "next/image";
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
import Image from "next/image";
        <h2 className="text-xl font-bold text-center mb-4">Raise a Support Ticket</h2>
import Image from "next/image";
        <form onSubmit={handleSubmit}>
import Image from "next/image";
          <label className="block text-sm font-medium">Ticket ID:</label>
import Image from "next/image";
          <input type="text" className="w-full border p-2 rounded mb-2" value="TKT12345" readOnly />
import Image from "next/image";

import Image from "next/image";
          <label className="block text-sm font-medium">Email ID:</label>
import Image from "next/image";
          <input type="email" className="w-full border p-2 rounded mb-2" required />
import Image from "next/image";

import Image from "next/image";
          <label className="block text-sm font-medium">Date Created:</label>
import Image from "next/image";
          <input type="text" className="w-full border p-2 rounded mb-2" value={new Date().toLocaleDateString()} readOnly />
import Image from "next/image";

import Image from "next/image";
          <label className="block text-sm font-medium">Subject:</label>
import Image from "next/image";
          <input type="text" className="w-full border p-2 rounded mb-2" required />
import Image from "next/image";

import Image from "next/image";
          <label className="block text-sm font-medium">Status:</label>
import Image from "next/image";
          <input type="text" className="w-full border p-2 rounded mb-2" value="Open" readOnly />
import Image from "next/image";

import Image from "next/image";
          <label className="block text-sm font-medium">Priority:</label>
import Image from "next/image";
          <div className="flex items-center gap-2 mb-2">
import Image from "next/image";
            <input type="number" className="border p-2 w-16 text-center rounded" value={priority} readOnly />
import Image from "next/image";
            <button type="button" className="bg-green-500 text-white px-3 py-1 rounded" onClick={increasePriority}>🔼</button>
import Image from "next/image";
            <button type="button" className="bg-red-500 text-white px-3 py-1 rounded" onClick={decreasePriority}>🔽</button>
import Image from "next/image";
          </div>
import Image from "next/image";

import Image from "next/image";
          <label className="block text-sm font-medium">Attachments:</label>
import Image from "next/image";
          <input type="file" className="w-full border p-2 rounded mb-2" onChange={handleFileUpload} />
import Image from "next/image";
          {fileMessage && <p className="text-green-500 text-sm">{fileMessage}</p>}
import Image from "next/image";

import Image from "next/image";
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">
import Image from "next/image";
            Raise Your Ticket
import Image from "next/image";
          </button>
import Image from "next/image";
        </form>
import Image from "next/image";
      </div>
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
}