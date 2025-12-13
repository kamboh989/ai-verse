'use client';

import React from "react";
import { IconCloud } from "@/app/components/ui/interactive-icon-cloud";


const slugs = [
  "typescript","javascript","dart","java","react","flutter","android","html5","css3",
  "nodedotjs","express","nextdotjs","prisma","amazonaws","postgresql","firebase","nginx",
  "vercel","testinglibrary","jest","cypress","docker","git","jira","github","gitlab",
  "visualstudiocode","androidstudio","sonarqube","figma",
];

export function IconCloudDemo() {
  return (
    <section className="relative mt-45 md:mt-16 lg:mt-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
        {/* Left side content */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: '#27aae1' }}>
            Our Technology
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            We leverage the latest technologies to build scalable, high-performance solutions. From Web and Software development to cloud and AI integrations.
          </p>
        </div>

        {/* Right side Icon Cloud */}
        <div className="md:w-1/2 flex justify-center md:justify-end items-center">
          <div className="relative w-full max-w-lg h-96 overflow-hidden px-8 py-8">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </section>
  );
}
