import React from 'react'
import HeroSlider from '../components/home/HeroSlider'
import BrandIntroduction from '../components/home/BrandIntroduction'
import BrandSnapshot from '../components/home/BrandSnapshot'
import WhatWeStandFor from '../components/home/WhatWeStandFor'
import ProductCategories from '../components/home/ProductCategories'
import FeaturedProducts from '../components/home/FeaturedProducts'
import WhyFarmersChooseRio from '../components/home/WhyFarmersChooseRio'
import Sustainability from '../components/home/Sustainability'
import GlobalReachLocalImpact from '../components/home/GlobalReachLocalImpact'
import FinalCTA from '../components/home/FinalCTA'

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <BrandIntroduction/>
      <BrandSnapshot/>
      <WhatWeStandFor/>
      <ProductCategories/>
      <FeaturedProducts/>
      {/* <WhyFarmersChooseRio/> */}
      <Sustainability/>
      <FinalCTA/>
    </div>
  )
}

export default Home
