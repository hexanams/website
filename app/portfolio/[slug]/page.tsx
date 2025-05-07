"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/app/components/organisms/Navbar";
import BrainstormIdeateBuildSection from "@/app/components/common/BrainstormIdeateBuildSection";
import SubscribeSection from "@/app/components/common/SubscribeSection";
import projectsData, { ProjectData } from "@/app/data/projectsData";
import PortfolioHeroBanner from "@/app/components/common/PortfolioHeroBanner";

// Simple Accordion component
function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 mb-4">
      <button
        className="w-full text-left py-3 flex justify-between items-center focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-xl font-semibold">{title}</span>
        <span className="text-2xl" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pt-2 text-gray-200 leading-relaxed">{children}</div>}
    </div>
  );
}

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [slug, setSlug] = useState<string | null>(null);
  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    (async () => {
      const { slug } = await params;
      setSlug(slug);
      setProject(projectsData.find((p) => p.id === slug) || null);
    })();
  }, [params]);

  if (slug === null) {
    return <p className="text-white text-center mt-10">Loading…</p>;
  }
  if (!project) {
    notFound();
  }

  // Gather all optional sections dynamically
  const optionalSections: { title?: string; content?: string | string[]; isList?: boolean }[] =
    [
      { title: project.challengeTitle, content: project.challengeParagraph },
      { title: project.solutionTitle, content: project.solutionParagraph },
      { title: project.techStackTitle, content: project.techStackList, isList: true },
      { title: project.featuresTitle, content: project.featuresList, isList: true },
      { title: project.uxTitle, content: project.uxParagraph },
      { title: project.performanceTitle, content: project.performanceParagraph },
      { title: project.securityTitle, content: project.securityParagraph },
      { title: project.timelineTitle, content: project.timelineParagraph },
      { title: project.resultsTitle, content: project.resultsList, isList: true },
      { title: project.postLaunchTitle, content: project.postLaunchParagraph },
    ];

  return (
    <>
      <Head>
        <title>{project.projectTitle} | Hex Innovations</title>
        <meta name="description" content={project.introParagraphOne} />
        <meta property="og:title" content={project.projectTitle} />
        <meta property="og:description" content={project.introParagraphOne} />
        <meta property="og:image" content={project.topImage.src} />
      </Head>

      <Navbar />

      <PortfolioHeroBanner
        title={project.projectTitle} 
        subtitle={project.introParagraphOne}
        highlightColor="#E3FF52"
      />

      <section className="bg-[#262730] text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Image */}
          <div className="relative mb-10 rounded-md overflow-hidden shadow-lg">
            <Image
              src={project.topImage}
              alt={project.topImageAlt}
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Intro */}
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="mb-9 text-gray-200">{project.introParagraphTwo}</p>


          {/* Accordion Case‑Study Sections */}
          {optionalSections.map(({ title, content, isList }, i) =>
            title && content ? (
              <Accordion key={i} title={title}>
                {isList && Array.isArray(content) ? (
                  <ul className="list-disc pl-6 space-y-1">
                    {content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{content}</p>
                )}
              </Accordion>
            ) : null
          )}

          {/* Section with Side‑by‑Side Image & HTML */}
          <div className="flex flex-col md:flex-row gap-8 my-10">
            <div className="flex-1 prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-3">{project.sectionTitle}</h2>
              <div dangerouslySetInnerHTML={{ __html: project.sectionParagraph }} />
            </div>
            <div className="flex-1 rounded-md overflow-hidden shadow-lg">
              <Image
                src={project.sectionImage}
                alt={project.sectionImageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>


          {/* Bottom Paragraphs */}
          <div className="prose prose-invert mb-6" dangerouslySetInnerHTML={{ __html: project.bottomParagraphOne }} />
          <div className="prose prose-invert mb-10" dangerouslySetInnerHTML={{ __html: project.bottomParagraphTwo }} />

          {/* Final CTA */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block text-lg font-medium text-white  border-white border-b-2  hover:text-gray-300 transition"
              aria-label={`Contact Hex Innovations about ${project.projectTitle}`}
            >
              {project.ctaLabel}
            </a>
          </div>
        </div>
      </section>

      <BrainstormIdeateBuildSection />
      <SubscribeSection />
    </>
  );
}
