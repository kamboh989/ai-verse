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
            <a href="https://www.instagram.com/aiverse.pk/" target='blank' className="social-icon instagram">
              <div className="icon-container">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  ></path>
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
  href="https://wa.me/message/SCY65DGJDB6DE1" // yahan apna WhatsApp number dal do
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon whatsapp"
>
  <div className="icon-container">
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8 text-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.52 3.484a11.916 11.916 0 00-16.862 0c-4.64 4.64-4.64 12.163 0 16.802l-1.46 4.597 4.712-1.478a11.916 11.916 0 0013.61-19.921zm-8.524 16.04c-2.548 0-4.938-.708-6.978-2.039l-.5-.311-3.043.955.963-3.022-.33-.502c-1.31-1.94-2.005-4.325-2.005-6.888 0-5.834 4.74-10.573 10.57-10.573 2.82 0 5.465 1.1 7.457 3.092a10.529 10.529 0 013.093 7.457c0 5.833-4.738 10.573-10.572 10.573zm5.77-7.722c-.32-.16-1.893-.934-2.187-1.041-.294-.108-.51-.16-.724.16s-.832 1.041-1.02 1.26c-.187.218-.375.245-.695.082-.32-.16-1.352-.498-2.576-1.586-.953-.846-1.595-1.89-1.785-2.21-.187-.32-.02-.492.142-.652.145-.146.32-.38.48-.57.16-.188.213-.32.32-.532.107-.213.053-.4-.027-.56-.08-.16-.724-1.746-1.01-2.392-.267-.617-.54-.532-.724-.542-.187-.01-.4-.012-.613-.012-.213 0-.56.08-.855.4-.294.32-1.122 1.093-1.122 2.66 0 1.567 1.15 3.082 1.312 3.296.16.213 2.268 3.462 5.5 4.854.77.33 1.367.526 1.83.672.768.236 1.467.203 2.018.123.615-.085 1.893-.773 2.158-1.522.267-.748.267-1.39.187-1.523-.08-.133-.293-.213-.613-.373z" />
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