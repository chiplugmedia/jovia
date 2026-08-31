import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  HelpCircle,
  GraduationCap,
  ChevronDown,
  CheckCircle2,
  Users,
} from "lucide-react";

import heroAIimg from "@/assets/img/image0JAM.jpeg";

const FAQS = [
  {
    q: "What is JOVIA?",
    a: "JOVIA is an all-in-one digital rewards platform that bridges daily online activities with tangible earning opportunities. Whether you are shopping on JOVIA Easy Buy, streaming music, or engaging on Meta platforms, JOVIA rewards your time.",
  },
  {
    q: "What is JOVIA's mission?",
    a: "Our mission is to empower users worldwide by turning everyday digital engagement—listening to music, social media tasks, and e-commerce—into direct financial rewards and valuable digital skills.",
  },
  {
    q: "How can I earn rewards on JOVIA?",
    a: "You can earn through multiple official channels: completing Meta activities across WhatsApp, Facebook, and Instagram; streaming music from major platforms like Spotify and Apple Music; and uploading or trading verified products on JOVIA Easy Buy.",
  },
  {
    q: "How does the JOVIA Mentorship Program work?",
    a: "Every new subscriber is paired with a dedicated personal mentor upon joining. Your mentor provides step-by-step guidance to help you navigate the platform, optimize your task efficiency, and maximize your daily earning potential.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden bg-[#05010d] text-white">
      {/* Shared Ambient Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute right-20 top-[40%] h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[150px]" />
        <div className="absolute bottom-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#a855f71f,transparent_50%)]" />
      </div>

      <section className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ================= ABOUT JOVIA MENTORSHIP ================= */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content Left */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-purple-300"
              >
                <GraduationCap className="h-4 w-4 text-purple-400" />
                JOVIA Mentorship Program
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
              >
                Learn, Earn &{" "}
                <span className="bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] bg-clip-text text-transparent">
                  Grow with JOVIA
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 space-y-4 text-base text-slate-300 sm:text-lg"
              >
                <p>
                  Understanding our products and earning avenues is seamless. We
                  pair every subscriber with a dedicated personal mentor
                  immediately after sign-up.
                </p>
                <p>
                  Our mentorship program ensures that every JOVIA member receives
                  tailored guidance to unlock the full earning potential across all
                  platform channels.
                </p>
              </motion.div>

              {/* Mentorship Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-purple-400" />
                  <span className="text-sm font-medium text-slate-200">
                    Step-by-step guidance
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
                  <Users className="h-5 w-5 shrink-0 text-[#E2C876]" />
                  <span className="text-sm font-medium text-slate-200">
                    1-on-1 Dedicated Support
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Image Right with Glassmorphism Card Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-1 lg:order-2"
            >
              <div className="group relative overflow-hidden rounded-3xl transition duration-500">
                <div className="absolute inset-x-0 top-0 h-40 " />
                <div className="relative overflow-hidden rounded-2xl ">
                  <img
                    src={heroAIimg}
                    alt="JOVIA Mentorship Program"
                    className="h-auto w-full object-cover transition duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= FAQ SECTION ================= */}
          <div id="faq" className="mx-auto mt-28 max-w-4xl lg:mt-36">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-purple-300">
                <HelpCircle className="h-4 w-4 text-purple-400" />
                JOVIA Help Center
              </div>

              <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm text-slate-300 sm:text-base">
                Everything you need to know about JOVIA, our reward system, and
                getting started.
              </p>
            </motion.div>

            {/* Accordion Cards */}
            <div className="mt-10 space-y-4">
              {FAQS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={item.q}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
                      isOpen
                        ? "border-purple-500/40 bg-white/[0.08] shadow-lg shadow-purple-500/5"
                        : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between p-5 text-left font-bold text-white sm:p-6"
                    >
                      <span className="pr-4 text-base text-slate-100 sm:text-lg">
                        {item.q}
                      </span>
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-purple-400/50 bg-purple-500/20 text-[#E2C876]"
                            : "border-white/10 bg-white/5 text-slate-400"
                        }`}
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/10 px-5 pb-6 pt-3 sm:px-6">
                            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}