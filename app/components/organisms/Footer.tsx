"use client";

import React, { FC, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

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
      {
        threshold: 0.1,
      }
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
      className="bg-white text-black py-12"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-[24px] font-bold text-[#1B1C1E]">HEX Africa</h3>
            <p className="text-sm leading-relaxed text-[#1B1C1E]">
              Building innovative software solutions and driving digital
              excellence. We create seamless, scalable, and user-centric
              products that transform ideas into reality. Let&apos;s innovate
              together!
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
            <p className="text-sm text-[#1B1C1E]">
              123 Adiola Odeku Street,
              <br />
              Victoria Island, Lagos, Nigeria.
            </p>
            <p className="text-sm text-[#1B1C1E]">Hex@africa.mail</p>
            <p className="text-sm text-[#1B1C1E]">+234 56565656</p>

            {/* Social Icons */}
            <div className="mt-3 flex items-center space-x-4">
              {[FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-[#1B1C1E] hover:text-black transition-colors"
                  >
                    <Icon size={18} />
                  </Link>
                </motion.div>
              ))}
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
          <p className="text-sm text-[#1B1C1E]">&copy; 2025 HexAfrica</p>
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
