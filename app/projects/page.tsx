import React from "react";
import Navbar from "../components/organisms/Navbar";
import HeroBanner from "../components/common/HeroBanner";
import OurProjects from "../components/organisms/portfolioComponent/OurProjects";
import BrainstormIdeateBuildSection from "../components/common/BrainstormIdeateBuildSection";
import SubscribeSection from "../components/common/SubscribeSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Hex Innovations",
  description:
    "Showcasing our innovative projects in software development, mobile apps, web applications, and digital transformation. See our work and be inspired.",
  keywords:
    "Portfolio, Projects, Software Development, Mobile Apps, Digital Transformation, Hex Innovations",
  openGraph: {
    title: "Portfolio | Hex Innovations",
    description:
      "Explore our portfolio of innovative projects. Hex Innovations delivers cutting-edge technology solutions worldwide.",
    url: "https://hexng.com/portfolio",
    siteName: "Hex Innovations",
    images: [
      {
        url: "/icons/HEX-white.png",
        width: 1200,
        height: 630,
        alt: "Hex Innovations - Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Hex Innovations",
    description:
      "Explore our portfolio of innovative projects. Hex Innovations delivers cutting-edge technology solutions worldwide.",
    images: [
      {
        url: "/icons/HEX-white.png",
        width: 1200,
        height: 630,
        alt: "Hex Innovations - Portfolio",
      },
    ],
  },
};

export default function PortfolioPage() {
  return (
    <div>
      <Navbar />
      <HeroBanner title="Portfolio" subtitle="Showcasing innovation, design, and technology—explore our work and see what we create!" highlightColor="#E3FF52" />
      <OurProjects />
      <BrainstormIdeateBuildSection />
      <SubscribeSection />
    </div>
  );
}
