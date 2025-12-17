"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function AgencySection() {
  const sections = [
    {
      title: "Your Success, Our Mission",
      text: "At Ai Verse, we don’t just market — we build success stories. Our mission is to fuel your growth with tailored digital strategies, creative innovation, and data‑driven results.",
      icon: "⬢",
    },
    {
      title: "Transforming the Future of Digital Innovation",
      text: "We redefine the digital experience by blending creativity, technology, and strategy. Our team pushes boundaries and sets new digital standards.",
      icon: "⬡",
    },
    {
      title: "Creators Of Digital Excellence",
      text: "We specialize in crafting digital solutions that not only meet your needs but also elevate your brand in a competitive digital world.",
      icon: "🏅",
    },
    {
      title: "Your Success, Our Mission",
      text: "At AI Verse, we don’t just market — we build success stories. Our mission is to fuel your growth with tailored digital strategies, creative innovation, and data‑driven results.",
      icon: "⬢",
    },
    {
      title: "Transforming the Future of Digital Innovation",
      text: "We redefine the digital experience by blending creativity, technology, and strategy. Our team pushes boundaries and sets new digital standards.",
      icon: "⬡",
    },
  ];

  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full flex flex-col lg:flex-row py-20 px-6 lg:px-20 text-white mt-10 max-w-8xl mx-auto" id="about">
      {/* LEFT CONTENT */}
      <div className={`lg:w-1/2 ${!isMobile ? "sticky top-20 h-fit pb-10" : "mb-10"}`}>
        <h2 className="text-lg tracking-widest mb-4" style={{ color: "#27aae1" }}>ABOUT AGENCY</h2>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Crafting <span style={{ color: "#27aae1" }}>unique digital</span> experiences<br />
          that elevate your brand
        </h1>
         <Link href="/contact-us">
        <button className="mt-6 cursor-pointer px-6 py-3 rounded-full backdrop-blur-md  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 flex items-center gap-2">
          Contact Us <span>↗</span>
        </button>
        </Link>
      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:w-1/2 relative mt-16 lg:mt-0">
        {/* Vertical line only on desktop */}
        {!isMobile && <div className="absolute left-8 top-0 h-full w-px bg-white/20"></div>}

        <div className="space-y-24 pl-16">
          {sections.map((sec, i) =>
            isMobile ? (
              // Mobile: static content
              <div key={i} className="relative">
                <div className="absolute -left-12 top-1 w-8 h-8 rounded-full border border-blue-400 flex items-center justify-center text-blue-300">
                  {sec.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{sec.title}</h3>
                <p className="text-white/70 leading-relaxed">{sec.text}</p>
              </div>
            ) : (
              // Desktop: animated content
              <ScrollBlock key={i} {...sec} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

// ScrollBlock Component (Desktop only)
function ScrollBlock({ title, text, icon }: { title: string; text: string; icon: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      <div className="absolute -left-12 top-1 w-8 h-8 rounded-full border border-blue-400 flex items-center justify-center text-blue-300">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70 leading-relaxed">{text}</p>
    </motion.div>
  );
}
