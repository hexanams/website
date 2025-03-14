"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/organisms/Navbar";
import HeroBanner from "@/app/components/common/HeroBanner";
import BrainstormIdeateBuildSection from "@/app/components/common/BrainstormIdeateBuildSection";
import SubscribeSection from "@/app/components/common/SubscribeSection";
import projectsData from "@/app/data/projectsData";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [slug, setSlug] = useState<string | null>(null);
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);

      // Find project after resolving slug
      const foundProject = projectsData.find((p) => p.id === resolvedParams.slug);
      setProject(foundProject);
    }

    fetchParams();
  }, [params]);

  if (slug === null) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  if (!project) {
    notFound();
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Optional Hero Banner */}
      <HeroBanner
        title="Project Detail"
        subtitle="Showcasing innovation, design, and technology—explore our work and see what we create!"
        highlightColor="#C8FF00"
      />

      {/* Main content section */}
      <section className="bg-[#262730] text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Top Image */}
          <div className="relative mb-10 w-full h-auto">
            <Image
              src={project.topImage}
              alt={project.topImageAlt}
              width={1200}
              height={700}
              className="w-full h-auto object-cover rounded-md"
              priority
            />
          </div>

          {/* Project Title */}
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {project.projectTitle}
          </h1>

          {/* Intro Paragraphs */}
          <p className="mb-6 text-sm leading-relaxed text-gray-200 sm:text-base">
            {project.introParagraphOne}
          </p>
          <p className="mb-10 text-sm leading-relaxed text-gray-200 sm:text-base">
            {project.introParagraphTwo}
          </p>

          {/* Middle Section */}
          <div className="flex flex-col gap-8 md:flex-row md:items-start mb-10">
            <div className="flex-1">
              <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
                {project.sectionTitle}
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-gray-200 sm:text-base">
                {project.sectionParagraph}
              </p>
            </div>
            <div className="flex-1">
              <Image
                src={project.sectionImage}
                alt={project.sectionImageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>

          {/* Bottom Paragraphs */}
          <p className="mb-6 text-sm leading-relaxed text-gray-200 sm:text-base">
            {project.bottomParagraphOne}
          </p>
          <p className="mb-8 text-sm leading-relaxed text-gray-200 sm:text-base">
            {project.bottomParagraphTwo}
          </p>

          {/* CTA Button */}
          <a
            href="/contact-us"
            className="inline-block px-6 py-3 text-white underline font-semibold rounded-md hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            {project.ctaLabel}
          </a>
        </div>
      </section>

      {/* Additional Sections */}
      <BrainstormIdeateBuildSection />
      <SubscribeSection />
    </div>
  );
}
