'use client'
import type { FC } from "react"; 
import { HiCalendar, HiArrowRight, HiArrowNarrowRight } from "react-icons/hi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Hero: FC = () => {
  const textList = ["Mobile & Electronics", "Departmental Store", "Retail & Wholesale", "Pharmacy", "Repair Shop"];
  const [index, setIndex] = useState(0);
  const targetSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTarget = () => {
    targetSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full min-h-screen  flex flex-col items-center justify-center px-4 pb-25 pt-5">


      {/* PERFECT FOR BOX + CTA */}
      <div className="w-full flex flex-col items-center mt-12">

        {/* Rotating Text Box */}
        <div className="w-[260px] h-[140px]  shadow-xl rounded-2xl flex flex-col items-center justify-center border border-gray-100">
          <p className="text-gray300 text-lg font-semibold">Perfect for:</p>
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-600 text-3xl font-bold mt-3 text-center"
          >
            {textList[index]}
          </motion.p>
        </div>

        {/* Main CTA Button */}
        <a
          href="https://swiftpos.solutions/c/contact-us"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gradient-to-r from-[#27aae1] to-[#2b3990] text-white font-bold px-9 py-5 rounded-xl shadow-lg text-lg cursor-pointer"
          >
            Book a Call
            <motion.span whileHover={{ x: 8 }}>
              <HiArrowNarrowRight size={28} />
            </motion.span>
          </motion.button>
        </a>
      </div>

      {/* BEFORE → AFTER SECTION */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-evenly gap-8 mt-16 px-6">

        {/* Before */}
        <div className="w-full max-w-[280px] h-[220px] bg-[#0f0f0f] rounded-2xl p-6 
shadow-[0_4px_20px_rgba(0,0,0,0.6)] 
border border-white/5 
backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-[#FECACA] rounded-full p-4 mb-4">
            <HiCalendar size={22} className="text-[#B91C1C]" />
          </div>
          <p className="font-bold text-[#b32222] text-[20px]">Before</p>
          <p className="text-[#DC2626] mt-2 text-[16px]">
            Manual billing, slow checkout process
          </p>
        </div>

        {/* Arrow */}
        <div className="flex justify-center items-center">
          <div className="bg-[#2B3990] rounded-full p-4">
            <HiArrowRight size={24} className="text-white" />
          </div>
        </div>

        {/* After */}
        <div className="w-full max-w-[280px] h-[220px] bg-[#0f0f0f] rounded-2xl p-6 
shadow-[0_4px_20px_rgba(0,0,0,0.6)] 
border border-white/5 
backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-[#BBF7D0] rounded-full p-4 mb-4">
            <FaRegCalendarCheck size={22} className="text-[#15803D]" />
          </div>
          <p className="font-bold text-[#15803D] text-[20px]">After</p>
          <p className="text-[#16A34A] mt-2 text-[16px]">
            Fast checkout, automated reports, real-time tracking
          </p>
        </div>
      </div>

      {/* PURPLE BUTTON AREA */}
      <div className="w-full flex justify-center mt-10 lg:mt-24">
        <motion.button
          onClick={scrollToTarget}
          className="relative px-12 py-8 bg-[#0f0f0f] rounded-2xl p-6 
shadow-[0_4px_20px_rgba(0,0,0,0.6)] 
border border-white/5 
backdrop-blur-xl"
        >
          <p className="text-blue-400 text-[12px] lg:text-[14px] font-semibold tracking-wide text-center">
            See how Swift POS boosts your business
          </p>

          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="relative w-[25px] h-[44px] border-4 border-blue-500 rounded-full overflow-hidden cursor-pointer">
              <motion.div
                animate={{ y: [-20, 60] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-x-0 mx-auto w-1 h-2 bg-gray-400 rounded-full"
              />
            </div>
          </div>
        </motion.button>
      </div>

      <div ref={targetSectionRef}></div>
    </div>
  );
};

export default Hero;
