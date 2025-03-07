
mport Image from "next/image";
"use client";
mport Image from "next/image";
import { useState, useRef } from "react";
mport Image from "next/image";
import { FaEdit, FaTrash, FaPlus, FaDownload } from "react-icons/fa";
mport Image from "next/image";

mport Image from "next/image";
const UserResume = () => {
mport Image from "next/image";
  const [name, setName] = useState("John Doe");
mport Image from "next/image";
  const [email, setEmail] = useState("useremail@email.com");
mport Image from "next/image";
  const [phone, setPhone] = useState("+91 9876543200");
mport Image from "next/image";
  const [location, setLocation] = useState("Delhi");
mport Image from "next/image";

mport Image from "next/image";
  const [education, setEducation] = useState([
mport Image from "next/image";
    { degree: "B.Tech, Computer Science", institute: "Institute Name", year: "2020 - 2024" },
mport Image from "next/image";
  ]);
mport Image from "next/image";

mport Image from "next/image";
  const [skills, setSkills] = useState(["JavaScript", "React.js", "Next.js", "Tailwind CSS"]);
mport Image from "next/image";
  const [experience, setExperience] = useState([]);
mport Image from "next/image";
  const [projects, setProjects] = useState([]);
mport Image from "next/image";

mport Image from "next/image";
  const [newEntry, setNewEntry] = useState(""); // Input for adding new skills, experience, projects
mport Image from "next/image";
  const [newEducation, setNewEducation] = useState({ degree: "", institute: "", year: "" }); // Input for adding new education
mport Image from "next/image";

mport Image from "next/image";
  const resumeRef = useRef();
mport Image from "next/image";

mport Image from "next/image";
  const handleDownload = () => {
mport Image from "next/image";
    if (resumeRef.current) {
mport Image from "next/image";
      html2pdf().from(resumeRef.current).save("Resume.pdf");
mport Image from "next/image";
    }
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const addEducation = () => {
mport Image from "next/image";
    if (newEducation.degree && newEducation.institute && newEducation.year) {
mport Image from "next/image";
      setEducation([...education, newEducation]);
mport Image from "next/image";
      setNewEducation({ degree: "", institute: "", year: "" });
mport Image from "next/image";
    }
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const addItem = (stateUpdater, value) => {
mport Image from "next/image";
    if (value.trim()) {
mport Image from "next/image";
      stateUpdater((prev) => [...prev, value]);
mport Image from "next/image";
      setNewEntry("");
mport Image from "next/image";
    }
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const removeItem = (stateUpdater, index) => {
mport Image from "next/image";
    stateUpdater((prev) => prev.filter((_, i) => i !== index));
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="min-h-screen flex justify-center bg-gray-100 p-6">
mport Image from "next/image";
      <div className="w-full max-w-3xl bg-white shadow-lg p-6 rounded-md" ref={resumeRef}>
mport Image from "next/image";
        <h1 className="text-3xl font-bold text-black">Internshala Resume</h1>
mport Image from "next/image";

mport Image from "next/image";
        {/* Personal Info Section */}
mport Image from "next/image";
        <div className="mt-4 border-b pb-4">
mport Image from "next/image";
          <input
mport Image from "next/image";
            className="text-2xl font-bold text-black border-b w-full focus:outline-none"
mport Image from "next/image";
            value={name}
mport Image from "next/image";
            onChange={(e) => setName(e.target.value)}
mport Image from "next/image";
          />
mport Image from "next/image";
          <p className="text-gray-700">{email} | {phone} | {location}</p>
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Education Section */}
mport Image from "next/image";
        <div className="mt-4">
mport Image from "next/image";
          <h2 className="text-xl font-bold text-black">Education</h2>
mport Image from "next/image";
          {education.map((edu, index) => (
mport Image from "next/image";
            <div key={index} className="flex justify-between items-center mt-2">
mport Image from "next/image";
              <p className="text-gray-700">{edu.degree} - {edu.institute} ({edu.year})</p>
mport Image from "next/image";
              <button onClick={() => removeItem(setEducation, index)} className="text-red-500"><FaTrash /></button>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          ))}
mport Image from "next/image";
          {/* Add Education Inputs */}
mport Image from "next/image";
          <div className="mt-2">
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              placeholder="Degree"
mport Image from "next/image";
              value={newEducation.degree}
mport Image from "next/image";
              onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
mport Image from "next/image";
              className="border p-2 mr-2"
mport Image from "next/image";
            />
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              placeholder="Institute"
mport Image from "next/image";
              value={newEducation.institute}
mport Image from "next/image";
              onChange={(e) => setNewEducation({ ...newEducation, institute: e.target.value })}
mport Image from "next/image";
              className="border p-2 mr-2"
mport Image from "next/image";
            />
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              placeholder="Year"
mport Image from "next/image";
              value={newEducation.year}
mport Image from "next/image";
              onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
mport Image from "next/image";
              className="border p-2"
mport Image from "next/image";
            />
mport Image from "next/image";
            <button onClick={addEducation} className="text-blue-500 ml-2"><FaPlus /></button>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Skills Section */}
mport Image from "next/image";
        <div className="mt-4">
mport Image from "next/image";
          <h2 className="text-xl font-bold text-black">Skills</h2>
mport Image from "next/image";
          <div className="flex flex-wrap gap-2">
mport Image from "next/image";
            {skills.map((skill, index) => (
mport Image from "next/image";
              <div key={index} className="bg-gray-200 text-black px-3 py-1 rounded flex items-center">
mport Image from "next/image";
                {skill}
mport Image from "next/image";
                <button onClick={() => removeItem(setSkills, index)} className="ml-2 text-red-500"><FaTrash /></button>
mport Image from "next/image";
              </div>
mport Image from "next/image";
            ))}
mport Image from "next/image";
          </div>
mport Image from "next/image";
          {/* Add Skill Input */}
mport Image from "next/image";
          <div className="mt-2">
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              placeholder="Add Skill"
mport Image from "next/image";
              value={newEntry}
mport Image from "next/image";
              onChange={(e) => setNewEntry(e.target.value)}
mport Image from "next/image";
              className="border p-2"
mport Image from "next/image";
            />
mport Image from "next/image";
            <button onClick={() => addItem(setSkills, newEntry)} className="text-blue-500 ml-2"><FaPlus /></button>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Experience Section */}
mport Image from "next/image";
        <div className="mt-4">
mport Image from "next/image";
          <h2 className="text-xl font-bold text-black">Work Experience</h2>
mport Image from "next/image";
          {experience.length > 0 ? experience.map((exp, index) => (
mport Image from "next/image";
            <div key={index} className="flex justify-between items-center mt-2">
mport Image from "next/image";
              <p className="text-gray-700">{exp}</p>
mport Image from "next/image";
              <button onClick={() => removeItem(setExperience, index)} className="text-red-500"><FaTrash /></button>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          )) : <p className="text-gray-500">No experience added.</p>}
mport Image from "next/image";
          <div className="mt-2">
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              placeholder="Add Experience"
mport Image from "next/image";
              value={newEntry}
mport Image from "next/image";
              onChange={(e) => setNewEntry(e.target.value)}
mport Image from "next/image";
              className="border p-2"
mport Image from "next/image";
            />
mport Image from "next/image";
            <button onClick={() => addItem(setExperience, newEntry)} className="text-blue-500 ml-2"><FaPlus /></button>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Projects Section */}
mport Image from "next/image";
        <div className="mt-4">
mport Image from "next/image";
          <h2 className="text-xl font-bold text-black">Projects</h2>
mport Image from "next/image";
          {projects.length > 0 ? projects.map((proj, index) => (
mport Image from "next/image";
            <div key={index} className="flex justify-between items-center mt-2">
mport Image from "next/image";
              <p className="text-gray-700">{proj}</p>
mport Image from "next/image";
              <button onClick={() => removeItem(setProjects, index)} className="text-red-500"><FaTrash /></button>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          )) : <p className="text-gray-500">No projects added.</p>}
mport Image from "next/image";
          <div className="mt-2">
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              placeholder="Add Project"
mport Image from "next/image";
              value={newEntry}
mport Image from "next/image";
              onChange={(e) => setNewEntry(e.target.value)}
mport Image from "next/image";
              className="border p-2"
mport Image from "next/image";
            />
mport Image from "next/image";
            <button onClick={() => addItem(setProjects, newEntry)} className="text-blue-500 ml-2"><FaPlus /></button>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Download Button */}
mport Image from "next/image";
        <button onClick={handleDownload} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded flex items-center">
mport Image from "next/image";
          <FaDownload className="mr-2" /> Download Resume
mport Image from "next/image";
        </button>
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
export default UserResume;
