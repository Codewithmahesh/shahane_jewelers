import React from 'react'
import { HiMenuAlt1, HiOutlineLocationMarker } from 'react-icons/hi'
import Image from 'next/image'
import { FaHeart, FaRegUser } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="navbar bg-[#730401] w-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Hamburger Menu */}
        <div className="flex items-center">
          <HiMenuAlt1 size={50} className="text-white" />
        </div>

        {/* Logo */}
        <div className="flex justify-center ml-56">
          <Image
            src="/assets/images/logo.png"
            width={148}
            height={116}
            alt="logo"
            className="object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Location */}
          <div className="flex items-center gap-2 border-2 border-white px-3 py-2 rounded-xl">
            <HiOutlineLocationMarker size={20} className="text-white" />
            <span className="text-white text-lg font-medium">Nanded, Maharashtra</span>
          </div>

          {/* Heart and User */}
          <div className="flex items-center gap-3 px-3 py-2">
            <FaHeart size={28} className="text-amber-500 hover:scale-110 transition" />
            <FaRegUser size={28} className="text-white hover:scale-110 transition" />
          </div>
        </div>
      </div>

      {/* Nav Links with Underline on Hover */}
      <div className="navlinks flex justify-center">
        <ul className="flex items-center gap-10 py-4">
          {['Home', 'Catalog', 'Rate', 'About', 'Contact'].map((item) => (
            <li
              key={item}
              className="relative text-white text-[25px] font-serif cursor-pointer 
                         before:content-[''] before:absolute before:-bottom-1 before:left-0 
                         before:h-[2px] before:w-0 before:bg-white 
                         hover:before:w-full before:transition-all before:duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
