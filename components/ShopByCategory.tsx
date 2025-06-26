'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const categories = ['Bangle', 'Chain', 'Earrings', 'Necklace', 'Pendents'];

const products = [
  {
    title: 'Fancy Bangle',
    price: '₹50,000',
    id: 'BGN2351',
    image: '/assets/images/category/IMG-20180627-WA0041.png',
  },
  {
    title: 'Fancy Bangle',
    price: '₹50,000',
    id: 'BGN2351',
    image: '/assets/images/category/IMG-20180627-WA0046.png',
  },
  {
    title: 'Casting Bangle',
    price: '₹50,000',
    id: 'BGN2351',
    image: '/assets/images/category/IMG-20180627-WA0045.png',
  },
  {
    title: 'Stone casted Bangle',
    price: '₹50,000',
    id: 'BGN2351',
    image: '/assets/images/category/IMG-20180627-WA0043.png',
  },
];

const ShopByCategory = () => {
  const [activeCategory, setActiveCategory] = useState('Bangle');

  return (
    <div className="w-full py-14 bg-gradient-to-b from-[#A28257] to-white rounded-md shadow-inner">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-[32px] md:text-[36px] font-serif text-[#4d2e00]">Shop by Category</h2>
        <p className="text-md italic text-[#6b6b6b] mt-1">Exquisite selection of jewelry</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-1.5 border border-[#A28257] rounded-full font-serif text-sm transition-all duration-300 ${
              activeCategory === cat ? 'bg-[#4d2e00] text-white' : 'bg-transparent text-[#4d2e00]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-[1240px] mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-[250px] h-[411px] rounded-md overflow-hidden shadow-md border border-[#BABABA] relative bg-cover bg-center"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            {/* Bottom Info Block */}
            <div className="absolute bottom-0 w-full bg-white px-4 py-6">
              <h3 className="font-serif text-[15px] text-[#4d2e00] mb-1">{product.title}</h3>
              <p className="text-[#8B0000] font-semibold text-[25px] mb-1">{product.price}</p>
              <p className="text-sm text-gray-500">ID - {product.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
