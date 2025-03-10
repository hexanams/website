"use client";

import React from "react";
import Image from "next/image";
import clishaReview from "@/public/images/clisha-review.png";

const projectsData = [
  {
    image: clishaReview,
    alt: "Creqe Mobile App",
    title: "Creqe Mobile App",
    subtitle: "Send & Receive Money. Give & Receive Loans",
    description:
      "Transform your ideas into reality with our expert software development services. From robust web solutions to scalable mobile apps, we tailor solutions to your business needs. Let’s create something amazing together!",
    link: "#",
  },
  {
    image: clishaReview,
    alt: "Clisha Review",
    title: "Clisha Review",
    description:
      "Transform your ideas into reality with our expert software development services. We specialize in seamless, scalable, and user-centric solutions that help you stand out.",
    link: "#",
  },
  {
    image: clishaReview,
    alt: "Clisha Review",
    title: "Clisha Review",
    description:
      "Transform your ideas into reality with our expert software development services. We specialize in seamless, scalable, and user-centric solutions that help you stand out.",
    link: "#",
  },
  {
    image: clishaReview,
    alt: "Clisha Review",
    title: "Clisha Review",
    description:
      "Transform your ideas into reality with our expert software development services. We specialize in seamless, scalable, and user-centric solutions that help you stand out.",
    link: "#",
  },
];

export default function LatestProjects() {
  return (
    <section className="bg-[#262730] text-[#FFFFFF] py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Latest Projects</h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projectsData.map((project, index) => (
            <div key={index} className="space-y-3">
              <Image
                src={project.image}
                alt={project.alt}
                width={500}
                height={339}
                className="h-auto w-full object-cover"
              />

              <h3 className="text-xl font-semibold sm:text-2xl">
                {project.title}
              </h3>

              {/* Optional subtitle if present */}
              {project.subtitle && (
                <p className="text-sm text-gray-400">{project.subtitle}</p>
              )}

              <p className="text-sm text-gray-300">{project.description}</p>

              <a
                href={project.link}
                className="inline-block text-sm font-medium text-[#FFFFFF] underline hover:text-gray-300"
              >
                Explore Project
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button at the bottom */}
        <div className="mt-10 text-center">
          <a
            href="#"
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
