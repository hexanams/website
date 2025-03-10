"use client";

import React from "react";

export default function SubscribeSection() {
  return (
    <section className="bg-[#1B1C1E] text-white py-12 px-6">
      <div className="mx-auto max-w-3xl text-center">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          Subscribe To Our Newsletter
        </h2>

        {/* Description */}
        <p className="mb-8 text-sm leading-relaxed text-gray-300 sm:text-base">
          Stay updated with the latest in tech and innovation! Subscribe to our
          newsletter for exclusive insights, updates, and expert tips straight
          to your inbox. Join us today!
        </p>

        {/* Subscription Form */}
        <form className="relative mx-auto max-w-xl">
          {/* Input Field */}
          <input
            type="email"
            placeholder="Enter your email address"
            className="
              w-full
              h-12
              pl-4 pr-28  /* Extra right padding to accommodate the button */
              rounded-full
              bg-[#2A2B2D]
              text-sm text-gray-100
              placeholder-gray-400
              outline-none
              focus:bg-[#2F3032]
              focus:ring-2 focus:ring-teal-500
            "
          />

          {/* Subscribe Button */}
          <button
            type="submit"
            className="
              absolute
              right-1
              top-1/2
              -translate-y-1/2
              rounded-full
              bg-[#004953]
              px-5 py-2
              text-sm font-semibold text-white
              transition-colors duration-200
              hover:bg-[#006B6B]
              focus:outline-none focus:ring-2 focus:ring-teal-500
            "
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
