"use client";

import { cn } from "@/app/lib/utils";
import { Layers, Search, Zap } from "lucide-react";
import type React from "react";

// The main props for the HowItWorks component
interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {}

// The props for a single step card
interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

/**
 * A single step card within the "How It Works" section.
 * It displays an icon, title, description, and a list of benefits.
 */
const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  benefits,
}) => (
  <div
    className={cn(
      "relative rounded-2xl border border-gray-400 bg-card p-6 text-card-foreground transition-all duration-300 ease-in-out",
      "hover:scale-105 hover:shadow-lg hover:border-primary/50 hover:bg-muted"
    )}
  >
    {/* Icon */}
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-blue-400">
      {icon}
    </div>
    {/* Title and Description */}
    <h3 className="mb-2 text-xl text-white font-semibold">{title}</h3>
    <p className="mb-6 text-gray-300">{description}</p>
    {/* Benefits List */}
    <ul className="space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
            <div className="h-2 w-2 rounded-full bg-blue-400"></div>
          </div>
          <span className="text-gray-300">{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * A responsive "How It Works" section that displays a 3-step process.
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({
  className,
  ...props
}) => {
  const stepsData = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Strategy & Planning",
      description:
        "We start every project analyzing your goals, audience, and requirements.",
      benefits: [
        "In-depth requirement analysis",
        "Roadmap creation for clear milestones",
        "Optimized resource allocation",
      ],
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Design & Development",
      description:
        "We design and develop that are visually appealing fully functional.",
      benefits: [
        "Custom UI/UX design tailored to your brand",
    "Responsive and optimized web or software development",
    "Seamless integration with existing systems",
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "SEO & Growth",
      description: "After deployment, we focus on SEO and growth.",
      benefits: [
        "Search engine optimization for higher visibility",
    "Performance monitoring and analytics",
    "Continuous improvements to drive growth",
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      className={cn("w-full py-13 sm:py-7", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
            How <span className="text-blue-500">it</span> works
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Our service uses advanced technologies for instant auto parts search
            across thousands of stores in your city
          </p>
        </div>

        {/* Step Indicators with Connecting Line */}
        <div className="relative mx-auto mb-8 w-full max-w-5xl flex justify-between items-center">
          {stepsData.map((_, index) => (
            <div key={index} className="relative flex-1 flex justify-center">
              {/* Circle Number */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-semibold text-blue-300 ring-4 ring-offset-blue-400 z-10">
                {index + 1}
              </div>

              {/* Connecting Line */}
              {index < stepsData.length - 1 && (
                <div className="absolute top-1/2 right-0 h-0.5 w-full bg-border -translate-y-1/2 z-0" />
              )}
            </div>
          ))}
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
