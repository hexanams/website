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
        subtitle="Let’s just say that we bring your ideas to life. With modern technologies and stacks, we walk with you from ideation to launching your products together!"
        highlightColor="#C8FF00"
      />
      <ServiceCatalog />
      <BrainstormIdeateBuildSection />
      <SubscribeSection />
    </div>
  )
}

export default page
