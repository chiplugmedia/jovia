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
            <div className="relative overflow-hidden rounded-3xp-2">
              <img
                src={heroVisual}
                alt="EverAI Core Product"
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
              className="space-y-4 mt-6 text-[#fff]/80 leading-relaxed"
            >
              <div className="text-lg">
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
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-[#2C044F] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] transition-all duration-300"
              >
                Join EverAI Training
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ================= SECTION 2 - REMOTE JOBS ================= */}
        <div className="mt-28 lg:mt-36 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Left (Slide In Up) */}
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#2C044F]/80 text-[#FCF6BA] text-xs font-bold uppercase tracking-wider"
            >
              About EverAI
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-5 text-4xl md:text-6xl font-black leading-tight text-white"
            >
              Unlock Global Remote Job
              <span className="block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
                Opportunities with EverAI.
              </span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="space-y-4 mt-6 text-[#fff]/80 leading-relaxed"
            >
              <p className="text-lg font-medium text-white">
                Signing up on EverAI Assistant gives you access to a new
                dimension of opportunities within the global digital labour
                market.
              </p>
              <p>
                EverAI has been developed to source and distribute remote job
                opportunities from around the world, helping subscribers
                discover relevant opportunities without having to search
                endlessly across multiple platforms.
              </p>
              <p>
                The system is designed to identify, filter, and promptly notify
                subscribers when new remote jobs and opportunities become
                available, paying as high as{" "}
                <span className="font-bold text-[#fff]">$18.6/hour</span>. Most
                job offers are simple tasks that require little to no
                experience, special skills, or qualifications.
              </p>
            </motion.div>
          </div>

          {/* Image Right (Slide In Up) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative overflow-hidden rounded-3xl p-2">
              <img
                src={heroAI}
                alt="EverAI Remote Jobs"
                className="w-full h-auto rounded-2xl object-cover transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
