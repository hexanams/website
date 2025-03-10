"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
// Icon for hamburger/close
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [navOffsetTop, setNavOffsetTop] = useState(0);

  // Track mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Measure the navbar's initial offset from the top of the page
    if (navRef.current) {
      setNavOffsetTop(navRef.current.offsetTop);
    }
  }, []);

  useEffect(() => {
    function handleScroll() {
      // If the user has scrolled past the navbar's initial position, fix it
      if (window.scrollY > navOffsetTop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navOffsetTop]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={navRef}
      // If scrolled is true, fix it at the top (centered).
      // Otherwise, let it remain in normal flow (relative).
      className={`
        z-50 transition-all duration-300
        ${scrolled ? "fixed top-0 left-1/2 -translate-x-1/2" : "relative"}
      `}
    >
      {/* Pill-shaped container */}
      <div
        className="
          mx-auto flex w-[90vw] max-w-[900px]
          items-center justify-between
          rounded-full bg-white shadow-md
          px-4 py-3
        "
      >
        {/* Left: Brand */}
        <div className="mr-auto">
          <Link href="/" className="text-xl font-bold">
            HexAfrica
          </Link>
        </div>

        {/* Desktop Nav (hidden on small screens) */}
        <nav className="mx-auto hidden items-center space-x-4 md:flex">
          <Link
            href="/services"
            className="flex items-center rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200"
          >
            <span className="mr-2">Services</span>
            <Image
              width={40}
              height={40}
              src="/icons/serviceIcon.svg"
              alt="Services"
              className="text-orange-500 text-sm"
            />
          </Link>
          <Link
            href="/about"
            className="flex items-center rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200"
          >
            <span className="mr-2">About</span>
            <Image
              width={40}
              height={40}
              src="/icons/aboutIcon.svg"
              alt="About"
              className="text-orange-500 text-sm"
            />
          </Link>
          <Link
            href="/portfolio"
            className="flex items-center rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200"
          >
            <span className="mr-2">Portfolio</span>
            <Image
              width={40}
              height={40}
              src="/icons/portfolioIcon.svg"
              alt="Portfolio"
              className="text-orange-500 text-sm"
            />
          </Link>
        </nav>

        {/* Desktop CTA (hidden on small screens) */}
        <div className="ml-auto hidden md:block">
          <Link
            href="/contact-us"
            className="rounded-full bg-black px-5 py-2 text-white hover:bg-gray-800"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button (only visible on small screens) */}
        <button
          type="button"
          onClick={toggleMenu}
          className="block md:hidden ml-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav (shown when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden w-[90vw] max-w-[900px] mx-auto rounded-b-xl bg-white shadow-md px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/services"
              className="flex items-center rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200"
              onClick={toggleMenu}
            >
              <span className="mr-2">Services</span>
              <Image
                width={30}
                height={30}
                src="/icons/serviceIcon.svg"
                alt="Services"
              />
            </Link>
            <Link
              href="/about"
              className="flex items-center rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200"
              onClick={toggleMenu}
            >
              <span className="mr-2">About</span>
              <Image
                width={30}
                height={30}
                src="/icons/aboutIcon.svg"
                alt="About"
              />
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200"
              onClick={toggleMenu}
            >
              <span className="mr-2">Portfolio</span>
              <Image
                width={30}
                height={30}
                src="/icons/portfolioIcon.svg"
                alt="Portfolio"
              />
            </Link>
            {/* CTA Button */}
            <Link
              href="/contact-us"
              className="rounded-full bg-black px-5 py-2 text-white hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
