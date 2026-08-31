import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative
          overflow-hidden
          rounded-3xl
          sm:rounded-[32px]
          bg-[#0a0518]/90
          border
          border-white/10
          backdrop-blur-2xl
          px-6
          py-12
          md:px-12
          md:py-16
          text-center
          shadow-2xl
          hover:border-purple-500/30
          transition-colors
          duration-300
        "
      >
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-purple-600/20 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-fuchsia-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#a855f71a,transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-1.5
              rounded-full
              bg-purple-500/10
              border
              border-purple-500/20
              text-[#E2C876]
              text-xs
              font-bold
              uppercase
              tracking-wider
            "
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Start Your JOVIA Journey</span>
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-black
              leading-tight
              text-white
            "
          >
            Unlock Skill Building,
            <span className="block mt-1 bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] bg-clip-text text-transparent">
              Digital Earning & Rewards
            </span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            Join JOVIA today and start earning for your time through networking,
            digital skills, and engaging platform activities.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/register"
              className="
                group
                w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                gap-2
                px-8
                py-3.5
                rounded-xl
                font-bold
                text-[#05010d]
                bg-gradient-to-r
                from-[#E2C876]
                via-[#E2C876]
                to-[#C726D4]
                hover:opacity-95
                hover:shadow-[0_0_25px_rgba(199,38,212,0.4)]
                transition-all
                duration-300
              "
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <a
              href="#plans"
              className="
                w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                px-8
                py-3.5
                rounded-xl
                font-semibold
                text-slate-200
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                hover:text-white
                hover:border-purple-500/30
                backdrop-blur-xl
                transition-all
                duration-300
              "
            >
              View Plans
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
