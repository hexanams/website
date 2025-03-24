import React from 'react'
import Navbar from '../components/organisms/Navbar'
import HeroBanner from '../components/common/HeroBanner'
import BrainstormIdeateBuildSection from '../components/common/BrainstormIdeateBuildSection'
import SubscribeSection from '../components/common/SubscribeSection'
import OurProjects from '../components/organisms/portfolioComponent/OurProjects'

function page() {
  return (
    <div>
      <Navbar />
      <HeroBanner
        title="Portfolio"
        subtitle="Showcasing innovation, design, and technology—explore our work and see what we create!"
        highlightColor="#E3FF52"
      />
      <OurProjects />
      <BrainstormIdeateBuildSection />
      <SubscribeSection />
    </div>
  )
}

export default page
