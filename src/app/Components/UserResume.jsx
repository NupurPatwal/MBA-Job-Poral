
import Image from "next/image";
"use client";
import Image from "next/image";
iimport { useState, useRef } from "react";
import Image from "next/image";
iimport { FaEdit, FaTrash, FaPlus, FaDownload } from "react-icons/fa";
import Image from "next/image";

import Image from "next/image";
const UserResume = () => {
import Image from "next/image";
  const [name, setName] = useState("John Doe");
import Image from "next/image";
  const [email, setEmail] = useState("useremail@email.com");
import Image from "next/image";
  const [phone, setPhone] = useState("+91 9876543200");
import Image from "next/image";
  const [location, setLocation] = useState("Delhi");
import Image from "next/image";

import Image from "next/image";
  const [education, setEducation] = useState([
import Image from "next/image";
    { degree: "B.Tech, Computer Science", institute: "Institute Name", year: "2020 - 2024" },
import Image from "next/image";
  ]);
import Image from "next/image";

import Image from "next/image";
  const [skills, setSkills] = useState(["JavaScript", "React.js", "Next.js", "Tailwind CSS"]);
import Image from "next/image";
  const [experience, setExperience] = useState([]);
import Image from "next/image";
  const [projects, setProjects] = useState([]);
import Image from "next/image";

import Image from "next/image";
  const [newEntry, setNewEntry] = useState(""); // Input for adding new skills, experience, projects
import Image from "next/image";
  const [newEducation, setNewEducation] = useState({ degree: "", institute: "", year: "" }); // Input for adding new education
import Image from "next/image";

import Image from "next/image";
  const resumeRef = useRef();
import Image from "next/image";

import Image from "next/image";
  const handleDownload = () => {
import Image from "next/image";
    if (resumeRef.current) {
import Image from "next/image";
      html2pdf().from(resumeRef.current).save("Resume.pdf");
import Image from "next/image";
    }
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const addEducation = () => {
import Image from "next/image";
    if (newEducation.degree && newEducation.institute && newEducation.year) {
import Image from "next/image";
      setEducation([...education, newEducation]);
import Image from "next/image";
      setNewEducation({ degree: "", institute: "", year: "" });
import Image from "next/image";
    }
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const addItem = (stateUpdater, value) => {
import Image from "next/image";
    if (value.trim()) {
import Image from "next/image";
      stateUpdater((prev) => [...prev, value]);
import Image from "next/image";
      setNewEntry("");
import Image from "next/image";
    }
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const removeItem = (stateUpdater, index) => {
import Image from "next/image";
    stateUpdater((prev) => prev.filter((_, i) => i !== index));
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="min-h-screen flex justify-center bg-gray-100 p-6">
import Image from "next/image";
      <div className="w-full max-w-3xl bg-white shadow-lg p-6 rounded-md" ref={resumeRef}>
import Image from "next/image";
        <h1 className="text-3xl font-bold text-black">Internshala Resume</h1>
import Image from "next/image";

import Image from "next/image";
        {/* Personal Info Section */}
import Image from "next/image";
        <div className="mt-4 border-b pb-4">
import Image from "next/image";
          <input
import Image from "next/image";
            className="text-2xl font-bold text-black border-b w-full focus:outline-none"
import Image from "next/image";
            value={name}
import Image from "next/image";
            onChange={(e) => setName(e.target.value)}
import Image from "next/image";
          />
import Image from "next/image";
          <p className="text-gray-700">{email} | {phone} | {location}</p>
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Education Section */}
import Image from "next/image";
        <div className="mt-4">
import Image from "next/image";
          <h2 className="text-xl font-bold text-black">Education</h2>
import Image from "next/image";
          {education.map((edu, index) => (
import Image from "next/image";
            <div key={index} className="flex justify-between items-center mt-2">
import Image from "next/image";
              <p className="text-gray-700">{edu.degree} - {edu.institute} ({edu.year})</p>
import Image from "next/image";
              <button onClick={() => removeItem(setEducation, index)} className="text-red-500"><FaTrash /></button>
import Image from "next/image";
            </div>
import Image from "next/image";
          ))}
import Image from "next/image";
          {/* Add Education Inputs */}
import Image from "next/image";
          <div className="mt-2">
import Image from "next/image";
            <input
import Image from "next/image";
              type="text"
import Image from "next/image";
              placeholder="Degree"
import Image from "next/image";
              value={newEducation.degree}
import Image from "next/image";
              onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
import Image from "next/image";
              className="border p-2 mr-2"
import Image from "next/image";
            />
import Image from "next/image";
            <input
import Image from "next/image";
              type="text"
import Image from "next/image";
              placeholder="Institute"
import Image from "next/image";
              value={newEducation.institute}
import Image from "next/image";
              onChange={(e) => setNewEducation({ ...newEducation, institute: e.target.value })}
import Image from "next/image";
              className="border p-2 mr-2"
import Image from "next/image";
            />
import Image from "next/image";
            <input
import Image from "next/image";
              type="text"
import Image from "next/image";
              placeholder="Year"
import Image from "next/image";
              value={newEducation.year}
import Image from "next/image";
              onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
import Image from "next/image";
              className="border p-2"
import Image from "next/image";
            />
import Image from "next/image";
            <button onClick={addEducation} className="text-blue-500 ml-2"><FaPlus /></button>
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Skills Section */}
import Image from "next/image";
        <div className="mt-4">
import Image from "next/image";
          <h2 className="text-xl font-bold text-black">Skills</h2>
import Image from "next/image";
          <div className="flex flex-wrap gap-2">
import Image from "next/image";
            {skills.map((skill, index) => (
import Image from "next/image";
              <div key={index} className="bg-gray-200 text-black px-3 py-1 rounded flex items-center">
import Image from "next/image";
                {skill}
import Image from "next/image";
                <button onClick={() => removeItem(setSkills, index)} className="ml-2 text-red-500"><FaTrash /></button>
import Image from "next/image";
              </div>
import Image from "next/image";
            ))}
import Image from "next/image";
          </div>
import Image from "next/image";
          {/* Add Skill Input */}
import Image from "next/image";
          <div className="mt-2">
import Image from "next/image";
            <input
import Image from "next/image";
              type="text"
import Image from "next/image";
              placeholder="Add Skill"
import Image from "next/image";
              value={newEntry}
import Image from "next/image";
              onChange={(e) => setNewEntry(e.target.value)}
import Image from "next/image";
              className="border p-2"
import Image from "next/image";
            />
import Image from "next/image";
            <button onClick={() => addItem(setSkills, newEntry)} className="text-blue-500 ml-2"><FaPlus /></button>
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Experience Section */}
import Image from "next/image";
        <div className="mt-4">
import Image from "next/image";
          <h2 className="text-xl font-bold text-black">Work Experience</h2>
import Image from "next/image";
          {experience.length > 0 ? experience.map((exp, index) => (
import Image from "next/image";
            <div key={index} className="flex justify-between items-center mt-2">
import Image from "next/image";
              <p className="text-gray-700">{exp}</p>
import Image from "next/image";
              <button onClick={() => removeItem(setExperience, index)} className="text-red-500"><FaTrash /></button>
import Image from "next/image";
            </div>
import Image from "next/image";
          )) : <p className="text-gray-500">No experience added.</p>}
import Image from "next/image";
          <div className="mt-2">
import Image from "next/image";
            <input
import Image from "next/image";
              type="text"
import Image from "next/image";
              placeholder="Add Experience"
import Image from "next/image";
              value={newEntry}
import Image from "next/image";
              onChange={(e) => setNewEntry(e.target.value)}
import Image from "next/image";
              className="border p-2"
import Image from "next/image";
            />
import Image from "next/image";
            <button onClick={() => addItem(setExperience, newEntry)} className="text-blue-500 ml-2"><FaPlus /></button>
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Projects Section */}
import Image from "next/image";
        <div className="mt-4">
import Image from "next/image";
          <h2 className="text-xl font-bold text-black">Projects</h2>
import Image from "next/image";
          {projects.length > 0 ? projects.map((proj, index) => (
import Image from "next/image";
            <div key={index} className="flex justify-between items-center mt-2">
import Image from "next/image";
              <p className="text-gray-700">{proj}</p>
import Image from "next/image";
              <button onClick={() => removeItem(setProjects, index)} className="text-red-500"><FaTrash /></button>
import Image from "next/image";
            </div>
import Image from "next/image";
          )) : <p className="text-gray-500">No projects added.</p>}
import Image from "next/image";
          <div className="mt-2">
import Image from "next/image";
            <input
import Image from "next/image";
              type="text"
import Image from "next/image";
              placeholder="Add Project"
import Image from "next/image";
              value={newEntry}
import Image from "next/image";
              onChange={(e) => setNewEntry(e.target.value)}
import Image from "next/image";
              className="border p-2"
import Image from "next/image";
            />
import Image from "next/image";
            <button onClick={() => addItem(setProjects, newEntry)} className="text-blue-500 ml-2"><FaPlus /></button>
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Download Button */}
import Image from "next/image";
        <button onClick={handleDownload} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded flex items-center">
import Image from "next/image";
          <FaDownload className="mr-2" /> Download Resume
import Image from "next/image";
        </button>
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
export default UserResume;
