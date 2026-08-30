import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/img/jovia.png";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#2C044F] text-white flex items-center justify-center p-6 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-[#BF953F]/10 rounded-full blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-lg w-full text-center p-8 sm:p-10 rounded-3xlspace-y-6"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img
            src={logo}
            alt="JOVIA"
            className="h-12 mx-auto object-contain drop-shadow"
          />
        </motion.div>

        {/* 404 Hero Header */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <h1 className="text-7xl sm:text-8xl font-black tracking-tight bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent mt-2">
              404
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl sm:text-3xl font-bold text-white mt-2"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#FCF6BA]/80 text-sm sm:text-base leading-relaxed mt-3 max-w-sm mx-auto font-normal"
          >
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved, deleted, or doesn’t exist.
          </motion.p>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-2"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl font-bold text-sm tracking-wide text-[#2C044F] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
