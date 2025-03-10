"use client";

import React from "react";
import { FaStar, FaStarHalfAlt, FaArrowDown } from "react-icons/fa";

export default function SoftwareShowcase() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-3xl px-4 text-center">
        {/* Rating + Reviews */}
        <div className="mb-6 flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-3 sm:space-y-0">
          <div className="flex items-center">
            {/* 4 full stars + 1 half star to represent 4.5 */}
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStarHalfAlt className="text-yellow-400" />
            <span className="ml-2 text-sm font-medium">4.5</span>
          </div>
          <span className="text-sm text-[#1B1C1E]">
            50+ reviews on{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-100"
            >
              Clutch.co
            </a>
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#000000] sm:text-5xl">
            Creating <span className="text-[#004953]">Software</span> 
            <br />& Digital Excellence
        </h2>

        {/* Paragraph */}
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed">
          Building innovative software solutions and driving digital excellence.
          We create seamless, scalable, and user-centric products that transform
          ideas into reality. Let&apos;s innovate together!
        </p>

        {/* CTA Button */}
        <div>
          <a
            href="#portfolio"
            className="
              relative inline-flex items-center 
              rounded-full bg-[#004953] px-6 py-3 
              text-base font-medium text-white
              transition-colors duration-200 
              hover:bg-[#006B6B]
              focus:outline-none focus:ring-2 focus:ring-teal-300
            "
          >
            <span>Explore our Portfolio</span>
            {/* Circle popping out on the right */}
            <span
              className="
                absolute -right-5 top-1/2 
                flex h-10 w-10 
                -translate-y-1/2 
                items-center justify-center 
                rounded-full bg-[#004953]
                border border-white
              "
            >
              <FaArrowDown className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
