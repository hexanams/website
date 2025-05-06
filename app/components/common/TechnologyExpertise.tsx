"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const techData = [
  { name: "Figma", icon: "/icons/tech-figma.svg" },
  { name: "AWS", icon: "/icons/tech-aws.svg" },
  { name: "Flutter", icon: "/icons/tech-flutter.svg" },
  { name: "Azure", icon: "/icons/tech-azure.svg" },
  { name: "NodeJS", icon: "/icons/tech-nodejs.svg" },
  { name: "WordPress", icon: "/icons/tech-wordpress.svg" },
  { name: "React", icon: "/icons/tech-react.svg" },
  { name: "PHP", icon: "/icons/tech-php.svg" },
  { name: "JavaScript", icon: "/icons/tech-js.svg" },
  { name: "Photoshop", icon: "/icons/tech-photoshop.svg" },
  { name: "WooCommerce", icon: "/icons/tech-woocommerce.svg" },
  { name: "Google Analytics", icon: "/icons/tech-ga.svg" },
];

export default function TechnologyExpertise() {
  return (
    <section
      className="relative text-white py-12"
      style={{
        backgroundImage: 'url("/images/tech-expertise.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Teal overlay */}
      <div className="absolute inset-0 bg-[#0D4F4F]/90" />
      <div className="relative mx-auto max-w-5xl container px-4 sm:px-8  lg:py-14">
      {/* Content Container */}
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold sm:text-[64px] sm:leading-[72px] mb-4"
        >
          Technology Expertise
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-0 mb-10 max-w-2xl text-base leading-relaxed text-gray-100 sm:text-[16px]"
        >
          Our team leverages the latest tools and frameworks to build software that drives efficiency, 
          enhances performance, and keeps businesses ahead in an ever-evolving digital world.
        </motion.p>

        {/* Technology Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {techData.map((tech, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col rounded-lg bg-[#1B1C1E] p-6 transition-colors hover:bg-[#2A2B2D]"
            >
              {/* Icon */}
              <div className="mb-4 relative h-12 w-12">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Technology Name */}
              <h3 className="text-base font-medium sm:text-lg">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  );
}
