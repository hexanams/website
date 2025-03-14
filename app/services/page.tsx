import React from 'react'
import Navbar from '../components/organisms/Navbar'
import HeroBanner from '../components/common/HeroBanner'
import ServiceCatalog from '../components/organisms/SeviceComponent/ServiceCatalog'
import BrainstormIdeateBuildSection from '../components/common/BrainstormIdeateBuildSection'
import SubscribeSection from '../components/common/SubscribeSection'

function page() {
  return (
    <div>
      <Navbar />
      <HeroBanner
        title="Services"
        subtitle="Empowering your business with cutting-edge software, web, and mobile solutions! Let's build something great together!"
        highlightColor="#C8FF00"
      />
      <ServiceCatalog />
      <BrainstormIdeateBuildSection />
      <SubscribeSection />
    </div>
  )
}

export default page
