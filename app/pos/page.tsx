'use client'
import React from 'react'
import {SpotlightNewDemo} from "./hero";
import Swiffeature from "./swift-feature";
import Solution from "./solution";
import Health from "./health";
import ProcessSection from "./process";
import Custom from "./customplan";
import Smart from "./smartplan";
import Book from "./bookcall";

const page = () => {
  return (
    <div>
      <SpotlightNewDemo/>
      <Book/>
      <Swiffeature/>
      <Solution/>
      <Health/>
      <ProcessSection/>
      <Custom/>
      <Smart/>
    </div>
  )
}

export default page
