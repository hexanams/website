"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BrainStormIdeateBuild from "@/public/images/brainstorm-ideate-build.png";

const textVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const circleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.2 },
};

export default function BrainstormIdeateBuildSection() {
  return (
    <section className="relative w-full">
      {/* Container for the image and overlays */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full h-[500px]"
      >
        {/* Main Image */}
        <Image
          width={900}
          height={900}
          src={BrainStormIdeateBuild}
          alt="Brainstorm, Ideate, Build"
          className="w-full h-full object-cover"
        />

        {/* Circle + Text #1: Brainstorm */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute flex items-center"
          style={{ top: "20%", left: "10%" }}
        >
          <motion.div
            variants={circleVariants}
            whileHover="hover"
            className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#6A5ACD] mr-2"
          />
          <motion.span variants={textVariants} className="text-white text-[40px] md:text-[64px] font-bold">
            Brainstorm
          </motion.span>
        </motion.div>

        {/* Circle + Text #2: Build */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute flex items-center"
          style={{ bottom: "15%", left: "45%" }}
        >
          <motion.div
            variants={circleVariants}
            whileHover="hover"
            className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#1DA1F2] mr-2"
          />
          <motion.span variants={textVariants} className="text-white text-[40px] md:text-[64px] font-bold">
            Build
          </motion.span>
        </motion.div>

        {/* Circle + Text #3: Ideate */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute flex items-center"
          style={{ top: "39%", right: "17%" }}
        >
          <motion.div
            variants={circleVariants}
            whileHover="hover"
            className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#FF69B4] mr-2"
          />
          <motion.span variants={textVariants} className="text-white text-[40px] md:text-[64px] font-bold">
            Ideate
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
