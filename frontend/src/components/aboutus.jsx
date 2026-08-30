import heroVisual from "@/assets/img/image0vea.jpeg";
import heroAI from "@/assets/img/joviawin.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#2C044F] py-24 md:py-32 text-white">
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-[#BF953F]/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* ================= SECTION 1 - EVERAI ================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image (Slide In Up) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl p-2">
              <img
                src={heroVisual}
                alt=" Core Product"
                className="w-full h-auto rounded-2xl object-cover transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Content Left (Staggered Slide In Up) */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-5 text-4xl md:text-6xl font-black leading-tight text-white"
            >
              Just One Vision
              <span className="block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
                Intelligent Advancement
              </span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="space-y-4 mt-6 text-white/80 leading-relaxed"
            >
              <div className="text-lg space-y-4">
                <p>
                  JOVIA is a multinational intelligent networking platform
                  designed to help users earn for the time they spend through
                  networking, digital skills, entertainment, and engaging
                  activities. By setting a countdown timer, users can
                  participate in activities and earn money for every second
                  spent on the platform.
                </p>
                <p>
                  Founded by a seasoned serial entrepreneur, JOVIA serves users
                  across several African countries with one simple mission: to
                  ensure that every user gains real value from their time.
                </p>
              </div>
            </motion.div>

            {/* CTA Button (Slide In Up) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="mt-10"
            >
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-[#2C044F] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] shadow-[0_10px_25px_rgba(191,149,63,0.3)] hover:shadow-[0_15px_30px_rgba(252,246,186,0.4)] hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}