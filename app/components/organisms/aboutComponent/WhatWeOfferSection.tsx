"use client";

import React from "react";
import { motion } from "framer-motion";
import HighlightSVG from "@/public/icons/highlight.svg"; 
import Image from "next/image";

export default function WhatWeOfferSection() {
  return (
    <section className="mx-auto relative bg-[#1B1C1E] text-white py-20 px-6">
      {/* Highlight SVG */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="hidden md:block absolute top-30 right-30 w-16 h-16"
      >
        <Image 
          src={HighlightSVG} 
          alt="Highlight" 
          className="w-full h-full"
          width={100}
          height={100} 
        />
      </motion.div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-5xl font-bold sm:text-5xl"
        >
          What We Offer
        </motion.h2>

        {/* Two-column Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2"
        >
          {/* Left Column */}
          <div className="space-y-10 text-left">
            {/* Service Items */}
            {[
              {
                title: "Custom Software Development",
                description:
                  "We craft tailored software solutions that enhance business operations, improve efficiency, and drive innovation. Whether it’s enterprise applications or custom SaaS products, we’ve got you covered.",
              },
              {
                title: "Web & Mobile App Development",
                description:
                  "Build stunning, high-performance web and mobile applications with our expert development team. We focus on user experience, scalability, and seamless functionality across all devices.",
              },
              {
                title: "Blockchain & Web3 Solutions",
                description:
                  "Leverage the power of blockchain technology with secure and decentralized solutions, including smart contracts, NFT platforms, and decentralized apps (dApps).",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="max-w-md"
              >
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="mb-2 text-xl font-semibold"
                >
                  {item.title}
                </motion.h3>
                <p className="text-sm leading-relaxed text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-10 text-left">
            {/* Service Items */}
            {[
              {
                title: "AI & Machine Learning",
                description:
                  "Enhance your business with AI-driven solutions, including predictive analytics, chatbots, automation, and intelligent decision-making tools.",
              },
              {
                title: "UI/UX Design & Branding",
                description:
                  "Create visually appealing and user-friendly designs with our UI/UX expertise. From wireframes to interactive prototypes, we ensure a seamless user experience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="max-w-md"
              >
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="mb-2 text-xl font-semibold"
                >
                  {item.title}
                </motion.h3>
                <p className="text-sm leading-relaxed text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
