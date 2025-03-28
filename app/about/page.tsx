import React from "react";
import Navbar from "../components/organisms/Navbar";
import HeroBanner from "../components/common/HeroBanner";
import ourTeam from "../../public/images/our-team.png";
import Image from "next/image";
import HearFromClients from "../components/common/HearFromClients";
import TechnologyExpertise from "../components/common/TechnologyExpertise";
import LeadingCompanyShowcase from "../components/organisms/aboutComponent/LeadingCompanyShowcase";
import WhatWeOfferSection from "../components/organisms/aboutComponent/WhatWeOfferSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Hex Innovations",
  description:
    "Discover the story behind Hex Innovations, a leading software development agency. Learn about our mission, values, and expertise in delivering innovative digital solutions.",
  keywords:
    "About Us, Hex Innovations, Software Development, Digital Solutions, Our Team, Technology Experts",
  openGraph: {
    title: "About Us | Hex Innovations",
    description:
      "Hex Innovations is a global leader in software development. Get to know our team, vision, and commitment to innovation.",
    url: "https://hexng.com/about",
    siteName: "Hex Innovations",
    images: [
      {
        url: "https://hexng.com/images/our-team.png",
        width: 1200,
        height: 630,
        alt: "Hex Innovations - Our Team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Hex Innovations",
    description:
      "Meet the Hex Innovations team and explore our journey in delivering world-class software solutions.",
    images: [
      {
        url: "https://hexng.com/images/our-team.png",
        width: 1200,
        height: 630,
        alt: "Hex Innovations - Our Team",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <HeroBanner title="About Us" subtitle="From Chaos to Code - Read our story below" highlightColor="#E3FF52" />
      <main className="w-full">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
          <Image src={ourTeam} alt="Hex Innovations - Our Team" fill className="object-cover" priority />
        </div>
        <LeadingCompanyShowcase />
        <WhatWeOfferSection />
        <HearFromClients />
        <TechnologyExpertise />
      </main>
    </div>
  );
}
