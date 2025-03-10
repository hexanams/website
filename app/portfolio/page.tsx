import React from 'react'
import Navbar from '../components/organisms/Navbar'
import HeroBanner from '../components/common/HeroBanner'

function page() {
  return (
    <div>
      <Navbar />
      <HeroBanner
        title="Portfolio"
        subtitle="Showcasing innovation, design, and technology—explore our work and see what we create!"
        highlightColor="#C8FF00"
      />
    </div>
  )
}

export default page
