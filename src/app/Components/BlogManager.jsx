
mport Image from "next/image";
"use client";
mport Image from "next/image";

mport Image from "next/image";
import { useState } from "react";
mport Image from "next/image";

mport Image from "next/image";
export default function BlogManager() {
mport Image from "next/image";
  const [searchTerm, setSearchTerm] = useState("");
mport Image from "next/image";
  const [blogs, setBlogs] = useState([
mport Image from "next/image";
    { id: 1, title: "Resume Tips for Freshers", category: "Resume Tip" },
mport Image from "next/image";
    { id: 2, title: "Top 5 Interview Questions", category: "Interview Preparation" },
mport Image from "next/image";
    { id: 3, title: "Resume Formatting Tricks", category: "Resume Tip" },
mport Image from "next/image";
  ]);
mport Image from "next/image";

mport Image from "next/image";
  const handleDelete = (id) => {
mport Image from "next/image";
    setBlogs(blogs.filter((blog) => blog.id !== id));
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const handleEdit = (blog) => {
mport Image from "next/image";
    alert(`Editing blog: ${blog.title}`);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const filteredBlogs = blogs.filter(
mport Image from "next/image";
    (blog) =>
mport Image from "next/image";
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
mport Image from "next/image";
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
mport Image from "next/image";
  );
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="p-6 md:p-8 bg-gray-100 rounded-lg">
mport Image from "next/image";
      <h2 className="text-center text-xl font-bold text-teal-700 mb-6">
mport Image from "next/image";
        Manage Existing Blogs
mport Image from "next/image";
      </h2>
mport Image from "next/image";

mport Image from "next/image";
      {/* Search Bar */}
mport Image from "next/image";
      <div className="mb-6">
mport Image from "next/image";
        <input
mport Image from "next/image";
          type="text"
mport Image from "next/image";
          placeholder="Search by title or category..."
mport Image from "next/image";
          className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
mport Image from "next/image";
          value={searchTerm}
mport Image from "next/image";
          onChange={(e) => setSearchTerm(e.target.value)}
mport Image from "next/image";
        />
mport Image from "next/image";
      </div>
mport Image from "next/image";

mport Image from "next/image";
      {/* Blogs List */}
mport Image from "next/image";
      <div className="bg-white p-6 rounded-lg shadow">
mport Image from "next/image";
        <h3 className="font-semibold text-gray-700 mb-4 text-lg">Blog List</h3>
mport Image from "next/image";

mport Image from "next/image";
        <div className="space-y-4">
mport Image from "next/image";
          {filteredBlogs.length > 0 ? (
mport Image from "next/image";
            filteredBlogs.map((blog) => (
mport Image from "next/image";
              <div
mport Image from "next/image";
                key={blog.id}
mport Image from "next/image";
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
mport Image from "next/image";
              >
mport Image from "next/image";
                <div>
mport Image from "next/image";
                  <p className="font-medium text-gray-900">{blog.title}</p>
mport Image from "next/image";
                  <p className="text-sm text-gray-500">{blog.category}</p>
mport Image from "next/image";
                </div>
mport Image from "next/image";
                <div className="flex space-x-3">
mport Image from "next/image";
                  <button
mport Image from "next/image";
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
mport Image from "next/image";
                    onClick={() => handleEdit(blog)}
mport Image from "next/image";
                  >
mport Image from "next/image";
                    Edit
mport Image from "next/image";
                  </button>
mport Image from "next/image";
                  <button
mport Image from "next/image";
                    className="text-red-600 hover:text-red-800 font-medium text-sm"
mport Image from "next/image";
                    onClick={() => handleDelete(blog.id)}
mport Image from "next/image";
                  >
mport Image from "next/image";
                    Delete
mport Image from "next/image";
                  </button>
mport Image from "next/image";
                </div>
mport Image from "next/image";
              </div>
mport Image from "next/image";
            ))
mport Image from "next/image";
          ) : (
mport Image from "next/image";
            <p className="text-gray-500 text-sm text-center">No blogs found.</p>
mport Image from "next/image";
          )}
mport Image from "next/image";
        </div>
mport Image from "next/image";
      </div>
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
}
