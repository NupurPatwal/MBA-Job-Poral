"use client"; // Required for useRouter in Next.js
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminEmployerPage from "../Components/AdminOnlyComponents";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/AdminLogin");
    }
  }, [router]); // Added `router` to the dependency array

  return (
    <div>
      <AdminEmployerPage />
    </div>
  );
};

export default Page;
