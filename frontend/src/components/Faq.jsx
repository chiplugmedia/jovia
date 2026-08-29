import heroAIing from "@/assets/img/everphoto.jpg";
import { motion } from "framer-motion";

const FAQS = [
  {
    q: "What is Evermore?",
    a: "Evermore bridges the gap between the digital world and real-world opportunities while contributing to the development of next-generation Generative Artificial Intelligence.",
  },
  {
    q: "What is Evermore's mission?",
    a: "We focus on creating better prompts, more intelligent interactions, and increasing human-like responses to make AI more useful and natural.",
  },
  {
    q: "How can I earn rewards?",
    a: "Users can earn rewards by helping train our AI, improving memory functions, and contributing to the growth of our platform.",
  },
];

export default function FAQ() {
  return (
    <section className="relative overflow-hidden bg-[#2C044F] py-24 md:py-32 text-white">
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-[#BF953F]/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* ================= ABOUT EVERAI ================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#2C044F]/80 text-[#FCF6BA] text-xs font-bold uppercase tracking-wider"
            >
              EverAI Mentorship Program
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-5 text-4xl md:text-6xl font-black leading-tight text-white"
            >
              Learn, Earn &
              <span className="block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
                Grow with EverAI
              </span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="space-y-4 mt-6 text-[#fff] leading-relaxed text-base md:text-lg"
            >
              <p>
                Understanding our products and opportunities is not a myth as we
                have provided every subscriber with a personal mentor
                immediately after signing up.
              </p>
              <p>
                Our mentorship program creates a pathway where every EverAI
                subscriber receives dedicated guidance and support to fully
                understand all monetization opportunities available on Evermore.
              </p>
              <p>
                Your personal mentor will help you understand how to navigate
                the platform, explore available earning opportunities, and, most
                importantly, learn how to earn hourly while training our
                generative AI.
              </p>
            </motion.div>

           
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative overflow-hidden rounded-3xl p-2">
              <img
                src={heroAIing}
                alt="EverAI Mentorship Program"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div id="faq" className="max-w-5xl mx-auto mt-28 lg:mt-36">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#2C044F]/80 text-[#FCF6BA] text-xs font-bold uppercase tracking-wider">
              FAQ EverAI
            </span>

            <h3 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-white">
              Frequently Asked
              <span className="block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
                Questions
              </span>
            </h3>

            <p className="mt-3 text-sm md:text-base text-[#FCF6BA]/70">
              Learn more about Evermore, our AI mission, reward system, and
              opportunities.
            </p>
          </motion.div>

          {/* FAQ Accordions */}
          <div className="mt-12 space-y-4">
            {FAQS.map((item, index) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <details className="group rounded-2xl border border-[#D4AF37]/20 bg-[#3A0768]/40 backdrop-blur-md overflow-hidden">
                  <summary className="cursor-pointer list-none p-6 flex items-center justify-between font-semibold text-white">
                    <span className="text-lg">{item.q}</span>
                    <span className="text-[#FCF6BA] text-xl font-bold ml-4">
                      +
                    </span>
                  </summary>

                  <div className="px-6 pb-6 pt-2 border-t border-[#D4AF37]/10">
                    <p className="text-[#FCF6BA]/80 leading-relaxed text-sm sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
