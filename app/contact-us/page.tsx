"use client";

import React from "react";
import Navbar from "../components/organisms/Navbar";
import HeroBanner from "../components/common/HeroBanner";
import ContactFormSection from "../components/organisms/contactComponent/ContactFormSection";
import SubscribeSection from "../components/common/SubscribeSection";
export default function ContactPage() {
  return (
    <div>
      <Navbar />
      {/* Hero Banner */}
      <HeroBanner
        title="Contact Us"
        subtitle="Have a project in mind? Let's bring it to life! 🚀 Contact us today!"
        highlightColor="#C8FF00"
      />

      {/* Contact Form Section */}
      <ContactFormSection />
      <SubscribeSection />
    </div>
  );
}
