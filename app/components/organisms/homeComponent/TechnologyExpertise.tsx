"use client";

import React from "react";
import Image from "next/image";

const techData = [
  { name: "Figma", icon: "/icons/tech-figma.png" },
  { name: "AWS", icon: "/icons/tech-aws.png" },
  { name: "Flutter", icon: "/icons/tech-flutter.png" },
  { name: "Azure", icon: "/icons/tech-azure.png" },
  { name: "NodeJS", icon: "/icons/tech-nodejs.png" },
  { name: "WordPress", icon: "/icons/tech-wordpress.png" },
  { name: "React", icon: "/icons/tech-react.png" },
  { name: "PHP", icon: "/icons/tech-php.png" },
  { name: "JavaScript", icon: "/icons/tech-js.png" },
  { name: "Photoshop", icon: "/icons/tech-photoshop.png" },
  { name: "WooCommerce", icon: "/icons/tech-woocommerce.png" },
  { name: "Google Analytics", icon: "/icons/tech-ga.png" },
];

export default function TechnologyExpertise() {
  return (
    <section
      className="relative text-white py-12"
      style={{
        backgroundImage: 'url("/images/tech-expertise.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Teal overlay */}
      <div className="absolute inset-0 bg-[#0D4F4F]/90" />

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold sm:text-4xl">Technology Experts</h2>

        {/* Subheading */}
        <p className="mt-2 mb-8 max-w-2xl text-base leading-relaxed text-gray-100 sm:text-lg">
          With deep technology expertise and commitment to innovation, we deliver 
          cutting-edge software solutions that empower businesses to scale, optimize 
          operations, and stay ahead in a rapidly evolving digital landscape.
        </p>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {techData.map((tech, index) => (
            <div
              key={index}
              className="
                flex flex-col  
                rounded-lg bg-[#1B1C1E] p-6 
                transition-colors 
                hover:bg-[#2A2B2D]
              "
            >
              {/* Icon */}
              <div className="mb-4 relative h-12 w-12">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Technology Name */}
              <h3 className="text-base font-medium sm:text-lg">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
