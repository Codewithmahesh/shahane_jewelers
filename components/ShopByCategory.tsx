'use client';
import React, { useState } from 'react';

const categories = ['Bangle', 'Chain', 'Earrings', 'Necklace', 'Haar'];

const products = [
  // Bangles
  {
    title: 'Fancy Bangle',
    price: '₹50,000',
    id: 'BGN2351',
    image: '/assets/images/category/IMG-20180627-WA0041.png',
    category: 'Bangle',
  },
  {
    title: 'Casting Bangle',
    price: '₹45,000',
    id: 'BGN2352',
    image: '/assets/images/category/IMG-20180627-WA0045.png',
    category: 'Bangle',
  },
  {
    title: 'Casting Bangle',
    price: '₹45,000',
    id: 'BGN2352',
    image: '/assets/images/category/IMG-20180627-WA0043.png',
    category: 'Bangle',
  },
  {
    title: 'Casting Bangle',
    price: '₹45,000',
    id: 'BGN2352',
    image: '/assets/images/category/IMG-20180627-WA0046.png',
    category: 'Bangle',
  },
  // Chains
  {
    title: 'Elegant Chain',
    price: '₹60,000',
    id: 'CHN1251',
    image: '/assets/images/Chain/c1.jpg',
    category: 'Chain',
  },
  {
    title: 'Gold Chain',
    price: '₹65,000',
    id: 'CHN1252',
    image: '/assets/images/Chain/c2.jpg',
    category: 'Chain',
  },
  {
    title: 'Gold Chain',
    price: '₹65,000',
    id: 'CHN1253',
    image: '/assets/images/Chain/c3.jpg',
    category: 'Chain',
  },
  {
    title: 'Gold Chain',
    price: '₹65,000',
    id: 'CHN1254',
    image: '/assets/images/Chain/c4.jpg',
    category: 'Chain',
  },
  // Earrings
  {
    title: 'Diamond Earrings',
    price: '₹35,000',
    id: 'EAR7811',
    image: '/assets/images/Earring/e1.jpg',
    category: 'Earrings',
  },
  {
    title: 'Stud Earrings',
    price: '₹30,000',
    id: 'EAR7812',
    image: '/assets/images/Earring/e2.jpg',
    category: 'Earrings',
  },
  {
    title: 'Stud Earrings',
    price: '₹30,000',
    id: 'EAR7813',
    image: '/assets/images/Earring/e3.jpg',
    category: 'Earrings',
  },
  {
    title: 'Stud Earrings',
    price: '₹30,000',
    id: 'EAR7814',
    image: '/assets/images/Earring/e4.jpg',
    category: 'Earrings',
  },
  // Necklaces
  {
    title: 'Pearl Necklace',
    price: '₹75,000',
    id: 'NCK9031',
    image: '/assets/images/Necklace/n1.jpg',
    category: 'Necklace',
  },
  {
    title: 'Pearl Necklace',
    price: '₹75,000',
    id: 'NCK9031',
    image: '/assets/images/Necklace/n2.jpg',
    category: 'Necklace',
  },
  {
    title: 'Pearl Necklace',
    price: '₹75,000',
    id: 'NCK9031',
    image: '/assets/images/Necklace/n3.jpg',
    category: 'Necklace',
  },
  {
    title: 'Pearl Necklace',
    price: '₹75,000',
    id: 'NCK9031',
    image: '/assets/images/Necklace/n4.jpg',
    category: 'Necklace',
  },
  // Haar
  {
    title: 'Gold Haar',
    price: '₹95,000',
    id: 'HAR3321',
    image: '/assets/images/Haar/h1.jpg',
    category: 'Haar',
  },
  {
    title: 'Gold Haar',
    price: '₹95,000',
    id: 'HAR3321',
    image: '/assets/images/Haar/h2.jpg',
    category: 'Haar',
  },
  {
    title: 'Gold Haar',
    price: '₹95,000',
    id: 'HAR3321',
    image: '/assets/images/Haar/h3.jpg',
    category: 'Haar',
  },
  {
    title: 'Gold Haar',
    price: '₹95,000',
    id: 'HAR3321',
    image: '/assets/images/Haar/h4.jpg',
    category: 'Haar',
  },
];

const ShopByCategory = (
  { id }: { id: string }
) => {
  const [activeCategory, setActiveCategory] = useState('Bangle');

  // Filter products by active category
  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div id={id} className="w-full py-14 bg-gradient-to-b from-[#A28257] to-white rounded-md shadow-inner">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-[40px] md:text-[40px] font-serif text-[#4d2e00]">Shop by Category</h2>
        <p className="text-lg italic text-[#6b6b6b] mt-1">Exquisite selection of jewelry</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-1.5 border border-[#A28257] rounded-full font-serif text-lg transition-all duration-300 ${
              activeCategory === cat ? 'bg-[#4d2e00] text-white' : 'bg-transparent text-[#4d2e00]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-[1240px] mx-auto">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="w-[250px] h-[411px] rounded-md overflow-hidden shadow-md border border-[#BABABA] relative bg-cover bg-center"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            {/* Bottom Info Block */}
            <div className="absolute bottom-0 w-full bg-white px-4 py-6">
              <h3 className="font-serif text-[25px] text-[#4d2e00] mb-1">{product.title}</h3>
              {/* <p className="text-[#8B0000] font-semibold text-[25px] mb-1">{product.price}</p> */}
              <p className="text-sm text-gray-500">ID - {product.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
