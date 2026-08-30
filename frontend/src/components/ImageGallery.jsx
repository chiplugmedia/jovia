import React from "react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    badge: "Marketplace",
    title: "JOVIA EASY BUY",
    tagline: "Shop • Sell • Earn all in one place",
    description:
      "A secure marketplace where users can discover, buy, and sell legitimate products and services with ease.",
    highlights: ["Buy Easy, Sell Easy", "Approved Product Listing"],
    reward: "Earn up to $3 per approved upload",
    imageUrl: "/src/assets/img/image1.jpeg",
  },
  {
    id: 2,
    badge: "Meta Tasks",
    title: "EARN ON META WITH JOVIA",
    tagline: "Monetize daily social interactions",
    description:
      "Complete simple activities on platforms you already use every day and receive rewards for eligible tasks.",
    highlights: [
      "Share posts on Facebook",
      "Like & Engage with Content",
      "Connect WhatsApp & Instagram",
    ],
    reward: "Instant rewards per activity",
    imageUrl: "/src/assets/img/image2.jpeg",
  },
  {
    id: 3,
    badge: "Music Streaming",
    title: "JOVIA MUSIC STREAMING",
    tagline: "Listen & Earn on Major Platforms",
    description:
      "Strategic partnerships with artists and producers to reward your listening time across major music streaming services.",
    highlights: [
      "Spotify, Apple Music, Audiomack & Boomplay",
      "Extra $3 per 60-second session",
    ],
    reward: "Earn up to $6 per listening session",
    imageUrl: "/src/assets/img/image0.jpeg",
  },
  {
    id: 4,
    badge: "Friday Bonus",
    title: "FRIDAY BONUS REWARDS",
    tagline: "Win & Withdraw Instantly",
    description:
      "A random number appears every Friday. Tap it to claim your reward instantly.",
    highlights: [
      "$10 Instant Reward",
      "Weekly Lucky Winners",
      "Featured On Celebration Flyers",
    ],
    reward: "Win up to $10 every Friday",
    imageUrl: "/src/assets/img/joviawin.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function ImageGallery() {
  return (
    <section className="relative overflow-hidden bg-[#2C044F] py-16 px-4 sm:px-8 lg:px-12 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#BF953F]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#D4AF37]/30 bg-[#2C044F]/80 text-[#FCF6BA] text-xs font-bold uppercase tracking-wider">
            Ways To Earn
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-black">
            Your Time,
            <span className="ml-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
              Rewarded
            </span>
          </h2>

          <p className="mt-3 text-sm md:text-base text-[#FCF6BA]/80 max-w-2xl mx-auto">
            Trade, stream, engage and participate in activities across the JOVIA
            ecosystem.
          </p>

          <div className="mt-4 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-[#3A0768]/40 border border-[#D4AF37]/20 rounded-2xl overflow-hidden flex flex-col p-3 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden bg-[#1D0236] border border-[#D4AF37]/10">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto object-contain block"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="pt-3 flex flex-col flex-grow">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  {item.badge}
                </span>

                <h3 className="mt-1 text-sm font-black text-white leading-tight">
                  {item.title}
                </h3>

                <p className="mt-1 text-[11px] font-semibold text-[#FCF6BA]">
                  {item.tagline}
                </p>

                <p className="mt-2 text-[11px] text-[#FCF6BA]/75 leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-3 space-y-1 flex-grow">
                  {item.highlights.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-2 text-[10px] text-white/90"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-3 p-2 rounded-lg bg-gradient-to-r from-[#BF953F]/15 via-[#FCF6BA]/10 to-[#B38728]/15 border border-[#D4AF37]/20">
                  <span className="text-[10px] font-semibold text-[#FCF6BA]">
                    {item.reward}
                  </span>
                </div> */}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
