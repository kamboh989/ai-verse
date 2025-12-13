'use client'
import React, { useState, useEffect } from "react";
import AnimatedBG from "./ui/animatedhero";
import Link from "next/link";



// Animated text component
const AnimatedText: React.FC = () => {
  const words = ["Web Development", "AI Automation", "UI/UX Design", "Game Development"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    

    if (!deleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 90);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, 100);
      } else {
        setDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, deleting, currentWordIndex, words]);

  return (
    <h2 className="text-3xl md:text-8xl font-bold mt-6 h-16 text-center md:text-left">
      <span style={{ color: "#27aae1" }}>{displayText}</span>
      <span className="border-r-2 animate-pulse ml-1" style={{ borderColor: "#1a1a8f" }}></span>
    </h2>
  );
};

// Hero component
const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl min-h-[40vh] md:min-h-[70vh]" >
      <AnimatedBG />
      <section className="mt-20 text-white px-4 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-8xl font-light">
          Innovative Solutions For
        </h1>
        <AnimatedText />

        {/* Description */}
        <p className="mt-4 md:mt-16 text-lg md:text-xl text-gray-300 max-w-4xl">
          We provide cutting-edge solutions tailored for your business, including web development, Software development, UI/UX design, and digital marketing
        </p>

        {/* Contact Us Button */}
        <Link href="/contact-us">
  <button className="cursor-pointer px-6 py-4 mt-8 md:mt-10  font-semibold rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
    Contact Us
  </button>
</Link>
      </section>
      
    </div>
  );
};

export default Hero;
