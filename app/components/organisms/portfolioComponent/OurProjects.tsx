// components/OurProjects.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/app/data/projectsData";

export default function OurProjects(): React.ReactElement {
  const [mounted, setMounted] = useState(false);

  // Only render the animated grid on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-[#262730] text-white py-20">
      <div className="mx-auto max-w-4xl container px-6">
        {/* Heading (SSR + CSR) */}
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
          Latest Projects
        </h2>

        {/* Animated grid only after mount */}
        {mounted && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
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
                className="space-y-3 p-4 rounded-lg shadow-lg transition-transform"
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
                <p className="text-sm text-gray-300">
                  {project.cardDescription}
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block text-lg font-medium text-white  border-white border-b-2  hover:text-gray-300 transition "
                >
                  Explore Project
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
