
mport Image from "next/image";
"use client";
mport Image from "next/image";

mport Image from "next/image";
import { useState } from "react";
mport Image from "next/image";

mport Image from "next/image";
const CreateBlog = () => {
mport Image from "next/image";
  const [title, setTitle] = useState("");
mport Image from "next/image";
  const [category, setCategory] = useState("");
mport Image from "next/image";
  const [content, setContent] = useState("");
mport Image from "next/image";
  const [image, setImage] = useState(null);
mport Image from "next/image";

mport Image from "next/image";
  const [blogs, setBlogs] = useState([
mport Image from "next/image";
    { id: 1, title: "Sample Blog 1", category: "Resume Tip" },
mport Image from "next/image";
    { id: 2, title: "Sample Blog 2", category: "Interview Preparation" },
mport Image from "next/image";
  ]);
mport Image from "next/image";

mport Image from "next/image";
  const handleImageUpload = (e) => {
mport Image from "next/image";
    setImage(e.target.files[0]);
mport Image from "next/image";
  };
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
    setTitle(blog.title);
mport Image from "next/image";
    setCategory(blog.category);
mport Image from "next/image";
    setContent(""); // You can load content if you have it in the data.
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const handleCreateBlog = () => {
mport Image from "next/image";
    if (!title || !category) {
mport Image from "next/image";
      alert("Title and Category are required");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";

mport Image from "next/image";
    const newBlog = {
mport Image from "next/image";
      id: Date.now(),
mport Image from "next/image";
      title,
mport Image from "next/image";
      category,
mport Image from "next/image";
    };
mport Image from "next/image";

mport Image from "next/image";
    setBlogs([...blogs, newBlog]);
mport Image from "next/image";

mport Image from "next/image";
    // Reset form
mport Image from "next/image";
    setTitle("");
mport Image from "next/image";
    setCategory("");
mport Image from "next/image";
    setContent("");
mport Image from "next/image";
    setImage(null);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="p-4 md:p-6 bg-gray-100 rounded-lg">
mport Image from "next/image";
      <h2 className="text-center text-lg font-semibold text-teal-700 mb-4">
mport Image from "next/image";
        Manage Blogs
mport Image from "next/image";
      </h2>
mport Image from "next/image";

mport Image from "next/image";
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
mport Image from "next/image";
        {/* Left Side: Create/Edit Blog Form */}
mport Image from "next/image";
        <div className="space-y-4 bg-white p-4 rounded-lg shadow">
mport Image from "next/image";
          <h3 className="font-semibold text-gray-700">Create / Edit Blog</h3>
mport Image from "next/image";

mport Image from "next/image";
          <div>
mport Image from "next/image";
            <label className="block text-sm font-medium text-gray-700">
mport Image from "next/image";
              Title
mport Image from "next/image";
            </label>
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="text"
mport Image from "next/image";
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
mport Image from "next/image";
              placeholder="Enter blog title"
mport Image from "next/image";
              value={title}
mport Image from "next/image";
              onChange={(e) => setTitle(e.target.value)}
mport Image from "next/image";
            />
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          <div>
mport Image from "next/image";
            <label className="block text-sm font-medium text-gray-700">
mport Image from "next/image";
              Category
mport Image from "next/image";
            </label>
mport Image from "next/image";
            <select
mport Image from "next/image";
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
mport Image from "next/image";
              value={category}
mport Image from "next/image";
              onChange={(e) => setCategory(e.target.value)}>
mport Image from "next/image";
              <option value="">Select Category</option>
mport Image from "next/image";
              <option value="Resume Tip">Resume Tip</option>
mport Image from "next/image";
              <option value="Interview Preparation">
mport Image from "next/image";
                Interview Preparation
mport Image from "next/image";
              </option>
mport Image from "next/image";
            </select>
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          <div>
mport Image from "next/image";
            <label className="block text-sm font-medium text-gray-700">
mport Image from "next/image";
              Content
mport Image from "next/image";
            </label>
mport Image from "next/image";
            <textarea
mport Image from "next/image";
              className="mt-1 block w-full h-48 rounded-md border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
mport Image from "next/image";
              placeholder="Write your blog content here..."
mport Image from "next/image";
              value={content}
mport Image from "next/image";
              onChange={(e) => setContent(e.target.value)}
mport Image from "next/image";
            />
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          <div>
mport Image from "next/image";
            <label className="block text-sm font-medium text-gray-700">
mport Image from "next/image";
              Upload Image
mport Image from "next/image";
            </label>
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="file"
mport Image from "next/image";
              className="mt-1 block w-full text-sm text-gray-600"
mport Image from "next/image";
              onChange={handleImageUpload}
mport Image from "next/image";
            />
mport Image from "next/image";
          </div>
mport Image from "next/image";

mport Image from "next/image";
          <button
mport Image from "next/image";
            className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
mport Image from "next/image";
            onClick={handleCreateBlog}>
mport Image from "next/image";
            Save Blog
mport Image from "next/image";
          </button>
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Right Side: Existing Blogs List */}
mport Image from "next/image";
        <div className="bg-white p-4 rounded-lg shadow">
mport Image from "next/image";
          <h3 className="font-semibold text-gray-700 mb-4">Existing Blogs</h3>
mport Image from "next/image";

mport Image from "next/image";
          <div className="space-y-3">
mport Image from "next/image";
            {blogs.map((blog) => (
mport Image from "next/image";
              <div
mport Image from "next/image";
                key={blog.id}
mport Image from "next/image";
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
mport Image from "next/image";
                <div>
mport Image from "next/image";
                  <p className="font-medium text-gray-800">{blog.title}</p>
mport Image from "next/image";
                  <p className="text-sm text-gray-500">{blog.category}</p>
mport Image from "next/image";
                </div>
mport Image from "next/image";
                <div className="flex space-x-2">
mport Image from "next/image";
                  <button
mport Image from "next/image";
                    className="text-blue-600 hover:text-blue-800 text-sm"
mport Image from "next/image";
                    onClick={() => handleEdit(blog)}>
mport Image from "next/image";
                    Edit
mport Image from "next/image";
                  </button>
mport Image from "next/image";
                  <button
mport Image from "next/image";
                    className="text-red-600 hover:text-red-800 text-sm"
mport Image from "next/image";
                    onClick={() => handleDelete(blog.id)}>
mport Image from "next/image";
                    Delete
mport Image from "next/image";
                  </button>
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
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";
export default CreateBlog;
