"use client";

import React from "react";

export default function WhatWeOfferSection() {
  return (
    <section className=" mx-auto relative bg-[#1B1C1E] text-white py-20 px-6">
      {/* Highlight Circle */}
      <div
        className="absolute w-16 h-16 rounded-full bg-[#C8FF00]"
        style={{ top: "3rem", right: "2rem" }} // Adjust if needed
      />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-16 text-5xl font-bold sm:text-5xl">
          What We Offer
        </h2>

        {/* Two-column Layout */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-10 text-left">
            {/* Item 1 */}
            <div className="max-w-md">
              <h3 className="mb-2 text-xl font-semibold">Custom Software Development</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                We craft tailored software solutions that enhance business operations,
                improve efficiency, and drive innovation. Whether it&apos;s enterprise
                applications or custom SaaS products, we&apos;ve got you covered.
              </p>
            </div>

            {/* Item 2 */}
            <div className="max-w-md">
              <h3 className="mb-2 text-xl font-semibold">Web & Mobile App Development</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Build stunning, high-performance web and mobile applications with our
                expert development team. We focus on user experience, scalability, and
                seamless functionality across all devices.
              </p>
            </div>

            {/* Item 3 */}
            <div className="max-w-md">
              <h3 className="mb-2 text-xl font-semibold">Blockchain & Web3 Solutions</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Leverage the power of blockchain technology with secure and decentralized
                solutions, including smart contracts, NFT platforms, and decentralized apps
                (dApps).
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10 text-left">
            {/* Item 1 */}
            <div className="max-w-md">
              <h3 className="mb-2 text-xl font-semibold">AI & Machine Learning</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Enhance your business with AI-driven solutions, including predictive analytics,
                chatbots, automation, and intelligent decision-making tools.
              </p>
            </div>

            {/* Item 2 */}
            <div className="max-w-md">
              <h3 className="mb-2 text-xl font-semibold">UI/UX Design & Branding</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Create visually appealing and user-friendly designs with our UI/UX expertise.
                From wireframes to interactive prototypes, we ensure a seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
