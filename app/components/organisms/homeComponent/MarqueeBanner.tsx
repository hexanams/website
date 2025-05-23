"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import star from "@/public/icons/star.svg";
import Image from "next/image";

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
  "Software Development",
  "Mobile Apps",
  "Web Applications",
  "Consulting",
  "Product Discovery",
  "UI/UX",
  "DevOps Solutions",
  "Product Strategy",
  "Tech Innovations",
  "SaaS Solutions",
];

export default function MarqueeBanner() {
  return (
    <section className="w-full">
      {/* TOP MARQUEE */}
      <div
        className="relative overflow-hidden flex items-center justify-center h-10 md:h-16"
        style={{
          backgroundColor: "#004953",
          transform: "skewY(8deg)",
          transformOrigin: "center",
        }}
      >
        <Marquee gradient={false} speed={50} direction="left" className="w-full text-center">
          {TOP_LINE_TEXT.map((item, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 mx-4 sm:mx-6 md:mx-8 uppercase text-white text-xs sm:text-sm md:text-base"
            >
              {item} {" "}
              <Image src={star} alt="Hex Innovations is a global software development star icon" width={10} height={10} />
            </span>
          ))}
        </Marquee>
      </div>

      {/* BOTTOM MARQUEE */}
      <div
        className="relative overflow-hidden flex items-center mt-[-40] w-full justify-center h-10 md:h-16"
        style={{
          backgroundColor: "#000000",
          transform: "skewY(-2deg)",
          transformOrigin: "center",
        }}
      >
        <Marquee gradient={false} speed={50} direction="right" className="w-full text-center">
          {BOTTOM_LINE_TEXT.map((item, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 mx-4 sm:mx-6 md:mx-8 uppercase text-white text-xs sm:text-sm md:text-base"
            >
              {item} {" "}
              <Image src={star} alt="Hex Innovations is a global software development star icon" width={10} height={10} />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
