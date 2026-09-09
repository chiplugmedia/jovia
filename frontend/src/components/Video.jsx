"use client";

import React, { useRef, useState } from "react";
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
              <ChevronLeft />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Scroll Right"
              className="p-3 rounded-2xl bg-[#0a0518] border border-white/10 hover:border-[#E2C876]/50 text-white hover:text-[#E2C876] transition-all"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-track-[#0a0518] scrollbar-thumb-[#E2C876]/40 hover:scrollbar-thumb-[#E2C876] pb-6 px-1 items-center"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#E2C876 #0a0518" }}
        >
          {VIDEO_DATA.map((item) => {
            const videoSrc =
              typeof item.videoUrl === "string"
                ? item.videoUrl
                : item.videoUrl.src || item.videoUrl;

            return (
              <div
                key={item.id}
                // Automatic sizing wrapper based on actual video natural dimensions
                className="flex-none w-auto h-auto min-w-[280px] max-w-full snap-start rounded-3xl border-2 border-[#E2C876]/20 bg-black overflow-hidden group cursor-pointer relative"
                onClick={() => setActiveVideoUrl(videoSrc)}
              >
                <video
                  src={videoSrc}
                  muted
                  autoPlay
                  loop
                  playsInline
                  // Auto height and width to preserve native video aspect ratio
                  className="w-auto h-auto max-h-[60vh] sm:max-h-[70vh] object-contain group-hover:scale-105 transition-transform duration-700"
                />

                {/* Optional slight dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
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
  );
}
