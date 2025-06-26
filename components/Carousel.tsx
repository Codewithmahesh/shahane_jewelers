"use client";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    { src: "/assets/images/Carousel/c1.png", alt: "Authentic Indian Jewelry" },
    { src: "/assets/images/Carousel/c2.png", alt: "Discover Design" },
    { src: "/assets/images/Carousel/c3.png", alt: "Download App" },
    { src: "/assets/images/Carousel/c4.png", alt: "Download App" },
  ];

  return (
    <div className="w-full max-w-4/5xl mx-auto p-4">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        selectedItem={selectedIndex}
        onChange={setSelectedIndex}
        className="rounded-xl shadow-lg overflow-hidden"
      >
        {images.map((item, index) => (
          <div key={index}>
            <img
              src={item.src}
              alt={item.alt}
              className="object-cover w-full h-156 "
              draggable={false}
            />
          </div>
        ))}
      </Carousel>

      {/* Custom Indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`w-8 h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
              index === selectedIndex ? "bg-black" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DemoCarousel;
