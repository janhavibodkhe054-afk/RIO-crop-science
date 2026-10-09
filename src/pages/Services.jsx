import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import ServicesIntroduction from '../components/services/ServicesIntroduction'
import ProductGuidance from '../components/services/ProductGuidance'
import CoreServices from '../components/services/CoreServices'
import WhyServicesMatter from '../components/services/WhyServicesMatter'
import OurApproach from '../components/services/OurApproach'
import ServicesCTA from '../components/services/ServicesCTA'

const Services = () => {
  return (
    <div>
      <ServicesHero/>
      <ServicesIntroduction/>
      {/* <ProductGuidance/> */}
      <CoreServices/>
      <WhyServicesMatter/>
      <OurApproach/>
      <ServicesCTA/>
    </div>
  )
}

export default Services
