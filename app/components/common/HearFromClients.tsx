"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import clientInterview from "@/public/images/client-interview.png";

const clientsData = [
  {
    name: "Micheal Faraday",
    role: "CEO Mount Technologies",
    image: clientInterview,
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
];

export default function HearFromClients() {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const currentClient = clientsData[currentClientIndex];

  const handlePrev = () => {
    setCurrentClientIndex((prevIndex) =>
      prevIndex === 0 ? clientsData.length - 1 : prevIndex - 1
    );
  };

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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Hear From Our <span className="text-[#004953]">Clients</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            Empowering businesses with cutting-edge software solutions &mdash;
            hear how our clients have transformed with our expertise.
          </motion.p>

          {/* Arrows + Client Info */}
          <div className="space-y-4">
            {/* Navigation Arrows */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
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
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
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
              </motion.button>
            </div>

            {/* Current Client Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentClient.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold">{currentClient.name}</h3>
                <p className="text-sm text-gray-500">{currentClient.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Image/Video with Play Button */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentClient.image.src}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Image
                src={currentClient.image}
                alt={currentClient.name}
                width={800}
                height={500}
                className="h-auto w-full object-cover rounded-lg shadow-md"
              />
            </motion.div>
          </AnimatePresence>

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
