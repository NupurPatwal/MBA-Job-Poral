
mport Image from "next/image";
"use client";
mport Image from "next/image";
import axios from "axios";
mport Image from "next/image";
import React, { useEffect, useState } from "react";
mport Image from "next/image";
import toast from "react-hot-toast";
mport Image from "next/image";

mport Image from "next/image";
const ProfileForm = () => {
mport Image from "next/image";
  const [profilePic, setProfilePic] = useState(null);
mport Image from "next/image";
  const [resume, setResume] = useState(null);
mport Image from "next/image";
  const [userProfile, setUserProfile] = useState(null);
mport Image from "next/image";

mport Image from "next/image";
  const handleProfileChange = (event) => {
mport Image from "next/image";
    setProfilePic(event.target.files[0]);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const handleResumeChange = (event) => {
mport Image from "next/image";
    setResume(event.target.files[0]);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const handleUpload = (type) => {
mport Image from "next/image";
    if (type === "profile" && profilePic) {
mport Image from "next/image";
      alert(`Profile Picture Uploaded: ${profilePic.name}`);
mport Image from "next/image";
    } else if (type === "resume" && resume) {
mport Image from "next/image";
      alert(`Resume Uploaded: ${resume.name}`);
mport Image from "next/image";
    } else {
mport Image from "next/image";
      alert("Please select a file to upload.");
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
  useEffect(() => {
mport Image from "next/image";
    const fetchUserProfile = async () => {
mport Image from "next/image";
      const token = localStorage.getItem("authToken");
mport Image from "next/image";
      const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/getProfile`;
mport Image from "next/image";
      try {
mport Image from "next/image";
        const response = await axios.get(url, {
mport Image from "next/image";
          headers: { Authorization: `Bearer ${token}` },
mport Image from "next/image";
        });
mport Image from "next/image";
        if (response.data.success) {
mport Image from "next/image";
          setUserProfile(response.data.profile);
mport Image from "next/image";
          console.log(response.data.profile);
mport Image from "next/image";
        }
mport Image from "next/image";
      } catch (error) {
mport Image from "next/image";
        console.error("Error fetching profile:", error);
mport Image from "next/image";
      }
mport Image from "next/image";
    };
mport Image from "next/image";
    fetchUserProfile();
mport Image from "next/image";
  }, []);
mport Image from "next/image";

mport Image from "next/image";
  const inputImageHandler = (event) => {
mport Image from "next/image";
    const file = event.target.files[0];
mport Image from "next/image";

mport Image from "next/image";
    if (!file) {
mport Image from "next/image";
      toast.error("No file selected.");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";

mport Image from "next/image";
    // Allowed image file types
mport Image from "next/image";
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
mport Image from "next/image";

mport Image from "next/image";
    if (!allowedTypes.includes(file.type)) {
mport Image from "next/image";
      toast.error("Please upload a .jpg, .jpeg, or .png file.");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";

mport Image from "next/image";
    setResume(file);
mport Image from "next/image";
    toast.success("Image uploaded successfully.");
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-300 p-4">
mport Image from "next/image";
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
mport Image from "next/image";
        <form className="space-y-4">
mport Image from "next/image";
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
mport Image from "next/image";
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
mport Image from "next/image";
              <label className="text-black font-medium w-40 text-right">
mport Image from "next/image";
                First Name :
mport Image from "next/image";
              </label>
mport Image from "next/image";
              <input
mport Image from "next/image";
                readOnly
mport Image from "next/image";
                type="text"
mport Image from "next/image";
                value={capitalizeWords(userProfile?.firstName)}
mport Image from "next/image";
                className="p-2 w-full bg-white border rounded-full shadow-sm"
mport Image from "next/image";
              />
mport Image from "next/image";
            </div>
mport Image from "next/image";
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
mport Image from "next/image";
              <label className="text-black font-medium w-40 text-right">
mport Image from "next/image";
                Last Name :
mport Image from "next/image";
              </label>
mport Image from "next/image";
              <input
mport Image from "next/image";
                readOnly
mport Image from "next/image";
                type="text"
mport Image from "next/image";
                value={capitalizeWords(userProfile?.lastName)}
mport Image from "next/image";
                className="p-2 w-full bg-white border rounded-full shadow-sm"
mport Image from "next/image";
              />
mport Image from "next/image";
            </div>
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
mport Image from "next/image";
            {["Email ID", "Phone Number", "Date of Birth", "Gender"].map(
mport Image from "next/image";
              (label, index) => (
mport Image from "next/image";
                <div
mport Image from "next/image";
                  key={index}
mport Image from "next/image";
                  className="flex flex-col md:flex-row md:items-center md:space-x-4"
mport Image from "next/image";
                >
mport Image from "next/image";
                  <label className="text-black font-medium w-40 text-right">
mport Image from "next/image";
                    {label} :
mport Image from "next/image";
                  </label>
mport Image from "next/image";
                  {label === "Date of Birth" ? (
mport Image from "next/image";
                    <input
mport Image from "next/image";
                      type="date"
mport Image from "next/image";
                      value={
mport Image from "next/image";
                        userProfile?.dob
mport Image from "next/image";
                          ? new Date(userProfile.dob)
mport Image from "next/image";
                              .toISOString()
mport Image from "next/image";
                              .split("T")[0]
mport Image from "next/image";
                          : ""
mport Image from "next/image";
                      }
mport Image from "next/image";
                      readOnly
mport Image from "next/image";
                      className="p-2 w-full bg-white border rounded-full shadow-sm"
mport Image from "next/image";
                    />
mport Image from "next/image";
                  ) : label === "Gender" ? (
mport Image from "next/image";
                    <p className="p-2 w-full bg-white border rounded-full shadow-sm">
mport Image from "next/image";
                      {capitalizeWords(userProfile?.gender)}
mport Image from "next/image";
                    </p>
mport Image from "next/image";
                  ) : (
mport Image from "next/image";
                    <input
mport Image from "next/image";
                      type="text"
mport Image from "next/image";
                      value={
mport Image from "next/image";
                        label === "Email ID"
mport Image from "next/image";
                          ? userProfile?.email || ""
mport Image from "next/image";
                          : label === "Phone Number"
mport Image from "next/image";
                          ? userProfile?.phone || ""
mport Image from "next/image";
                          : ""
mport Image from "next/image";
                      }
mport Image from "next/image";
                      readOnly
mport Image from "next/image";
                      className="p-2 w-full bg-white border rounded-full shadow-sm"
mport Image from "next/image";
                    />
mport Image from "next/image";
                  )}
mport Image from "next/image";
                </div>
mport Image from "next/image";
              )
mport Image from "next/image";
            )}
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center space-x-4 mt-4">
mport Image from "next/image";
            <label className="text-black font-medium w-32">
mport Image from "next/image";
              Profile Picture :
mport Image from "next/image";
            </label>
mport Image from "next/image";
            <input
mport Image from "next/image";
              className="block w-full md:w-60 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
mport Image from "next/image";
              type="file"
mport Image from "next/image";
              id="resume"
mport Image from "next/image";
              name="resume"
mport Image from "next/image";
              accept="image/*" // Allow only image files
mport Image from "next/image";
              onChange={inputImageHandler}
mport Image from "next/image";
              required
mport Image from "next/image";
            />
mport Image from "next/image";

mport Image from "next/image";
            <button
mport Image from "next/image";
              type="button"
mport Image from "next/image";
              onClick={() => handleUpload("profile")}
mport Image from "next/image";
              className="bg-green-400 text-black px-4 py-2 rounded-md hover:bg-green-500 transition duration-300"
mport Image from "next/image";
            >
mport Image from "next/image";
              Upload
mport Image from "next/image";
            </button>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </form>
mport Image from "next/image";
        <hr className="my-6 border-gray-300" />
mport Image from "next/image";
        <h2 className="text-2xl font-bold text-center mb-6">
mport Image from "next/image";
          Education Details
mport Image from "next/image";
        </h2>
mport Image from "next/image";
        <form className="space-y-4">
mport Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
mport Image from "next/image";
            <label className="text-black font-medium w-40 text-right">
mport Image from "next/image";
              Highest Degree :
mport Image from "next/image";
            </label>
mport Image from "next/image";
            <input
mport Image from "next/image";
              readOnly
mport Image from "next/image";
              value={capitalizeWords(userProfile?.education?.highestDegree)}
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              className="p-2 w-full bg-white border rounded-full shadow-sm"
mport Image from "next/image";
            />
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
mport Image from "next/image";
            <label className="text-black font-medium w-40 text-right">
mport Image from "next/image";
              University :
mport Image from "next/image";
            </label>
mport Image from "next/image";
            <input
mport Image from "next/image";
              readOnly
mport Image from "next/image";
              value={capitalizeWords(userProfile?.education?.university)}
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              className="p-2 w-full bg-white border rounded-full shadow-sm"
mport Image from "next/image";
            />
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
mport Image from "next/image";
            <label className="text-black font-medium w-40 text-right">
mport Image from "next/image";
              Passing Year :
mport Image from "next/image";
            </label>
mport Image from "next/image";
            <input
mport Image from "next/image";
              readOnly
mport Image from "next/image";
              value={userProfile?.education?.passingYear}
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              className="p-2 w-full bg-white border rounded-full shadow-sm"
mport Image from "next/image";
            />
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
mport Image from "next/image";
            <label className="text-black font-medium w-40 text-right">
mport Image from "next/image";
              Skills :
mport Image from "next/image";
            </label>
mport Image from "next/image";
            <input
mport Image from "next/image";
              readOnly
mport Image from "next/image";
              value={userProfile?.education?.highestDegree}
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              className="p-2 w-full bg-white border rounded-full shadow-sm"
mport Image from "next/image";
            />
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
mport Image from "next/image";
            <label className="text-black font-medium w-40 text-right">
mport Image from "next/image";
              Experience :
mport Image from "next/image";
            </label>
mport Image from "next/image";
            <input
mport Image from "next/image";
              readOnly
mport Image from "next/image";
              value={userProfile?.education?.experience}
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              className="p-2 w-full bg-white border rounded-full shadow-sm"
mport Image from "next/image";
            />
mport Image from "next/image";
          </div>
mport Image from "next/image";
          {/* ))} */}
mport Image from "next/image";

mport Image from "next/image";
          <div className="flex flex-col md:flex-row md:items-center space-x-4 mt-4">
mport Image from "next/image";
            <label className="text-black font-medium w-32">
mport Image from "next/image";
              Upload Resume :
mport Image from "next/image";
            </label>
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="file"
mport Image from "next/image";
              onChange={handleResumeChange}
mport Image from "next/image";
              className="block w-full md:w-60 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
mport Image from "next/image";
            />
mport Image from "next/image";
            <button
mport Image from "next/image";
              type="button"
mport Image from "next/image";
              onClick={() => handleUpload("resume")}
mport Image from "next/image";
              className="bg-green-400 text-black px-4 py-2 rounded-md hover:bg-green-500 transition duration-300"
mport Image from "next/image";
            >
mport Image from "next/image";
              Upload
mport Image from "next/image";
            </button>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </form>
mport Image from "next/image";
      </div>
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default ProfileForm;
