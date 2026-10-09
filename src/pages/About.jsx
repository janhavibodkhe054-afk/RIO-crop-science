import React from 'react'
import AboutHero from '../components/about/AboutHero'
import OurStory from '../components/about/OurStory'
import VisionMission from '../components/about/VisionMission'
import CoreValues from '../components/about/CoreValues'
import FoundersVision from '../components/about/FoundersVision'
import OurCommitment from '../components/about/OurCommitment'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <OurStory/>
      <VisionMission/>
      <CoreValues/>
      {/* <FoundersVision/> */}
      <OurCommitment/>
    </div>
  )
}

export default About
