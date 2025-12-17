'use client'
import React, { useState } from 'react';

const SocialConnect = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4 font-sans w-full rounded-tl-full rounded-br-full">

      <div className="w-full max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-bold text-blue-500 mb-6 ">
          Connect <span className="text-white">With Us</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Join our community and stay updated with the latest news, releases, and exclusive content
        </p>
      </div>
      
      <div className="relative w-full max-w-2xl">
        {/* 3D Glowing Container */}
        <div 
          className={`rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-gray-700/50 shadow-2xl backdrop-blur-3xl overflow-hidden p-8 transition-all duration-500 hover:scale-105`}
          style={{
            boxShadow:  '0 0 50px rgba(59, 130, 246, 0.6), 0 0 80px rgba(37, 99, 235, 0.4)'
          }}
        >
          <div className="flex flex-wrap justify-center gap-8">
            <a
  href="https://www.instagram.com/aiverse.pk/"
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon instagram"
>
  <div className="icon-container">
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8 text-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.366.062 2.633.37 3.608 1.345.975.975 1.283 2.242 1.345 3.608.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.37 2.633-1.345 3.608-.975.975-2.242 1.283-3.608 1.345-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.37-3.608-1.345-.975-.975-1.283-2.242-1.345-3.608C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.062-1.366.37-2.633 1.345-3.608.975-.975 2.242-1.283 3.608-1.345C8.416 2.212 8.8 2.2 12 2.2zM12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 9.1a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2zm5.65-9.95a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z" />
    </svg>
  </div>
  <span className="icon-label">Instagram</span>
</a>

            <a href="https://www.facebook.com/people/Aiversepk/61583308357755/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
  <div className="icon-container">
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8 text-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.878C18.343 21.128 22 16.991 22 12z" />
    </svg>
  </div>
  <span className="icon-label">Facebook</span>
</a>
<a
  href="https://wa.me/message/SCY65DGJDB6DE1"
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon whatsapp"
>
  <div className="icon-container">
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className="h-8 w-8 text-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2.933c-7.225 0-13.067 5.842-13.067 13.067 0 2.305.602 4.56 1.745 6.549L2.933 29.067l6.69-1.711A13.01 13.01 0 0016 29.067c7.225 0 13.067-5.842 13.067-13.067S23.225 2.933 16 2.933zm0 23.466c-2.158 0-4.272-.581-6.11-1.678l-.437-.257-3.96 1.012 1.024-3.882-.283-.448c-1.078-1.72-1.648-3.703-1.648-5.746 0-5.99 4.87-10.86 10.86-10.86 2.902 0 5.63 1.13 7.683 3.182a10.797 10.797 0 013.182 7.678c0 5.99-4.87 10.86-10.86 10.86zm6.236-8.14c-.34-.17-2.014-.993-2.325-1.105-.31-.113-.535-.17-.76.17-.226.34-.873 1.105-1.07 1.333-.197.226-.395.255-.735.085-.34-.17-1.435-.528-2.733-1.683-1.01-.896-1.693-2.002-1.894-2.342-.197-.34-.02-.523.15-.693.154-.154.34-.4.51-.6.17-.197.226-.34.34-.565.113-.226.057-.425-.028-.595-.085-.17-.77-1.857-1.055-2.545-.283-.68-.57-.595-.76-.604-.197-.01-.425-.01-.65-.01-.226 0-.595.085-.907.425-.31.34-1.19 1.162-1.19 2.83s1.218 3.28 1.387 3.508c.17.226 2.406 3.68 5.835 5.164.815.353 1.45.565 1.943.722.815.25 1.556.215 2.14.13.653-.09 2.014-.822 2.296-1.618.283-.796.283-1.48.197-1.62-.085-.14-.31-.226-.65-.396z" />
    </svg>
  </div>
  <span className="icon-label">WhatsApp</span>
</a>


            
            <a href="https://www.linkedin.com/company/aiverse-pk/about/" target='blank' rel="noopener noreferrer" className="social-icon linkedin">
              <div className="icon-container">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  ></path>
                </svg>
              </div>
              <span className="icon-label">LinkedIn</span>
            </a>
          </div>
        </div>
        
        {/* Floating Toggle Button */}
       
      </div>
      
      <style jsx>{`
        .social-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }
        
        .icon-container {
          display: inline-flex;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-icon:hover .icon-container {
          transform: translateY(-10px) scale(1.1);
        }
        
        .social-icon:hover .icon-label {
          opacity: 1;
          transform: translateY(5px);
        }
        
        .icon-label {
          margin-top: 12px;
          color: white;
          font-weight: 500;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        
        .social-icon.instagram:hover .icon-container {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          box-shadow: 0 0 20px rgba(225, 48, 108, 0.6);
        }
        
        .social-icon.discord:hover .icon-container {
          background: #7289da;
          box-shadow: 0 0 20px rgba(114, 137, 218, 0.6);
        }
        
        .social-icon.github:hover .icon-container {
          background: #333;
          box-shadow: 0 0 20px rgba(51, 51, 51, 0.6);
        }
        
        .social-icon.linkedin:hover .icon-container {
          background: #0077b5;
          box-shadow: 0 0 20px rgba(0, 119, 181, 0.6);
        }
        
        .social-icon:hover svg {
          animation: shake 0.5s;
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0); }
          20% { transform: translateX(-5px) rotate(-5deg); }
          40% { transform: translateX(5px) rotate(5deg); }
          60% { transform: translateX(-5px) rotate(-5deg); }
          80% { transform: translateX(5px) rotate(5deg); }
        }
        
        .icon-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .social-icon:hover .icon-container::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export {SocialConnect};