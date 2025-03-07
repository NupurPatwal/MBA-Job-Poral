
mport Image from "next/image";
"use client"; // Required for useRouter in Next.js
mport Image from "next/image";

mport Image from "next/image";
import { useEffect } from "react";
mport Image from "next/image";
import { useRouter } from "next/navigation";
mport Image from "next/image";
import AdminEmployerPage from "../Components/AdminOnlyComponents";
mport Image from "next/image";

mport Image from "next/image";
const Page = () => {
mport Image from "next/image";
  const router = useRouter();
mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    const token = localStorage.getItem("authToken");
mport Image from "next/image";
    if (!token) {
mport Image from "next/image";
      router.push("/AdminLogin"); 
mport Image from "next/image";
    }
mport Image from "next/image";
  }, [router]); // Added `router` to the dependency array
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div>
mport Image from "next/image";
      <AdminEmployerPage />
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default Page;
