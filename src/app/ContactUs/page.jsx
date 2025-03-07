
import Image from "next/image";
"use client";
import Image from "next/image";

import Image from "next/image";
iimport React, { useState } from "react";
import Image from "next/image";
iimport Navbar from "../Components/Navbar";
import Image from "next/image";

import Image from "next/image";
const Contact = () => {
import Image from "next/image";
  const [formData, setFormData] = useState({
import Image from "next/image";
    firstName: "",
import Image from "next/image";
    lastName: "",
import Image from "next/image";
    email: "",
import Image from "next/image";
    message: "",
import Image from "next/image";
  });
import Image from "next/image";

import Image from "next/image";
  const [status, setStatus] = useState(null);
import Image from "next/image";

import Image from "next/image";
  // Handle input change
import Image from "next/image";
  const handleChange = (e) => {
import Image from "next/image";
    setFormData({ ...formData, [e.target.name]: e.target.value });
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  // Handle form submission
import Image from "next/image";
  const handleSubmit = async (e) => {
import Image from "next/image";
    e.preventDefault();
import Image from "next/image";

import Image from "next/image";
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
import Image from "next/image";
      setStatus("Please fill in all fields.");
import Image from "next/image";
      return;
import Image from "next/image";
    }
import Image from "next/image";

import Image from "next/image";
    try {
import Image from "next/image";
      // Mock API call or email sending logic
import Image from "next/image";
      console.log("Form Data:", formData);
import Image from "next/image";

import Image from "next/image";
      // Simulate successful submission
import Image from "next/image";
      setStatus("Message sent successfully!");
import Image from "next/image";
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
import Image from "next/image";
    } catch (error) {
import Image from "next/image";
      setStatus("Error sending message. Try again!");
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
    <div className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-32">
import Image from "next/image";
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
import Image from "next/image";
        {/* Left Section */}
import Image from "next/image";
        <div>
import Image from "next/image";
          <h2 className="text-3xl font-bold text-gray-900">
import Image from "next/image";
            You Will Grow, You Will Succeed. We Promise That
import Image from "next/image";
          </h2>
import Image from "next/image";
          <p className="text-gray-600 mt-4">
import Image from "next/image";
            Contact us today for career opportunities, guidance, and expert support.
import Image from "next/image";
          </p>
import Image from "next/image";
          <div className="mt-6 space-y-4">
import Image from "next/image";
            <div className="flex items-center space-x-4">
import Image from "next/image";
              <span className="text-green-600 text-lg">📞</span>
import Image from "next/image";
              <div>
import Image from "next/image";
                <h3 className="font-semibold text-gray-900">Call for inquiry</h3>
import Image from "next/image";
                <p className="text-gray-600">+257 388-6895</p>
import Image from "next/image";
              </div>
import Image from "next/image";
            </div>
import Image from "next/image";
            <div className="flex items-center space-x-4">
import Image from "next/image";
              <span className="text-green-600 text-lg">✉️</span>
import Image from "next/image";
              <div>
import Image from "next/image";
                <h3 className="font-semibold text-gray-900">Send us email</h3>
import Image from "next/image";
                <p className="text-gray-600">kramulous@sbcglobal.net</p>
import Image from "next/image";
              </div>
import Image from "next/image";
            </div>
import Image from "next/image";
            <div className="flex items-center space-x-4">
import Image from "next/image";
              <span className="text-green-600 text-lg">⏰</span>
import Image from "next/image";
              <div>
import Image from "next/image";
                <h3 className="font-semibold text-gray-900">Opening hours</h3>
import Image from "next/image";
                <p className="text-gray-600">Mon - Fri: 10AM - 10PM</p>
import Image from "next/image";
              </div>
import Image from "next/image";
            </div>
import Image from "next/image";
            <div className="flex items-center space-x-4">
import Image from "next/image";
              <span className="text-green-600 text-lg">📍</span>
import Image from "next/image";
              <div>
import Image from "next/image";
                <h3 className="font-semibold text-gray-900">Office</h3>
import Image from "next/image";
                <p className="text-gray-600">19, HSR Layout, Bangalore</p>
import Image from "next/image";
              </div>
import Image from "next/image";
            </div>
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Right Section - Form */}
import Image from "next/image";
        <div className="bg-white p-6 shadow-lg rounded-lg">
import Image from "next/image";
          <h3 className="text-xl font-semibold text-gray-900">Contact Info</h3>
import Image from "next/image";
          <p className="text-gray-600 text-sm">Reach us for career support!</p>
import Image from "next/image";
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
import Image from "next/image";
            <div className="flex space-x-4">
import Image from "next/image";
              <input
import Image from "next/image";
                type="text"
import Image from "next/image";
                name="firstName"
import Image from "next/image";
                placeholder="Your name"
import Image from "next/image";
                value={formData.firstName}
import Image from "next/image";
                onChange={handleChange}
import Image from "next/image";
                className="w-1/2 p-2 border rounded"
import Image from "next/image";
              />
import Image from "next/image";
              <input
import Image from "next/image";
                type="text"
import Image from "next/image";
                name="lastName"
import Image from "next/image";
                placeholder="Your last name"
import Image from "next/image";
                value={formData.lastName}
import Image from "next/image";
                onChange={handleChange}
import Image from "next/image";
                className="w-1/2 p-2 border rounded"
import Image from "next/image";
              />
import Image from "next/image";
            </div>
import Image from "next/image";
            <input
import Image from "next/image";
              type="email"
import Image from "next/image";
              name="email"
import Image from "next/image";
              placeholder="Your E-mail address"
import Image from "next/image";
              value={formData.email}
import Image from "next/image";
              onChange={handleChange}
import Image from "next/image";
              className="w-full p-2 border rounded"
import Image from "next/image";
            />
import Image from "next/image";
            <textarea
import Image from "next/image";
              name="message"
import Image from "next/image";
              placeholder="Your message..."
import Image from "next/image";
              value={formData.message}
import Image from "next/image";
              onChange={handleChange}
import Image from "next/image";
              className="w-full p-2 border rounded h-28"
import Image from "next/image";
            ></textarea>
import Image from "next/image";
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
import Image from "next/image";
              Send Message
import Image from "next/image";
            </button>
import Image from "next/image";
          </form>
import Image from "next/image";
          {status && <p className="mt-2 text-center text-sm text-gray-700">{status}</p>}
import Image from "next/image";
        </div>
import Image from "next/image";
      </div>
import Image from "next/image";

import Image from "next/image";
      {/* Embedded Map of Bangalore */}
import Image from "next/image";
      <div className="mt-12">
import Image from "next/image";
        <iframe
import Image from "next/image";
          className="w-full h-80 rounded-lg shadow-lg"
import Image from "next/image";
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.373258909125!2d77.6094780871582!3d12.925933684741412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15fd9cde7361%3A0x6e3a0a758f4a4a23!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1675502613956!5m2!1sen!2sin"
import Image from "next/image";
          allowFullScreen=""
import Image from "next/image";
          loading="lazy"
import Image from "next/image";
        ></iframe>
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
export default Contact;