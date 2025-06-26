'use client'
import React from 'react';
import Image from 'next/image';

// Icons
import exchangeIcon from '@/public/assets/images/Group20.png';
import craftsmanshipIcon from '@/public/assets/images/Group18.png';
import purityIcon from '@/public/assets/images/Group19.png';
import transparencyIcon from '@/public/assets/images/Group17.png';

// Member Photos (replace with real paths if available)
// import shaileshImg from '@/public/assets/images/shailesh.png';
// import nileshImg from '@/public/assets/images/nilesh.png';

const assurancePoints = [
  {
    icon: exchangeIcon,
    // title: 'Easy Exchange',
  },
  {
    icon: craftsmanshipIcon,
    // title: 'Quality Craftsmanship',
  },
  {
    icon: purityIcon,
    // title: 'Purity Guarantee',
  },
  {
    icon: transparencyIcon,
    // title: 'Complete Transparency',
  },
];

const owners = [
  {
    name: 'Shailesh Uttamrao Shahane',
    role: 'Owner',
    // image: shaileshImg,
  },
  {
    name: 'Nilesh Uttamrao Shahane',
    role: 'Owner',
    // image: nileshImg,
  },
];

const About = ({ id }: { id: string }

) => {
  return (
    <div id={id} className="py-16 bg-white text-center font-['Cormorant_Garamond']">
      {/* Assure Section */}
      <h2 className="text-6xl md:text-4xl text-black font-semibold mb-2">We Assure Since 1999</h2>
      <p className="text-gray-700 italic mb-8 text-[16px]">
        "Certified purity. Guaranteed gold. Trusted by hearts, valued for generations."
      </p>
      <div className="w-[140px] h-[2px] bg-[#944141] mx-auto mb-10"></div>

      {/* Assurance Icons */}
      <div className="flex flex-wrap justify-center gap-20 mt-10 px-4 max-w-6xl mx-auto">
        {assurancePoints.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center justify-center ">
              <Image src={item.icon} alt={""} width={180} height={180} />
            </div>
            {/* <p className="mt-4 text-[18px] text-[#6b4b22]">{item.title}</p> */}
          </div>
        ))}
      </div>

      {/* About Us Section */}
      <div className="mt-24 px-4">
        <h2 className="text-4xl text-black font-semibold mb-3">About Us</h2>
        <div className="w-[100px] h-[2px] bg-[#944141] mx-auto mb-8"></div>
        <p className="max-w-4xl mx-auto text-[18px] text-gray-600 italic leading-relaxed">
          “At Shahane Jewellers, we've always strived to offer the finest and purest ornaments our customers seek.
          With over 25 years of legacy, we take pride in serving generations of loyal customers — many of whom have
          been with us since the beginning. Our goal has always been to create a memorable experience through jewelry
          that speaks to the heart. Today, we’re honored to be not just a jeweller, but a beloved part of their story.”
        </p>
      </div>

      {/* Team Section */}
      <div className="mt-24 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {owners.map((owner, index) => (
            <div key={index} className="bg-[#7a0e0e] shadow-2xl text-white p-4">
              {/* Image Placeholder or actual Image */}
              <div className="bg-gray-100 w-full h-[250px] mb-6">
                {/* <Image src={owner.image} alt={owner.name} className="w-full h-full object-cover" /> */}
              </div>
              {/* Name & Role */}
              <p className="text-lg mb-40">
                <span className="font-semibold">{owner.name}</span> : {owner.role}
              </p>
            </div>
          ))}
        </div>
      </div>

        <div className="flex items-center justify-center mt-28">
            <img src="/assets/images/grp21.png" alt="" />
        </div>



    </div>
  );
};

export default About;
