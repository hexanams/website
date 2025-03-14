"use client";

import React from "react";
import Image from "next/image";
import leadingImage from "@/public/images/leading-company-video.png"

export default function LeadingCompanyShowcase() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        {/* Left Column: Heading & Paragraph */}
        <div>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            <span className="text-[#004953]">Leading Company</span> In Creating <br />
            Powerful Software &amp; Technology
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg">
            At HexAfrica, we’re passionate about building innovative digital solutions
            that drive growth and efficiency. With expertise in software development,
            mobile apps, and web services, we transform ideas into powerful,
            user-centric products. Our team is dedicated to delivering seamless,
            scalable, and intuitive solutions to meet your unique needs. We believe
            in the power of technology to create meaningful change. Whether you’re a
            startup or an established business, we partner with you to develop
            cutting-edge software that enhances user engagement and drives impact.
            Let’s build the future together!
          </p>
        </div>

        {/* Right Column: Image or Video Placeholder */}
        <div className="relative">
          <Image
            src={leadingImage} // Replace with your actual path
            alt="Team Meeting"
            width={800}
            height={500}
            className="h-auto w-full object-cover"
            priority
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
            {/* Simple play icon (replace if needed) */}
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
    </section>
  );
}
