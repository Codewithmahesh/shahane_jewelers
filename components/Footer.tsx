  'use client';
  import Image from 'next/image';
  import React from 'react';

  // Assets
  import logo from '@/public/assets/images/SJ_logo.png';
  import qr from '@/public/assets/images/qr.png';
  import playStore from '@/public/assets/images/play.png';
  import appStore from '@/public/assets/images/app.png';
  import sj from '@/public/assets/images/sj.png';

  const Footer = () => {
    return (
      <footer className="relative bg-[#7c0606] text-white px-4 md:px-10 pt-20 pb-4 font-['Cormorant_Garamond'] rounded-[25px] ">
        {/* Raised Logo */}
        <div className="absolute -top-13 left-4 md:left-10 flex items-center">
          <Image src={logo} alt="Logo" width={130} height={130} />
          <div className="mt-5 ml-2">
            <Image src={sj} alt="SJ" width={300} height={100} />
          </div>
        </div>

    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
      {/* Logo and App Section */}
      <div className="flex  items-start w-full md:w-1/3 mt-6 md:mt-0">
        
        <div className="h-full flex flex-col  items-center justify-center"> 
          <Image src={qr} alt="QR" width={200} height={200} />
          <p className="mt-2 text-2xl ">Download App</p>
        </div>

        <div className="flex flex-col items-center gap-6 mt-10">
          {/* Play Store Button */}
          <div className="flex items-center px-4 py-2 bg-[#7c0606] text-white rounded-lg shadow-md border-2 border-white">
            <Image src={playStore} alt="Play Store" width={35} height={35} />
            <div className="ml-3 leading-tight">
              <p className="text-sm font-light">Download on</p>
              <p className="text-base font-semibold">Play Store</p>
            </div>
          </div>

          {/* App Store Button */}
          <div className="flex items-center px-4 py-2 bg-[#7c0606] text-white rounded-lg shadow-md border-2 border-white">
            <Image src={appStore} alt="App Store" width={35} height={35} />
            <div className="ml-3 leading-tight">
              <p className="text-sm font-light">Download on</p>
              <p className="text-base font-semibold">App Store</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="w-full md:w-1/3 mt-6 md:mt-0">
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
      <div className="w-full md:w-1/3 mt-6 md:mt-0">
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
