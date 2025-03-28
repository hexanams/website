// In your Contact page file (e.g., app/contact/page.tsx or pages/contact.tsx)
import React from "react";
import Navbar from "../components/organisms/Navbar";
import HeroBanner from "../components/common/HeroBanner";
import ContactFormSection from "../components/organisms/contactComponent/ContactFormSection";
import SubscribeSection from "../components/common/SubscribeSection";
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Contact Us | Hex Innovations",
  description:
    "Have a project in mind? Let's bring it to life! Contact Hex Innovations today for innovative, global software development solutions.",
  keywords:
    "Contact, Global Software Development, Digital Transformation, Software Agency, Hex Innovations",
  openGraph: {
    title: "Contact Us | Hex Innovations",
    description:
      "Reach out to Hex Innovations for global software development solutions. Let's build innovative technology together.",
    url: "https://hexng.com/contact",
    siteName: "Hex Innovations",
    images: [
      {
        url: "/icons/HEX-white.png",
        width: 1200,
        height: 630,
        alt: "Hex Innovations - Contact Us",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Hex Innovations",
    description:
      "Reach out to Hex Innovations for global software development solutions. Let's build innovative technology together.",
    images: [
      {
        url: "/icons/HEX-white.png",
        width: 1200,
        height: 630,
        alt: "Hex Innovations - Contact Us",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <HeroBanner
        title="Contact Us"
        subtitle="Have a project in mind? Let's bring it to life! 🚀 Contact us today!"
        highlightColor="#E3FF52"
      />
      <ContactFormSection />
      <SubscribeSection />
    </div>
  );
}
