'use client';
import React from 'react';

const VisitShowroom = (
  { id }: { id: string }
) => {
  return (
    <div id={id} className="py-16 px-4 bg-white font-['Cormorant_Garamond']">
      <h2 className="text-4xl text-center font-semibold text-black mb-2">Visit Our Showroom</h2>
      <div className="w-[120px] h-[2px] bg-[#944141] mx-auto mb-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 px-4">
        <div className="w-full md:w-[65%] h-[450px] shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30145.27963987209!2d77.28381058650007!3d19.18821475101943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d68bf3cd9359%3A0x59f185370a8872a1!2sShahane%20Jewellers!5e0!3m2!1sen!2sin!4v1750922627238!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl w-full h-full"
          ></iframe>
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
