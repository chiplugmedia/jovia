"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";
import video1 from "@/assets/img/jovianetv001.mp4";
import video2 from "@/assets/img/joviavideo001.mp4";

export const VIDEO_DATA = [
  {
    id: 1,
    videoUrl: video1,
  },
  {
    id: 2,
    videoUrl: video2,
  },
];

export default function AutomaticVideoSlider() {
  const scrollRef = useRef(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  // Auto-play effect: Modern browsers typically require muted for autoplay.
  // We handle this by adding 'muted' and 'autoplay' attributes directly in the JSX.
  // If your video source requires  audio immediately, the user MUST interact first.

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by one full video width plus gap
      const scrollAmount = clientWidth * 0.9 + 16; // Adjust 0.9 based on card width (w-[90%])
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
              <Sparkles/>
              Jovia Network Stream
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              Exclusive{" "}
              <span className="bg-gradient-to-r from-[#E2C876] to-[#C726D4] bg-clip-text text-transparent">
                AI & Celebrity Content
              </span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Scroll Left"
              className="p-3 rounded-2xl bg-[#0a0518] border border-white/10 hover:border-[#E2C876]/50 text-white hover:text-[#E2C876] transition-all"
            >
              <ChevronLeft/>
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Scroll Right"
              className="p-3 rounded-2xl bg-[#0a0518] border border-white/10 hover:border-[#E2C876]/50 text-white hover:text-[#E2C876] transition-alL"
            >
              <ChevronRight/>
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-track-[#0a0518] scrollbar-thumb-[#E2C876]/40 hover:scrollbar-thumb-[#E2C876] pb-6 px-1"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#E2C876 #0a0518" }}
        >
          {VIDEO_DATA.map((item) => (
            <div
              key={item.id}
              // Card is sized to show video clearly, snapped to start, relative for overlay click
              className="flex-none snap-start rounded-3xl border-2 border-[#E2C876]/20 bg-black overflow-hidden group cursor-pointer aspect-video relative"
              onClick={() => setActiveVideoUrl(item.videoUrl)}
            >
              <video
                src={item.videoUrl}
                // crucial attributes for automatic playback in modern browsers:
                muted
                autoPlay
                loop
                playsInline // critical for mobile safari
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Optional slight dark overlay on hover to indicate interactiveness */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player Overlay for Full Screen Unmuted Playback */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 transition-opacity duration-300">
          <div className="relative w-full max-w-5xl bg-[#0a0518] rounded-3xl border-2 border-[#E2C876]/30 overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-[#05010d]">
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

            {/* Video Box - Unmuted, standard controls */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                src={activeVideoUrl}
                controls
                autoPlay
                // We do NOT add 'muted' here so the user hears the audio upon interaction
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
