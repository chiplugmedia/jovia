import React from "react";

export default function TelegramSupport({ username = "Joviasupport_agent" }) {
  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <a
        href={`https://t.me/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-2.5
          px-4
          py-2.5
          rounded-full
          bg-[#2C044F]
          border
          border-[#D4AF37]/40
          text-[#FCF6BA]
          font-semibold
          text-xs
          sm:text-sm
          tracking-wide
          shadow-[0_4px_20px_rgba(0,0,0,0.5)]
          backdrop-blur-md
          transition-colors
          duration-300
        "
      >
        <div className="relative flex items-center justify-center">
          {/* Telegram Icon */}
          <svg className="w-4 h-4 fill-[#FCF6BA]" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.07-.78 4.18-1.82 6.97-3.02 8.37-3.61 3.98-1.66 4.81-1.95 5.35-1.96.12 0 .38.03.55.17.14.12.18.28.2.4.02.12.02.26 0 .39z" />
          </svg>
          {/* Online Indicator Badge */}
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00E57B] border border-[#2C044F]" />
        </div>
        <span>Contact Support</span>
      </a>
    </div>
  );
}
