import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import heroVisual from "@/assets/img/joviahova.jpg";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="home"
      className="hero-bg relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]" />
        <div className="absolute right-1/4 top-20 h-[400px] w-[400px] rounded-full bg-fuchsia-600/20 blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* CENTERED HERO CONTENT */}
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-500" />
              We Live In A Digital Age
            </div>

            {/* Heading */}
            <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Every Second Creates{" "}
              <span className="animated-gradient-text">Value</span>
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-400">
              JOVIA was created to bridge that gap by giving ordinary people
              access to digital opportunities regardless of their background or
              experience.
            </p>

            {/* Buttons */}
            <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-[#E2C876] to-[#C726D4] px-8 py-4 font-semibold text-[#270041] transition-all duration-300 hover:scale-105"
              >
                Start Earning
              </Link>

              <a
                href="#learn"
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-purple-500/20 px-8 py-4 text-white transition-all hover:bg-purple-500/10"
              >
                <PlayCircle className="h-5 w-5" />
                Learn More
              </a>
            </div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex w-full justify-center"
          >
            <div className="relative max-w-3xl">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-2xl" />

              {/* Image Container with Skeleton Loader */}
              <div className="hero-image relative overflow-hidden rounded-[32px]">
                {!imageLoaded && (
                  <div className="h-[400px] w-full max-w-[800px] animate-pulse rounded-[32px] bg-purple-950/40" />
                )}
                <img
                  src={heroVisual}
                  alt="JOVIA Platform Preview"
                  onLoad={() => setImageLoaded(true)}
                  className={`mx-auto h-auto w-full max-w-[800px] rounded-[32px] transition-opacity duration-500 ${
                    imageLoaded ? "opacity-100" : "absolute inset-0 opacity-0"
                  }`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
