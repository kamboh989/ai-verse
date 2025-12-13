'use client'
import React from 'react'

import { HeroDemo1 } from "./images-slider";
import  InteractiveSelector  from "./selector";
import  Video  from "./video";
import   {CircularTestimonialsDemo} from "./image2";
import Car from "./volce-car";
import  Jordan  from "./jordan";
import  ImageReveal  from "./images-tile";


const Page = () => {
  return (
    <div>
      
       <HeroDemo1 /> 

       <div className='w-full min-h-screen'>
        <InteractiveSelector/>
       </div>
        <Video />
        <CircularTestimonialsDemo />
        <Car />
        <Jordan />

        
      <ImageReveal
          leftImage="/project/key1.png"
          middleImage="/project/key2.png"
          rightImage="/project/key3.png"
      />
      
    </div>
  )
}

export default Page
