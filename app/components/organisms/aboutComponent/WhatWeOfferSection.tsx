"use client";

import React from "react";
import { motion } from "framer-motion";
import HighlightSVG from "@/public/icons/highlight.svg"; 
import Image from "next/image";
import Link from "next/link";

export default function WhatWeOfferSection() {
  return (
    <section className="relative bg-[#1B1C1E] text-white py-20 px-6">
      <div className="container mx-auto">
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
         Our Culture: Innovate, Build, Love
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
                title: "Creative First, Code Second",
                description:
                  "Every project starts with deep thinking, brainstorming, and a sprinkle of wild ideas before we even write a single line of code.",
              },
              {
                title: "Collaboration is Key",
                description:
                  "Designers, developers, video editors, and strategists work hand in hand to bring products to life with seamless execution",
              },
              {
                title: "Pushing Boundaries",
                description:
                  " We don’t do “just good enough.” We challenge ourselves to build products that solves real problems, surprises, and actually makes a difference.",
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
                title: "Fast, Fun, and Fearless",
                description:
                  "Innovation shouldn’t feel like a chore. We experiment, iterate, and move fast—without ever losing our sense of humor",
              },
              {
                title: "Built with Love",
                description:
                  "Passion fuels everything we do. We craft every product with care, empathy, and a genuine love for creating solutions that matter.",
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
            {/* Get In Touch Button */}
            <div className="pt-6">
                <Link href="/contact-us">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-md transition hover:bg-gray-200"
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
