import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/img/image0vea.jpeg";

export default function AboutSection() {
  return (
    <div className="relative overflow-hidden bg-[#05010d] text-white">
      {/* Shared Background Effects matching AboutSection */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute right-20 top-[40%] h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[150px]" />
        <div className="absolute bottom-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#a855f71f,transparent_50%)]" />
      </div>
      <section id="about" className="relative z-10 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="group relative w-full max-w-md">
                <div className="absolute -inset-4 rounded-[40px]" />
                <div className="relative overflow-hidden rounded-[32px]">
                  <img
                    src={aboutImage}
                    alt="What is JOVIA Network"
                    className="mx-auto h-auto w-full object-contain transition duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-300">
                <Sparkles className="h-4 w-4" />
                What Exactly Is JOVIA?
              </div>

              {/* Heading */}
              <h2 className="mb-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Just One Vision <br />
                <span className="bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] bg-clip-text text-transparent">
                  Intelligent Advancement
                </span>
              </h2>

              <p className="mb-6 leading-relaxed text-slate-400">
                JOVIA is a multinational intelligent networking platform
                designed to help users earn for the time they spend through
                networking, digital skills, entertainment, and engaging
                activities. By setting a countdown timer, users can participate
                in activities and earn money for every second spent on the
                platform.
              </p>

              <p className="mb-8 leading-relaxed text-slate-400">
                Founded by a seasoned serial entrepreneur, JOVIA serves users
                across several African countries with one simple mission: to
                ensure that every user gains real value from their time.
              </p>

              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-[#E2C876] to-[#C726D4] px-8 py-4 font-semibold text-[#270041] transition-all duration-300 hover:scale-105"
              >
                Register Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
