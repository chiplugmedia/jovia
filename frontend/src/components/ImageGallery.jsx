import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShoppingBag,
  Share2,
  Music,
  Gift,
  CheckCircle2,
  TrendingUp,
  Video,
  Gamepad2,
} from "lucide-react";

// Asset imports
import image1 from "@/assets/img/image1.jpeg";
import image2 from "@/assets/img/image2.jpeg";
import image0 from "@/assets/img/image0.jpeg";
import joviaWin from "@/assets/img/joviawin.jpg";
import image0JSJA from "@/assets/img/image0JSJA.jpeg";
import image1ASDFG from "@/assets/img/image1ASDFG.jpeg";

const galleryItems = [
  {
    id: 1,
    step: "Step 01",
    badge: "Marketplace",
    icon: ShoppingBag,
    title: "JOVIA EASY BUY",
    tagline: "Shop • Sell • Earn all in one place",
    description:
      "A secure marketplace where users can discover, buy, and sell legitimate products and services with ease.",
    highlights: ["Buy Easy, Sell Easy", "Approved Product Listing"],
    reward: "Earn up to $3 per approved upload",
    imageUrl: image1,
    accentGlow: "from-amber-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: 2,
    step: "Step 02",
    badge: "Meta Tasks",
    icon: Share2,
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
    imageUrl: image2,
    accentGlow: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: 3,
    step: "Step 03",
    badge: "Music Streaming",
    icon: Music,
    title: "JOVIA MUSIC STREAMING",
    tagline: "Listen & Earn on Major Platforms",
    description:
      "Strategic partnerships with artists and producers to reward your listening time across major streaming services.",
    highlights: [
      "Spotify, Apple Music, Audiomack & Boomplay",
      "Extra $3 per 60-second session",
    ],
    reward: "Earn up to $6 per listening session",
    imageUrl: image0,
    accentGlow: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: 4,
    step: "Step 04",
    badge: "Friday Bonus",
    icon: Gift,
    title: "FRIDAY BONUS REWARDS",
    tagline: "Win & Withdraw Instantly",
    description:
      "A random number appears every Friday. Tap it to claim your reward instantly across the platform.",
    highlights: [
      "$10 Instant Reward",
      "Weekly Lucky Winners",
      "Featured On Celebration Flyers",
    ],
    reward: "Win up to $10 every Friday",
    imageUrl: joviaWin,
    accentGlow: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
  },
  {
    id: 5,
    step: "Step 05",
    badge: "Watch & Earn",
    icon: Video,
    title: "WATCH CELEBRITY VIDEOS & EARN",
    tagline: "Every Second Counts",
    description:
      "Enjoy celebrity videos, AI videos, music videos, content videos, entertainment and more. Choose how long you want to watch, press START to activate the countdown, and earn rewards based on your selected viewing time.",
    highlights: ["1 Second = $0.01", "20 Seconds = $2", "2 Minutes = $12"],
    reward: "Watch Videos & Earn Cash",
    imageUrl: image0JSJA,
    accentGlow: "from-pink-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: 6,
    step: "Step 06",
    badge: "Play & Earn",
    icon: Gamepad2,
    title: "PLAY FUN GAMES & EARN",
    tagline: "Get Rewarded Every Session",
    description:
      "Start earning while playing your favorite games. Whether you win or lose, JOVIA rewards you for every game session. Simply fund your wallet, choose how long you want to play, and press START to activate the countdown and begin earning.",
    highlights: [
      "Earn While Playing",
      "Win or Lose, Get Paid",
      "Choose Your Play Time",
    ],
    reward: "Play Games & Earn Cash",
    imageUrl: image1ASDFG,
    accentGlow: "from-cyan-500/20 via-purple-500/10 to-transparent",
  },
];

// Duplicate items array to create a seamless infinite loop effect
const carouselItems = [...galleryItems, ...galleryItems];

export default function ImageGallery() {
  return (
    <div className="relative overflow-hidden bg-[#05010d] text-white">
      {/* Shared Ambient Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute right-1/4 top-[40%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[170px]" />
        <div className="absolute bottom-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#a855f71f,transparent_50%)]" />
      </div>

      <section className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-purple-300">
              <Sparkles className="h-4 w-4 text-purple-400" />
              Interactive Journey
            </div>

            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Your Time,{" "}
              <span className="bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] bg-clip-text text-transparent">
                Rewarded
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
              Explore our earning methods sliding across the screen.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Sliding Container */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-6 pr-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
          >
            {carouselItems.map((item, index) => {
              const BadgeIcon = item.icon;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="w-[85vw] max-w-[500px] flex-shrink-0"
                >
                  <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0a0518]/90 p-6 shadow-2xl backdrop-blur-2xl transition duration-300 hover:border-purple-500/30 sm:p-8">
                    {/* Top Glow Accent Layer */}
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${item.accentGlow} opacity-60`}
                    />

                    <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                      {/* Image Component (Top on mobile and layout) */}
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#05010d]/90 p-2 shadow-inner">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="h-48 w-full object-contain rounded-xl sm:h-56"
                          loading="lazy"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-col flex-grow justify-between">
                        <div>
                          {/* Header Badges */}
                          <div className="mb-4 flex items-center justify-between">
                            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-300">
                              <BadgeIcon className="h-4 w-4 text-purple-400" />
                              <span>{item.badge}</span>
                            </div>
                            {/* <span className="text-sm font-black text-[#E2C876] tracking-widest uppercase">
                              {item.step}
                            </span> */}
                          </div>

                          {/* Title & Tagline */}
                          <h3 className="text-xl font-black text-white sm:text-2xl leading-tight">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs font-semibold text-[#E2C876] sm:text-sm">
                            {item.tagline}
                          </p>

                          {/* Description */}
                          <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                            {item.description}
                          </p>

                          {/* Bullet Highlights */}
                          <ul className="mt-4 space-y-2">
                            {item.highlights.map((point, pIdx) => (
                              <li
                                key={pIdx}
                                className="flex items-start gap-2 text-xs text-slate-200"
                              >
                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-purple-400" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Reward Box */}
                        <div className="mt-6 inline-flex w-full items-center gap-3 rounded-2xl border border-purple-500/30 bg-purple-500/10 p-3.5 backdrop-blur-md">
                          <TrendingUp className="h-4 w-4 shrink-0 text-[#E2C876]" />
                          <span className="text-xs font-bold text-purple-200">
                            {item.reward}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}