"use client";

import React from "react";
import Image from "next/image";
//import newLeadingImage from "/mnt/data/image.png"; // The new uploaded image
import leadingImage from "@/public/images/leading-company-video.png";

export default function LeadingCompanyShowcase() {
  return (
    <section className="relative bg-white text-[#1B1C1E] pt-12 px-6 overflow-hidden">
      {/* 1. TOP (Heading & Paragraph) */}
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="text-[#004953]">Great products</span> isn’t just about code{" "}
            
            it’s about people.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
              It all started with a questionable idea—a hilariously outrageous website that almost got us
              arrested in Africa. (Let’s just say, some jokes don’t land well with everyone!) 
              But instead of ending up behind bars, we channeled our creativity into something 
              even better—building powerful, innovative software that actually changed the game.
              Today, Hex is a wild mix of brilliant designers, genius developers, mind-blowing video 
              editors, and a few crazy thinkers who refuse to settle for average. We craft digital experiences,
               push boundaries, and create software that doesn’t just work—it wows.
              We disrupt, innovate, and have a little fun while we’re at it. So, 
              if you're looking for a team that’s as passionate as they are slightly unhinged (in the best way),
               you’re in the right place. 🚀

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

       
      </div>
    </section>
  );
}
