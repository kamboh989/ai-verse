"use client";
import React from "react";
import { Spotlight, GridBackground } from "@/app/components/ui/spotlight-new";

export function SpotlightNewDemo() {
  return (
    <div className="h-[25rem] md:h-[25rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <GridBackground />
      <Spotlight />
      <div className=" p-4 max-w-7xl flex flex-col justify-center mx-auto relative z-10  w-full pt-10 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Run Your Business  <br /> Smarter
With Swift POS
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Swift POS helps retail and restaurant businesses manage billing, inventory, staff, sales analytics, and customer experience — all from one modern, easy-to-use dashboard.
        </p>
      </div>
    </div>
  );
}
