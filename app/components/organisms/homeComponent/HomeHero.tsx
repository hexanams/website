// app/components/organisms/homeComponent/HomeHero.tsx
import React from "react";
import MarqueeBanner from "./MarqueeBanner";
import SoftwareShowcase from "./SoftwareShowcase";
import Navbar from "../Navbar";
import ServicesSection from "./ServicesSection";
import LeadingCompanySection from "./LeadingCompanySection";
import LatestProjects from "./LatestProjects";
import HearFromClients from "./HearFromClients";
import TechnologyExpertise from "./TechnologyExpertise";
import SubscribeSection from "../../common/SubscribeSection";

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
