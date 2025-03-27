// In your Home page file (e.g., app/page.tsx or pages/index.tsx)
import React from "react";
import HomeHero from "./components/organisms/homeComponent/HomeHero";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hex Innovations | Global Software Development Agency",
  description:
    "Hex Innovations delivers innovative software development solutions globally. We transform ideas into scalable, high-performance digital products.",
  keywords:
    "Home, Global Software Development, Digital Transformation, Software Agency, Hex Innovations",
  openGraph: {
    title: "Hex Innovations | Global Software Development Agency",
    description:
      "Discover innovative software development solutions at Hex Innovations. We create cutting-edge technology products for global enterprises.",
    url: "https://hexng.com/",
    siteName: "Hex Innovations",
    images: [
      {
        url: "https://hexng.com/icons/HEX-logo.png",
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
        url: "https://hexng.com/icons/HEX-logo.png",
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
