"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Softwaredesign from "@/public/images/SOFTWARE-DESIGN.svg";
import Softwaredevelopment from "@/public/images/SOFTWARE-DEVELOPMENT.svg";
import Mobileappdevelopment from "@/public/images/MOBILE-APPLICATION-DEVELOPMENT.svg";
import Webapp from "@/public/images/WEB-DEVELOPMENT.svg";
import Ecommerce from "@/public/images/E-COMMERCE-SOLUTIONS.svg";

const servicesData = [
  {
    number: "01/",
    title: "Software Design",
    descriptionOne:
      "We work closely with our clients to understand their vision, objectives, and challenges, ensuring that the software we design aligns perfectly with their needs. Our expert designers focus on user experience (UX) and user interface (UI) design, creating intuitive, visually appealing, and functional software solutions.",
    descriptionTwo:
      "From concept to final design, we ensure that your software is not only aesthetically pleasing but also practical and scalable for future growth.",
    requestLink: "/contact",
    requestLinkText: "Request for a Service",
    image: Softwaredesign,
  },
  {
    number: "02/",
    title: "Software Development",
    descriptionOne:
      "Our development process is centered on turning your ideas into fully functional software solutions. Whether you need a simple tool or a complex enterprise solution, our team follows industry best practices, agile methodologies, and testing to deliver software that meets your business requirements.",
    descriptionTwo:
      "We offer end-to-end support, from architecture planning and coding to deployment and continuous maintenance, ensuring that your software evolves with your business.",
    requestLink: "/contact",
    requestLinkText: "Request for a Service",
    image: Softwaredevelopment,
  },
  {
    number: "03/",
    title: "Mobile Application Development",
    descriptionOne:
      "Our team builds custom iOS and Android applications that are optimized for performance, security, and excellence user experiences. We work with you through every stage, from ideation and design to development and deployment, ensuring the final product meets your unique requirements.",
    descriptionTwo:
      "With a focus on responsive design, smooth functionality, and integration with backend systems, we your businesses create mobile solutions that stand out.",
    requestLink: "/contact",
    requestLinkText: "Request for a Service",
    image: Mobileappdevelopment,
  },
  {
    number: "04/",
    title: "Web Applications",
    descriptionOne:
      "Our web application development services empower businesses with dynamic, responsive, and high-performance web solutions. We create web applications that are tailored to your needs, ensuring a smooth user experience across all devices.",
    descriptionTwo:
      "Whether it’s an internal business tool, a customer-facing portal, or a large-scale SaaS platform, we leverage modern frameworks and cloud-based technologies to build scalable and secure applications.",
    requestLink: "/contact",
    requestLinkText: "Request for a Service",
    image: Webapp,
  },
  {
    number: "05/",
    title: "E-commerce Solutions",
    descriptionOne:
      "We build powerful, scalable e-commerce platforms that provide seamless shopping experiences for customers. Our solutions include custom-built online stores, marketplace integrations, payment gateway setup, and inventory management systems.",
    descriptionTwo:
      "Whether you need a Shopify, Magento, WooCommerce, or a fully custom solution, we ensure high performance, mobile responsiveness, and user-friendly navigation. From UI/UX design to backend development, we help businesses maximize their online sales potential.",
    requestLink: "/contact",
    requestLinkText: "Request for a Service",
    image: Ecommerce,
  },
];

export default function ServiceSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
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
          Got An Idea? We’re On It!
        </motion.h2>

        {/* Services List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {servicesData.map((service, index) => {
            const {
              number,
              title,
              descriptionOne,
              descriptionTwo,
              requestLink,
              requestLinkText,
              image,
            } = service;
            const isOpen = openIndexes.includes(index);

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="border-b border-[#FFFFFF] pb-6"
              >
                {/* Accordion Header */}
                <div className="flex items-center justify-between">
                  <span className="mr-4 text-sm opacity-80">{number}</span>
                  <h3 className="flex-1 text-lg font-medium sm:text-xl">
                    {title}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="inline-block text-[20px] font-medium text-[#FFFFFF] border-white border-b-2 hover:text-gray-300 transition"
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
                      {/* Text Content */}
                      <div>
                        <div className="text-sm leading-relaxed sm:text-base">
                          {descriptionOne ? (
                            <>
                              <p className="mb-2">{descriptionOne}</p>
                              <p>{descriptionTwo}</p>
                            </>
                          ) : null}
                        </div>
                        {requestLink && requestLinkText && (
                          <Link
                            href={requestLink}
                            className="inline-block text-lg font-medium text-white mt-4 border-white border-b-2 hover:text-gray-300 transition"
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
                          className="max-w-full h-auto object-cover rounded-lg shadow-md"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
