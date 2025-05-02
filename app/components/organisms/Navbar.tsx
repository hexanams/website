// components/Navbar.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [navOffsetTop, setNavOffsetTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (navRef.current) {
      setNavOffsetTop(navRef.current.offsetTop);
    }
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > navOffsetTop);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navOffsetTop]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const navItems = [
    { href: "/services", label: "Services", icon: "/icons/serviceIcon.svg" },
    { href: "/about",    label: "About",    icon: "/icons/aboutIcon.svg" },
    { href: "/projects", label: "Portfolio",icon: "/icons/portfolioIcon.svg" },
  ];

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <motion.div
      ref={navRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`z-50 transition-all pt-4 pb-12 duration-300 ${
        scrolled
          ? "fixed top-0 left-1/2 -translate-x-1/2"
          : "relative"
      }`}
    >
      <div className="mx-auto flex w-[90vw] max-w-[900px] items-center justify-between rounded-full bg-white shadow-md px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <Image
            width={80}
            height={80}
            src="/icons/HEX-white.png"
            alt="HexHex Innovations Logo"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={item.href}
                className={`
                  flex items-center rounded-full px-4 py-2 transition
                  ${isActive(item.href)
                    ? "bg-[#004953] text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"}
                `}
              >
                <span className="mr-2">{item.label}</span>
                <Image
                  width={24}
                  height={24}
                  src={item.icon}
                  alt={item.label}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="hidden md:block ml-4"
        >
          <Link
            href="/contact-us"
            className="rounded-full bg-black px-5 py-2 text-white hover:bg-gray-800"
          >
            Contact us
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="block md:hidden ml-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          {isOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden w-[90vw] max-w-[900px] mx-auto rounded-b-xl bg-white shadow-md px-4 py-4"
          >
            <nav className="flex flex-col space-y-3">
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className={`
                      flex items-center rounded-full px-4 py-2 transition
                      ${isActive(item.href)
                        ? "bg-[#004953] text-white shadow-lg"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"}
                    `}
                  >
                    <span className="mr-2">{item.label}</span>
                    <Image
                      width={20}
                      height={20}
                      src={item.icon}
                      alt={item.label}
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/contact-us"
                  onClick={toggleMenu}
                  className="rounded-full bg-black px-5 py-2 text-white hover:bg-gray-800"
                >
                  Contact us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
