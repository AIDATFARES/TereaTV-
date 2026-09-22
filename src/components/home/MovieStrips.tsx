"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Trophy, 
  Film, 
  Tv, 
  Zap, 
  Globe2, 
  Radio, 
  ShieldCheck, 
  Flame, 
  Activity
} from "lucide-react";

export default function MovieStrips() {
  const [activeTab, setActiveTab] = useState<"sports" | "vod" | "channels" | "tech">("sports");

  const tabs = [
    { id: "sports", label: "⚽ Live Sports & PPV", icon: Trophy, badge: "🔥 4K 60FPS" },
    { id: "vod", label: "🎬 200K+ Movies & Series", icon: Film, badge: "🍿 VOD 4K" },
    { id: "channels", label: "📺 +50,000 Live TV", icon: Tv, badge: "🌍 Global" },
    { id: "tech", label: "⚡ Anti-Freeze Engine", icon: Zap, badge: "🛡️ Zero Buffer" },
  ] as const;

  return (
    <section className="w-full overflow-hidden bg-[#040714] py-20 lg:py-28 relative flex flex-col border-y border-white/5 bg-grid-pattern text-white">
      {/* Ambient Radial Lights */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(circle,rgba(2,132,199,0.18)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="badge-pill mb-4 inline-flex items-center gap-2">
            <span className="dot-blink" /> 🍿 Endless Entertainment &amp; ⚽ Live Sports
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
            The Ultimate <br />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
              TereaTV Sports &amp; Entertainment Hub
            </span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mt-4">
            Stream over 200,000+ Movies &amp; Series and +50,000 live broadcast channels in native 4K 60FPS on TereaTV IPTV. Powered by high-capacity anti-freeze servers with zero buffering.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/channels"
              className="btn-primary-voltra px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider inline-flex items-center gap-2"
            >
              Explore Full Lineup ➔
            </Link>
            <Link 
              href="/#pricing"
              className="btn-secondary-voltra px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
            >
              ⚡ Get Instant Access
            </Link>
          </div>
        </div>

        {/* Interactive Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#0284C7] to-[#06B6D4] text-white shadow-[0_4px_20px_rgba(2,132,199,0.45)] border border-sky-400/40"
                    : "border border-white/10 bg-[#0A0F24] text-slate-400 hover:text-white hover:border-sky-500/30"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-white/5 text-sky-300"
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="rounded-3xl border border-white/10 bg-[#0A0F24] p-6 sm:p-10 shadow-2xl backdrop-blur-xl transition-all duration-300">
          
          {/* TAB 1: LIVE SPORTS & PPV */}
          {activeTab === "sports" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> ⚡ Live 4K 60FPS Coverage
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                  Every Major League, Cup &amp; Live PPV Event
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Never miss championship football, title fights, or motorsports. TereaTV IPTV delivers low-latency 60FPS sports feeds with dual commentary audio and zero stutter.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#040714] border border-white/10">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 block">Stream Quality</span>
                    <span className="text-sm font-black text-white">📺 4K UHD @ 60FPS</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#040714] border border-white/10">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 block">Server Stability</span>
                    <span className="text-sm font-black text-emerald-400">🛡️ 99.9% Anti-Freeze</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Sports Category Card 1 */}
                <div className="glass-card-hover rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#38BDF8] uppercase tracking-wider">⚽ Football Leagues</span>
                    <Flame className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "🏆 UEFA Champions League",
                      "🦁 Premier League",
                      "🇪🇸 LaLiga EA Sports",
                      "🇮🇹 Serie A TIM",
                      "🇩🇪 Bundesliga",
                      "🇫🇷 Ligue 1",
                      "⭐ Europa League",
                      "🌍 CAF Champions"
                    ].map((item) => (
                      <span key={item} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#040714] border border-white/10 text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sports Category Card 2 */}
                <div className="glass-card-hover rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-cyan-400 uppercase tracking-wider">🥊 Combat &amp; PPV</span>
                    <Trophy className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "🥋 UFC Main Events",
                      "👑 Boxing World Titles",
                      "🤼 WWE WrestleMania",
                      "🔥 Bellator MMA",
                      "🏆 ONE Championship",
                      "👊 BKFC Bare Knuckle",
                      "🎟️ All PPV Passes"
                    ].map((item) => (
                      <span key={item} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#040714] border border-white/10 text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sports Category Card 3 */}
                <div className="glass-card-hover rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-amber-400 uppercase tracking-wider">🏎️ Motorsport &amp; Racing</span>
                    <Zap className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "🏎️ Formula 1 (All GPs)",
                      "🏍️ MotoGP Championship",
                      "🏁 NASCAR Cup Series",
                      "🚀 IndyCar",
                      "🚗 WRC Rally",
                      "⏱️ 24H Le Mans"
                    ].map((item) => (
                      <span key={item} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#040714] border border-white/10 text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sports Category Card 4 */}
                <div className="glass-card-hover rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">🏀 US &amp; International</span>
                    <Activity className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "🏀 NBA League Pass",
                      "🏈 NFL Sunday Ticket",
                      "⚾ MLB Extra Innings",
                      "🏒 NHL Center Ice",
                      "🎾 ATP Tennis Tour",
                      "⛳ PGA Golf Tour"
                    ].map((item) => (
                      <span key={item} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#040714] border border-white/10 text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 200,000+ MOVIES & SERIES */}
          {activeTab === "vod" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
                  <Film className="w-3.5 h-3.5" /> 🎬 200,000+ Cinema Titles
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                  200,000+ 4K Movies &amp; Series On Demand
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Enjoy non-stop on-demand cinema with TereaTV VOD. Stream recent theatrical blockbusters, award-winning series, and complete TV boxsets with multi-language subtitles and 5.1 surround sound.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#040714] border border-white/10">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 block">Audio &amp; Video</span>
                    <span className="text-sm font-black text-white">🎧 4K HDR · Dolby 5.1</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#040714] border border-white/10">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 block">Catalog Growth</span>
                    <span className="text-sm font-black text-[#38BDF8]">🔄 Daily New Releases</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card-hover rounded-2xl p-5 space-y-3">
                  <h4 className="text-xs font-black text-[#38BDF8] uppercase tracking-wider">🍿 Streaming Platforms Hub</h4>
                  <p className="text-[11px] text-slate-400">All top streaming service exclusives aggregated in one portal:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "🔴 Netflix Originals",
                      "🟣 HBO Max Hits",
                      "🏰 Disney+ Library",
                      "📦 Amazon Prime Video",
                      "🍏 Apple TV+ Shows",
                      "🏔️ Paramount+",
                      "🦚 Peacock Originals"
                    ].map((item) => (
                      <span key={item} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#040714] border border-white/10 text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card-hover rounded-2xl p-5 space-y-3">
                  <h4 className="text-xs font-black text-cyan-400 uppercase tracking-wider">🎭 Cinematic Genres</h4>
                  <p className="text-[11px] text-slate-400">Curated collections with instant search and genre browsing:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "💥 Action & Thrillers",
                      "🚀 Sci-Fi & Fantasy",
                      "🕵️ Drama & Crime",
                      "👻 Horror & Suspense",
                      "😂 Comedy & Romance",
                      "🌿 Documentaries",
                      "⛩️ Anime & Animation"
                    ].map((item) => (
                      <span key={item} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#040714] border border-white/10 text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card-hover rounded-2xl p-5 space-y-3 sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider">✨ Playback Features</h4>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase">Built-in Player Support</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-1">
                    <div className="p-2.5 rounded-xl bg-[#040714] border border-white/10 text-xs font-bold text-slate-200">💎 4K &amp; FHD Quality</div>
                    <div className="p-2.5 rounded-xl bg-[#040714] border border-white/10 text-xs font-bold text-slate-200">💬 Multi-Subtitles</div>
                    <div className="p-2.5 rounded-xl bg-[#040714] border border-white/10 text-xs font-bold text-slate-200">⏯️ Resume Playback</div>
                    <div className="p-2.5 rounded-xl bg-[#040714] border border-white/10 text-xs font-bold text-slate-200">⚡ Instant Buffering</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: +50,000 LIVE CHANNELS */}
          {activeTab === "channels" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <Globe2 className="w-3.5 h-3.5" /> 🌍 150+ Countries
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                  +50,000 Live International TV Channels
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Stream high-definition global television with TereaTV IPTV. Enjoy +50,000 live broadcast channels across 150+ countries with full interactive EPG TV guides and catch-up capability.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#040714] border border-white/10">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 block">Coverage</span>
                    <span className="text-sm font-black text-white">🌐 150+ Regions</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#040714] border border-white/10">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 block">TV Guide</span>
                    <span className="text-sm font-black text-cyan-400">📅 Electronic EPG</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card-hover rounded-2xl p-5 space-y-3">
                  <span className="text-xs font-black text-[#38BDF8] uppercase tracking-wider block">🗽 North America &amp; UK</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "🇺🇸 USA Premium Cable",
                      "🇬🇧 United Kingdom & Sky",
                      "🇨🇦 Canada EN / FR",
                      "🇦🇺 Australia & NZ",
                      "📡 Local News Networks"
                    ].map((item) => (
                      <span key={item} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#040714] border border-white/10 text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card-hover rounded-2xl p-5 space-y-3">
                  <span className="text-xs font-black text-cyan-400 uppercase tracking-wider block">🏰 Europe &amp; Nordic</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "🇫🇷 France & Canal+",
                      "🇩🇪 Germany & Sky DE",
                      "🇪🇸 Spain Movistar+",
                      "🇮🇹 Italy Sky Italia",
                      "🇵🇹 Portugal & Benfica",
                      "🇳🇱 Netherlands",
                      "🇸🇪 Scandinavia & Nordic"
                    ].map((item) => (
                      <span key={item} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#040714] border border-white/10 text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card-hover rounded-2xl p-5 space-y-3">
                  <span className="text-xs font-black text-amber-400 uppercase tracking-wider block">🏜️ Middle East &amp; Africa</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "🇶🇦 beIN Sports MENA",
                      "⭐ OSN VIP Network",
                      "🌙 Shahid VIP Channels",
                      "📺 Arab National TV",
                      "🦁 Africa SuperSport"
                    ].map((item) => (
                      <span key={item} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#040714] border border-white/10 text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card-hover rounded-2xl p-5 space-y-3">
                  <span className="text-xs font-black text-emerald-400 uppercase tracking-wider block">🌴 Latin America &amp; Asia</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "🇧🇷 Brazil Premiere",
                      "🇲🇽 Mexico & Argentina",
                      "🇨🇱 Colombia & Chile",
                      "🇮🇳 India & Hindi",
                      "🇵🇰 Pakistan & Asia"
                    ].map((item) => (
                      <span key={item} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#040714] border border-white/10 text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ANTI-FREEZE ENGINE & TECH */}
          {activeTab === "tech" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" /> ⚡ High-Speed Architecture
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                  Next-Gen Anti-Freeze 9.3 Technology
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  TereaTV IPTV proprietary Anti-Freeze 9.3 and cloud load-balancing servers eliminate buffering loops and lag during high-demand live sports like El Clásico, the Super Bowl, and Champions League finals.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#040714] border border-white/10">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 block">Zapping Speed</span>
                    <span className="text-sm font-black text-white">⏱️ &lt; 0.5 Seconds</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#040714] border border-white/10">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 block">Uplink Capacity</span>
                    <span className="text-sm font-black text-emerald-400">🚀 10Gbps Multi-CDN</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card-hover rounded-2xl p-5 space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8] mb-2">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-black text-white uppercase">⚡ Anti-Freeze 9.3</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Auto-routing algorithms switch servers automatically if packet loss is detected, preventing streaming halts.
                  </p>
                </div>

                <div className="glass-card-hover rounded-2xl p-5 space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-2">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-black text-white uppercase">📶 99.9% Uptime Guarantee</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Redundant cluster architecture located in Tier-4 datacenters throughout Europe and North America.
                  </p>
                </div>

                <div className="glass-card-hover rounded-2xl p-5 space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-black text-white uppercase">🔒 No VPN Required</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Full ISP-bypass protocols protect your traffic from throttling without requiring an external VPN subscription.
                  </p>
                </div>

                <div className="glass-card-hover rounded-2xl p-5 space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-2">
                    <Radio className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-black text-white uppercase">📺 Universal App Support</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Works seamlessly with TiviMate, IPTV Smarters, Smart IPTV, XCIPTV, IBO Player, and MAG portals.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Feature Metrics Bar */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card rounded-2xl p-5 text-center">
            <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">📺 +50,000</span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mt-1 block">Live TV Channels</span>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center">
            <span className="text-2xl sm:text-3xl font-black text-[#38BDF8] tracking-tight block">🎬 +200,000</span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mt-1 block">Movies &amp; Series</span>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center">
            <span className="text-2xl sm:text-3xl font-black text-cyan-400 tracking-tight block">⚡ 4K 60FPS</span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mt-1 block">Ultra HD Feeds</span>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight block">🛡️ 99.9%</span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mt-1 block">Uptime SLA</span>
          </div>
        </div>

      </div>
    </section>
  );
}
