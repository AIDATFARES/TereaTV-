"use client";

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
}

export default function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 select-none group transition-all duration-200 ${
        compact ? "scale-90 origin-left" : ""
      } ${className}`}
      aria-label="TereaTV - Premium 4K IPTV"
    >
      {/* SQUIRCLE APP ICON */}
      <div className="relative shrink-0 flex items-center justify-center">
        {/* Soft Outer Ambient Glow on hover */}
        <div className="absolute -inset-1 rounded-[16px] bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#00F0FF] opacity-40 blur-md transition-opacity duration-300 group-hover:opacity-75" />

        {/* Squircle Icon Body */}
        <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-[15px] sm:rounded-[16px] bg-gradient-to-br from-[#0284C7] via-[#0EA5E9] to-[#00F0FF] flex items-center justify-center shadow-lg border border-white/20 overflow-hidden">
          {/* Subtle glossy top diagonal reflection */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Double Play Arrow (>>) in Crisp White */}
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] translate-x-[1px]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 5.5v13a1 1 0 001.55.83l9-6.5a1 1 0 000-1.66l-9-6.5a1 1 0 00-1.55.83z" />
            <path d="M12 5.5v13a1 1 0 001.55.83l9-6.5a1 1 0 000-1.66l-9-6.5a1 1 0 00-1.55.83z" opacity="0.95" />
          </svg>
        </div>

        {/* Top-Right Neon Cyan Notification Dot */}
        <div className="absolute -top-1 -right-1 z-10 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center pointer-events-none">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-60 animate-ping" />
          <span className="relative inline-flex h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-[#00F0FF] border-2 border-[#040714] shadow-[0_0_8px_#00F0FF]" />
        </div>
      </div>

      {/* TYPOGRAPHY & SUB-TITLE */}
      <div className="flex flex-col justify-center text-left">
        {/* Primary Wordmark */}
        <div className="flex items-baseline font-black tracking-tight leading-none text-[22px] sm:text-[25px] uppercase">
          <span className="text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.12)]">
            TEREA
          </span>
          <span className="bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent ml-1.5 drop-shadow-[0_2px_10px_rgba(14,165,233,0.35)]">
            TV
          </span>
        </div>

        {/* Sub-row: [IPTV] 4K ULTRA */}
        <div className="flex items-center gap-1.5 mt-1">
          {/* Black Capsule with Neon Cyan Text */}
          <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded bg-black/90 border border-[#00F0FF]/50 text-[9px] sm:text-[9.5px] font-black tracking-wider text-[#00F0FF] leading-none shadow-[0_0_6px_rgba(0,240,255,0.25)]">
            IPTV
          </span>
          {/* 4K ULTRA muted tracking text */}
          <span className="text-[9px] sm:text-[9.5px] font-extrabold tracking-[0.16em] text-slate-400 uppercase leading-none">
            4K ULTRA
          </span>
        </div>
      </div>
    </div>
  );
}
