import React from 'react'
import Navbar from '../components/organisms/Navbar'
import HeroBanner from '../components/common/HeroBanner'
import ourTeam from '../../public/images/our-team.png'
import Image from 'next/image'
import HearFromClients from '../components/common/HearFromClients'
import TechnologyExpertise from '../components/common/TechnologyExpertise'
import LeadingCompanyShowcase from '../components/organisms/aboutComponent/LeadingCompanyShowcase'
import WhatWeOfferSection from '../components/organisms/aboutComponent/WhatWeOfferSection'

function page() {
  return (
    <div>
      <Navbar />
      <HeroBanner
        title="About Us"
        subtitle="From Chaos to Code - Read our story below"
        highlightColor="#C8FF00"
      />
      <main className="w-full">
        {/* Hero Image - full width */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
          <Image
            src={ourTeam} 
            alt="Our Team"
            fill
            className="object-cover"
            priority
          />
        </div>
        <LeadingCompanyShowcase />
        <WhatWeOfferSection />
        <HearFromClients />
        <TechnologyExpertise />
      </main>
    </div>
    
  )
}

export default page
