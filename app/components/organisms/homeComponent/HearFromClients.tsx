"use client";

import React, { useState } from "react";
import Image from "next/image";
import clientInterview from "@/public/images/client-interview.png";

const clientsData = [
  {
    name: "Micheal Faraday",
    role: "CEO Mount Technologies",
    image:clientInterview,
  },
  {
    name: "Samantha Brooks",
    role: "CTO InnovateX",
    image: clientInterview,
  },
  {
    name: "Marcus Aurelius",
    role: "Founder TechNova",
    image: clientInterview,
  },
  // ... add as many clients as you like
];

export default function HearFromClients() {
  // Track which client is currently visible
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  // Get the client object at the current index
  const currentClient = clientsData[currentClientIndex];

  // Move to the previous client (wrap around if at start)
  const handlePrev = () => {
    setCurrentClientIndex((prevIndex) =>
      prevIndex === 0 ? clientsData.length - 1 : prevIndex - 1
    );
  };

  // Move to the next client (wrap around if at end)
  const handleNext = () => {
    setCurrentClientIndex((prevIndex) =>
      prevIndex === clientsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-white text-[#1B1C1E] py-12 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        {/* Left Column: Title, Subheading, Arrows, Client Info */}
        <div className="space-y-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold sm:text-4xl">
            Hear From Our <span className="text-[#004953]">Clients</span>
          </h2>

          {/* Subheading */}
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            Empowering businesses with cutting-edge software solutions &mdash;
            hear how our clients have transformed with our expertise.
          </p>

          {/* Arrows + Client Info */}
          <div className="space-y-4">
            {/* Navigation Arrows */}
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#004953] text-[#004953] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:bg-[#004953] focus:text-[#FFFFFF]"
              >
                {/* Left arrow icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#004953] text-[#004953] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:bg-[#004953] focus:text-[#FFFFFF]"
              >
                {/* Right arrow icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Current Client Info */}
            <div>
              <h3 className="text-lg font-semibold">{currentClient.name}</h3>
              <p className="text-sm text-gray-500">{currentClient.role}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Image/Video with Play Button */}
        <div className="relative">
          <Image
            src={currentClient.image}
            alt={currentClient.name}
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
            {/* Play icon */}
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
