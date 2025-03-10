"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const TOP_LINE_TEXT = [
  "COLLABORATION",
  "DESIGN",
  "SOFTWARE DESIGN",
  "UI/UX DESIGN",
  "WEB APPLICATION",
  "MOBILE APPLICATION",
  "CLOUD SOLUTIONS",
  "DIGITAL EXPERIENCE",
  "SCALABLE TECHNOLOGY",
  "SYSTEM ARCHITECTURE",
  "TECH INNOVATION",
];

const BOTTOM_LINE_TEXT = [
  "HUMHUB DEVELOPMENT",
  "BRANDING",
  "OPTIMIZATION",
  "MORE SERVICES",
  "SEO ENHANCEMENT",
  "PRODUCT STRATEGY",
  "SECURITY & PERFORMANCE",
  "DEVOPS SOLUTIONS",
  "SAAS DEVELOPMENT",
  "CUSTOM SOFTWARE",
];

export default function MarqueeBanner() {
  return (
    <section className="w-full">
      {/* TOP MARQUEE */}
      <div
        className="relative overflow-hidden flex items-center h-12 sm:h-16 md:h-20"
        style={{
          backgroundColor: "#004953",
          transform: "skewY(9deg)",
          transformOrigin: "center",
        }}
      >
        <Marquee gradient={false} speed={50} direction="left" className="w-full text-center">
          {TOP_LINE_TEXT.map((item, idx) => (
            <span
              key={idx}
              className="mx-3 sm:mx-4 md:mx-6 uppercase text-white text-xs sm:text-sm md:text-base"
            >
              {item} *
            </span>
          ))}
        </Marquee>
      </div>

      {/* BOTTOM MARQUEE */}
      <div
        className="relative overflow-hidden flex items-center h-12 sm:h-16 md:h-20"
        style={{
          backgroundColor: "#000000",
          transform: "skewY(-3deg)",
          transformOrigin: "center",
        }}
      >
        <Marquee gradient={false} speed={50} direction="right" className="w-full text-center">
          {BOTTOM_LINE_TEXT.map((item, idx) => (
            <span
              key={idx}
              className="mx-3 sm:mx-4 md:mx-6 uppercase text-white text-xs sm:text-sm md:text-base"
            >
              {item} *
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
