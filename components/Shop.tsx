"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Shop = () => {
  const categories = [
    {
      title: "EARRINGS",
      productCount: "5 PRODUCTS",
      image: "/assets/images/earring.jpg", // Replace with your actual image path
      href: "/collections/earrings"
    },
    {
      title: "NECKLACES",
      productCount: "3 PRODUCTS",
      image: "/assets/images/necklace.jpg", // Replace with your actual image path
      href: "/collections/necklaces"
    },
    {
      title: "RINGS",
      productCount: "5 PRODUCTS",
      image: "/assets/images/rings.jpg", // Replace with your actual image path
      href: "/collections/rings"
    }
  ];

  return (
    <section 
      className="w-full min-h-screen flex items-center h-screen relative justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      style={{ backgroundColor: '#faf7f5' }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="flex items-center justify-center flex-col mb-10 mt-0.5 sm:mb-12  md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide font-serif mb-4 md:mb-6 text-center">
            Shop by Category
          </h1>
          <Link 
            className="text-sm sm:text-base underline md:text-lg font-light capitalize text-black tracking-widest hover:opacity-70 transition-opacity duration-300" 
            href="/collections"
          >
            - VIEW ALL
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <Link 
              href={category.href} 
              key={index}
              className="group transform transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1 focus:outline-none"
            >
              <div className="bg-white p-3 sm:p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="relative aspect-square overflow-hidden mb-3 sm:mb-4">
                  <div className="w-full h-full relative">
                    {/* Replace with your actual images */}
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                       <Image 
                        src={category.image} 
                        alt={category.title} 
                        fill 
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                      /> 
                      
                     
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium tracking-widest mb-1">{category.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 tracking-wider">{category.productCount}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;