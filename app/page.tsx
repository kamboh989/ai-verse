'use client'
import React from 'react'
import Hero from "./components/hero";
import {IconCloudDemo} from "./components/technology";
import About from "./components/about";
import Success from "./components/success";
import Service from "./components/service";
import {HowItWorks} from "./components/how-it-works";
import Testimonials from "./components/testimonials";
import {SocialConnect} from './components/connect-with-us';
import BackgroundPaths from "./components/modern-background-path";
//import  Team  from "./components/teamlist";
import Team from "./components/team";


const page = () => {
  return (
    <div>
      
      <Hero/>
      <IconCloudDemo/>
      <About/>
      <Team/>
      <Success/>
      <Service/>
      <HowItWorks/>
      <Testimonials/>
      <SocialConnect/>
      <BackgroundPaths/>
      
    </div>
  )
}

export default page
