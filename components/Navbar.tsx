'use client'
import React, { useEffect, useState } from 'react'
import { HiMenuAlt1, HiOutlineLocationMarker } from 'react-icons/hi'
import Image from 'next/image'
import { FaHeart, FaRegUser } from 'react-icons/fa'

const navItems = ['Home', 'Catalog', 'Rate', 'About', 'Contact']

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Overlay and AuthForm */}
     
    
      <div
        className={`navbar bg-[#730401] w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-lg' : ''
        }`}
      >
        {/* Top Bar */}
        <div className="relative flex items-center justify-between px-6 py-3">
          {/* Left Section: Hamburger */}
          <div className="flex items-center">
            <HiMenuAlt1 size={40} className="text-white" />
          </div>

          {/* Center Nav Links (appear on scroll only) */}
          {scrolled && (
            <ul
              className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6 
                       transition-all duration-500 ease-in-out opacity-100 translate-y-0"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="relative text-white text-[18px] font-serif cursor-pointer 
                             before:content-[''] before:absolute before:-bottom-1 before:left-0 
                             before:h-[2px] before:w-0 before:bg-white 
                             hover:before:w-full before:transition-all before:duration-300"
                >
                  {item}
                </a>
              ))}
            </ul>
          )}

          {/* Logo (Only before scroll) */}
          {!scrolled && (
            <div className="flex justify-center ml-56 transition-opacity duration-300">
              <Image
                src="/assets/images/logo.png"
                width={148}
                height={116}
                alt="logo"
                className="object-contain"
              />
            </div>
          )}

          {/* Right Section: Location + Icons */}
          {/* Right Section: Location + Icons */}
<div className="flex items-center gap-4">
  {/* Location */}
  <div className="flex items-center gap-2 border-2 border-white px-3 py-2 rounded-xl">
    <HiOutlineLocationMarker size={20} className="text-white" />
    <span className="text-white text-sm font-medium">Nanded, Maharashtra</span>
  </div>

  {/* Icons */}
  <div className="flex items-center gap-3 px-3 py-2">
    <FaHeart size={24} className="text-amber-500 hover:scale-110 transition" />
    <FaRegUser size={24} className="text-white" />
  </div>
</div>
        </div>

        {/* Nav Links (Only before scroll) */}
        {!scrolled && (
          <div className="navlinks flex justify-center scroll-smooth">
            <ul className="flex items-center gap-10 py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="relative text-white text-[25px] font-serif cursor-pointer 
                             before:content-[''] before:absolute before:-bottom-1 before:left-0 
                             before:h-[2px] before:w-0 before:bg-white 
                             hover:before:w-full before:transition-all before:duration-300"
                >
                  {item}
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
