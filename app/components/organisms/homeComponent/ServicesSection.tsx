"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import infoimage from "../../../../public/images/infoimage.png";

// Example service data
const servicesData = [
  {
    number: "01/",
    title: "Software Design",
    description:
      "Craft intuitive and user-centric software designs that ensure seamless user experiences. Our expert team specializes in UI/UX, wireframing, and system architecture tailored to your business needs.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "02/",
    title: "Software Development",
    description:
      "Transform your ideas into reality with our expert software development services. From intuitive mobile apps to powerful web solutions, we build scalable, user-friendly, and innovative products tailored to your needs. Let's create something amazing together!",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "03/",
    title: "Mobile Application Development",
    description:
      "We build high-performance mobile applications for iOS and Android, ensuring seamless user experiences and powerful functionality. Whether it's native or cross-platform, we have you covered.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "04/",
    title: "Web Applications",
    description:
      "Create dynamic, scalable, and responsive web applications that elevate your business. Our team delivers high-quality solutions tailored to meet your requirements.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "05/",
    title: "Cloud Solutions",
    description:
      "Leverage the power of the cloud to scale your business effortlessly. We provide cloud-based solutions, including migration, deployment, and management of cloud infrastructure.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
];

export default function ServiceSection() {
  // Track which indexes are expanded in the accordion
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // Toggle accordion open/close for a specific service index
  const toggleAccordion = (index: number) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <section className="bg-[#004953] text-[#FFFFFF] mx-auto py-16">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8 text-3xl font-light leading-tight sm:text-6xl sm:leading-snug max-w-xl"
        >
          Turning Your Ideas Into Cutting-edge Technologies
        </motion.h2>

        {/* Services List */}
        <div className="space-y-6">
          {servicesData.map((service, index) => {
            const { number, title, description, requestLink, requestLinkText, image } = service;
            const isOpen = openIndexes.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="border-b border-[#FFFFFF] pb-6"
              >
                {/* Accordion Header */}
                <div className="flex items-center justify-between">
                  <span className="mr-4 text-sm opacity-80">{number}</span>
                  <h3 className="flex-1 text-lg font-medium sm:text-xl">{title}</h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="ml-4 text-sm underline hover:text-gray-200"
                  >
                    {isOpen ? "Less Information" : "More Information"}
                  </motion.button>
                </div>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2"
                    >
                      {/* Description + Request Link */}
                      <div>
                        <p className="text-sm leading-relaxed sm:text-base">{description}</p>
                        {requestLink && requestLinkText && (
                          <Link
                            href={requestLink}
                            className="mt-2 inline-block text-sm underline hover:text-gray-200 sm:text-base"
                          >
                            {requestLinkText}
                          </Link>
                        )}
                      </div>

                      {/* Image */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center md:justify-end"
                      >
                        <Image
                          height={400}
                          width={400}
                          src={image.src}
                          alt={title}
                          className="max-w-full h-auto object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Explore Services Button */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#006B6B] text-white text-base font-semibold rounded-full hover:bg-[#004953] focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
