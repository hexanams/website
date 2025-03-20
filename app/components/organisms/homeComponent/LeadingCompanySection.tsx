"use client";

import React from "react";
import Image from "next/image";
//import newLeadingImage from "/mnt/data/image.png"; // The new uploaded image
import leadingImage from "@/public/images/leading-company-video.png";

export default function LeadingCompanySection() {
  return (
    <section className="relative bg-white text-[#1B1C1E] pt-12 px-6 overflow-hidden">
      {/* 1. TOP (Heading & Paragraph) */}
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="text-[#004953]">Leading Company</span> In Creating{" "}
            <br className="hidden sm:block" />
            Powerful Software &amp; Technology
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            At HexAfrica, we’re passionate about building innovative digital
            solutions that drive growth and efficiency. With expertise in
            software development, mobile apps, and web services, we transform
            ideas into powerful, user-centric products. Our team is dedicated
            to delivering seamless, scalable, and intuitive solutions to meet
            your unique needs. We believe in the power of technology to create
            meaningful change. Whether you’re a startup or an established
            business, we partner with you to develop cutting-edge software
            that enhances user engagement and drives impact. Let’s build the
            future together!
          </p>
        </div>
      </div>

      {/* 2. BOTTOM (Image flush left + Button on right) */}
      {/* 
         -mx-6 removes the default horizontal padding on the section,
           allowing the image to “bleed” to the left edge of the viewport.
      */}
      <div className="flex flex-col md:flex-row items-center justify-between  md:-ml-8">

        {/* IMAGE */}
        <div className="relative w-full md:w-3/5">
          <Image
            src={leadingImage}
            alt="Team Meeting"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />

          {/* Optional Play Button Overlay */}
          <button
            type="button"
            className="
              absolute inset-0 flex items-center justify-center 
              bg-black/30 text-white transition-colors
              hover:bg-black/50
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-12 w-12"
              viewBox="0 0 16 16"
            >
              <path d="M10.804 8 5.298 5.06v5.88L10.803 8zm.696 0a.8.8 0 0 1-.415.697L5.39 11.964A.8.8 0 0 1 4 11.233V4.767a.8.8 0 0 1 1.39-.731l5.695 3.268a.8.8 0 0 1 .415.696z" />
            </svg>
          </button>
        </div>

        {/* BUTTON (aligned to container spacing on the right) */}
        <div className="w-full py-5 sm:py-1 md:w-auto flex justify-center md:justify-end md:mr-[25%]">
          <a
            href="/about"
            className="
              inline-flex items-center rounded-full 
               px-6 py-3 text-sm font-medium text-[#1B1C1E] border border-[#1B1C1E]
              transition-colors duration-200
              hover:bg-[#1B1C1E]/10
              focus:outline-none focus:ring-2 focus:ring-[#1B1C1E]
            "
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
