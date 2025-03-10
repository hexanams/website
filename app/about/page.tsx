import React from 'react'
import Navbar from '../components/organisms/Navbar'
import HeroBanner from '../components/common/HeroBanner'

function page() {
  return (
    <div>
      <Navbar />
      <HeroBanner
        title="About Us"
        subtitle="Innovative solutions, seamless experiences—transforming ideas into powerful digital products. Let’s build the future together!"
        highlightColor="#C8FF00"
      />
    </div>
  )
}

export default page
