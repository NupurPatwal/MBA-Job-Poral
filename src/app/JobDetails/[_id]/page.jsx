
import Image from "next/image";
"use client";
import Image from "next/image";
iimport React, { useEffect, useState } from "react";
import Image from "next/image";
iimport { FaHotel, FaClock, FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
iimport { MdWork } from "react-icons/md";
import Image from "next/image";
iimport Image from "next/image";
import Image from "next/image";
iimport Head from "next/head";
import Image from "next/image";
iimport { useParams } from "next/navigation";
import Image from "next/image";
iimport axios from "axios";
import Image from "next/image";
iimport { useRouter } from "next/navigation";
import Image from "next/image";
iimport toast from "react-hot-toast";
import Image from "next/image";
iimport Navbar from "@/app/Components/Navbar";
import Image from "next/image";

import Image from "next/image";
const JobDetailsPage = () => {
import Image from "next/image";
  const [formData, setFormData] = useState({
import Image from "next/image";
    fullName: "",
import Image from "next/image";
    email: "",
import Image from "next/image";
    phoneNumber: "",
import Image from "next/image";
    message: "",
import Image from "next/image";
  });
import Image from "next/image";
  const router = useRouter();
import Image from "next/image";
  const { _id } = useParams();
import Image from "next/image";
  const [specificJob, setSpecificJob] = useState(null);
import Image from "next/image";
  const [relatedJobs, setRelatedJobs] = useState(null);
import Image from "next/image";
  const [resume, setResume] = useState(null);
import Image from "next/image";

import Image from "next/image";
  const navigateToJobDetails = (id) => {
import Image from "next/image";
    router.push(`/JobDetails/${id}`);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const inputChangeHandler = (event) => {
import Image from "next/image";
    const { name, value } = event.target;
import Image from "next/image";
    setFormData((prev) => ({
import Image from "next/image";
      ...prev,
import Image from "next/image";
      [name]: value,
import Image from "next/image";
    }));
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  useEffect(() => {
import Image from "next/image";
    const fetchJobDetails = async () => {
import Image from "next/image";
      const baseUrl = process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL;
import Image from "next/image";
      const jobUrl = `${baseUrl}/api/v1/job/listJobById/${_id}`;
import Image from "next/image";
      const allJobsUrl = `${baseUrl}/api/v1/job/listAllJobs`;
import Image from "next/image";
      try {
import Image from "next/image";
        const jobResponse = await axios.get(jobUrl);
import Image from "next/image";
        if (!jobResponse.data.success) return;
import Image from "next/image";
        const jobData = jobResponse.data.job;
import Image from "next/image";
        setSpecificJob(jobData);
import Image from "next/image";
        const allJobsResponse = await axios.get(allJobsUrl);
import Image from "next/image";
        if (!allJobsResponse.data.success) return;
import Image from "next/image";
        const related = allJobsResponse.data.jobs.filter(
import Image from "next/image";
          (job) => job.category === jobData.category && job._id !== _id
import Image from "next/image";
        );
import Image from "next/image";
        setRelatedJobs(related);
import Image from "next/image";
      } catch (error) {
import Image from "next/image";
        console.error("Error fetching jobs:", error);
import Image from "next/image";
      }
import Image from "next/image";
    };
import Image from "next/image";

import Image from "next/image";
    fetchJobDetails();
import Image from "next/image";
  }, [_id]);
import Image from "next/image";

import Image from "next/image";
  const submitHandler = async (event) => {
import Image from "next/image";
    event.preventDefault();
import Image from "next/image";

import Image from "next/image";
    if (!formData.fullName) {
import Image from "next/image";
      toast.error("Name is required");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";
    if (!formData.email) {
import Image from "next/image";
      toast.error("Email is required");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";
    if (!formData.phoneNumber) {
import Image from "next/image";
      toast.error("Mobile Number is required");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";
    if (!formData.message) {
import Image from "next/image";
      toast.error("Message is required");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";

import Image from "next/image";
    const formDataToSend = new FormData(event.target);
import Image from "next/image";
    formDataToSend.append("access_key", process.env.NEXT_PUBLIC_FORM_ACCESS_KEY);
import Image from "next/image";
    try {
import Image from "next/image";
      const res = await fetch("https://api.web3forms.com/submit", {
import Image from "next/image";
        method: "POST",
import Image from "next/image";
        body: formDataToSend,
import Image from "next/image";
      });
import Image from "next/image";

import Image from "next/image";
      const data = await res.json();
import Image from "next/image";

import Image from "next/image";
      if (data.success) {
import Image from "next/image";
        toast.success("Thank you for inquiring us");
import Image from "next/image";
      }
import Image from "next/image";
    } catch (error) {
import Image from "next/image";
      console.error("Form submission error:", error);
import Image from "next/image";
    }
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const capitalizeWords = (str) => {
import Image from "next/image";
    if (!str) return "";
import Image from "next/image";
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const timeAgo = (timestamp) => {
import Image from "next/image";
    const now = new Date();
import Image from "next/image";
    const postedDate = new Date(timestamp);
import Image from "next/image";
    const diffInSeconds = Math.floor((now - postedDate) / 1000);
import Image from "next/image";
    if (diffInSeconds < 60) {
import Image from "next/image";
      return `${diffInSeconds} sec ago`;
import Image from "next/image";
    } else if (diffInSeconds < 3600) {
import Image from "next/image";
      return `${Math.floor(diffInSeconds / 60)} min ago`;
import Image from "next/image";
    } else if (diffInSeconds < 86400) {
import Image from "next/image";
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
import Image from "next/image";
    } else {
import Image from "next/image";
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
import Image from "next/image";
    }
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const inputImageHandler = (event) => {
import Image from "next/image";
    const file = event.target.files[0];
import Image from "next/image";
    if (!file) {
import Image from "next/image";
      toast.error("No file selected.");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";
    if (file.type !== "application/pdf") {
import Image from "next/image";
      toast.error("Please upload a PDF file.");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";
    setResume(file);
import Image from "next/image";
    toast.success("PDF uploaded successfully.");
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const applyThisJob = async () => {
import Image from "next/image";
    const token =
import Image from "next/image";
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
import Image from "next/image";
    if (!token) {
import Image from "next/image";
      toast.error("You are not logged in!");
import Image from "next/image";
      router.push("/Login");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";
    if (!resume) {
import Image from "next/image";
      toast.error("Please upload a resume.");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";
    const formData = new FormData();
import Image from "next/image";
    formData.append("jobId", specificJob._id);
import Image from "next/image";
    formData.append("resume", resume);
import Image from "next/image";
    const newURL = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/applications/applyForJob`;
import Image from "next/image";
    try {
import Image from "next/image";
      const response = await axios.post(newURL, formData, {
import Image from "next/image";
        headers: {
import Image from "next/image";
          Authorization: `Bearer ${token}`,
import Image from "next/image";
          "Content-Type": "multipart/form-data",
import Image from "next/image";
        },
import Image from "next/image";
      });
import Image from "next/image";

import Image from "next/image";
      if (response.data.success) {
import Image from "next/image";
        toast.success(response.data.message || "Job Applied Successfully");
import Image from "next/image";
      }
import Image from "next/image";
    } catch (error) {
import Image from "next/image";
      toast.error(error.response?.data?.message || "Server error");
import Image from "next/image";
    }
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <>
import Image from "next/image";
    <Navbar />
import Image from "next/image";
    <div>
import Image from "next/image";
      <div className="bg-gray-100 min-h-screen">
import Image from "next/image";
        <Head>
import Image from "next/image";
          <title>Job Details</title>
import Image from "next/image";
          <link
import Image from "next/image";
            rel="stylesheet"
import Image from "next/image";
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
import Image from "next/image";
          />
import Image from "next/image";
        </Head>
import Image from "next/image";
        <header className="bg-black text-white text-center py-4">
import Image from "next/image";
          <h1 className="text-3xl font-bold">Job Details</h1>
import Image from "next/image";
        </header>
import Image from "next/image";
        <main className="max-w-7xl mx-auto p-4">
import Image from "next/image";
          <div className="bg-white shadow-md rounded-lg p-6">
import Image from "next/image";
            <div className="flex flex-col lg:flex-row">
import Image from "next/image";
              <div className="lg:w-2/3">
import Image from "next/image";
                <div className="flex items-center mb-4">
import Image from "next/image";
                  <Image
import Image from "next/image";
                    src="/hrimg.png"
import Image from "next/image";
                    width={50}
import Image from "next/image";
                    height={50}
import Image from "next/image";
                    alt="Company Logo"
import Image from "next/image";
                    className="w-12 h-12 rounded-full mr-4"
import Image from "next/image";
                  />
import Image from "next/image";
                  <div>
import Image from "next/image";
                    <h2 className="text-2xl font-bold">
import Image from "next/image";
                      {capitalizeWords(specificJob?.jobTitle)}
import Image from "next/image";
                    </h2>
import Image from "next/image";
                    <p className="text-gray-600">
import Image from "next/image";
                      {capitalizeWords(specificJob?.company)}
import Image from "next/image";
                    </p>
import Image from "next/image";
                  </div>
import Image from "next/image";
                </div>
import Image from "next/image";
                <div className="flex items-center space-x-4">
import Image from "next/image";
                  <span className="text-gray-600 ml-4">
import Image from "next/image";
                    {capitalizeWords(specificJob?.category)}
import Image from "next/image";
                  </span>
import Image from "next/image";
                  <span className="text-gray-600 ml-4">
import Image from "next/image";
                    {capitalizeWords(specificJob?.jobType)}
import Image from "next/image";
                  </span>
import Image from "next/image";
                  {specificJob?.jobPackage ? (
import Image from "next/image";
                    <span className="text-gray-600">
import Image from "next/image";
                      ${specificJob?.jobPackage}
import Image from "next/image";
                    </span>
import Image from "next/image";
                  ) : null}
import Image from "next/image";
                  <span className="text-gray-600 ml-4">
import Image from "next/image";
                    {capitalizeWords(specificJob?.location)}
import Image from "next/image";
                  </span>
import Image from "next/image";
                  <button
import Image from "next/image";
                    className="bg-teal-700 text-white mr-2 px-4 py-0.5 rounded hover:bg-teal-800 transition duration-300"
import Image from "next/image";
                    onClick={applyThisJob}
import Image from "next/image";
                  >
import Image from "next/image";
                    Apply Job
import Image from "next/image";
                  </button>
import Image from "next/image";
                </div>
import Image from "next/image";
                <h3 className="text-xl font-bold mb-2">Job Description</h3>
import Image from "next/image";
                <p className="text-gray-700 mb-4">
import Image from "next/image";
                  {capitalizeWords(specificJob?.jobDescription)}
import Image from "next/image";
                </p>
import Image from "next/image";
                <h3 className="text-xl font-bold mb-2">Key Responsibilities</h3>
import Image from "next/image";
                <ul className="list-disc list-inside text-gray-700 mb-4">
import Image from "next/image";
                  {specificJob?.keyResponsibilities &&
import Image from "next/image";
                    specificJob.keyResponsibilities.map((item, index) => (
import Image from "next/image";
                      <li key={index}> {capitalizeWords(item)}</li>
import Image from "next/image";
                    ))}
import Image from "next/image";
                </ul>
import Image from "next/image";
                <h3 className="text-xl font-bold mb-2">
import Image from "next/image";
                  Preferred Skills and Requirements
import Image from "next/image";
                </h3>
import Image from "next/image";
                <ul className="list-disc list-inside text-gray-700 mb-4">
import Image from "next/image";
                  {specificJob?.skills &&
import Image from "next/image";
                    specificJob.skills.map((item, index) => (
import Image from "next/image";
                      <li key={index}> {capitalizeWords(item)}</li>
import Image from "next/image";
                    ))}
import Image from "next/image";
                </ul>
import Image from "next/image";
                <div className="mb-4">
import Image from "next/image";
                  <h3 className="text-xl font-bold mb-2">Tags:</h3>
import Image from "next/image";
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
import Image from "next/image";
                    {capitalizeWords(specificJob?.category)}
import Image from "next/image";
                  </span>
import Image from "next/image";
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
import Image from "next/image";
                    {capitalizeWords(specificJob?.jobType)}
import Image from "next/image";
                  </span>
import Image from "next/image";
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
import Image from "next/image";
                    {capitalizeWords(specificJob?.location)}
import Image from "next/image";
                  </span>
import Image from "next/image";
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
import Image from "next/image";
                    {capitalizeWords(specificJob?.experience)}
import Image from "next/image";
                  </span>
import Image from "next/image";
                </div>
import Image from "next/image";
                <div className="flex flex-col gap-10 items-center mb-6">
import Image from "next/image";
                  <span className="mr-2 text-xl font-semibold mb-5">
import Image from "next/image";
                    Job Information
import Image from "next/image";
                  </span>
import Image from "next/image";
                  <div className="flex justify-between items-center w-full">
import Image from "next/image";
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
import Image from "next/image";
                      {specificJob?.category && (
import Image from "next/image";
                        <div className="flex gap-3 items-center">
import Image from "next/image";
                          <FaHotel className="text-2xl text-[#309689]" />
import Image from "next/image";
                          <p className="text-gray-600 text-lg">
import Image from "next/image";
                            {capitalizeWords(specificJob.category)}
import Image from "next/image";
                          </p>
import Image from "next/image";
                        </div>
import Image from "next/image";
                      )}
import Image from "next/image";
                      {specificJob?.jobType && (
import Image from "next/image";
                        <div className="flex gap-3 items-center">
import Image from "next/image";
                          <FaClock className="text-2xl text-[#309689]" />
import Image from "next/image";
                          <p className="text-gray-600 text-lg">
import Image from "next/image";
                            {capitalizeWords(specificJob.jobType)}
import Image from "next/image";
                          </p>
import Image from "next/image";
                        </div>
import Image from "next/image";
                      )}
import Image from "next/image";
                      {specificJob?.location && (
import Image from "next/image";
                        <div className="flex gap-3 items-center">
import Image from "next/image";
                          <FaLocationArrow className="text-2xl text-[#309689]" />
import Image from "next/image";
                          <p className="text-gray-600 text-lg">
import Image from "next/image";
                            {capitalizeWords(specificJob.location)}
import Image from "next/image";
                          </p>
import Image from "next/image";
                        </div>
import Image from "next/image";
                      )}
import Image from "next/image";
                      {specificJob?.experience && (
import Image from "next/image";
                        <div className="flex gap-3 items-center">
import Image from "next/image";
                          <MdWork className="text-2xl text-[#309689]" />
import Image from "next/image";
                          <p className="text-gray-600 text-lg">
import Image from "next/image";
                            {specificJob.experience} experience
import Image from "next/image";
                          </p>
import Image from "next/image";
                        </div>
import Image from "next/image";
                      )}
import Image from "next/image";
                    </div>
import Image from "next/image";
                  </div>
import Image from "next/image";
                  <input
import Image from "next/image";
                    className="p-2 w-full border border-green-700 rounded"
import Image from "next/image";
                    type="file"
import Image from "next/image";
                    id="resume"
import Image from "next/image";
                    name="resume"
import Image from "next/image";
                    accept="application/pdf" // Only allow PDFs
import Image from "next/image";
                    onChange={inputImageHandler}
import Image from "next/image";
                    required
import Image from "next/image";
                  />
import Image from "next/image";
                </div>
import Image from "next/image";
              </div>
import Image from "next/image";
              <div className="lg:w-1/3 lg:pl-6">
import Image from "next/image";
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
import Image from "next/image";
                  <h3 className="text-xl font-bold mb-4">Job Overview</h3>
import Image from "next/image";
                  <ul className="text-gray-700">
import Image from "next/image";
                    <li className="mb-2">
import Image from "next/image";
                      {" "}
import Image from "next/image";
                      <strong>Job Title:</strong>{" "}
import Image from "next/image";
                      {capitalizeWords(specificJob?.jobTitle)}
import Image from "next/image";
                    </li>
import Image from "next/image";
                    <li className="mb-2">
import Image from "next/image";
                      <strong>Job Type:</strong>{" "}
import Image from "next/image";
                      {capitalizeWords(specificJob?.jobType)}
import Image from "next/image";
                    </li>
import Image from "next/image";
                    <li className="mb-2">
import Image from "next/image";
                      <strong>Category:</strong>{" "}
import Image from "next/image";
                      {capitalizeWords(specificJob?.category)}
import Image from "next/image";
                    </li>
import Image from "next/image";
                    <li className="mb-2">
import Image from "next/image";
                      <strong>Experience:</strong> {specificJob?.experience}
import Image from "next/image";
                    </li>
import Image from "next/image";
                    <li className="mb-2">
import Image from "next/image";
                      {specificJob?.jobPackage && (
import Image from "next/image";
                        <>
import Image from "next/image";
                          <strong>Offered Salary:</strong> $
import Image from "next/image";
                          {specificJob.jobPackage}
import Image from "next/image";
                        </>
import Image from "next/image";
                      )}
import Image from "next/image";
                    </li>
import Image from "next/image";
                    <li className="mb-2">
import Image from "next/image";
                      <strong>Location:</strong>{" "}
import Image from "next/image";
                      {capitalizeWords(specificJob?.location)}
import Image from "next/image";
                    </li>
import Image from "next/image";
                  </ul>
import Image from "next/image";
                  {/* <iframe
import Image from "next/image";
                    className="map"
import Image from "next/image";
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62239.35697276339!2d77.61550395!3d12.912139999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151c9d05f3c7%3A0x7b69aa7e2c0418cd!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1706301453151!5m2!1sen!2sin"
import Image from "next/image";
                    allowfullscreen
import Image from "next/image";
                    loading="lazy"
import Image from "next/image";
                  ></iframe> */}
import Image from "next/image";
                </div>
import Image from "next/image";
                <div className="bg-gray-100 p-4 rounded-lg">
import Image from "next/image";
                  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
import Image from "next/image";
                  <form onSubmit={submitHandler}>
import Image from "next/image";
                    <input
import Image from "next/image";
                      name="fullName"
import Image from "next/image";
                      type="text"
import Image from "next/image";
                      placeholder="Full name"
import Image from "next/image";
                      value={formData.fullName}
import Image from "next/image";
                      onChange={inputChangeHandler}
import Image from "next/image";
                      className="w-full mb-2 p-2 border rounded-md"
import Image from "next/image";
                    />
import Image from "next/image";
                    <input
import Image from "next/image";
                      name="email"
import Image from "next/image";
                      type="email"
import Image from "next/image";
                      placeholder="Email Address"
import Image from "next/image";
                      value={formData.email}
import Image from "next/image";
                      onChange={inputChangeHandler}
import Image from "next/image";
                      className="w-full mb-2 p-2 border rounded-md"
import Image from "next/image";
                    />
import Image from "next/image";
                    <input
import Image from "next/image";
                      type="text"
import Image from "next/image";
                      name="phoneNumber"
import Image from "next/image";
                      placeholder="Phone Number"
import Image from "next/image";
                      value={formData.phoneNumber}
import Image from "next/image";
                      onChange={inputChangeHandler}
import Image from "next/image";
                      className="w-full mb-2 p-2 border rounded-md"
import Image from "next/image";
                    />
import Image from "next/image";
                    <textarea
import Image from "next/image";
                      name="message"
import Image from "next/image";
                      placeholder="Your Message"
import Image from "next/image";
                      value={formData.message}
import Image from "next/image";
                      onChange={inputChangeHandler}
import Image from "next/image";
                      className="w-full mb-2 p-2 border rounded-md"
import Image from "next/image";
                    ></textarea>
import Image from "next/image";
                    <button
import Image from "next/image";
                      type="submit"
import Image from "next/image";
                      className="bg-teal-700 text-white px-4 py-2 rounded-md w-full"
import Image from "next/image";
                    >
import Image from "next/image";
                      Send Message
import Image from "next/image";
                    </button>
import Image from "next/image";
                  </form>
import Image from "next/image";
                </div>
import Image from "next/image";
              </div>
import Image from "next/image";
            </div>
import Image from "next/image";
          </div>
import Image from "next/image";
          {relatedJobs && relatedJobs.length > 0 && (
import Image from "next/image";
            <div className="mt-8">
import Image from "next/image";
              <h2 className="text-2xl font-bold mb-4">Related Jobs</h2>
import Image from "next/image";
              <p className="text-gray-600 mb-6">
import Image from "next/image";
                Latest Job Openings Matching Your Skills
import Image from "next/image";
              </p>
import Image from "next/image";
              <div className="bg-white shadow-md rounded-lg p-6 mb-4">
import Image from "next/image";
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
import Image from "next/image";
                  {relatedJobs?.map((item) => (
import Image from "next/image";
                    <div
import Image from "next/image";
                      className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm"
import Image from "next/image";
                      key={item._id}
import Image from "next/image";
                    >
import Image from "next/image";
                      <Image
import Image from "next/image";
                        src="/operation.jpg"
import Image from "next/image";
                        width={50}
import Image from "next/image";
                        height={50}
import Image from "next/image";
                        alt="Company Logo"
import Image from "next/image";
                        className="w-12 h-12 rounded-full mr-4"
import Image from "next/image";
                      />
import Image from "next/image";
                      <div className="flex-1 flex-col">
import Image from "next/image";
                        <div className="flex justify-between w-full">
import Image from "next/image";
                          <h3 className="text-xl font-bold">
import Image from "next/image";
                            {capitalizeWords(item?.jobTitle)}
import Image from "next/image";
                          </h3>
import Image from "next/image";
                          <p
import Image from "next/image";
                            onClick={() => navigateToJobDetails(item._id)}
import Image from "next/image";
                            className="cursor-pointer text-white bg-[#309689] px-4 py-2 rounded-2xl"
import Image from "next/image";
                          >
import Image from "next/image";
                            Job Details
import Image from "next/image";
                          </p>
import Image from "next/image";
                        </div>
import Image from "next/image";
                        <p className="text-gray-600">
import Image from "next/image";
                          {capitalizeWords(item?.company)}
import Image from "next/image";
                        </p>
import Image from "next/image";
                        <p className="text-gray-500 text-sm">
import Image from "next/image";
                          {timeAgo(item?.createdAt)}
import Image from "next/image";
                        </p>
import Image from "next/image";
                      </div>
import Image from "next/image";
                    </div>
import Image from "next/image";
                  ))}
import Image from "next/image";
                </div>
import Image from "next/image";
              </div>
import Image from "next/image";
            </div>
import Image from "next/image";
          )}
import Image from "next/image";
        </main>
import Image from "next/image";
      </div>
import Image from "next/image";
    </div>
import Image from "next/image";
    </>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default JobDetailsPage;
