"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call your subscription API here, e.g. await subscribe(email);
    setEmail("");
    setShowModal(true);
  };

  return (
    <section className="bg-[#1B1C1E] text-white h-[464px] py-32 px-6 relative">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold sm:text-5xl"
        >
          Subscribe To Our Newsletter
        </motion.h2>

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

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-xl"
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
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
              focus:ring-2 focus:ring-[#004953]
              transition-all duration-300
            "
          />

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
              text-center text-sm font-semibold text-white
              transition-colors duration-200
              hover:bg-[#004953]/90
              focus:outline-none focus:ring-2 focus:ring-[#004953]
            "
          >
            Subscribe
          </motion.button>
        </motion.form>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-lg p-6 max-w-sm text-center"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Thank you!
            </h3>
            <p className="mb-6 text-gray-700">
              You have successfully subscribed to our newsletter.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-[#004953] text-white rounded-full hover:bg-[#004953]/90 focus:outline-none focus:ring-2 focus:ring-[#004953]"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
