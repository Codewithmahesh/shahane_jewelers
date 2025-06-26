'use client';
import Image from 'next/image';
import React from 'react';

// Assets
import logo from '@/public/assets/images/logo.png';
import qr from '@/public/assets/images/qr.png';
import playStore from '@/public/assets/images/play.png';
import appStore from '@/public/assets/images/app.png';

const Footer = () => {
  return (
    <footer className="bg-[#7c0606] text-white px-4 md:px-10 pt-6 pb-2 font-['Cormorant_Garamond']">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo and App Section */}
        <div className="flex flex-col items-start w-full md:w-1/3">
          <div className="flex items-center mb-4">
            <Image src={logo} alt="Logo" width={60} height={60} />
            <h2 className="text-xl md:text-2xl ml-2 font-semibold">Shahane Jewellers</h2>
          </div>
          <Image src={qr} alt="QR" width={140} height={140} />
          <p className="mt-2">Download App</p>
          <div className="flex items-center gap-2 mt-2">
            <Image src={playStore} alt="Play Store" width={120} height={40} />
            <Image src={appStore} alt="App Store" width={120} height={40} />
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-[17px]">
            <li>Collection</li>
            <li>Catalog</li>
            <li>Gold rate</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-2">Services</h3>
          <ul className="space-y-1 text-[17px]">
            <li>Custom Jewelery Design</li>
            <li>Jewelry Restore & Repair</li>
            <li>916 HallMarking</li>
            <li>Exchange Program</li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-white mt-6 pt-4 text-center text-sm">
        © 2025 Shahane Jewellers. All Rights Reserved | Crafted with love for <i>Jellery</i> Lovers
      </div>
    </footer>
  );
};

export default Footer;
