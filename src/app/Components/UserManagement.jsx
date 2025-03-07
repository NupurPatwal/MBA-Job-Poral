
mport Image from "next/image";
"use client";
mport Image from "next/image";
import React, { useState } from "react";
mport Image from "next/image";
import User from "../Components/Userdetails";
mport Image from "next/image";
import Nav from "../Components/out";
mport Image from "next/image";
import PaymentStatus from "../Components/Lastone";
mport Image from "next/image";
import Side from "../Components/Emailx";
mport Image from "next/image";
import { FaBars } from "react-icons/fa";
mport Image from "next/image";

mport Image from "next/image";
const UserManagement = () => {
mport Image from "next/image";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="flex flex-col md:flex-row min-h-screen">
mport Image from "next/image";
        <User />
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default UserManagement;