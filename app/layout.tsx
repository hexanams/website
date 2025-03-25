import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/components/organisms/Footer";

export const metadata: Metadata = {
  title: "Hex Innovations | Software & Digital Excellence",
  description: "Hex Innovations specializes in cutting-edge software development, mobile applications, AI solutions, and digital transformation.",
  keywords: "software development, digital transformation, AI solutions, mobile applications, web development, cybersecurity",
  openGraph: {
    title: "Hex Innovations | Software & Digital Excellence",
    description: "Innovative solutions in software, AI, and web development.",
    url: "https://hexng.com",
    siteName: "Hex Innovations",
    images: [
      {
        url: "https://hexng.com/icons/HEX-logo.svg", // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "Hex Innovations - Software & Digital Excellence",
      },
    ],
    type: "website",
  },twitter: {
    card: "summary_large_image",
    title: "Hex Innovations | Software & Digital Excellence",
    description: "Innovative solutions in software, AI, and web development.",
    images: [
      {
        url: "https://hexng.com/icons/HEX-logo.svg", // Replace with actual Twitter image URL
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
      </head>
      <body className="antialiased">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
