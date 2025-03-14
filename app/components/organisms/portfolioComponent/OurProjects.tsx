"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import  projectsData  from "@/app/data/projectsData";

export default function OurProjects(): React.ReactElement {
  return (
    <section className="bg-[#262730] text-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Latest Projects</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projectsData.map((project) => (
            <div key={project.id} className="space-y-3">
              <Image
                src={project.cardImage}
                alt={project.cardAlt}
                width={500}
                height={339}
                className="w-full h-auto object-cover"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
