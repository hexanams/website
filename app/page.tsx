import React from "react";
import HomeHero from "./components/organisms/homeComponent/HomeHero";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hex Innovations | Global Software Development Agency",
  description:
    "Hex Innovations is a global software development agency delivering custom, agile solutions for digital transformation and enterprise growth. Discover innovation that scales.",
  keywords:
    "Global Software Development, International Software Agency, Custom Software Solutions, Offshore Software Development, Agile Software Development, Digital Transformation Services, Enterprise Software Development, Scalable Software Solutions, Technology Innovation, Software Development Outsourcing",
  openGraph: {
    title: "Hex Innovations | Global Software Development Agency",
    description:
      "Discover innovative software development solutions at Hex Innovations. We create cutting-edge technology products for global enterprises.",
    url: "https://hexng.com/",
    siteName: "Hex Innovations",
    images: [
      {
        url: "https://hexng.com/icons/HEX-white.png",
        width: 1200,
        height: 630,
        alt: "Hex Innovations - Global Software Development Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hex Innovations | Global Software Development Agency",
    description:
      "Discover innovative software development solutions at Hex Innovations. We create cutting-edge technology products for global enterprises.",
    images: [
      {
        url: "https://hexng.com/icons/HEX-white.png",
        width: 1200,
        height: 630,
        alt: "Hex Innovations - Global Software Development Agency",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <HomeHero />
    </main>
  );
}
