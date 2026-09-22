"use client";

import Link from "next/link";
import { 
  Baby, 
  Check, 
  Film, 
  Globe2, 
  Layers3, 
  Monitor, 
  Newspaper, 
  Trophy, 
  CirclePlay,
  Radio
} from "lucide-react";
import { motion } from "framer-motion";
import BrandMarquee from "@/components/home/BrandMarquee";

// Category Overview Cards
const categoryCards = [
  {
    icon: Trophy,
    title: "Sports Channels",
    items: [
      "Football, basketball, UFC, boxing, F1, and more",
      "HD/FHD and 4K 60FPS streams available",
      "Sky Sports, TNT, BeIN, ESPN, DAZN & PPV"
    ],
    count: "12,500+ Channels",
    tag: "MOST POPULAR"
  },
  {
    icon: Film,
    title: "Movie & VOD Content",
    items: [
      "Premium movie networks & cinema channels",
      "Curated 4K VOD library updated daily",
      "HBO, Cinemax, Sky Cinema, Starz & VOD"
    ],
    count: "200,000+ VODs"
  },
  {
    icon: Newspaper,
    title: "News Channels",
    items: [
      "Global, national and regional news networks",
      "24/7 breaking news and special live coverage",
      "BBC News, CNN, Sky News, Fox, CNBC, Bloomberg"
    ],
    count: "3,200+ Channels"
  },
  {
    icon: Baby,
    title: "Kids & Family",
    items: [
      "Cartoons, learning & family entertainment",
      "Dedicated child-friendly programming",
      "Disney, Cartoon Network, Nickelodeon, Boomerang"
    ],
    count: "2,800+ Channels"
  },
  {
    icon: Monitor,
    title: "Entertainment",
    items: [
      "Reality TV, variety, music, lifestyle & drama",
      "Popular everyday cable and satellite networks",
      "US, UK, Canadian & European top entertainment"
    ],
    count: "15,000+ Channels"
  },
  {
    icon: Globe2,
    title: "International",
    items: [
      "150+ country packages & regional channels",
      "Local sports, news, culture & native audio",
      "Europe, Americas, MENA, Asia & Africa"
    ],
    count: "+50,000 Channels"
  },
  {
    icon: Layers3,
    title: "Series & Shows",
    items: [
      "Latest released seasons with daily updates",
      "Complete boxsets, timeless classics & VOD",
      "Netflix, Amazon, Apple TV+, HBO Max & Disney+"
    ],
    count: "+120,000 Films & Series"
  }
];

export default function ChannelsPage() {
  return (
    <main className="min-h-screen bg-[#040714] text-white pt-6 sm:pt-10 pb-24 relative overflow-hidden bg-grid-pattern">
      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute top-[8%] left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[radial-gradient(circle,rgba(2,132,199,0.15)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute top-[45%] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Banner */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge-pill mb-4 inline-flex items-center gap-2"
          >
            <Radio className="w-3.5 h-3.5 text-[#00F0FF] animate-pulse" />
            <span>+50,000 CHANNELS · +120,000 FILMS &amp; SERIES · 200,000+ VODS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase"
          >
            <span className="block text-white">TereaTV IPTV Channels:</span>
            <span className="mt-2 block bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
              Live Sports, Cinema &amp; Global Lineup
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Browse our full channel lineup featuring live sports, movies, news, entertainment, and on-demand series in 4K &amp; HD quality from over 150+ countries. Select your <Link href="/pricing" className="text-[#38BDF8] hover:underline font-semibold">subscription plan</Link>, check our <Link href="/installation" className="text-[#38BDF8] hover:underline font-semibold">device setup guide</Link>, or request a <Link href="/contact" className="text-[#22D3EE] hover:underline font-semibold">free 24-hour trial</Link>.
          </motion.p>
        </div>

        {/* SECTION 1: Category Cards Grid */}
        <section className="mb-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-6">
            {categoryCards.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="relative min-h-[240px] rounded-3xl bg-[#0A0F24] border border-white/10 px-6 pb-6 pt-14 shadow-xl hover:border-sky-500/50 hover:shadow-[0_12px_36px_rgba(2,132,199,0.2)] transition-all duration-300 group backdrop-blur-xl"
                >
                  {/* Top Floating Badge Icon */}
                  <span className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0284C7] to-[#06B6D4] text-white shadow-lg shadow-sky-500/30 border border-sky-400/40 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>

                  {/* Optional Popular Tag */}
                  {category.tag && (
                    <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] px-3 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-sm">
                      {category.tag}
                    </span>
                  )}

                  <h2 className="text-center text-xl font-extrabold text-white tracking-wide mt-2">
                    {category.title}
                  </h2>

                  <ul className="mt-5 space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-[#38BDF8]">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Total Available</span>
                    <span className="text-xs font-black text-[#38BDF8]">{category.count}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* SECTION: Channel Brand Marquee Strip */}
        <section className="mb-20 rounded-3xl overflow-hidden border border-white/10 bg-[#0A0F24] p-4 shadow-xl">
          <BrandMarquee />
        </section>

        {/* SECTION: CTA Bottom Box */}
        <section className="mt-20 relative rounded-3xl overflow-hidden border border-sky-500/30 bg-[#0A0F24] p-8 sm:p-14 text-center shadow-2xl backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.18)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8] mx-auto mb-4">
              <CirclePlay className="w-6 h-6" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">Ready to Start Streaming with TereaTV IPTV?</h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Choose your <Link href="/pricing" className="text-[#38BDF8] hover:underline font-semibold">subscription plan</Link> to receive instant access credentials on WhatsApp within minutes, or read our <Link href="/faq" className="text-[#22D3EE] hover:underline font-semibold">FAQ</Link> for device compatibility details.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="btn-primary-voltra px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider"
              >
                View IPTV Subscription Plans
              </Link>
              <a
                href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20TereaTV%20IPTV."
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-voltra px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider"
              >
                Get Free Trial via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
