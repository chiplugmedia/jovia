import React, { useRef, useState } from "react";
import {
  Hourglass,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  BadgeDollarSign,
  Coins,
  Wallet,
  Music,
  Headphones,
  Radio,
  Disc3,
  CreditCard,
  Gift,
  ShoppingBag,
  Globe,
  Smartphone,
  Zap,
   ChevronLeft, ChevronRight, X,Play 
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/img/image0vea.jpeg";
import withdrawalImage from "@/assets/img/image0.jpeg";
import joviaCardImage from "@/assets/img/WhatsAJ5.jpeg";
import video1 from "@/assets/img/jovianetv001.mp4";
import video2 from "@/assets/img/joviavideo001.mp4";

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

export const VIDEO_DATA = [
  {
    id: 1,
    title: "Earn $100 Daily Playing Simple Games",
    videoUrl: video1,
  },
  {
    id: 2,
    title: "Watch Exclusive Stream Content",
    videoUrl: video2,
  },
];

export default function Pillars() {
  const withdrawalFeatures = [
    {
      title: "Spotify + Jovia = Cash",
      icon: Headphones,
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
      description: "Earn rewards while streaming your favorite music",
    },
    {
      title: "Apple Music + Jovia = Cash",
      icon: Music,
      iconBg: "bg-red-500/20",
      iconColor: "text-red-400",
      description: "Get paid for every song you listen to",
    },
    {
      title: "Audiomack + Jovia = Cash",
      icon: Radio,
      iconBg: "bg-orange-500/20",
      iconColor: "text-orange-400",
      description: "Turn your listening time into earnings",
    },
    {
      title: "Boomplay + Jovia = Cash",
      icon: Disc3,
      iconBg: "bg-yellow-500/20",
      iconColor: "text-yellow-400",
      description: "Earn daily rewards from your playlists",
    },
  ];

   const scrollRef = useRef(null);
    const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  
    const handleScroll = (direction) => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollAmount = clientWidth * 0.8;
        scrollRef.current.scrollTo({
          left:
            direction === "left"
              ? scrollLeft - scrollAmount
              : scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    };
  return (
    <div className="relative overflow-hidden bg-[#05010d] text-white">
      {/* Shared Background Effects matching AboutSection */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute right-20 top-[40%] h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[150px]" />
        <div className="absolute bottom-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#a855f71f,transparent_50%)]" />
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="relative z-10 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center flex flex-col items-center"
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

            <p className="mb-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
              JOVIA is a multinational intelligent networking platform designed
              to help users earn for the time they spend through networking,
              digital skills, entertainment, and engaging activities. By setting
              a countdown timer, users can participate in activities and earn
              money for every second spent on the platform.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-slate-300 max-w-2xl">
              Founded by a seasoned serial entrepreneur, JOVIA serves users
              across several African countries with one simple mission: to
              ensure that every user gains real value from their time.
            </p>

            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-[#E2C876] to-[#C726D4] px-8 py-4 font-semibold text-[#270041] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Register Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative min-h-screen bg-[#05010d] text-white py-16 px-4 sm:px-8 overflow-hidden font-sans">
        {/* Background Lighting Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-10 rounded-full bg-[#C726D4]/10 blur-[140px]" />
          <div className="absolute bottom-1/4 right-10 rounded-full bg-[#E2C876]/10 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2C876]/10 border border-[#E2C876]/30 text-[#E2C876] text-xs font-semibold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Jovia Network Stream
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
                You Can Earn At Least $100 Daily Playing Simple{" "}
                <span className="bg-gradient-to-r from-[#E2C876] to-[#C726D4] bg-clip-text text-transparent">
                  Games On Jovia And Watch Exclusive Contents
                </span>
              </h2>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleScroll("left")}
                aria-label="Scroll Left"
                className="p-3 rounded-2xl bg-[#0a0518] border border-white/10 hover:border-[#E2C876]/50 text-white hover:text-[#E2C876] transition-all active:scale-95 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label="Scroll Right"
                className="p-3 rounded-2xl bg-[#0a0518] border border-white/10 hover:border-[#E2C876]/50 text-white hover:text-[#E2C876] transition-all active:scale-95 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Slider Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-track-[#0a0518] scrollbar-thumb-[#E2C876]/40 hover:scrollbar-thumb-[#E2C876] pb-6 px-1 items-center"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#E2C876 #0a0518",
            }}
          >
            {VIDEO_DATA.map((item) => {
              const videoSrc =
                typeof item.videoUrl === "string"
                  ? item.videoUrl
                  : item.videoUrl.src || item.videoUrl;

              return (
                <div
                  key={item.id}
                  className="flex-none w-auto h-auto min-w-[280px] max-w-full snap-start rounded-3xl border-2 border-[#E2C876]/20 bg-black overflow-hidden group cursor-pointer relative"
                  onClick={() => setActiveVideoUrl(videoSrc)}
                >
                  {/* Background Muted Video */}
                  <video
                    src={videoSrc}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-auto h-auto max-h-[60vh] sm:max-h-[70vh] object-contain group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center p-4">
                    {/* Glowing Play Button Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-[#E2C876] to-[#C726D4] p-0.5 shadow-2xl shadow-[#C726D4]/40 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full bg-[#05010d]/80 rounded-full flex items-center justify-center backdrop-blur-md group-hover:bg-transparent transition-colors duration-300">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 text-[#E2C876] fill-[#E2C876] ml-1 group-hover:text-white group-hover:fill-white transition-colors" />
                      </div>
                    </div>

                    {/* Play Action Text */}
                    <div className="mt-4 px-4 py-1.5 rounded-full bg-[#0a0518]/80 border border-[#E2C876]/40 backdrop-blur-md text-xs sm:text-sm font-semibold text-[#E2C876] group-hover:border-[#E2C876] group-hover:text-white transition-all shadow-md">
                      Click to Play Full Video
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Video Modal Player Overlay */}
        {activeVideoUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 transition-opacity duration-300">
            <div className="relative w-auto h-auto max-w-5xl max-h-[90vh] bg-[#0a0518] rounded-3xl border-2 border-[#E2C876]/30 overflow-hidden shadow-2xl flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-[#05010d] shrink-0">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E2C876]" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                    Unmuted Playback
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideoUrl(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Video Box */}
              <div className="relative bg-black flex items-center justify-center overflow-hidden">
                <video
                  src={activeVideoUrl}
                  controls
                  autoPlay
                  className="w-auto h-auto max-h-[75vh] max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* PILLARS SECTION */}
      <section id="pillars" className="relative z-10 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-300">
              <Sparkles className="h-4 w-4" />
              The Pillars
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              What{" "}
              <span className="bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] bg-clip-text text-transparent">
                JOVIA
              </span>{" "}
              Stands On
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Four core principles anchor our entire platform ecosystem — time,
              skill, community, and radical honesty.
            </p>
          </motion.div>

          {/* Pillars Cards Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;
              const isOffset = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className={`group relative rounded-3xl border border-purple-500/20 bg-purple-950/20 p-8 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 hover:bg-purple-900/30 sm:p-10 ${
                    isOffset ? "md:translate-y-8" : ""
                  }`}
                >
                  {/* Glowing Top Border Highlight */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent transition-all duration-500 group-hover:via-[#C726D4]" />

                  <div className="flex items-center justify-between">
                    {/* Number Badge */}
                    <span className="bg-gradient-to-r from-[#E2C876] to-[#C726D4] bg-clip-text font-mono text-3xl font-black text-transparent">
                      {pillar.number}
                    </span>

                    {/* Icon Node */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-purple-300 transition-all duration-300 group-hover:scale-110 group-hover:border-purple-500/40 group-hover:bg-purple-500/20 group-hover:text-purple-200">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <div className="mb-3 inline-block rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-300">
                      {pillar.badge}
                    </div>

                    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-200">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {pillar.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DAILY WITHDRAWAL SECTION */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-300">
                <Sparkles className="h-4 w-4" />
                Did You Know?
              </div>

              {/* Heading */}
              <h2 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl">
                On JOVIA, You Listen to Music & Earn Rewards{" "}
                <span className="bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] bg-clip-text text-transparent">
                  Every Single Day!
                </span>
              </h2>

              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                JOVIA is building strategic partnerships with singers, artists,
                producers, and music creators to bring exciting music
                experiences to our growing community
              </p>

              {/* Feature Cards Stack */}
              <div className="mb-10 space-y-5">
                {withdrawalFeatures.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-purple-500/30 hover:bg-white/[0.07]"
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}
                      >
                        <IconComponent
                          className={`h-6 w-6 ${item.iconColor}`}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-[#E2C876] to-[#C726D4] px-8 py-4 font-semibold text-[#270041] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 rounded-[40px]" />
                <div className="relative overflow-hidden rounded-[32px]">
                  <img
                    src={withdrawalImage}
                    alt="JOVIA Daily Withdrawal"
                    className="mx-auto h-auto w-full object-contain transition duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* JOVIA DEBIT CARD SECTION */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* LEFT SIDE - CARD IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-[#E2C876]/20 to-[#C726D4]/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[32px]">
                  <img
                    src={joviaCardImage}
                    alt="JOVIA Debit Card"
                    className="mx-auto w-full object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE - CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-300">
                <CreditCard className="h-4 w-4" />
                Introducing JOVIA Debit Card
              </div>

              {/* Heading */}
              <h2 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl">
                Easy Payments & More with{" "}
                <span className="bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] bg-clip-text text-transparent">
                  JOVIA Debit Card
                </span>
              </h2>

              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                The JOVIA Debit Card is completely optional. Activate your card
                and enjoy more payment flexibility, secure transactions, and
                convenient access to supported services worldwide.
              </p>

              {/* Features */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-purple-500/30">
                  <ShoppingBag className="mb-3 h-10 w-10 text-[#E2C876]" />
                  <h4 className="mb-2 font-semibold text-white">
                    Shop Online Easily
                  </h4>
                  <p className="text-sm text-slate-400">
                    Buy products and services from supported online stores.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-purple-500/30">
                  <ShieldCheck className="mb-3 h-10 w-10 text-[#C726D4]" />
                  <h4 className="mb-2 font-semibold text-white">
                    Secure Payments
                  </h4>
                  <p className="text-sm text-slate-400">
                    Pay for subscriptions and purchases safely.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-purple-500/30">
                  <Globe className="mb-3 h-10 w-10 text-[#E2C876]" />
                  <h4 className="mb-2 font-semibold text-white">
                    Worldwide Access
                  </h4>
                  <p className="text-sm text-slate-400">
                    Use on supported platforms worldwide.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-purple-500/30">
                  <Wallet className="mb-3 h-10 w-10 text-[#C726D4]" />
                  <h4 className="mb-2 font-semibold text-white">
                    Withdraw Earnings
                  </h4>
                  <p className="text-sm text-slate-400">
                    Access eligible earnings through supported ATMs.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-purple-500/30">
                  <Smartphone className="mb-3 h-10 w-10 text-[#E2C876]" />
                  <h4 className="mb-2 font-semibold text-white">
                    Everyday Payments
                  </h4>
                  <p className="text-sm text-slate-400">
                    Pay for airtime, data, and subscriptions.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-purple-500/30">
                  <Zap className="mb-3 h-10 w-10 text-[#C726D4]" />
                  <h4 className="mb-2 font-semibold text-white">
                    Fast Transactions
                  </h4>
                  <p className="text-sm text-slate-400">
                    Quick, simple, and stress-free payments.
                  </p>
                </div>
              </div>

              <Link
                to="/register"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-[#E2C876] to-[#C726D4] px-8 py-4 font-semibold text-[#270041] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Activate Card
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
