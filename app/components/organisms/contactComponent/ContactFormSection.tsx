"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  return (
    <section className="bg-[#004953] text-white py-20 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold leading-tight sm:text-5xl"
        >
          Have Any Project In Mind?
        </motion.h2>

        {/* Form */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8"
        >
          {/* Form Fields */}
          {[
            { type: "text", placeholder: "First Name" },
            { type: "text", placeholder: "Last Name" },
            { type: "email", placeholder: "Email" },
            { type: "text", placeholder: "Subject" },
          ].map((field, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-col"
            >
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="
                  w-full border-b border-white bg-transparent
                  py-3 text-base text-white placeholder-white
                  focus:outline-none focus:ring-0
                "
              />
            </motion.div>
          ))}

          {/* Message (full width on sm+) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:col-span-2"
          >
            <textarea
              placeholder="Message"
              rows={5}
              className="
                w-full border-b border-white bg-transparent
                py-3 text-base text-white placeholder-white
                focus:outline-none focus:ring-0
              "
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="sm:col-span-2 flex justify-start mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
