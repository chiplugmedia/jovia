import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroVisual from "@/assets/img/joviahova.jpg";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#2C044F] text-white"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Solid Deep Purple Base */}
        <div className="absolute inset-0 bg-[#2C044F]" />

        {/* Metallic Gold Light Orbs */}
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-[#D4AF37]/15 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-[#BF953F]/15 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#FCF6BA]/10 rounded-full blur-[180px]" />

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Center Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#2C044F_90%)]" />
      </div>

      {/* ================= CONTENT (CENTERED TOP) ================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 pt-36 pb-20 flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white"
        >
          Every Secound Creates{" "}
          <span className="block mt-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent drop-shadow-sm">
            Value
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg lg:text-xl leading-relaxed text-[#fff]/80 max-w-2xl"
        >
          JOVIA is a multinational platform designed to help users earn for the
          time they spend through networking, digital skills, entertainment, and
          engaging activities across multiple categories.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-[#2C044F] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>

          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#2C044F]/60 backdrop-blur-xl border border-[#D4AF37]/30 text-[#FCF6BA] font-semibold hover:bg-[#D4AF37]/10 transition-all duration-300 hover:border-[#D4AF37]/60"
          >
            Learn More
          </a>
        </motion.div>

        {/* ================= IMAGE (SLIDE IN UP MOTION) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 w-full max-w-5xl flex items-center justify-center"
        >
          {/* Gold Ambient Glow */}
          <div className="pointer-events-none" />

          <div className="relative z-10 w-full rounded-2xl p-3 sm:p-4">
            {!imageLoaded && (
              <div className="animate-pulse rounded-xl bg-[#D4AF37]/10 w-full h-[300px] sm:h-[450px]" />
            )}

            <img
              src={heroVisual}
              alt="JOVIA Network Platform Showcase"
              fetchPriority="high"
              decoding="async"
              draggable="false"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-auto object-contain rounded-xl transition-opacity duration-700 ${
                imageLoaded ? "opacity-100" : "opacity-0 absolute"
              }`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
