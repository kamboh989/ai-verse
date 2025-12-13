'use client';
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { value: 300, suffix: "K+", label: "Revenue Generated on E-commerce Stores" },
    { value: 500, suffix: "K+", label: "Leads generated for services industry" },
    { value: 275, suffix: "+", label: "Happy Clients Worldwide" },
    { value: 500, suffix: "M+", label: "Ad budget managed on Facebook, Instagram, and TikTok" },
  ];

  return (
    <section className="w-full py-24 px-6 lg:px-20 text-white">
     <div className="max-w-6xl mx-auto bg-black/60 backdrop-blur-xl rounded-3xl border-b-4 border-blue-400/60 p-10 shadow-xl">

        <h2 className="text-4xl md:text-5xl font-light text-center mb-14">
          Expertise that drives digital <span className="text-blue-400 font-medium">success</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {stats.map((item, i) => (
            <StatBox key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBox({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000; // animation duration in ms
    const stepTime = 16; // approx 60fps
    const totalSteps = Math.ceil(duration / stepTime);
    const increment = value / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(counter);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-3"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-blue-300">
        {count.toLocaleString()}{suffix}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed">{label}</p>
    </motion.div>
  );
}
