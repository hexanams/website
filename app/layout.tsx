import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/components/organisms/Footer";

export const metadata: Metadata = {
  title: "Hex Innovations | Software & Digital Excellence",
  description:
    "Hex Innovations is a global software development agency delivering custom, agile solutions for digital transformation and enterprise growth. Discover innovation that scales.",
  keywords:
    "Global Software Development, International Software Agency, Custom Software Solutions, Offshore Software Development, Agile Software Development, Digital Transformation Services, Enterprise Software Development, Scalable Software Solutions, Technology Innovation, Software Development Outsourcing",
  openGraph: {
    title: "Hex Innovations | Software & Digital Excellence",
    description: "Innovative solutions in software, AI, and web development.",
    url: "https://hexng.com",
    siteName: "Hex Innovations",
    images: [
      {
        url: "https://hexng.com/icons/HEX-white.png",
        width: 1200,
        height: 630,
        alt: "Hex Innovations - Software & Digital Excellence",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hex Innovations | Software & Digital Excellence",
    description: "Innovative solutions in software, AI, and web development.",
    images: [
      {
        url: "https://hexng.com/icons/HEX-white.png",
        width: 1200,
        height: 630,
        alt: "Hex Innovations - Software & Digital Excellence",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/web-app-manifest-192x192.png" />
        <link rel="apple-touch-icon" href="/web-app-manifest-512x512.png" />
      </head>
      <body className="antialiased">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
