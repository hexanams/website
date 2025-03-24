"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaArrowDown } from "react-icons/fa";

export default function SoftwareShowcase() {
  return (
    <section className="bg-white py-7">
      <div className="mx-auto max-w-3xl px-4 text-center">
        {/* Rating + Reviews */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-6 flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-3 sm:space-y-0"
        >
          <div className="flex flex-col items-center justify-center">
          <div className="flex items-center">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStarHalfAlt className="text-yellow-400" />
            <span className="ml-2 text-sm font-medium">4.5</span>
          </div>

          <div className="">
            <span className="text-sm font-[400] text-[#1B1C1E]">
              50+ reviews on{" "}
            </span>
            <span>
              <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline hover:text-[#004953]"
                >
                  Clutch.co
                </a>
            </span>
          </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-4 text-4xl font-[400] tracking-tight text-[#000000] sm:text-[62px] sm:leading-[100%]"
        >
          We create <span className="text-[#004953]">Software</span>
          <br />
          & Digital Excellence
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-8 font-[400] lg:w-[656px] h-[46px] text-base leading-relaxed"
        >
          You focus on big the ideas, launching globally and we&apos;ll handle the code. From ideation to launch,
           we make digital magic happen—no stress, no mess, one line of code at a time!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="\projects"
            className="
              relative inline-flex items-center justify-center w-80 h-[48px]
              rounded-full border border-white
              bg-[#004953] text-white
              text-base font-medium
              transition-colors duration-200
              hover:bg-[#006B6B]
              focus:outline-none focus:ring-2 focus:ring-teal-300
            "
          >
            <span>Learn About Us</span>
            {/* Circle popping out on the right */}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute -right-5 top-1/2
                flex h-10 w-10 -translate-y-1/2
                items-center justify-center
                rounded-full bg-[#004953] border border-white
              "
            >
              {" "}<FaArrowDown className="h-4 w-7" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
