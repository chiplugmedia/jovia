import React from "react";
import { motion } from "framer-motion";

const PageHero = ({
  title = "Welcome to JOVIA",
  subtitle = "Building digital skills, unlocking reward channels, and earning for your time.",
  category = "Overview",
  showBadge = true,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#2C044F] text-white pt-28 sm:pt-36 pb-16 lg:pb-24 px-6 sm:px-12 lg:px-20 border-b border-[#D4AF37]/20">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BF953F]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 text-left">
        {/* Top Badge */}
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2C044F]/80 border border-[#D4AF37]/30 mb-5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E57B] animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#FCF6BA]">
              {category}
            </span>
          </motion.div>
        )}

        {/* Dynamic Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white"
        >
          <span className="block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent pb-1">
            {title}
          </span>
        </motion.h1>

        {/* Decorative Gold Accent Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="mt-4 h-1 w-16 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-full origin-left"
        />

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-5 text-lg sm:text-xl leading-relaxed text-[#FCF6BA]/80 max-w-2xl font-medium"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;