import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/organisms/Navbar";
import HeroBanner from "@/app/components/common/HeroBanner";
import projectsData from "@/app/data/projectsData";
import BrainstormIdeateBuildSection from "@/app/components/common/BrainstormIdeateBuildSection";
import SubscribeSection from "@/app/components/common/SubscribeSection";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.id }));
}

export default async function ProjectDetailPage({
  params,
  searchParams,
}: ProjectDetailPageProps): Promise<React.ReactElement> {
  // Directly destructure params without awaiting
  const { slug } = params;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner
        title="Project Detail"
        subtitle="Showcasing innovation, design, and technology—explore our work and see what we create!"
        highlightColor="#C8FF00"
      />

      {/* Main content section */}
      <section className="bg-[#262730] text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Top image */}
          <div className="relative w-full h-auto mb-10">
            <Image
              src={project.topImage}
              alt={project.topImageAlt}
              width={1200}
              height={700}
              className="object-cover w-full rounded-md"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {project.projectTitle}
          </h1>

          {/* Intro Paragraph One */}
          <p className="mb-6 text-sm leading-relaxed text-gray-200 sm:text-base">
            {project.introParagraphOne}
          </p>

          {/* Intro Paragraph Two */}
          <p className="mb-10 text-sm leading-relaxed text-gray-200 sm:text-base">
            {project.introParagraphTwo}
          </p>

          {/* Section area */}
          <div className="flex flex-col gap-8 md:flex-row md:items-start mb-10">
            <div className="flex-1">
              {/* Section Title */}
              <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
                {project.sectionTitle}
              </h2>

              {/* Section Paragraph */}
              <p className="mb-8 text-sm leading-relaxed text-gray-200 sm:text-base">
                {project.sectionParagraph}
              </p>
            </div>
            <div className="flex-1 relative">
              <Image
                src={project.sectionImage}
                alt={project.sectionImageAlt}
                width={600}
                height={400}
                className="object-cover w-full rounded-md"
              />
            </div>
          </div>

          {/* Bottom Paragraph One */}
          <p className="mb-6 text-sm leading-relaxed text-gray-200 sm:text-base">
            {project.bottomParagraphOne}
          </p>

          {/* Bottom Paragraph Two */}
          <p className="mb-8 text-sm leading-relaxed text-gray-200 sm:text-base">
            {project.bottomParagraphTwo}
          </p>

          {/* CTA Button */}
          <a
            href="/contact-us"
            className="inline-block px-6 py-3 leading-tight text-[#ffffff] underline font-semibold rounded-md hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            {project.ctaLabel}
          </a>
        </div>
      </section>

      {/* Additional sections */}
      <BrainstormIdeateBuildSection />
      <SubscribeSection />
    </div>
  );
}
