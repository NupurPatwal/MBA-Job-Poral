
import Image from "next/image";
"use client";
import Image from "next/image";

import Image from "next/image";
iimport { useState } from "react";
import Image from "next/image";

import Image from "next/image";
export default function BlogManager() {
import Image from "next/image";
  const [searchTerm, setSearchTerm] = useState("");
import Image from "next/image";
  const [blogs, setBlogs] = useState([
import Image from "next/image";
    { id: 1, title: "Resume Tips for Freshers", category: "Resume Tip" },
import Image from "next/image";
    { id: 2, title: "Top 5 Interview Questions", category: "Interview Preparation" },
import Image from "next/image";
    { id: 3, title: "Resume Formatting Tricks", category: "Resume Tip" },
import Image from "next/image";
  ]);
import Image from "next/image";

import Image from "next/image";
  const handleDelete = (id) => {
import Image from "next/image";
    setBlogs(blogs.filter((blog) => blog.id !== id));
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const handleEdit = (blog) => {
import Image from "next/image";
    alert(`Editing blog: ${blog.title}`);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const filteredBlogs = blogs.filter(
import Image from "next/image";
    (blog) =>
import Image from "next/image";
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
import Image from "next/image";
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
import Image from "next/image";
  );
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="p-6 md:p-8 bg-gray-100 rounded-lg">
import Image from "next/image";
      <h2 className="text-center text-xl font-bold text-teal-700 mb-6">
import Image from "next/image";
        Manage Existing Blogs
import Image from "next/image";
      </h2>
import Image from "next/image";

import Image from "next/image";
      {/* Search Bar */}
import Image from "next/image";
      <div className="mb-6">
import Image from "next/image";
        <input
import Image from "next/image";
          type="text"
import Image from "next/image";
          placeholder="Search by title or category..."
import Image from "next/image";
          className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
import Image from "next/image";
          value={searchTerm}
import Image from "next/image";
          onChange={(e) => setSearchTerm(e.target.value)}
import Image from "next/image";
        />
import Image from "next/image";
      </div>
import Image from "next/image";

import Image from "next/image";
      {/* Blogs List */}
import Image from "next/image";
      <div className="bg-white p-6 rounded-lg shadow">
import Image from "next/image";
        <h3 className="font-semibold text-gray-700 mb-4 text-lg">Blog List</h3>
import Image from "next/image";

import Image from "next/image";
        <div className="space-y-4">
import Image from "next/image";
          {filteredBlogs.length > 0 ? (
import Image from "next/image";
            filteredBlogs.map((blog) => (
import Image from "next/image";
              <div
import Image from "next/image";
                key={blog.id}
import Image from "next/image";
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
import Image from "next/image";
              >
import Image from "next/image";
                <div>
import Image from "next/image";
                  <p className="font-medium text-gray-900">{blog.title}</p>
import Image from "next/image";
                  <p className="text-sm text-gray-500">{blog.category}</p>
import Image from "next/image";
                </div>
import Image from "next/image";
                <div className="flex space-x-3">
import Image from "next/image";
                  <button
import Image from "next/image";
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
import Image from "next/image";
                    onClick={() => handleEdit(blog)}
import Image from "next/image";
                  >
import Image from "next/image";
                    Edit
import Image from "next/image";
                  </button>
import Image from "next/image";
                  <button
import Image from "next/image";
                    className="text-red-600 hover:text-red-800 font-medium text-sm"
import Image from "next/image";
                    onClick={() => handleDelete(blog.id)}
import Image from "next/image";
                  >
import Image from "next/image";
                    Delete
import Image from "next/image";
                  </button>
import Image from "next/image";
                </div>
import Image from "next/image";
              </div>
import Image from "next/image";
            ))
import Image from "next/image";
          ) : (
import Image from "next/image";
            <p className="text-gray-500 text-sm text-center">No blogs found.</p>
import Image from "next/image";
          )}
import Image from "next/image";
        </div>
import Image from "next/image";
      </div>
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
}
