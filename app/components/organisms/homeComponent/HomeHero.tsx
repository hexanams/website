// app/components/organisms/homeComponent/HomeHero.tsx
import React from "react";
import MarqueeBanner from "./MarqueeBanner";
import SoftwareShowcase from "./SoftwareShowcase";
import Navbar from "../Navbar";
import ServicesSection from "./ServicesSection";
import LeadingCompanySection from "./LeadingCompanySection";
import LatestProjects from "./LatestProjects";
import SubscribeSection from "../../common/SubscribeSection";
import HearFromClients from "../../common/HearFromClients";
import TechnologyExpertise from "../../common/TechnologyExpertise";

function HomeHero() {
  return (
    <div className="w-full">
      <MarqueeBanner />
      <SoftwareShowcase />
      {/* Navbar appears below the hero, but is sticky/fixed on scroll */}
      <Navbar />
      <ServicesSection />
      <LeadingCompanySection />
      <LatestProjects />
      <HearFromClients />
      <TechnologyExpertise />
      <SubscribeSection />
    </div>
  );
}

export default HomeHero;
