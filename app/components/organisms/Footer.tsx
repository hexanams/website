"use client";

import React, { FC, useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer: FC = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Create an intersection observer to detect when the footer is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.1, // Adjust how much of the footer must be visible
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`
        bg-white text-black py-12
        transform transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="text-[24px] font-bold text-[#1B1C1E]">HEX Africa</h3>
            <p className="text-sm leading-relaxed text-[#1B1C1E]">
              Building innovative software solutions and driving digital
              excellence. We create seamless, scalable, and user-centric
              products that transform ideas into reality. Let&apos;s innovate
              together!
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="mb-4 text-base font-semibold uppercase tracking-wide text-[#1B1C1E]">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-[#1B1C1E]">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-black transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-black transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-black transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Address, Email, Phone, Social */}
          <div className="space-y-2">
            <p className="text-sm text-[#1B1C1E]">
              123 Adiola Odeku Street,
              <br />
              Victoria Island, Lagos, Nigeria.
            </p>
            <p className="text-sm text-[#1B1C1E]">Hex@africa.mail</p>
            <p className="text-sm text-[#1B1C1E]">+234 56565656</p>

            {/* Social Icons */}
            <div className="mt-3 flex items-center space-x-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#1B1C1E] hover:text-black transition-colors"
              >
                <FaLinkedinIn size={18} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#1B1C1E] hover:text-black transition-colors"
              >
                <FaFacebookF size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[#1B1C1E] hover:text-black transition-colors"
              >
                <FaTwitter size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#1B1C1E] hover:text-black transition-colors"
              >
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-300" />

        {/* Bottom Section */}
        <div className="mt-4 flex flex-col items-center justify-between gap-4 md:mt-6 md:flex-row">
          <p className="text-sm text-gray-500">&copy; 2025 HexAfrica</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
