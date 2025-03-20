"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SubscribeSection() {
  return (
    <section className="bg-[#1B1C1E] text-white h-[464px] py-32  px-6">
      <div className="mx-auto max-w-3xl text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold sm:text-5xl"
        >
          Subscribe To Our Newsletter
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8 text-sm leading-relaxed text-[#FFFFFF] sm:text-base"
        >
          Stay updated with the latest in tech and innovation! Subscribe to our
          newsletter for exclusive insights, updates, and expert tips straight
          to your inbox. Join us today!
        </motion.p>

        {/* Subscription Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-xl"
        >
          {/* Input Field */}
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Enter your email address"
            className="
              w-full
              h-[70px]
              pl-4 pr-28
              rounded-full
              bg-[#2A2B2D]
              text-sm text-gray-100
              placeholder-gray-400
              outline-none
              focus:bg-[#2F3032]
              focus:ring-2 focus:ring-teal-500
              transition-all duration-300
            "
          />

          {/* Subscribe Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="
              w-[30%]
              h-[70%]
              absolute
              right-1
              top-1/2
              -translate-y-1/2
              rounded-full
              bg-[#004953]
              px-5 py-2
              md:text-[20px] text-center text-sm font-semibold text-white
              transition-colors duration-200
              hover:bg-[#004953]/9
              focus:outline-none focus:ring-2 focus:ring-teal-500
            "
          >
            Subscribe
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
