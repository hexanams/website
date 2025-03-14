"use client";

import React from "react";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden md:block absolute top-[-8] left-40 h-16 w-16 rounded-full z-0"
            style={{ backgroundColor: highlightColor }}
          />

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10 text-4xl font-bold text-black sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10 mt-4 text-base text-gray-700 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Right Column (blank) */}
        <div className="md:w-1/2" />
      </div>
    </section>
  );
}
