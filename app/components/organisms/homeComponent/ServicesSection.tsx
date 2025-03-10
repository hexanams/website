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
    requestLink: "#",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "02/",
    title: "Software Development",
    description:
      "Transform your ideas into reality with our expert software development services. From intuitive mobile apps to powerful web solutions, we build scalable, user-friendly, and innovative products tailored to your needs. Let's create something amazing together!",
    requestLink: "#",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "03/",
    title: "Mobile Application Development",
    description:
      "We build high-performance mobile applications for iOS and Android, ensuring seamless user experiences and powerful functionality. Whether it's native or cross-platform, we have you covered.",
    requestLink: "#",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "04/",
    title: "Web Applications",
    description:
      "Create dynamic, scalable, and responsive web applications that elevate your business. Our team delivers high-quality solutions tailored to meet your requirements.",
    requestLink: "#",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
  {
    number: "05/",
    title: "Cloud Solutions",
    description:
      "Leverage the power of the cloud to scale your business effortlessly. We provide cloud-based solutions, including migration, deployment, and management of cloud infrastructure.",
    requestLink: "#",
    requestLinkText: "Request for a Service",
    image: infoimage,
  },
];

export default function ServicesSection() {
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
  };return (
    <section className="bg-[#004953] text-[#FFFFFF] py-18">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-10 text-3xl font-[400] w-[566px] leading-tight sm:text-6xl">
          Turning Your Ideas Into Cutting-edge Technologies
        </h2>

        <div className="space-y-8">
          {servicesData.map((service, index) => {
            const { number, title, description, requestLink, requestLinkText, image } = service;
            const isOpen = openIndexes.includes(index);

            return (
              <div key={index}>
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
                      {/* Use .src if 'image' is a StaticImageData object */}
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

        <div className="mt-10 text-center">
        <Link
            href="/services"
            className="
            inline-flex items-center justify-center
            w-[211px] h-[48px]           /* Match Figma's width/height */
            rounded-full
            border-white          /* White border around the pill */
            bg-[#004953] text-white      /* Teal background & white text */
            text-sm font-semibold
            transition-colors duration-200 
            hover:bg-[#006B6B]
            focus:outline-none focus:ring-2 focus:ring-teal-300
            "
        >
            Explore Services
        </Link>
        </div>

      </div>
    </section>
  );
}