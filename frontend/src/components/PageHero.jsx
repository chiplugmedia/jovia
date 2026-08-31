import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const PageHero = ({
  title = "Welcome to JOVIA",
  subtitle = "Building digital skills, unlocking reward channels, and earning for your time.",
  category = "Overview",
  showBadge = true,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#05010d] text-white pt-24 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 border-b border-white/10">
      {/* Background Ambient Glows (Matching Gallery Theme) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 -top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#a855f71f,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-300 sm:px-5 sm:py-2"
          >
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span>{category}</span>
          </motion.div>
        )}

        {/* Dynamic Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          <span className="block bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] bg-clip-text text-transparent pb-1">
            {title}
          </span>
        </motion.h1>

        {/* Decorative Gradient Accent Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="mx-auto mt-4 h-1 w-16 bg-gradient-to-r from-[#E2C876] to-[#C726D4] rounded-full"
        />

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
