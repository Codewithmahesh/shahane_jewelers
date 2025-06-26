'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
});

const VisitShowroom = () => {
  return (
    <div className="py-16 px-4 bg-white font-['Cormorant_Garamond']">
      <h2 className="text-4xl text-center font-semibold text-black mb-2">Visit Our Showroom</h2>
      <div className="w-[120px] h-[2px] bg-[#944141] mx-auto mb-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 px-4">
        <div className="w-full md:w-[65%] h-[450px] shadow-lg">
          <MapComponent />
        </div>

        <div className="md:w-[35%] text-[#3a2a1c] text-[18px] leading-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-1">Visit Our Showroom</h3>
            <p>
              Shrinagar, Work shop Road<br />
              Maharastra, Nanded 431605<br />
              India
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-1">Call Us</h3>
            <p>+91 9325539586</p>
            <p>+91 9325539586</p>
            <p>+91 9325539586</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Email</h3>
            <p className="break-all">sjnanded@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitShowroom;
