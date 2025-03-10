import React from 'react'
import Navbar from '../components/organisms/Navbar'
import HeroBanner from '../components/common/HeroBanner'

function page() {
  return (
    <div>
      <Navbar />
      <HeroBanner
        title="Contact Us"
        subtitle="Have a project in mind? Let's bring it to life! 🚀 Contact us today!"
        highlightColor="#C8FF00"
      />
    </div>
  )
}

export default page