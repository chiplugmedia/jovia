import { Hourglass, BookOpen, HeartHandshake, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const PILLARS = [
  {
    number: "01",
    title: "Time as value",
    body: "Every second you invest is designed to return real value back to you.",
    icon: Hourglass,
    badge: "Efficiency",
  },
  {
    number: "02",
    title: "Skills over luck",
    body: "Earnings built on learning, networking, and active engagement — never chance.",
    icon: BookOpen,
    badge: "Growth",
  },
  {
    number: "03",
    title: "Community strength",
    body: "A resilient global network that expands because its members grow together.",
    icon: HeartHandshake,
    badge: "Synergy",
  },
  {
    number: "04",
    title: "Transparent rewards",
    body: "Clear execution, disclosed terms, and reliable platform payouts.",
    icon: ShieldCheck,
    badge: "Trust",
  },
];

export default function Pillars() {
  return (
    <section
      id="pillars"
      className="relative bg-[#2C044F] py-32 overflow-hidden text-white"
    >
      {/* Dynamic Background Glows & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[180px]" />
        <div className="absolute -top-24 right-10 w-[400px] h-[400px] bg-[#BF953F]/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#2C044F]/80 text-[#FCF6BA] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-ping" />
            The Pillars
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            What{" "}
            <span className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
              JOVIA
            </span>{" "}
            Stands On
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#FCF6BA]/75 leading-relaxed max-w-xl">
            Four core principles anchor our entire platform ecosystem — time,
            skill, community, and radical honesty.
          </p>
        </motion.div>

        {/* Unique Asymmetric Layout */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            const isOffset = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`group relative rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#3A0768]/60 to-[#2C044F]/80 p-8 sm:p-10 backdrop-blur-xl transition-all duration-500
                  isOffset ? "md:translate-y-8" : ""
                }`}
              >
                {/* Gold Accent Line on Top */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent group-hover:via-[#FCF6BA] transition-all duration-500" />

                <div className="flex items-center justify-between">
                  {/* Step / Number Badge */}
                  <span className="font-mono text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] to-[#FCF6BA]">
                    {pillar.number}
                  </span>

                  {/* Icon Node */}
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#2C044F] text-[#FCF6BA] transition-all duration-300">
                    <Icon className="size-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <div className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 rounded-md border border-[#D4AF37]/20 mb-3">
                    {pillar.badge}
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#FCF6BA] ">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#FCF6BA]/70">
                    {pillar.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
