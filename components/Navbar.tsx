"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  const logoPath = '/assets/images/SJ_logo_1.png';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('nav')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-70 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src={logoPath}
              alt="Jewelry Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <NavIcon href="/cart" icon="🛒" label="Cart" />
          <NavLink href="/login">Login</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <Link href="/cart" className="text-white text-2xl">🛒</Link>
          <button
            className="text-white focus:outline-none p-2"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 md:hidden transition-opacity duration-300 ease-in-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } z-40`}
        style={{ top: scrolled ? '56px' : '72px' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 py-10">
          <NavLink href="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink href="/collections" onClick={() => setMenuOpen(false)}>Collections</NavLink>
          <NavLink href="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink href="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink href="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
        </div>
      </div>
    </nav>
  );
};

// NavLink with underline animation
const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({
  href,
  children,
  onClick,
}) => {
  return (
    <Link href={href} onClick={onClick}>
      <span className="relative text-white hover:text-gray-300 text-xl font-light cursor-pointer transition duration-300 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300">
        {children}
      </span>
    </Link>
  );
};

// NavIcon (for cart)
const NavIcon: React.FC<{ href: string; icon: string; label?: string }> = ({ href, icon, label }) => {
  return (
    <Link href={href}>
      <span className="text-white text-2xl hover:text-gray-300 cursor-pointer" title={label}>
        {icon}
      </span>
    </Link>
  );
};
