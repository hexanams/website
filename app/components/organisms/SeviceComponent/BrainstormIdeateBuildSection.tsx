import React from 'react';
import Image from 'next/image';

function BrainstormIdeateBuildSection() {
  return (
    <section className="relative w-full">
      {/* Container for the image and overlays */}
      <div className="relative w-full h-[500px]">
        {/* Main Image */}
        <Image
          width={900}
          height={900}
          src="/images/brainstorm-ideate-build.png"
          alt="Brainstorm, Ideate, Build"
          className="w-full h-full object-cover"
        />

        {/* Circle + Text #1: Brainstorm */}
        <div className="absolute flex items-center"
             style={{ top: '20%', left: '10%' }}>
          <div
            className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#6A5ACD] mr-2"
            /* #6A5ACD is a placeholder purple; replace with your Figma color */
          />
          <span className="text-white text-[40px] md:text-[64px] font-bold">
            Brainstorm
          </span>
        </div>

        {/* Circle + Text #2: Build */}
        <div className="absolute flex items-center"
             style={{ bottom: '15%', left: '45%' }}>
          <div
            className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#1DA1F2] mr-2"
            /* #1DA1F2 is a placeholder blue; replace with your Figma color */
          />
          <span className="text-white text-[40px] md:text-[64px] font-bold">
            Build
          </span>
        </div>

        {/* Circle + Text #3: Ideate */}
        <div className="absolute flex items-center"
             style={{ top: '25%', right: '10%' }}>
          <div
            className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#FF69B4] mr-2"
            /* #FF69B4 is a placeholder pink; replace with your Figma color */
          />
          <span className="text-white text-[40px] md:text-[64px] font-bold">
            Ideate
          </span>
        </div>
      </div>
    </section>
  );
}

export default BrainstormIdeateBuildSection;
