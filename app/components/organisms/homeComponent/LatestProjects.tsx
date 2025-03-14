"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/app/data/projectsData";

export default function LatestProjects(): React.ReactElement {
  // Get only the first four projects
  const latestProjects = projectsData.slice(0, 4);

  return (
    <section className="bg-[#262730] text-[#FFFFFF] py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Latest Projects</h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {latestProjects.map((project) => (
            <div key={project.id} className="space-y-3">
              <Image
                src={project.cardImage}
                alt={project.cardAlt}
                width={500}
                height={339}
                className="h-auto w-full object-cover"
              />

              <h3 className="text-xl font-semibold sm:text-2xl">
                {project.cardTitle}
              </h3>

              <p className="text-sm text-gray-300">{project.cardDescription}</p>

              <Link
                href={`/projects/${project.id}`}
                className="inline-block text-sm font-medium text-[#FFFFFF] underline hover:text-gray-300"
              >
                Explore Project
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button at the bottom */}
        <div className="mt-10 text-center">
          <a
            href="/portfolio"
            className="
              inline-flex items-center rounded-full 
              bg-[#262730] border border-[#FFFFFF] px-6 py-3 text-sm font-semibold text-white 
              transition-colors duration-200 
              hover:bg-[#FFFFFF] hover:text-[#262730]
              focus:outline-none focus:ring-2 focus:ring-teal-300
            "
          >
            Explore Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
