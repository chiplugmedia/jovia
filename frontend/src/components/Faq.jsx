import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroAIimg from "@/assets/img/everphoto.jpg";

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
    <section className="relative overflow-hidden bg-[#2C044F] py-24 md:py-32 text-white">
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-[#BF953F]/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* ================= ABOUT JOVIA MENTORSHIP ================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#2C044F]/80 text-[#FCF6BA] text-xs font-bold uppercase tracking-wider"
            >
              JOVIA Mentorship Program
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-5 text-4xl md:text-6xl font-black leading-tight text-white"
            >
              Learn, Earn &
              <span className="block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
                Grow with JOVIA
              </span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="space-y-4 mt-6 text-[#FCF6BA]/85 leading-relaxed text-base md:text-lg font-normal"
            >
              <p>
                Understanding our products and earning avenues is seamless. We pair every subscriber with a dedicated personal mentor immediately after sign-up.
              </p>
              <p>
                Our mentorship program ensures that every JOVIA member receives tailored guidance to unlock the full earning potential across all platform channels.
              </p>
              <p>
                Your personal mentor will walk you through setting up Meta tasks, streaming music for rewards, listing items on JOVIA Easy Buy, and maximizing your payouts.
              </p>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative overflow-hidden rounded-3xl p-2 ">
              <img
                src={heroAIimg}
                alt="JOVIA Mentorship Program"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div id="faq" className="max-w-4xl mx-auto mt-28 lg:mt-36">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#2C044F]/80 text-[#FCF6BA] text-xs font-bold uppercase tracking-wider">
              JOVIA Help Center
            </span>

            <h3 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-white">
              Frequently Asked
              <span className="block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
                Questions
              </span>
            </h3>

            <p className="mt-3 text-sm md:text-base text-[#FCF6BA]/70">
              Everything you need to know about JOVIA, our reward system, and getting started.
            </p>
          </motion.div>

          {/* FAQ Accordions */}
          <div className="mt-12 space-y-4">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="rounded-2xl \overflow-hidden transition-colors duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between font-bold text-white transition-colors"
                  >
                    <span className="text-base sm:text-lg pr-4">{item.q}</span>
                    <span
                      className={`text-[#FCF6BA] text-2xl font-bold transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
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
                        <div className="px-6 pb-6 pt-1 border-t border-[#D4AF37]/10">
                          <p className="text-[#FCF6BA]/80 leading-relaxed text-sm sm:text-base font-normal">
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
  );
}