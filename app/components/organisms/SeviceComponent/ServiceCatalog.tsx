"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import infoimage from "../../../../public/images/infoimage.png";

// Example service data
const servicesData = [
  {
    number: "01/",
    title: "Software Design",
    description:
      "We work closely with our clients to understand their vision, objectives, and challenges, ensuring that the software we design aligns perfectly with their needs. Our expert designers focus on user experience (UX) and user interface (UI) design, creating intuitive, visually appealing, and functional software solutions. From concept to final design, we ensure that your software is not only aesthetically pleasing but also practical and scalable for future growth.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "02/",
    title: "Software Development",
    description:
      "Our development process is centered on turning your ideas into fully functional software solutions. Whether you need a simple tool or a complex enterprise solution, our team follows industry best practices, agile methodologies, and testing to deliver software that meets your business requirements. We offer end-to-end support, from architecture planning and coding to deployment and continuous maintenance, ensuring that your software evolves with your business.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "03/",
    title: "Mobile Application Development",
    description:
      "Our team builds custom iOS and Android applications that are optimized for performance, security, and excellence user experiences. We work with you through every stage, from ideation and design to development and deployment, ensuring the final product meets your unique requirements. With a focus on responsive design, smooth functionality, and integration with backend systems, we your businesses create mobile solutions that stand out.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "04/",
    title: "Web Applications",
    description:
      "Our web application development services empower businesses with dynamic, responsive, and high-performance web solutions. We create web applications that are tailored to your needs, ensuring a smooth user experience across all devices. Whether it’s an internal business tool, a customer-facing portal, or a large-scale SaaS platform, we leverage modern frameworks and cloud-based technologies to build scalable and secure applications.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "05/",
    title: "E-commerce Solutions",
    description:
      "We build powerful, scalable e-commerce platforms that provide seamless shopping experiences for customers. Our solutions include custom-built online stores, marketplace integrations, payment gateway setup, and inventory management systems. Whether you need a Shopify, Magento, WooCommerce, or a fully custom solution, we ensure high performance, mobile responsiveness, and user-friendly navigation. From UI/UX design to backend development, we help businesses maximize their online sales potential.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "06/",
    title: "Cybersecurity Services",
    description:
      "Protect your business with our advanced cybersecurity solutions. We offer vulnerability assessments, penetration testing, data encryption, and secure infrastructure solutions.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "07/",
    title: "AI & Machine Learning",
    description:
      "Harness the power of AI and machine learning to automate processes, gain insights, and drive innovation. We build intelligent solutions tailored to your business challenges.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "08/",
    title: "Blockchain Development",
    description:
      "Develop secure and transparent blockchain solutions for finance, supply chain, and decentralized applications. We specialize in smart contracts and blockchain integrations.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "09/",
    title: "DevOps & Infrastructure",
    description:
      "We streamline software development and deployment with DevOps best practices and scalable infrastructure solutions. We  automate workflows, improve CI/CD pipelines, and manage cloud or on-premise infrastructure efficiently. From Kubernetes and Docker containerization to cloud migrations on AWS, Azure, or Google Cloud, we optimize performance, security, and scalability, ensuring that your systems run smoothly with minimal downtime.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "10/",
    title: "SEO & Digital Marketing",
    description:
      "Boost your online presence with our SEO and digital marketing services. We optimize websites, enhance search engine rankings, and create targeted marketing strategies.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "11/",
    title: "UI/UX Consulting",
    description:
      "Our process starts with understanding user behavior, business goals, and industry trends to craft seamless interfaces that enhance engagement and usability. Then we provide wireframing, prototyping, usability testing, and design strategy to ensure your product not only looks great but also delivers a smooth and efficient user experience. Whether you’re launching a new product or improving an existing one, we guide you in building designs that drive user satisfaction and business success.",
    requestLink: "/contact-us",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
];

export default function ServiceCatalog() {
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
    <section className="bg-[#004953] text-[#FFFFFF] py-16">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8 text-3xl font-light leading-tight sm:text-6xl sm:leading-snug max-w-xl"
        >
          Transforming Your Ideas into Business-Ready Technology
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
              description,
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
                        <p className="text-sm leading-relaxed sm:text-base">
                          {description}
                        </p>
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
