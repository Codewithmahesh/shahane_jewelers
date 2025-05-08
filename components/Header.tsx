"use client";

import React from 'react';
import { Navbar } from './Navbar';

const Header = () => {
  return (
    <header id="main-header" className="relative h-screen w-full overflow-hidden z-30">
      <Navbar />
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/images/headerbg.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl text-white font-light mb-6 tracking-wider">
          EXQUISITE JEWELRY
        </h1>
        <p className="text-lg md:text-xl text-white font-light mb-8 max-w-2xl">
          Timeless elegance crafted with precision and passion
        </p>
        
        {/* Animated Button with Arrow Icons */}
        <button className="group relative bg-transparent cursor-pointer text-white border border-white px-10 py-3 transition-all duration-300 overflow-hidden hover:pl-6 hover:pr-14">
          {/* Button content with arrow icon */}
          <span className="relative z-10 flex items-center justify-center">
            <span>EXPLORE COLLECTION</span>
            {/* Arrow icon that moves on hover */}
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-3 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
          
          {/* Animated background fill on hover */}
          <span className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-300 ease-out z-0"></span>
          
          {/* Text color change on hover */}
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white group-hover:text-black transition-colors duration-300 z-10">
            <span className="flex items-center">
              EXPLORE COLLECTION
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-3 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </span>
        </button>

        {/* Subtle down arrow for scrolling indication */}
        <div className="absolute bottom-10 animate-bounce">
          <svg 
            className="w-8 h-8 text-white opacity-70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;