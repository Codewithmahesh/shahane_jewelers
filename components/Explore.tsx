import React from 'react'
import Image from 'next/image'

const Explore = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-serif text-gray-900">Explore All Jewelry</h2>
        <p className="text-lg font-serif text-gray-500 mt-2">Crafted with love & passion</p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* Left: Main Collection Image */}
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/assets/images/g14.png" 
            alt="Collections"
            width={642}
            height={743}
            className=" h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-30">
            <span className="text-white text-xl font-serif mb-1">Shop the</span>
            <span className="text-white text-4xl font-serif font-semibold">Collections</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {/* Shop for Mens */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/assets/images/man.png" 
              alt="Shop for Mens"
              width={552}
              height={348}
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-start justify-start p-6">
              <div>
                <span className="text-white text-xl font-serif">Shop for</span>
                <h3 className="text-white text-3xl font-serif font-semibold">Mens</h3>
              </div>
            </div>
          </div>

          {/* Shop for Women */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/assets/images/women.png"
              alt="Shop for Women"
              width={552}
              height={348}
              className=" object-cover"
            />
            <div className="absolute inset-0 flex items-start justify-start p-6">
              <div>
                <span className="text-white text-xl font-serif">Shop for</span>
                <h3 className="text-white text-3xl font-serif font-semibold">Women</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
