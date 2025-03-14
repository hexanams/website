"use client";

import React from "react";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  highlightColor?: string;
}

export default function HeroBanner({
  title,
  subtitle,
  highlightColor = "#C8FF00",
}: HeroBannerProps) {
  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="relative w-full md:w-1/2">
          {/* Highlight Circle */}
          <div
            className="hidden md:block absolute  top-[-8] left-40 h-16 w-16 rounded-full z-0"
            style={{ backgroundColor: highlightColor }}
          />
          {/* Title & Subtitle */}
          <h1 className="relative z-10 text-4xl font-bold text-black sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="relative z-10 mt-4 text-base text-gray-700 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Right Column (blank) */}
        <div className="md:w-1/2" />
      </div>
    </section>
  );
}
