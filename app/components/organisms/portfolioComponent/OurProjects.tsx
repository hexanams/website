"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/app/data/projectsData";

export default function OurProjects(): React.ReactElement {
  return (
    <section className="bg-[#262730] text-white py-20">
      <div className="mx-auto max-w-4xl container px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8 text-3xl font-bold sm:text-4xl"
        >
          Latest Projects
        </motion.h2>

        {/* Projects Grid */}
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
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="space-y-3  p-4 rounded-lg shadow-lg transition-transform"
            >
              <Image
                src={project.cardImage}
                alt={project.cardAlt}
                width={500}
                height={339}
                className="w-full h-auto object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold sm:text-2xl">
                {project.cardTitle}
              </h3>
              <p className="text-sm text-gray-300">{project.cardDescription}</p>
              <Link
                href={`/projects/${project.id}`}
                className="inline-block text-sm font-medium text-white underline hover:text-gray-300"
              >
                Explore Project
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
