"use client";

import React, { FC, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

import Image from "next/image";

const Footer: FC = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = footerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white text-black py-12 px-6 h-auto"
    >
      <div className="mx-auto max-w-5xl container px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between  md:space-x-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="space-y-4 flex flex-col items-start w-[329px]"
          >
            <div className="text-[24px] font-bold text-[#1B1C1E]">
              <Image width={100} height={100} src="/icons/HEX-logo-second-png.png" alt="Hex Innovations is a global software development Hex Innovations Logo" />
            </div>
            <p className="text-sm leading-relaxed text-[#1B1C1E]">
              At Hex Innovations,
              We build scalable, user-focused products that turns ideas into reality. Let&apos;s create the future together!
            </p>
          </motion.div>

          {/* Middle Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="mb-4 text-base font-semibold uppercase tracking-wide text-[#1B1C1E]">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-[#1B1C1E]">
              {["About", "Services", "Portfolio", "Contact"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/${item.toLowerCase()}`} className="hover:text-black transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Address, Email, Phone, Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="space-y-2"
          >
            <p className="text-sm text-[#1B1C1E]">Federal Capital Territory Abuja, Nigeria.</p>
            <p className="text-sm text-[#1B1C1E]"><a href="mailto:operations@hexng.com"></a>operations@hexng.com</p>

            <p className="text-sm text-[#1B1C1E]">+234 706 801 8618</p>

            {/* Social Icons */}
            <div className="mt-3 flex items-center space-x-4">
              {/* LinkedIn */}
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <Link
                  href="https://www.linkedin.com/company/hex-innovations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#1B1C1E] hover:text-black transition-colors"
                >
                  <FaLinkedin size={32} />
                </Link>
              </motion.div>

              {/* Twitter (X) */}
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <Link
                  href="https://x.com/_HEX_I"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-[#1B1C1E] hover:text-black transition-colors"
                >
                  <FaTwitterSquare size={32} />
                </Link>
              </motion.div>

              {/* Instagram */}
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <Link
                  href="https://www.instagram.com/_hex_i/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#1B1C1E] hover:text-black transition-colors"
                >
                  <FaInstagramSquare size={32} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-8 border-t border-gray-300"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="mt-4 flex flex-col items-center justify-between gap-4 md:mt-6 md:flex-row"
        >
          <p className="text-sm text-[#1B1C1E]">&copy; {new Date().getFullYear()} HexInnovations</p>
          <div className="flex items-center space-x-4 text-sm text-[#1B1C1E]">
            <Link href="/privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;