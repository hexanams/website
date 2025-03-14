"use client";

import React from "react";

export default function ContactFormSection() {
  return (
    <section className="bg-[#004953] text-white py-20 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="mb-12 text-center text-4xl font-bold leading-tight sm:text-5xl">
          Have Any Project In Mind?
        </h2>

        {/* Form */}
        <form className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8">
          {/* First Name */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="First Name"
              className="
                w-full border-b border-white bg-transparent
                py-3 text-base text-white placeholder-white
                focus:outline-none focus:ring-0
              "
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Last Name"
              className="
                w-full border-b border-white bg-transparent
                py-3 text-base text-white placeholder-white
                focus:outline-none focus:ring-0
              "
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="
                w-full border-b border-white bg-transparent
                py-3 text-base text-white placeholder-white
                focus:outline-none focus:ring-0
              "
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Subject"
              className="
                w-full border-b border-white bg-transparent
                py-3 text-base text-white placeholder-white
                focus:outline-none focus:ring-0
              "
            />
          </div>

          {/* Message (full width on sm+) */}
          <div className="flex flex-col sm:col-span-2">
            <textarea
              placeholder="Message"
              rows={5}
              className="
                w-full border-b border-white bg-transparent
                py-3 text-base text-white placeholder-white
                focus:outline-none focus:ring-0
              "
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-start mt-4">
            <button
              type="submit"
              className="
                rounded-full border border-white
                px-8 py-2
                text-base font-semibold text-white
                transition-colors duration-200
                hover:bg-white hover:text-[#004953]
                focus:outline-none focus:ring-2 focus:ring-white
              "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
