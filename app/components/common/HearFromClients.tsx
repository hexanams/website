"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
    <section className="bg-white text-[#1B1C1E] pt-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Heading & Subheading */}
        <div className="text-center mx-auto max-w-4xl container mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold sm:text-5xl"
          >
            Hear From Our <span className="text-[#004953]">Clients</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mt-4"
          >
            Empowering businesses with cutting-edge software solutions &mdash;
            hear how our clients have transformed with our expertise.
          </motion.p>
        </div>

        {/* Bottom Section: Client Info & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-around">
          {/* LEFT COLUMN: Arrows, Name, Role */}
          <div className="flex flex-col items-center justify-space-between space-y-6 md:-mr-[15rem]">
          <div>
                <h3 className="text-xl font-semibold">{currentClient.name}</h3>
                <p className="text-gray-600">{currentClient.role}</p>
              </div>
            <div className="flex items-center space-x-6">
               
              {/* Left Arrow */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <FaChevronLeft className="text-xl" />
              </motion.button>
             
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="p-3 bg-[#004953] text-white rounded-full hover:bg-[#003b40]"
              >
                <FaChevronRight className="text-xl" />
              </motion.button>
            </div>
          </div>

          {/* RIGHT COLUMN: Image + Play Overlay */}
          <div className="relative w-full max-w-2xl mx-auto md:-mr-19">
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
              className="absolute inset-0 flex items-center justify-center bg-black/30 text-white transition-colors hover:bg-black/50"
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
      </div>
    </section>
  );
}
