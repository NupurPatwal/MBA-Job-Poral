
mport Image from "next/image";
"use client";
mport Image from "next/image";
import React, { useEffect, useState } from "react";
mport Image from "next/image";
import { FaHotel, FaClock, FaLocationArrow } from "react-icons/fa";
mport Image from "next/image";
import { MdWork } from "react-icons/md";
mport Image from "next/image";
import Image from "next/image";
mport Image from "next/image";
import Head from "next/head";
mport Image from "next/image";
import { useParams } from "next/navigation";
mport Image from "next/image";
import axios from "axios";
mport Image from "next/image";
import { useRouter } from "next/navigation";
mport Image from "next/image";
import toast from "react-hot-toast";
mport Image from "next/image";
import Navbar from "@/app/Components/Navbar";
mport Image from "next/image";

mport Image from "next/image";
const JobDetailsPage = () => {
mport Image from "next/image";
  const [formData, setFormData] = useState({
mport Image from "next/image";
    fullName: "",
mport Image from "next/image";
    email: "",
mport Image from "next/image";
    phoneNumber: "",
mport Image from "next/image";
    message: "",
mport Image from "next/image";
  });
mport Image from "next/image";
  const router = useRouter();
mport Image from "next/image";
  const { _id } = useParams();
mport Image from "next/image";
  const [specificJob, setSpecificJob] = useState(null);
mport Image from "next/image";
  const [relatedJobs, setRelatedJobs] = useState(null);
mport Image from "next/image";
  const [resume, setResume] = useState(null);
mport Image from "next/image";

mport Image from "next/image";
  const navigateToJobDetails = (id) => {
mport Image from "next/image";
    router.push(`/JobDetails/${id}`);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const inputChangeHandler = (event) => {
mport Image from "next/image";
    const { name, value } = event.target;
mport Image from "next/image";
    setFormData((prev) => ({
mport Image from "next/image";
      ...prev,
mport Image from "next/image";
      [name]: value,
mport Image from "next/image";
    }));
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  useEffect(() => {
mport Image from "next/image";
    const fetchJobDetails = async () => {
mport Image from "next/image";
      const baseUrl = process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL;
mport Image from "next/image";
      const jobUrl = `${baseUrl}/api/v1/job/listJobById/${_id}`;
mport Image from "next/image";
      const allJobsUrl = `${baseUrl}/api/v1/job/listAllJobs`;
mport Image from "next/image";
      try {
mport Image from "next/image";
        const jobResponse = await axios.get(jobUrl);
mport Image from "next/image";
        if (!jobResponse.data.success) return;
mport Image from "next/image";
        const jobData = jobResponse.data.job;
mport Image from "next/image";
        setSpecificJob(jobData);
mport Image from "next/image";
        const allJobsResponse = await axios.get(allJobsUrl);
mport Image from "next/image";
        if (!allJobsResponse.data.success) return;
mport Image from "next/image";
        const related = allJobsResponse.data.jobs.filter(
mport Image from "next/image";
          (job) => job.category === jobData.category && job._id !== _id
mport Image from "next/image";
        );
mport Image from "next/image";
        setRelatedJobs(related);
mport Image from "next/image";
      } catch (error) {
mport Image from "next/image";
        console.error("Error fetching jobs:", error);
mport Image from "next/image";
      }
mport Image from "next/image";
    };
mport Image from "next/image";

mport Image from "next/image";
    fetchJobDetails();
mport Image from "next/image";
  }, [_id]);
mport Image from "next/image";

mport Image from "next/image";
  const submitHandler = async (event) => {
mport Image from "next/image";
    event.preventDefault();
mport Image from "next/image";

mport Image from "next/image";
    if (!formData.fullName) {
mport Image from "next/image";
      toast.error("Name is required");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    if (!formData.email) {
mport Image from "next/image";
      toast.error("Email is required");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    if (!formData.phoneNumber) {
mport Image from "next/image";
      toast.error("Mobile Number is required");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    if (!formData.message) {
mport Image from "next/image";
      toast.error("Message is required");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";

mport Image from "next/image";
    const formDataToSend = new FormData(event.target);
mport Image from "next/image";
    formDataToSend.append("access_key", process.env.NEXT_PUBLIC_FORM_ACCESS_KEY);
mport Image from "next/image";
    try {
mport Image from "next/image";
      const res = await fetch("https://api.web3forms.com/submit", {
mport Image from "next/image";
        method: "POST",
mport Image from "next/image";
        body: formDataToSend,
mport Image from "next/image";
      });
mport Image from "next/image";

mport Image from "next/image";
      const data = await res.json();
mport Image from "next/image";

mport Image from "next/image";
      if (data.success) {
mport Image from "next/image";
        toast.success("Thank you for inquiring us");
mport Image from "next/image";
      }
mport Image from "next/image";
    } catch (error) {
mport Image from "next/image";
      console.error("Form submission error:", error);
mport Image from "next/image";
    }
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const capitalizeWords = (str) => {
mport Image from "next/image";
    if (!str) return "";
mport Image from "next/image";
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const timeAgo = (timestamp) => {
mport Image from "next/image";
    const now = new Date();
mport Image from "next/image";
    const postedDate = new Date(timestamp);
mport Image from "next/image";
    const diffInSeconds = Math.floor((now - postedDate) / 1000);
mport Image from "next/image";
    if (diffInSeconds < 60) {
mport Image from "next/image";
      return `${diffInSeconds} sec ago`;
mport Image from "next/image";
    } else if (diffInSeconds < 3600) {
mport Image from "next/image";
      return `${Math.floor(diffInSeconds / 60)} min ago`;
mport Image from "next/image";
    } else if (diffInSeconds < 86400) {
mport Image from "next/image";
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
mport Image from "next/image";
    } else {
mport Image from "next/image";
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
mport Image from "next/image";
    }
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const inputImageHandler = (event) => {
mport Image from "next/image";
    const file = event.target.files[0];
mport Image from "next/image";
    if (!file) {
mport Image from "next/image";
      toast.error("No file selected.");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    if (file.type !== "application/pdf") {
mport Image from "next/image";
      toast.error("Please upload a PDF file.");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    setResume(file);
mport Image from "next/image";
    toast.success("PDF uploaded successfully.");
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const applyThisJob = async () => {
mport Image from "next/image";
    const token =
mport Image from "next/image";
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
mport Image from "next/image";
    if (!token) {
mport Image from "next/image";
      toast.error("You are not logged in!");
mport Image from "next/image";
      router.push("/Login");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    if (!resume) {
mport Image from "next/image";
      toast.error("Please upload a resume.");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";
    const formData = new FormData();
mport Image from "next/image";
    formData.append("jobId", specificJob._id);
mport Image from "next/image";
    formData.append("resume", resume);
mport Image from "next/image";
    const newURL = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/applications/applyForJob`;
mport Image from "next/image";
    try {
mport Image from "next/image";
      const response = await axios.post(newURL, formData, {
mport Image from "next/image";
        headers: {
mport Image from "next/image";
          Authorization: `Bearer ${token}`,
mport Image from "next/image";
          "Content-Type": "multipart/form-data",
mport Image from "next/image";
        },
mport Image from "next/image";
      });
mport Image from "next/image";

mport Image from "next/image";
      if (response.data.success) {
mport Image from "next/image";
        toast.success(response.data.message || "Job Applied Successfully");
mport Image from "next/image";
      }
mport Image from "next/image";
    } catch (error) {
mport Image from "next/image";
      toast.error(error.response?.data?.message || "Server error");
mport Image from "next/image";
    }
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <>
mport Image from "next/image";
    <Navbar />
mport Image from "next/image";
    <div>
mport Image from "next/image";
      <div className="bg-gray-100 min-h-screen">
mport Image from "next/image";
        <Head>
mport Image from "next/image";
          <title>Job Details</title>
mport Image from "next/image";
          <link
mport Image from "next/image";
            rel="stylesheet"
mport Image from "next/image";
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
mport Image from "next/image";
          />
mport Image from "next/image";
        </Head>
mport Image from "next/image";
        <header className="bg-black text-white text-center py-4">
mport Image from "next/image";
          <h1 className="text-3xl font-bold">Job Details</h1>
mport Image from "next/image";
        </header>
mport Image from "next/image";
        <main className="max-w-7xl mx-auto p-4">
mport Image from "next/image";
          <div className="bg-white shadow-md rounded-lg p-6">
mport Image from "next/image";
            <div className="flex flex-col lg:flex-row">
mport Image from "next/image";
              <div className="lg:w-2/3">
mport Image from "next/image";
                <div className="flex items-center mb-4">
mport Image from "next/image";
                  <Image
mport Image from "next/image";
                    src="/hrimg.png"
mport Image from "next/image";
                    width={50}
mport Image from "next/image";
                    height={50}
mport Image from "next/image";
                    alt="Company Logo"
mport Image from "next/image";
                    className="w-12 h-12 rounded-full mr-4"
mport Image from "next/image";
                  />
mport Image from "next/image";
                  <div>
mport Image from "next/image";
                    <h2 className="text-2xl font-bold">
mport Image from "next/image";
                      {capitalizeWords(specificJob?.jobTitle)}
mport Image from "next/image";
                    </h2>
mport Image from "next/image";
                    <p className="text-gray-600">
mport Image from "next/image";
                      {capitalizeWords(specificJob?.company)}
mport Image from "next/image";
                    </p>
mport Image from "next/image";
                  </div>
mport Image from "next/image";
                </div>
mport Image from "next/image";
                <div className="flex items-center space-x-4">
mport Image from "next/image";
                  <span className="text-gray-600 ml-4">
mport Image from "next/image";
                    {capitalizeWords(specificJob?.category)}
mport Image from "next/image";
                  </span>
mport Image from "next/image";
                  <span className="text-gray-600 ml-4">
mport Image from "next/image";
                    {capitalizeWords(specificJob?.jobType)}
mport Image from "next/image";
                  </span>
mport Image from "next/image";
                  {specificJob?.jobPackage ? (
mport Image from "next/image";
                    <span className="text-gray-600">
mport Image from "next/image";
                      ${specificJob?.jobPackage}
mport Image from "next/image";
                    </span>
mport Image from "next/image";
                  ) : null}
mport Image from "next/image";
                  <span className="text-gray-600 ml-4">
mport Image from "next/image";
                    {capitalizeWords(specificJob?.location)}
mport Image from "next/image";
                  </span>
mport Image from "next/image";
                  <button
mport Image from "next/image";
                    className="bg-teal-700 text-white mr-2 px-4 py-0.5 rounded hover:bg-teal-800 transition duration-300"
mport Image from "next/image";
                    onClick={applyThisJob}
mport Image from "next/image";
                  >
mport Image from "next/image";
                    Apply Job
mport Image from "next/image";
                  </button>
mport Image from "next/image";
                </div>
mport Image from "next/image";
                <h3 className="text-xl font-bold mb-2">Job Description</h3>
mport Image from "next/image";
                <p className="text-gray-700 mb-4">
mport Image from "next/image";
                  {capitalizeWords(specificJob?.jobDescription)}
mport Image from "next/image";
                </p>
mport Image from "next/image";
                <h3 className="text-xl font-bold mb-2">Key Responsibilities</h3>
mport Image from "next/image";
                <ul className="list-disc list-inside text-gray-700 mb-4">
mport Image from "next/image";
                  {specificJob?.keyResponsibilities &&
mport Image from "next/image";
                    specificJob.keyResponsibilities.map((item, index) => (
mport Image from "next/image";
                      <li key={index}> {capitalizeWords(item)}</li>
mport Image from "next/image";
                    ))}
mport Image from "next/image";
                </ul>
mport Image from "next/image";
                <h3 className="text-xl font-bold mb-2">
mport Image from "next/image";
                  Preferred Skills and Requirements
mport Image from "next/image";
                </h3>
mport Image from "next/image";
                <ul className="list-disc list-inside text-gray-700 mb-4">
mport Image from "next/image";
                  {specificJob?.skills &&
mport Image from "next/image";
                    specificJob.skills.map((item, index) => (
mport Image from "next/image";
                      <li key={index}> {capitalizeWords(item)}</li>
mport Image from "next/image";
                    ))}
mport Image from "next/image";
                </ul>
mport Image from "next/image";
                <div className="mb-4">
mport Image from "next/image";
                  <h3 className="text-xl font-bold mb-2">Tags:</h3>
mport Image from "next/image";
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
mport Image from "next/image";
                    {capitalizeWords(specificJob?.category)}
mport Image from "next/image";
                  </span>
mport Image from "next/image";
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
mport Image from "next/image";
                    {capitalizeWords(specificJob?.jobType)}
mport Image from "next/image";
                  </span>
mport Image from "next/image";
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
mport Image from "next/image";
                    {capitalizeWords(specificJob?.location)}
mport Image from "next/image";
                  </span>
mport Image from "next/image";
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
mport Image from "next/image";
                    {capitalizeWords(specificJob?.experience)}
mport Image from "next/image";
                  </span>
mport Image from "next/image";
                </div>
mport Image from "next/image";
                <div className="flex flex-col gap-10 items-center mb-6">
mport Image from "next/image";
                  <span className="mr-2 text-xl font-semibold mb-5">
mport Image from "next/image";
                    Job Information
mport Image from "next/image";
                  </span>
mport Image from "next/image";
                  <div className="flex justify-between items-center w-full">
mport Image from "next/image";
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
mport Image from "next/image";
                      {specificJob?.category && (
mport Image from "next/image";
                        <div className="flex gap-3 items-center">
mport Image from "next/image";
                          <FaHotel className="text-2xl text-[#309689]" />
mport Image from "next/image";
                          <p className="text-gray-600 text-lg">
mport Image from "next/image";
                            {capitalizeWords(specificJob.category)}
mport Image from "next/image";
                          </p>
mport Image from "next/image";
                        </div>
mport Image from "next/image";
                      )}
mport Image from "next/image";
                      {specificJob?.jobType && (
mport Image from "next/image";
                        <div className="flex gap-3 items-center">
mport Image from "next/image";
                          <FaClock className="text-2xl text-[#309689]" />
mport Image from "next/image";
                          <p className="text-gray-600 text-lg">
mport Image from "next/image";
                            {capitalizeWords(specificJob.jobType)}
mport Image from "next/image";
                          </p>
mport Image from "next/image";
                        </div>
mport Image from "next/image";
                      )}
mport Image from "next/image";
                      {specificJob?.location && (
mport Image from "next/image";
                        <div className="flex gap-3 items-center">
mport Image from "next/image";
                          <FaLocationArrow className="text-2xl text-[#309689]" />
mport Image from "next/image";
                          <p className="text-gray-600 text-lg">
mport Image from "next/image";
                            {capitalizeWords(specificJob.location)}
mport Image from "next/image";
                          </p>
mport Image from "next/image";
                        </div>
mport Image from "next/image";
                      )}
mport Image from "next/image";
                      {specificJob?.experience && (
mport Image from "next/image";
                        <div className="flex gap-3 items-center">
mport Image from "next/image";
                          <MdWork className="text-2xl text-[#309689]" />
mport Image from "next/image";
                          <p className="text-gray-600 text-lg">
mport Image from "next/image";
                            {specificJob.experience} experience
mport Image from "next/image";
                          </p>
mport Image from "next/image";
                        </div>
mport Image from "next/image";
                      )}
mport Image from "next/image";
                    </div>
mport Image from "next/image";
                  </div>
mport Image from "next/image";
                  <input
mport Image from "next/image";
                    className="p-2 w-full border border-green-700 rounded"
mport Image from "next/image";
                    type="file"
mport Image from "next/image";
                    id="resume"
mport Image from "next/image";
                    name="resume"
mport Image from "next/image";
                    accept="application/pdf" // Only allow PDFs
mport Image from "next/image";
                    onChange={inputImageHandler}
mport Image from "next/image";
                    required
mport Image from "next/image";
                  />
mport Image from "next/image";
                </div>
mport Image from "next/image";
              </div>
mport Image from "next/image";
              <div className="lg:w-1/3 lg:pl-6">
mport Image from "next/image";
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
mport Image from "next/image";
                  <h3 className="text-xl font-bold mb-4">Job Overview</h3>
mport Image from "next/image";
                  <ul className="text-gray-700">
mport Image from "next/image";
                    <li className="mb-2">
mport Image from "next/image";
                      {" "}
mport Image from "next/image";
                      <strong>Job Title:</strong>{" "}
mport Image from "next/image";
                      {capitalizeWords(specificJob?.jobTitle)}
mport Image from "next/image";
                    </li>
mport Image from "next/image";
                    <li className="mb-2">
mport Image from "next/image";
                      <strong>Job Type:</strong>{" "}
mport Image from "next/image";
                      {capitalizeWords(specificJob?.jobType)}
mport Image from "next/image";
                    </li>
mport Image from "next/image";
                    <li className="mb-2">
mport Image from "next/image";
                      <strong>Category:</strong>{" "}
mport Image from "next/image";
                      {capitalizeWords(specificJob?.category)}
mport Image from "next/image";
                    </li>
mport Image from "next/image";
                    <li className="mb-2">
mport Image from "next/image";
                      <strong>Experience:</strong> {specificJob?.experience}
mport Image from "next/image";
                    </li>
mport Image from "next/image";
                    <li className="mb-2">
mport Image from "next/image";
                      {specificJob?.jobPackage && (
mport Image from "next/image";
                        <>
mport Image from "next/image";
                          <strong>Offered Salary:</strong> $
mport Image from "next/image";
                          {specificJob.jobPackage}
mport Image from "next/image";
                        </>
mport Image from "next/image";
                      )}
mport Image from "next/image";
                    </li>
mport Image from "next/image";
                    <li className="mb-2">
mport Image from "next/image";
                      <strong>Location:</strong>{" "}
mport Image from "next/image";
                      {capitalizeWords(specificJob?.location)}
mport Image from "next/image";
                    </li>
mport Image from "next/image";
                  </ul>
mport Image from "next/image";
                  {/* <iframe
mport Image from "next/image";
                    className="map"
mport Image from "next/image";
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62239.35697276339!2d77.61550395!3d12.912139999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151c9d05f3c7%3A0x7b69aa7e2c0418cd!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1706301453151!5m2!1sen!2sin"
mport Image from "next/image";
                    allowfullscreen
mport Image from "next/image";
                    loading="lazy"
mport Image from "next/image";
                  ></iframe> */}
mport Image from "next/image";
                </div>
mport Image from "next/image";
                <div className="bg-gray-100 p-4 rounded-lg">
mport Image from "next/image";
                  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
mport Image from "next/image";
                  <form onSubmit={submitHandler}>
mport Image from "next/image";
                    <input
mport Image from "next/image";
                      name="fullName"
mport Image from "next/image";
                      type="text"
mport Image from "next/image";
                      placeholder="Full name"
mport Image from "next/image";
                      value={formData.fullName}
mport Image from "next/image";
                      onChange={inputChangeHandler}
mport Image from "next/image";
                      className="w-full mb-2 p-2 border rounded-md"
mport Image from "next/image";
                    />
mport Image from "next/image";
                    <input
mport Image from "next/image";
                      name="email"
mport Image from "next/image";
                      type="email"
mport Image from "next/image";
                      placeholder="Email Address"
mport Image from "next/image";
                      value={formData.email}
mport Image from "next/image";
                      onChange={inputChangeHandler}
mport Image from "next/image";
                      className="w-full mb-2 p-2 border rounded-md"
mport Image from "next/image";
                    />
mport Image from "next/image";
                    <input
mport Image from "next/image";
                      type="text"
mport Image from "next/image";
                      name="phoneNumber"
mport Image from "next/image";
                      placeholder="Phone Number"
mport Image from "next/image";
                      value={formData.phoneNumber}
mport Image from "next/image";
                      onChange={inputChangeHandler}
mport Image from "next/image";
                      className="w-full mb-2 p-2 border rounded-md"
mport Image from "next/image";
                    />
mport Image from "next/image";
                    <textarea
mport Image from "next/image";
                      name="message"
mport Image from "next/image";
                      placeholder="Your Message"
mport Image from "next/image";
                      value={formData.message}
mport Image from "next/image";
                      onChange={inputChangeHandler}
mport Image from "next/image";
                      className="w-full mb-2 p-2 border rounded-md"
mport Image from "next/image";
                    ></textarea>
mport Image from "next/image";
                    <button
mport Image from "next/image";
                      type="submit"
mport Image from "next/image";
                      className="bg-teal-700 text-white px-4 py-2 rounded-md w-full"
mport Image from "next/image";
                    >
mport Image from "next/image";
                      Send Message
mport Image from "next/image";
                    </button>
mport Image from "next/image";
                  </form>
mport Image from "next/image";
                </div>
mport Image from "next/image";
              </div>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          </div>
mport Image from "next/image";
          {relatedJobs && relatedJobs.length > 0 && (
mport Image from "next/image";
            <div className="mt-8">
mport Image from "next/image";
              <h2 className="text-2xl font-bold mb-4">Related Jobs</h2>
mport Image from "next/image";
              <p className="text-gray-600 mb-6">
mport Image from "next/image";
                Latest Job Openings Matching Your Skills
mport Image from "next/image";
              </p>
mport Image from "next/image";
              <div className="bg-white shadow-md rounded-lg p-6 mb-4">
mport Image from "next/image";
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
mport Image from "next/image";
                  {relatedJobs?.map((item) => (
mport Image from "next/image";
                    <div
mport Image from "next/image";
                      className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm"
mport Image from "next/image";
                      key={item._id}
mport Image from "next/image";
                    >
mport Image from "next/image";
                      <Image
mport Image from "next/image";
                        src="/operation.jpg"
mport Image from "next/image";
                        width={50}
mport Image from "next/image";
                        height={50}
mport Image from "next/image";
                        alt="Company Logo"
mport Image from "next/image";
                        className="w-12 h-12 rounded-full mr-4"
mport Image from "next/image";
                      />
mport Image from "next/image";
                      <div className="flex-1 flex-col">
mport Image from "next/image";
                        <div className="flex justify-between w-full">
mport Image from "next/image";
                          <h3 className="text-xl font-bold">
mport Image from "next/image";
                            {capitalizeWords(item?.jobTitle)}
mport Image from "next/image";
                          </h3>
mport Image from "next/image";
                          <p
mport Image from "next/image";
                            onClick={() => navigateToJobDetails(item._id)}
mport Image from "next/image";
                            className="cursor-pointer text-white bg-[#309689] px-4 py-2 rounded-2xl"
mport Image from "next/image";
                          >
mport Image from "next/image";
                            Job Details
mport Image from "next/image";
                          </p>
mport Image from "next/image";
                        </div>
mport Image from "next/image";
                        <p className="text-gray-600">
mport Image from "next/image";
                          {capitalizeWords(item?.company)}
mport Image from "next/image";
                        </p>
mport Image from "next/image";
                        <p className="text-gray-500 text-sm">
mport Image from "next/image";
                          {timeAgo(item?.createdAt)}
mport Image from "next/image";
                        </p>
mport Image from "next/image";
                      </div>
mport Image from "next/image";
                    </div>
mport Image from "next/image";
                  ))}
mport Image from "next/image";
                </div>
mport Image from "next/image";
              </div>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          )}
mport Image from "next/image";
        </main>
mport Image from "next/image";
      </div>
mport Image from "next/image";
    </div>
mport Image from "next/image";
    </>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default JobDetailsPage;
