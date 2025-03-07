
mport Image from "next/image";
"use client";
mport Image from "next/image";

mport Image from "next/image";
import React, { useState } from "react";
mport Image from "next/image";
import Navbar from "../Components/Navbar";
mport Image from "next/image";

mport Image from "next/image";
const Contact = () => {
mport Image from "next/image";
  const [formData, setFormData] = useState({
mport Image from "next/image";
    firstName: "",
mport Image from "next/image";
    lastName: "",
mport Image from "next/image";
    email: "",
mport Image from "next/image";
    message: "",
mport Image from "next/image";
  });
mport Image from "next/image";

mport Image from "next/image";
  const [status, setStatus] = useState(null);
mport Image from "next/image";

mport Image from "next/image";
  // Handle input change
mport Image from "next/image";
  const handleChange = (e) => {
mport Image from "next/image";
    setFormData({ ...formData, [e.target.name]: e.target.value });
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  // Handle form submission
mport Image from "next/image";
  const handleSubmit = async (e) => {
mport Image from "next/image";
    e.preventDefault();
mport Image from "next/image";

mport Image from "next/image";
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
mport Image from "next/image";
      setStatus("Please fill in all fields.");
mport Image from "next/image";
      return;
mport Image from "next/image";
    }
mport Image from "next/image";

mport Image from "next/image";
    try {
mport Image from "next/image";
      // Mock API call or email sending logic
mport Image from "next/image";
      console.log("Form Data:", formData);
mport Image from "next/image";

mport Image from "next/image";
      // Simulate successful submission
mport Image from "next/image";
      setStatus("Message sent successfully!");
mport Image from "next/image";
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
mport Image from "next/image";
    } catch (error) {
mport Image from "next/image";
      setStatus("Error sending message. Try again!");
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
    <div className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-32">
mport Image from "next/image";
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
mport Image from "next/image";
        {/* Left Section */}
mport Image from "next/image";
        <div>
mport Image from "next/image";
          <h2 className="text-3xl font-bold text-gray-900">
mport Image from "next/image";
            You Will Grow, You Will Succeed. We Promise That
mport Image from "next/image";
          </h2>
mport Image from "next/image";
          <p className="text-gray-600 mt-4">
mport Image from "next/image";
            Contact us today for career opportunities, guidance, and expert support.
mport Image from "next/image";
          </p>
mport Image from "next/image";
          <div className="mt-6 space-y-4">
mport Image from "next/image";
            <div className="flex items-center space-x-4">
mport Image from "next/image";
              <span className="text-green-600 text-lg">📞</span>
mport Image from "next/image";
              <div>
mport Image from "next/image";
                <h3 className="font-semibold text-gray-900">Call for inquiry</h3>
mport Image from "next/image";
                <p className="text-gray-600">+257 388-6895</p>
mport Image from "next/image";
              </div>
mport Image from "next/image";
            </div>
mport Image from "next/image";
            <div className="flex items-center space-x-4">
mport Image from "next/image";
              <span className="text-green-600 text-lg">✉️</span>
mport Image from "next/image";
              <div>
mport Image from "next/image";
                <h3 className="font-semibold text-gray-900">Send us email</h3>
mport Image from "next/image";
                <p className="text-gray-600">kramulous@sbcglobal.net</p>
mport Image from "next/image";
              </div>
mport Image from "next/image";
            </div>
mport Image from "next/image";
            <div className="flex items-center space-x-4">
mport Image from "next/image";
              <span className="text-green-600 text-lg">⏰</span>
mport Image from "next/image";
              <div>
mport Image from "next/image";
                <h3 className="font-semibold text-gray-900">Opening hours</h3>
mport Image from "next/image";
                <p className="text-gray-600">Mon - Fri: 10AM - 10PM</p>
mport Image from "next/image";
              </div>
mport Image from "next/image";
            </div>
mport Image from "next/image";
            <div className="flex items-center space-x-4">
mport Image from "next/image";
              <span className="text-green-600 text-lg">📍</span>
mport Image from "next/image";
              <div>
mport Image from "next/image";
                <h3 className="font-semibold text-gray-900">Office</h3>
mport Image from "next/image";
                <p className="text-gray-600">19, HSR Layout, Bangalore</p>
mport Image from "next/image";
              </div>
mport Image from "next/image";
            </div>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Right Section - Form */}
mport Image from "next/image";
        <div className="bg-white p-6 shadow-lg rounded-lg">
mport Image from "next/image";
          <h3 className="text-xl font-semibold text-gray-900">Contact Info</h3>
mport Image from "next/image";
          <p className="text-gray-600 text-sm">Reach us for career support!</p>
mport Image from "next/image";
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
mport Image from "next/image";
            <div className="flex space-x-4">
mport Image from "next/image";
              <input
mport Image from "next/image";
                type="text"
mport Image from "next/image";
                name="firstName"
mport Image from "next/image";
                placeholder="Your name"
mport Image from "next/image";
                value={formData.firstName}
mport Image from "next/image";
                onChange={handleChange}
mport Image from "next/image";
                className="w-1/2 p-2 border rounded"
mport Image from "next/image";
              />
mport Image from "next/image";
              <input
mport Image from "next/image";
                type="text"
mport Image from "next/image";
                name="lastName"
mport Image from "next/image";
                placeholder="Your last name"
mport Image from "next/image";
                value={formData.lastName}
mport Image from "next/image";
                onChange={handleChange}
mport Image from "next/image";
                className="w-1/2 p-2 border rounded"
mport Image from "next/image";
              />
mport Image from "next/image";
            </div>
mport Image from "next/image";
            <input
mport Image from "next/image";
              type="email"
mport Image from "next/image";
              name="email"
mport Image from "next/image";
              placeholder="Your E-mail address"
mport Image from "next/image";
              value={formData.email}
mport Image from "next/image";
              onChange={handleChange}
mport Image from "next/image";
              className="w-full p-2 border rounded"
mport Image from "next/image";
            />
mport Image from "next/image";
            <textarea
mport Image from "next/image";
              name="message"
mport Image from "next/image";
              placeholder="Your message..."
mport Image from "next/image";
              value={formData.message}
mport Image from "next/image";
              onChange={handleChange}
mport Image from "next/image";
              className="w-full p-2 border rounded h-28"
mport Image from "next/image";
            ></textarea>
mport Image from "next/image";
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
mport Image from "next/image";
              Send Message
mport Image from "next/image";
            </button>
mport Image from "next/image";
          </form>
mport Image from "next/image";
          {status && <p className="mt-2 text-center text-sm text-gray-700">{status}</p>}
mport Image from "next/image";
        </div>
mport Image from "next/image";
      </div>
mport Image from "next/image";

mport Image from "next/image";
      {/* Embedded Map of Bangalore */}
mport Image from "next/image";
      <div className="mt-12">
mport Image from "next/image";
        <iframe
mport Image from "next/image";
          className="w-full h-80 rounded-lg shadow-lg"
mport Image from "next/image";
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.373258909125!2d77.6094780871582!3d12.925933684741412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15fd9cde7361%3A0x6e3a0a758f4a4a23!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1675502613956!5m2!1sen!2sin"
mport Image from "next/image";
          allowFullScreen=""
mport Image from "next/image";
          loading="lazy"
mport Image from "next/image";
        ></iframe>
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
export default Contact;