"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/app/data/projectsData";

export default function LatestProjects(): React.ReactElement {
  // Get only the first four projects
  const latestProjects = projectsData.slice(0, 4);

  return (
    <section className="bg-[#262730] text-[#FFFFFF] mx-auto py-20">
      <div className="mx-auto max-w-4xl container px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8 text-3xl font-bold sm:text-4xl"
        >
          Latest Projects
        </motion.h2>

        {/* Project Grid */}
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
          {latestProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="space-y-3"
            >
              <Image
                src={project.cardImage}
                alt={project.cardAlt}
                width={500}
                height={339}
                className="h-auto w-full object-cover rounded-lg shadow-md"
              />

              <h3 className="text-xl font-semibold sm:text-2xl">
                {project.cardTitle}
              </h3>

              <p className="text-sm text-gray-300">{project.cardDescription}</p>

              
                <Link
                  href={`/portfolio/${project.id}`}
                  className="inline-block text-lg font-medium text-white  border-white border-b-2  hover:text-gray-300 transition "
                >
                  Explore Project
                </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/portfolio"
            className="
              inline-flex items-center rounded-full 
              bg-[#262730] border border-[#FFFFFF] px-6 py-3 text-sm font-semibold text-white 
              transition-colors duration-200 
              hover:bg-[#FFFFFF] hover:text-[#262730]
              focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] focus:ring-offset-2
            "
          >
            Explore Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
