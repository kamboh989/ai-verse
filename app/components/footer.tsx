"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  
} from "lucide-react";
import { FooterBackgroundGradient } from "@/app/components/ui/hover-footer";
import { TextHoverEffect } from "@/app/components/ui/hover-footer";

function HoverFooter() {
  // About Us section
  const aboutLinks = [
    { label: "blogs", href: "/blogs" },
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Projects", href: "/projects/3d-animation" },
  ];

  // Contact info
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "info@aiverse.pk",
      href: "mailto:info@aiverse.pk",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+923364987786",
      href: "tel:+923364987786",
    },
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: "Faisalabad, Pakistan",
    },
  ];

  // Social links
  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      label: "Facebook",
      href: "https://www.facebook.com/people/Aiversepk/61583308357755/",
    },
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/aiverse.pk/" }
    ,
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/company/aiverse-pk/about/" },

  

    
  ];

  return (
    <footer className="bg-[#0F0F11]/10 relative h-fit  overflow-hidden ">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/home/ai-verse.png"
                alt="Company Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-white text-3xl font-bold">
                AI <span className="text-blue-500">Verse</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              © 2025 AI Verse. All rights reserved.
            </p>
          </div>

          {/* About Us section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">About Us</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#3ca2fa] transition-colors duration-300"
                  
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links column */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Connect with Us
            </h4>
            <ul className="space-y-3">
              {socialLinks.map(({ icon, label, href }, index) => (
  <li key={index}>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-gray-400 hover:text-[#3ca2fa] transition-colors duration-300"
    >
      {icon}
      <span>{label}</span>
    </a>
  </li>
))}

            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#3ca2fa] transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#3ca2fa] transition-colors duration-300">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 mb-6 md:mb-15" />
      </div>

      <div className="flex h-[30rem] -mt-52 -mb-36 relative z-50">
        <TextHoverEffect text="AIVerse" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
