"use client";
import React from "react";
import Image from "next/image";
import AboutHero from "../Components/AboutHero";
import HowItWork from "../Components/HowItWork";
import VideoSection from "../Components/VideoSection";
import FaqSection from "../Components/FaqSection";
import BestSection from "../Components/BestSection";
import NewsBlog from "../Components/NewsBlog";
// import BlogManager from "../Components/BlogManager"; // Uncomment if needed
// import CreateBlog from "../Components/CreateBlog"; // Uncomment if needed
import Navbar from "../Components/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <HowItWork />
      <VideoSection />
      <FaqSection />
      <BestSection />
      <NewsBlog />
      {/* <BlogManager /> */}
      {/* <CreateBlog /> */}
    </div>
  );
};

export default AboutUs;
