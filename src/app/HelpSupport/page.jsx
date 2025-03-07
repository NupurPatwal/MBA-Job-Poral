
mport Image from "next/image";
"use client"
mport Image from "next/image";
import React, { useState } from "react";
mport Image from "next/image";

mport Image from "next/image";
export default function HelpSupport() {
mport Image from "next/image";
  const [priority, setPriority] = useState(1);
mport Image from "next/image";
  const [file, setFile] = useState(null);
mport Image from "next/image";
  const [fileMessage, setFileMessage] = useState("");
mport Image from "next/image";

mport Image from "next/image";
  const increasePriority = () => {
mport Image from "next/image";
    if (priority < 5) setPriority(priority + 1);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const decreasePriority = () => {
mport Image from "next/image";
    if (priority > 1) setPriority(priority - 1);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const handleFileUpload = (e) => {
mport Image from "next/image";
    setFile(e.target.files[0]);
mport Image from "next/image";
    setFileMessage("File selected: " + e.target.files[0].name);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const handleSubmit = (e) => {
mport Image from "next/image";
    e.preventDefault();
mport Image from "next/image";
    alert("Ticket Raised Successfully!");
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
mport Image from "next/image";
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
mport Image from "next/image";
        <h2 className="text-xl font-bold text-center mb-4">Raise a Support Ticket</h2>
mport Image from "next/image";
        <form onSubmit={handleSubmit}>
mport Image from "next/image";
          <label className="block text-sm font-medium">Ticket ID:</label>
mport Image from "next/image";
          <input type="text" className="w-full border p-2 rounded mb-2" value="TKT12345" readOnly />
mport Image from "next/image";

mport Image from "next/image";
          <label className="block text-sm font-medium">Email ID:</label>
mport Image from "next/image";
          <input type="email" className="w-full border p-2 rounded mb-2" required />
mport Image from "next/image";

mport Image from "next/image";
          <label className="block text-sm font-medium">Date Created:</label>
mport Image from "next/image";
          <input type="text" className="w-full border p-2 rounded mb-2" value={new Date().toLocaleDateString()} readOnly />
mport Image from "next/image";

mport Image from "next/image";
          <label className="block text-sm font-medium">Subject:</label>
mport Image from "next/image";
          <input type="text" className="w-full border p-2 rounded mb-2" required />
mport Image from "next/image";

mport Image from "next/image";
          <label className="block text-sm font-medium">Status:</label>
mport Image from "next/image";
          <input type="text" className="w-full border p-2 rounded mb-2" value="Open" readOnly />
mport Image from "next/image";

mport Image from "next/image";
          <label className="block text-sm font-medium">Priority:</label>
mport Image from "next/image";
          <div className="flex items-center gap-2 mb-2">
mport Image from "next/image";
            <input type="number" className="border p-2 w-16 text-center rounded" value={priority} readOnly />
mport Image from "next/image";
            <button type="button" className="bg-green-500 text-white px-3 py-1 rounded" onClick={increasePriority}>🔼</button>
mport Image from "next/image";
            <button type="button" className="bg-red-500 text-white px-3 py-1 rounded" onClick={decreasePriority}>🔽</button>
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          <label className="block text-sm font-medium">Attachments:</label>
mport Image from "next/image";
          <input type="file" className="w-full border p-2 rounded mb-2" onChange={handleFileUpload} />
mport Image from "next/image";
          {fileMessage && <p className="text-green-500 text-sm">{fileMessage}</p>}
mport Image from "next/image";

mport Image from "next/image";
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">
mport Image from "next/image";
            Raise Your Ticket
mport Image from "next/image";
          </button>
mport Image from "next/image";
        </form>
mport Image from "next/image";
      </div>
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
}