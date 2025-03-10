"use client";

import React, { useState } from "react";
import Link from "next/link";
import infoimage from "../../../../public/images/infoimage.png";
import Image from "next/image";
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
        "Transform your ideas into reality with our expert software development services. From intuitive mobile apps to powerful web solutions, we build scalable, user-friendly, and innovative products tailored to your needs.",
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
      title: "E-commerce Solutions",
      description:
        "Build scalable and user-friendly e-commerce platforms that enhance customer experience and drive sales. We offer custom storefronts, payment integration, and inventory management.",
      requestLink: "/contact-us",
      requestLinkText: "Request for a Service",
      image: infoimage,
    },
    {
      number: "10/",
      title: "DevOps & Infrastructure",
      description:
        "Streamline your development and operations with our DevOps solutions. We help optimize CI/CD pipelines, cloud hosting, and automated deployments for efficiency and scalability.",
      requestLink: "/contact-us",
      requestLinkText: "Request for a Service",
      image: infoimage,
    },
    {
      number: "11/",
      title: "SEO & Digital Marketing",
      description:
        "Boost your online presence with our SEO and digital marketing services. We optimize websites, enhance search engine rankings, and create targeted marketing strategies.",
      requestLink: "/contact-us",
      requestLinkText: "Request for a Service",
      image: infoimage,
    },
    {
      number: "12/",
      title: "UI/UX Consulting",
      description:
        "Enhance your product’s usability with our UI/UX consulting services. We conduct usability tests, create wireframes, and design engaging interfaces that prioritize user experience.",
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
      if (openIndexes.includes(index)) {
        // If already open, close it
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        // Otherwise, open it
        setOpenIndexes([...openIndexes, index]);
      }
    };
  
    return (
      <section className="bg-[#004953] text-[#FFFFFF] py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Heading */}
          <h2 className="mb-10 text-3xl font-light leading-tight sm:text-6xl sm:leading-snug max-w-xl">
            Turning Your Ideas Into Cutting-edge Technologies
          </h2>
  
          {/* Services List */}
          <div className="space-y-8">
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
                <div key={index}>
                  {/* Accordion Header */}
                  <div className="flex items-center justify-between">
                    <span className="mr-4 text-sm opacity-80">{number}</span>
                    <h3 className="flex-1 text-lg font-medium sm:text-xl">
                      {title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="ml-4 text-sm underline hover:text-gray-200"
                    >
                      More Information
                    </button>
                  </div>
  
                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
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
                      <div className="flex justify-center md:justify-end">
                        <Image
                          height={400}
                          width={400}
                          src={image.src}
                          alt={title}
                          className="max-w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }