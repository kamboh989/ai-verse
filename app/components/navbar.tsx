'use client';

import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <nav className=" top-0 left-0 w-full z-50 px-8 py-7 text-white bg-transparent border-b border-white/20">
      <div className="flex items-center justify-between w-full relative">
       
       {/* Left: Logo */}
<Link href="/" className="flex items-center space-x-2 cursor-pointer z-20">
  <img src="/home/ai-verse.png" alt="Logo" className="w-13 h-13 object-contain" />
  <h1 className="text-2xl font-extrabold cursor-pointer" style={{ color: "#1a1a8f" }}>
    AI <span style={{ color: "#27aae1" }}>VERSE</span>
  </h1>
</Link>


        {/* Center: Desktop Menu */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 items-center z-10">
          <li>
            <a href="/" className="hover:text-blue-400">Home</a>
          </li>
          <li>
            <a href="/#about" className="hover:text-blue-400">About</a>
          </li>
           <li>
            <a href="/#service" className="hover:text-blue-400">Services</a>
          </li>
          <li>
            <a href="/pos" className="hover:text-blue-400">Swift POS</a>
          </li>
          {/* Projects Dropdown */}
<li className="relative group">
  <a  className="hover:text-blue-400">Projects</a>

  {/* Dropdown */}
  <ul className="absolute left-0 mt-2 w-40 bg-black text-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
    <li>
      <a href="/projects/3d-animation" className="block px-4 py-2 hover:text-blue-400">
        3d Animation
      </a>
    </li>
   
  </ul>
</li>



          <li>
            <a href="/contact-us" className="hover:text-blue-400">Contact Us</a>
          </li>
          <li>
            <a href="/blogs" className="hover:text-blue-400">Blog</a>
          </li>
        </ul>

        {/* Right: Social Icons */}
        <div className="hidden md:flex space-x-4 text-xl z-20">
          <FaFacebookF className="cursor-pointer hover:text-blue-400" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
        </div>
{/* Hamburger Mobile Menu */}
<div
  className="md:hidden text-2xl cursor-pointer z-20 text-white"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</div>

      </div>

{/* Mobile Menu */}
{menuOpen && (
  <div className="fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col px-6 py-6 md:hidden z-30">
    
    {/* Close Button */}
    <div className="self-end text-3xl text-white cursor-pointer mb-4" onClick={() => setMenuOpen(false)}>
      <FaTimes />
    </div>

    <a href="#" className="py-2 text-white hover:text-gray-300">Home</a>
    <a href="#" className="py-2 text-white hover:text-gray-300">About</a>
    <a href="#" className="py-2 text-white hover:text-gray-300">Services</a>
    <a href="#" className="py-2 text-white hover:text-gray-300">Swift POS</a>
    <a href="#" className="py-2 text-white hover:text-gray-300">Projects</a>
    <a href="#" className="py-2 text-white hover:text-gray-300">Contact Us</a>
    <a href="#" className="py-2 text-white hover:text-gray-300">Blog</a>

    {/* Social Icons */}
    <div className="flex space-x-4 text-xl pt-4">
      <FaFacebookF className="cursor-pointer text-white hover:text-gray-300" />
      <FaTwitter className="cursor-pointer text-white hover:text-gray-300" />
      <FaLinkedinIn className="cursor-pointer text-white hover:text-gray-300" />
    </div>
  </div>
)}



    </nav>
  );
}
