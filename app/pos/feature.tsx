"use client";

import React from "react";
import { cn } from "@/app/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Slow Checkout & Long Queues",
      description:
        "Traditional systems slow you down, causing delays and frustrated customers — especially during peak hours.",
      icon: <IconTerminal2 size={32} />,
    },
    {
      title: "Manual Inventory Errors",
      description:
        "Tracking stock manually often results in overstocking, missing items, or late restocking — hurting your sales.",
      icon: <IconEaseInOut size={32} />,
    },
    {
      title: "Time-Consuming Sales Reporting",
      description:
        "Preparing daily or monthly reports takes time when your system doesn’t automate real-time analytics.",
      icon: <IconCurrencyDollar size={32} />,
    },
    {
      title: "Streamlined Billing & Payments",
      description:
        "Process sales quickly and accurately with Swift POS, whether in-store, online, or on mobile devices.",
      icon: <IconCloud size={32} />,
    },
    {
      title: "Real-Time Business Insights",
      description:
        "Track sales, inventory, and profits instantly so you can make data-driven decisions anytime, anywhere.",
      icon: <IconRouteAltLeft size={32} />,
    },
    {
      title: "Save Time & Reduce Errors",
      description:
        "Automate routine tasks, avoid manual mistakes, and give your staff more time to focus on serving customers.",
      icon: <IconHelp size={32} />,
    },
    {
      title: "Trusted by Professionals",
      description:
        "Join thousands of teams who rely on our tools to boost productivity and streamline their workflow.",
      icon: <IconAdjustmentsBolt size={32} />,
    },
    {
      title: "Reliability You Can Count On",
      description:
        "Engineered for consistency and performance, our solution keeps your projects running smoothly.",
      icon: <IconHeart size={32} />,
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center px-6 md:px-10 py-20">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Why Swift <span className="text-blue-500">POS</span> Stands Out
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          Empower your business with the fastest, most reliable point-of-sale system. 
          Streamline operations, reduce errors, and boost customer satisfaction.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 gap-6 max-w-7xl">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-600 dark:from-neutral-800 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-600 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-blue-500">{icon}</div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100 text-lg">
          {title}
        </span>
      </div>

      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
    </div>
  );
};
