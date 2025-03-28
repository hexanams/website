// In your Services page file (e.g., app/services/page.tsx or pages/services.tsx)
import React from "react";
import Navbar from "../components/organisms/Navbar";
import HeroBanner from "../components/common/HeroBanner";
import ServiceCatalog from "../components/organisms/SeviceComponent/ServiceCatalog";
import BrainstormIdeateBuildSection from "../components/common/BrainstormIdeateBuildSection";
import SubscribeSection from "../components/common/SubscribeSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Our Services | Hex Innovations",
  description:
    "Explore our services including software development, mobile app development, web applications, and digital transformation. We bring your ideas to life.",
  keywords:
    "Services, Software Development, Mobile Apps, Web Applications, Digital Transformation, Hex Innovations",
  openGraph: {
    title: "Our Services | Hex Innovations",
    description:
      "Discover the range of services offered by Hex Innovations. From software design to digital transformation, we innovate globally.",
    url: "https://hexng.com/services",
    siteName: "Hex Innovations",
    images: [
      {
        url: "https://hexng.com/icons/HEX-white.png",
        width: 1200,
        height: 630,
        alt: "Hex Innovations - Our Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Hex Innovations",
    description:
      "Discover the range of services offered by Hex Innovations. From software design to digital transformation, we innovate globally.",
    images: [
      {
        url: "https://hexng.com/icons/HEX-white.png",
        width: 1200,
        height: 630,
        alt: "Hex Innovations - Our Services",
      },
    ],
  },
};

function ServicesPage() {
  return (
    <div>
      <Navbar />
      <HeroBanner
        title="Services"
        subtitle="Let’s just say that we bring your ideas to life. With modern technologies and stacks, we walk with you from ideation to launching your products together!"
        highlightColor="#E3FF52"
      />
      <ServiceCatalog />
      <BrainstormIdeateBuildSection />
      <SubscribeSection />
    </div>
  );
}

export default ServicesPage;
