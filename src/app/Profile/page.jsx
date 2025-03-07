
import Image from "next/image";
"use client";
import Image from "next/image";
iimport axios from "axios";
import Image from "next/image";
iimport React, { useEffect, useState } from "react";
import Image from "next/image";
iimport toast from "react-hot-toast";
import Image from "next/image";

import Image from "next/image";
const ProfileForm = () => {
import Image from "next/image";
  const [profilePic, setProfilePic] = useState(null);
import Image from "next/image";
  const [resume, setResume] = useState(null);
import Image from "next/image";
  const [userProfile, setUserProfile] = useState(null);
import Image from "next/image";

import Image from "next/image";
  const handleProfileChange = (event) => {
import Image from "next/image";
    setProfilePic(event.target.files[0]);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const handleResumeChange = (event) => {
import Image from "next/image";
    setResume(event.target.files[0]);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const handleUpload = (type) => {
import Image from "next/image";
    if (type === "profile" && profilePic) {
import Image from "next/image";
      alert(`Profile Picture Uploaded: ${profilePic.name}`);
import Image from "next/image";
    } else if (type === "resume" && resume) {
import Image from "next/image";
      alert(`Resume Uploaded: ${resume.name}`);
import Image from "next/image";
    } else {
import Image from "next/image";
      alert("Please select a file to upload.");
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
  useEffect(() => {
import Image from "next/image";
    const fetchUserProfile = async () => {
import Image from "next/image";
      const token = localStorage.getItem("authToken");
import Image from "next/image";
      const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/getProfile`;
import Image from "next/image";
      try {
import Image from "next/image";
        const response = await axios.get(url, {
import Image from "next/image";
          headers: { Authorization: `Bearer ${token}` },
import Image from "next/image";
        });
import Image from "next/image";
        if (response.data.success) {
import Image from "next/image";
          setUserProfile(response.data.profile);
import Image from "next/image";
          console.log(response.data.profile);
import Image from "next/image";
        }
import Image from "next/image";
      } catch (error) {
import Image from "next/image";
        console.error("Error fetching profile:", error);
import Image from "next/image";
      }
import Image from "next/image";
    };
import Image from "next/image";
    fetchUserProfile();
import Image from "next/image";
  }, []);
import Image from "next/image";

import Image from "next/image";
  const inputImageHandler = (event) => {
import Image from "next/image";
    const file = event.target.files[0];
import Image from "next/image";

import Image from "next/image";
    if (!file) {
import Image from "next/image";
      toast.error("No file selected.");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";

import Image from "next/image";
    // Allowed image file types
import Image from "next/image";
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
import Image from "next/image";

import Image from "next/image";
    if (!allowedTypes.includes(file.type)) {
import Image from "next/image";
      toast.error("Please upload a .jpg, .jpeg, or .png file.");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";

import Image from "next/image";
    setResume(file);
import Image from "next/image";
    toast.success("Image uploaded successfully.");
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-300 p-4">
import Image from "next/image";
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
import Image from "next/image";
        <form className="space-y-4">
import Image from "next/image";
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
import Image from "next/image";
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
import Image from "next/image";
              <label className="text-black font-medium w-40 text-right">
import Image from "next/image";
                First Name :
import Image from "next/image";
              </label>
import Image from "next/image";
              <input
import Image from "next/image";
                readOnly
import Image from "next/image";
                type="text"
import Image from "next/image";
                value={capitalizeWords(userProfile?.firstName)}
import Image from "next/image";
                className="p-2 w-full bg-white border rounded-full shadow-sm"
import Image from "next/image";
              />
import Image from "next/image";
            </div>
import Image from "next/image";
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
import Image from "next/image";
              <label className="text-black font-medium w-40 text-right">
import Image from "next/image";
                Last Name :
import Image from "next/image";
              </label>
import Image from "next/image";
              <input
import Image from "next/image";
                readOnly
import Image from "next/image";
                type="text"
import Image from "next/image";
                value={capitalizeWords(userProfile?.lastName)}
import Image from "next/image";
                className="p-2 w-full bg-white border rounded-full shadow-sm"
import Image from "next/image";
              />
import Image from "next/image";
            </div>
import Image from "next/image";
          </div>
import Image from "next/image";

import Image from "next/image";
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
import Image from "next/image";
            {["Email ID", "Phone Number", "Date of Birth", "Gender"].map(
import Image from "next/image";
              (label, index) => (
import Image from "next/image";
                <div
import Image from "next/image";
                  key={index}
import Image from "next/image";
                  className="flex flex-col md:flex-row md:items-center md:space-x-4"
import Image from "next/image";
                >
import Image from "next/image";
                  <label className="text-black font-medium w-40 text-right">
import Image from "next/image";
                    {label} :
import Image from "next/image";
                  </label>
import Image from "next/image";
                  {label === "Date of Birth" ? (
import Image from "next/image";
                    <input
import Image from "next/image";
                      type="date"
import Image from "next/image";
                      value={
import Image from "next/image";
                        userProfile?.dob
import Image from "next/image";
                          ? new Date(userProfile.dob)
import Image from "next/image";
                              .toISOString()
import Image from "next/image";
                              .split("T")[0]
import Image from "next/image";
                          : ""
import Image from "next/image";
                      }
import Image from "next/image";
                      readOnly
import Image from "next/image";
                      className="p-2 w-full bg-white border rounded-full shadow-sm"
import Image from "next/image";
                    />
import Image from "next/image";
                  ) : label === "Gender" ? (
import Image from "next/image";
                    <p className="p-2 w-full bg-white border rounded-full shadow-sm">
import Image from "next/image";
                      {capitalizeWords(userProfile?.gender)}
import Image from "next/image";
                    </p>
import Image from "next/image";
                  ) : (
import Image from "next/image";
                    <input
import Image from "next/image";
                      type="text"
import Image from "next/image";
                      value={
import Image from "next/image";
                        label === "Email ID"
import Image from "next/image";
                          ? userProfile?.email || ""
import Image from "next/image";
                          : label === "Phone Number"
import Image from "next/image";
                          ? userProfile?.phone || ""
import Image from "next/image";
                          : ""
import Image from "next/image";
                      }
import Image from "next/image";
                      readOnly
import Image from "next/image";
                      className="p-2 w-full bg-white border rounded-full shadow-sm"
import Image from "next/image";
                    />
import Image from "next/image";
                  )}
import Image from "next/image";
                </div>
import Image from "next/image";
              )
import Image from "next/image";
            )}
import Image from "next/image";
          </div>
import Image from "next/image";

import Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center space-x-4 mt-4">
import Image from "next/image";
            <label className="text-black font-medium w-32">
import Image from "next/image";
              Profile Picture :
import Image from "next/image";
            </label>
import Image from "next/image";
            <input
import Image from "next/image";
              className="block w-full md:w-60 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
import Image from "next/image";
              type="file"
import Image from "next/image";
              id="resume"
import Image from "next/image";
              name="resume"
import Image from "next/image";
              accept="image/*" // Allow only image files
import Image from "next/image";
              onChange={inputImageHandler}
import Image from "next/image";
              required
import Image from "next/image";
            />
import Image from "next/image";

import Image from "next/image";
            <button
import Image from "next/image";
              type="button"
import Image from "next/image";
              onClick={() => handleUpload("profile")}
import Image from "next/image";
              className="bg-green-400 text-black px-4 py-2 rounded-md hover:bg-green-500 transition duration-300"
import Image from "next/image";
            >
import Image from "next/image";
              Upload
import Image from "next/image";
            </button>
import Image from "next/image";
          </div>
import Image from "next/image";
        </form>
import Image from "next/image";
        <hr className="my-6 border-gray-300" />
import Image from "next/image";
        <h2 className="text-2xl font-bold text-center mb-6">
import Image from "next/image";
          Education Details
import Image from "next/image";
        </h2>
import Image from "next/image";
        <form className="space-y-4">
import Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
import Image from "next/image";
            <label className="text-black font-medium w-40 text-right">
import Image from "next/image";
              Highest Degree :
import Image from "next/image";
            </label>
import Image from "next/image";
            <input
import Image from "next/image";
              readOnly
import Image from "next/image";
              value={capitalizeWords(userProfile?.education?.highestDegree)}
import Image from "next/image";
              type="text"
import Image from "next/image";
              className="p-2 w-full bg-white border rounded-full shadow-sm"
import Image from "next/image";
            />
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
import Image from "next/image";
            <label className="text-black font-medium w-40 text-right">
import Image from "next/image";
              University :
import Image from "next/image";
            </label>
import Image from "next/image";
            <input
import Image from "next/image";
              readOnly
import Image from "next/image";
              value={capitalizeWords(userProfile?.education?.university)}
import Image from "next/image";
              type="text"
import Image from "next/image";
              className="p-2 w-full bg-white border rounded-full shadow-sm"
import Image from "next/image";
            />
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
import Image from "next/image";
            <label className="text-black font-medium w-40 text-right">
import Image from "next/image";
              Passing Year :
import Image from "next/image";
            </label>
import Image from "next/image";
            <input
import Image from "next/image";
              readOnly
import Image from "next/image";
              value={userProfile?.education?.passingYear}
import Image from "next/image";
              type="text"
import Image from "next/image";
              className="p-2 w-full bg-white border rounded-full shadow-sm"
import Image from "next/image";
            />
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
import Image from "next/image";
            <label className="text-black font-medium w-40 text-right">
import Image from "next/image";
              Skills :
import Image from "next/image";
            </label>
import Image from "next/image";
            <input
import Image from "next/image";
              readOnly
import Image from "next/image";
              value={userProfile?.education?.highestDegree}
import Image from "next/image";
              type="text"
import Image from "next/image";
              className="p-2 w-full bg-white border rounded-full shadow-sm"
import Image from "next/image";
            />
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
import Image from "next/image";
            <label className="text-black font-medium w-40 text-right">
import Image from "next/image";
              Experience :
import Image from "next/image";
            </label>
import Image from "next/image";
            <input
import Image from "next/image";
              readOnly
import Image from "next/image";
              value={userProfile?.education?.experience}
import Image from "next/image";
              type="text"
import Image from "next/image";
              className="p-2 w-full bg-white border rounded-full shadow-sm"
import Image from "next/image";
            />
import Image from "next/image";
          </div>
import Image from "next/image";
          {/* ))} */}
import Image from "next/image";

import Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center space-x-4 mt-4">
import Image from "next/image";
            <label className="text-black font-medium w-32">
import Image from "next/image";
              Upload Resume :
import Image from "next/image";
            </label>
import Image from "next/image";
            <input
import Image from "next/image";
              type="file"
import Image from "next/image";
              onChange={handleResumeChange}
import Image from "next/image";
              className="block w-full md:w-60 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
import Image from "next/image";
            />
import Image from "next/image";
            <button
import Image from "next/image";
              type="button"
import Image from "next/image";
              onClick={() => handleUpload("resume")}
import Image from "next/image";
              className="bg-green-400 text-black px-4 py-2 rounded-md hover:bg-green-500 transition duration-300"
import Image from "next/image";
            >
import Image from "next/image";
              Upload
import Image from "next/image";
            </button>
import Image from "next/image";
          </div>
import Image from "next/image";
        </form>
import Image from "next/image";
      </div>
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default ProfileForm;
