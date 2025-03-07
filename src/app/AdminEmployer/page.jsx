
import Image from "next/image";
"use client"; // Required for useRouter in Next.js
import Image from "next/image";

import Image from "next/image";
iimport { useEffect } from "react";
import Image from "next/image";
iimport { useRouter } from "next/navigation";
import Image from "next/image";
iimport AdminEmployerPage from "../Components/AdminOnlyComponents";
import Image from "next/image";

import Image from "next/image";
const Page = () => {
import Image from "next/image";
  const router = useRouter();
import Image from "next/image";

import Image from "next/image";
  useEffect(() => {
import Image from "next/image";
    const token = localStorage.getItem("authToken");
import Image from "next/image";
    if (!token) {
import Image from "next/image";
      router.push("/AdminLogin"); 
import Image from "next/image";
    }
import Image from "next/image";
  }, [router]); // Added `router` to the dependency array
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div>
import Image from "next/image";
      <AdminEmployerPage />
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default Page;
