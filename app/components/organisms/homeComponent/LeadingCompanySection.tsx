"use client";

import React from "react";
import Image from "next/image";
import leadingImage from "@/public/images/leading-company-video.png"

export default function LeadingCompanySection() {
  return (
    <section className="relative bg-[#FFFFFF] text-[#1B1C1E] py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-[#004953]">Leading Company</span> In Creating <br className="hidden sm:block" />
              Powerful Software &amp; Technology
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg leading-relaxed text-[#1B1C1E]">
              At HexAfrica, we’re passionate about building innovative digital solutions 
              that drive growth and efficiency. With expertise in software development, 
              mobile apps, and web services, we transform ideas into powerful, user-centric 
              products. Our team is dedicated to delivering seamless, scalable, and intuitive 
              solutions to meet your unique needs. We believe in the power of technology to 
              create meaningful change. Whether you’re a startup or an established business, 
              we partner with you to develop cutting-edge software that enhances user 
              engagement and drives impact. Let’s build the future together!
            </p>

            {/* Button aligned to the right */}
            <div className="flex justify-end">
              <a
                href="/about"
                className="
                  inline-flex items-center rounded-full 
                  bg-black px-6 py-3 text-sm font-medium text-white 
                  transition-colors duration-200
                  hover:bg-gray-800 
                  focus:outline-none focus:ring-2 focus:ring-gray-600
                "
              >
                Read More
              </a>
            </div>
          </div>

          {/* Right Column (Image / Video) */}
          <div className="relative">
            {/* Replace with your actual image path or use a plain <img> */}
            <Image
              src={leadingImage}
              alt="Team Meeting"
              width={800}
              height={500}
              className="h-auto w-full object-cover"
            />
            {/* Play Button Overlay */}
            <button
              type="button"
              className="
                absolute inset-0 flex items-center justify-center 
                bg-black/30 text-white transition-colors
                hover:bg-black/50
              "
            >
              {/* Simple SVG play icon; replace with your own if needed */}
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
        </div>
      </div>
    </section>
  );
}
