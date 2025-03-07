
import Image from "next/image";
"use client";
import Image from "next/image";

import Image from "next/image";
iimport { useState } from "react";
import Image from "next/image";

import Image from "next/image";
const CreateBlog = () => {
import Image from "next/image";
  const [title, setTitle] = useState("");
import Image from "next/image";
  const [category, setCategory] = useState("");
import Image from "next/image";
  const [content, setContent] = useState("");
import Image from "next/image";
  const [image, setImage] = useState(null);
import Image from "next/image";

import Image from "next/image";
  const [blogs, setBlogs] = useState([
import Image from "next/image";
    { id: 1, title: "Sample Blog 1", category: "Resume Tip" },
import Image from "next/image";
    { id: 2, title: "Sample Blog 2", category: "Interview Preparation" },
import Image from "next/image";
  ]);
import Image from "next/image";

import Image from "next/image";
  const handleImageUpload = (e) => {
import Image from "next/image";
    setImage(e.target.files[0]);
import Image from "next/image";
  };
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
    setTitle(blog.title);
import Image from "next/image";
    setCategory(blog.category);
import Image from "next/image";
    setContent(""); // You can load content if you have it in the data.
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const handleCreateBlog = () => {
import Image from "next/image";
    if (!title || !category) {
import Image from "next/image";
      alert("Title and Category are required");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";

import Image from "next/image";
    const newBlog = {
import Image from "next/image";
      id: Date.now(),
import Image from "next/image";
      title,
import Image from "next/image";
      category,
import Image from "next/image";
    };
import Image from "next/image";

import Image from "next/image";
    setBlogs([...blogs, newBlog]);
import Image from "next/image";

import Image from "next/image";
    // Reset form
import Image from "next/image";
    setTitle("");
import Image from "next/image";
    setCategory("");
import Image from "next/image";
    setContent("");
import Image from "next/image";
    setImage(null);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="p-4 md:p-6 bg-gray-100 rounded-lg">
import Image from "next/image";
      <h2 className="text-center text-lg font-semibold text-teal-700 mb-4">
import Image from "next/image";
        Manage Blogs
import Image from "next/image";
      </h2>
import Image from "next/image";

import Image from "next/image";
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
import Image from "next/image";
        {/* Left Side: Create/Edit Blog Form */}
import Image from "next/image";
        <div className="space-y-4 bg-white p-4 rounded-lg shadow">
import Image from "next/image";
          <h3 className="font-semibold text-gray-700">Create / Edit Blog</h3>
import Image from "next/image";

import Image from "next/image";
          <div>
import Image from "next/image";
            <label className="block text-sm font-medium text-gray-700">
import Image from "next/image";
              Title
import Image from "next/image";
            </label>
import Image from "next/image";
            <input
import Image from "next/image";
              type="text"
import Image from "next/image";
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
import Image from "next/image";
              placeholder="Enter blog title"
import Image from "next/image";
              value={title}
import Image from "next/image";
              onChange={(e) => setTitle(e.target.value)}
import Image from "next/image";
            />
import Image from "next/image";
          </div>
import Image from "next/image";

import Image from "next/image";
          <div>
import Image from "next/image";
            <label className="block text-sm font-medium text-gray-700">
import Image from "next/image";
              Category
import Image from "next/image";
            </label>
import Image from "next/image";
            <select
import Image from "next/image";
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
import Image from "next/image";
              value={category}
import Image from "next/image";
              onChange={(e) => setCategory(e.target.value)}>
import Image from "next/image";
              <option value="">Select Category</option>
import Image from "next/image";
              <option value="Resume Tip">Resume Tip</option>
import Image from "next/image";
              <option value="Interview Preparation">
import Image from "next/image";
                Interview Preparation
import Image from "next/image";
              </option>
import Image from "next/image";
            </select>
import Image from "next/image";
          </div>
import Image from "next/image";

import Image from "next/image";
          <div>
import Image from "next/image";
            <label className="block text-sm font-medium text-gray-700">
import Image from "next/image";
              Content
import Image from "next/image";
            </label>
import Image from "next/image";
            <textarea
import Image from "next/image";
              className="mt-1 block w-full h-48 rounded-md border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
import Image from "next/image";
              placeholder="Write your blog content here..."
import Image from "next/image";
              value={content}
import Image from "next/image";
              onChange={(e) => setContent(e.target.value)}
import Image from "next/image";
            />
import Image from "next/image";
          </div>
import Image from "next/image";

import Image from "next/image";
          <div>
import Image from "next/image";
            <label className="block text-sm font-medium text-gray-700">
import Image from "next/image";
              Upload Image
import Image from "next/image";
            </label>
import Image from "next/image";
            <input
import Image from "next/image";
              type="file"
import Image from "next/image";
              className="mt-1 block w-full text-sm text-gray-600"
import Image from "next/image";
              onChange={handleImageUpload}
import Image from "next/image";
            />
import Image from "next/image";
          </div>
import Image from "next/image";

import Image from "next/image";
          <button
import Image from "next/image";
            className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
import Image from "next/image";
            onClick={handleCreateBlog}>
import Image from "next/image";
            Save Blog
import Image from "next/image";
          </button>
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Right Side: Existing Blogs List */}
import Image from "next/image";
        <div className="bg-white p-4 rounded-lg shadow">
import Image from "next/image";
          <h3 className="font-semibold text-gray-700 mb-4">Existing Blogs</h3>
import Image from "next/image";

import Image from "next/image";
          <div className="space-y-3">
import Image from "next/image";
            {blogs.map((blog) => (
import Image from "next/image";
              <div
import Image from "next/image";
                key={blog.id}
import Image from "next/image";
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
import Image from "next/image";
                <div>
import Image from "next/image";
                  <p className="font-medium text-gray-800">{blog.title}</p>
import Image from "next/image";
                  <p className="text-sm text-gray-500">{blog.category}</p>
import Image from "next/image";
                </div>
import Image from "next/image";
                <div className="flex space-x-2">
import Image from "next/image";
                  <button
import Image from "next/image";
                    className="text-blue-600 hover:text-blue-800 text-sm"
import Image from "next/image";
                    onClick={() => handleEdit(blog)}>
import Image from "next/image";
                    Edit
import Image from "next/image";
                  </button>
import Image from "next/image";
                  <button
import Image from "next/image";
                    className="text-red-600 hover:text-red-800 text-sm"
import Image from "next/image";
                    onClick={() => handleDelete(blog.id)}>
import Image from "next/image";
                    Delete
import Image from "next/image";
                  </button>
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
    </div>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";
export default CreateBlog;
