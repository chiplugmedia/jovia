import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-[#2C044F]
          border
          border-[#D4AF37]/30
          px-6
          py-12
          md:px-12
          md:py-16
          text-center
        "
      >
        {/* Glow Effects */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#BF953F]/15 blur-3xl pointer-events-none" />

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
              px-4
              py-1.5
              rounded-full
              bg-[#2C044F]/80
              border
              border-[#D4AF37]/30
              text-[#FCF6BA]
              text-xs
              font-bold
              uppercase
              tracking-wider
            "
          >
            Start Your JOVIA Journey
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
              md:text-5xl
              font-black
              leading-tight
              text-white
            "
          >
            Unlock Skill Building,
            <span className="block mt-1 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
              Digital Earning & Rewards
            </span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-4 text-[#FCF6BA]/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
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
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/register"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-3.5
                rounded-xl
                font-bold
                text-[#2C044F]
                bg-gradient-to-r
                from-[#BF953F]
                via-[#FCF6BA]
                to-[#B38728]
                transition-all
                duration-300
              "
            >
              Get Started
            </Link>

            <a
              href="#plans"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-3.5
                rounded-xl
                font-semibold
                text-[#FCF6BA]
                border
                border-[#D4AF37]/30
                bg-[#2C044F]/60
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
