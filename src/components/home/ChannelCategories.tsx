import { Monitor, Layers, Film, Zap, Smartphone, Globe2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ChannelCategories() {
  const topFeatures = [
    {
      icon: Monitor,
      title: "4K ULTRA HD IPTV STREAMING",
      desc: (
        <>
          Watch every sporting clash, championship game, and live broadcast in crisp 4K, Full HD, and 60FPS. Built-in anti-freeze algorithms guarantee stutter-free streaming on{" "}
          <Link href="/installation" className="text-[#38BDF8] hover:underline font-semibold">
            every supported device
          </Link>
          .
        </>
      ),
      tags: ["4K UHD", "FULL HD", "ANTI-FREEZE"],
      color: "from-sky-500/20 to-blue-500/10",
      iconColor: "text-[#38BDF8] bg-sky-500/10 border-sky-500/30",
    },
    {
      icon: Layers,
      title: "+50,000 LIVE TV CHANNELS",
      desc: (
        <>
          Explore{" "}
          <Link href="/channels" className="text-[#38BDF8] hover:underline font-semibold">
            +50,000 live TV channels
          </Link>{" "}
          covering live global sports, 24/7 breaking news, cinema networks, and family programming from over 160 countries in pristine audio-visual quality.
        </>
      ),
      tags: ["160+ COUNTRIES", "SPORTS", "NEWS", "KIDS"],
      color: "from-blue-500/20 to-cyan-500/10",
      iconColor: "text-[#38BDF8] bg-blue-500/10 border-blue-500/30",
    },
    {
      icon: Film,
      title: "200,000+ MOVIES & SERIES (VOD)",
      desc: (
        <>
          Unlock a massive on-demand streaming archive with{" "}
          <Link href="/channels" className="text-[#22D3EE] hover:underline font-semibold">
            200,000+ movies &amp; series
          </Link>
          , boxsets, and pay-per-view replays on all{" "}
          <Link href="/pricing" className="text-[#38BDF8] hover:underline font-semibold">
            TereaTV subscription plans
          </Link>
          .
        </>
      ),
      tags: ["MOVIES", "SERIES", "REPLAYS", "UPDATED DAILY"],
      color: "from-cyan-500/20 to-sky-500/10",
      iconColor: "text-[#22D3EE] bg-cyan-500/10 border-cyan-500/30",
    },
  ];

  const bottomFeatures = [
    {
      icon: Zap,
      title: "Instant Activation",
      desc: (
        <>
          Your{" "}
          <Link href="/pricing" className="text-[#38BDF8] hover:underline font-semibold">
            TereaTV IPTV subscription
          </Link>{" "}
          credentials are provisioned and delivered within minutes on WhatsApp or email.
        </>
      ),
      iconColor: "text-[#38BDF8] bg-sky-500/10",
    },
    {
      icon: Smartphone,
      title: "Limitless Compatibility",
      desc: (
        <>
          Full step-by-step setup guides for{" "}
          <Link href="/installation" className="text-[#38BDF8] hover:underline font-semibold">
            Smart TV, Firestick, Android, iOS &amp; PC
          </Link>
          .
        </>
      ),
      iconColor: "text-[#38BDF8] bg-blue-500/10",
    },
    {
      icon: Globe2,
      title: "Worldwide CDN Coverage",
      desc: (
        <>
          Stream your favorite channels wherever you travel. Discover{" "}
          <Link href="/how-it-works" className="text-[#22D3EE] hover:underline font-semibold">
            how our IPTV network operates
          </Link>
          .
        </>
      ),
      iconColor: "text-[#22D3EE] bg-cyan-500/10",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Uptime Guarantee",
      desc: (
        <>
          Redundant high-capacity servers eliminate buffering during peak matches. Read our{" "}
          <Link href="/faq" className="text-[#00F0FF] hover:underline font-semibold">
            IPTV FAQ guide
          </Link>
          .
        </>
      ),
      iconColor: "text-[#00F0FF] bg-cyan-500/10",
    },
  ];

  return (
    <section className="relative z-10 bg-[#060A1A] py-20 sm:py-28 border-b border-white/5 bg-grid-pattern overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="badge-pill mb-4">
            <span className="dot-blink" /> Premium IPTV Features
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] uppercase break-words">
            Everything You Need for the <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
              Ultimate TereaTV Experience
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Engineered with high-bandwidth CDN nodes across Europe, North America, and worldwide for instant channel switching. Learn{" "}
            <Link href="/how-it-works" className="text-[#38BDF8] hover:underline font-semibold">
              how our IPTV service works
            </Link>{" "}
            or explore our complete{" "}
            <Link href="/channels" className="text-[#22D3EE] hover:underline font-semibold">
              channels lineup
            </Link>
            .
          </p>
        </div>

        {/* Feature Grid */}
        <div className="flex flex-col gap-6">
          
          {/* Top Row: 3 Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col rounded-3xl border border-white/10 bg-[#0A0F24] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] group"
                >
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${feature.iconColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <h3 className="mb-3 text-lg font-black uppercase text-white tracking-wide">{feature.title}</h3>
                  <p className="mb-8 flex-grow text-sm leading-relaxed text-slate-400 font-medium">
                    {feature.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {feature.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className="rounded-full border border-sky-500/20 bg-sky-500/5 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#38BDF8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 4 Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bottomFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col rounded-2xl border border-white/10 bg-[#0A0F24] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-500/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
                >
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mb-1 text-base font-bold text-white">{feature.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-400 font-medium">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
