"use client";

import { Play, ShieldCheck, Zap, Tv } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-start bg-[#040714] overflow-hidden pt-3 sm:pt-6 pb-12 sm:pb-16 bg-grid-pattern">
      {/* Background Radial Glows */}
      <div className="pointer-events-none absolute top-[-100px] left-[-100px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(2,132,199,0.22)_0%,transparent_70%)] animate-float" />
      <div className="pointer-events-none absolute top-[20%] right-[-150px] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.18)_0%,transparent_70%)]" />

      {/* Expressive IPTV Cover Image Layer */}
      <div className="absolute inset-0 z-0 opacity-75 lg:opacity-90 transition-opacity duration-500">
        <Image
          src="/hero-cover-family.jpg"
          alt="TereaTV Premium 4K IPTV Streaming — Happy Family Watching TV Together with 50,000+ Channels"
          title="TereaTV 4K Ultra HD IPTV Streaming Platform"
          priority
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040714] via-[#040714]/90 md:via-[#040714]/65 to-transparent/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-transparent to-[#040714]/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-start">

        {/* Live Status Pill Badge */}
        <div className="badge-pill mb-4 sm:mb-6">
          <span className="dot-blink" />
          <span>TereaTV IPTV — Verified 4K Feeds · +7,500 Active Subscribers</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-[80px] font-black tracking-tight leading-[1.05] uppercase text-white drop-shadow-2xl max-w-5xl break-words">
          <span className="text-white">TereaTV IPTV</span>{" "}
          <span className="bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
            Premium 4K Streaming
          </span><br />
          <span>For Live Sports, Cinema</span><br />
          <span className="text-white">&amp; +50,000 Channels</span>
        </h1>

        {/* Pricing Subheadline */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-400/25 px-4 py-1.5 text-xs sm:text-sm font-extrabold text-amber-300 hover:bg-amber-400/20 transition-colors">
            🔥 Special Deal: From Only <strong className="text-white underline">$4.2 / Month</strong>!
          </Link>
          <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> Instant Activation
            <span className="text-emerald-400 ml-2">✓</span> Zero Buffering
          </span>
        </div>

        {/* Subtitle / Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal max-w-[820px] mt-6 leading-relaxed">
          Experience next-generation streaming with TereaTV IPTV. Access over <Link href="/channels" className="text-white font-extrabold hover:text-[#38BDF8] underline decoration-sky-500/40 transition-colors">+50,000 live TV channels</Link>, +120,000 films &amp; series, and <Link href="/channels" className="text-slate-200 hover:text-[#38BDF8] underline decoration-sky-500/30 transition-colors">200,000+ VOD releases</Link> in pristine 4K 60FPS. Powered by dedicated anti-freeze servers for ultra-smooth playback on <Link href="/installation" className="text-[#38BDF8] font-bold hover:text-white underline decoration-sky-500/50 transition-colors">any device you choose</Link>—Smart TV, Firestick, Android, iOS, and PC.
        </p>

        {/* Trust Badges */}
        <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400 text-sm">★★★★★</div>
            <span className="font-bold text-white">4.9 / 5.0</span>
            <span className="text-slate-400 font-medium">Customer Rating</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/15" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
            <span className="font-bold text-white">99.9% Uptime</span>
            <span className="text-slate-400 font-medium">Anti-Freeze Technology</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20TereaTV%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="btn-primary-voltra px-8 py-4 text-sm sm:text-base font-extrabold uppercase tracking-wider"
          >
            GET 12 MONTHS — 2 MONTHS FREE <span className="ml-1">➔</span>
          </a>
          <a
            href="#pricing"
            className="btn-secondary-voltra px-8 py-4 text-sm sm:text-base font-bold"
          >
            <Play className="w-4 h-4 fill-current" /> View Pricing Plans
          </a>
        </div>

        {/* TereaTV Floating Feature Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-4xl mt-12">
          <div className="glass-card px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/25 flex items-center justify-center text-sky-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-xs font-extrabold text-white">Ultra-Fast Streaming</strong>
              <small className="block text-[11px] text-slate-400 font-medium">Anti-Freeze, zero buffering</small>
            </div>
          </div>

          <div className="glass-card px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
              <Tv className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-xs font-extrabold text-white">All Devices Supported</strong>
              <small className="block text-[11px] text-slate-400 font-medium">Firestick, Smart TV, Tivimate, iOS</small>
            </div>
          </div>

          <div className="glass-card px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-xs font-extrabold text-white">Secure &amp; Private</strong>
              <small className="block text-[11px] text-slate-400 font-medium">Built-in VPN compatibility</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
