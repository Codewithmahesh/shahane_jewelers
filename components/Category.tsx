"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const Category = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        section.style.setProperty('--scroll-progress', scrollProgress.toString());
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen relative overflow-hidden bg-white"
    >
      {/* Fixed background layout with 60/40 split */}
      <div className="fixed-background flex h-screen w-full pointer-events-none">
        {/* Left side - semi-transparent white space (optional) */}
        <div className="w-1/2 bg-white/90 h-full"></div>

        {/* Right side - fixed image */}
        <div className="w-2/3 relative">
          <div
            className="absolute inset-0 bg-right bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/images/bg.jpg')",
              backgroundAttachment: "fixed",
              backgroundPosition: "center right",
              backgroundSize: "cover",
              transform: "scale(1)",
              transformOrigin: "right center",
              // zIndex: 1,
            }}
          ></div>
        </div>
      </div>

      {/* Foreground scrollable content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto">
          <div className="w-auto pr-16 ml-32">
            <h1 className="text-8xl tracking-wider  font-serif mb-6">Jewelry of</h1>
            <h1 className="text-8xl tracking-wider font-serif mb-6">Precious Craft</h1>
            <p className="text-3xl italic mb-10">Because every piece carries a precious story</p>

            <Link href="/collections">
              <span className="relative inline-flex items-center justify-center px-10 py-3 border border-black text-black group overflow-hidden transition-all duration-300">
                <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></span>
                <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-300">
                  EXPLORE COLLECTION
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
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
            </Link>
          </div>
        </div>
      </div>

      {/* Custom CSS for fixed background */}
      <style jsx>{`
        .fixed-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }
      `}</style>
    </section>
  );
};

export default Category;
