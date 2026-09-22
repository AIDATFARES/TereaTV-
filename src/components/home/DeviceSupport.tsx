import { Monitor, Smartphone, Tv, Box, Wifi } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DeviceSupport() {
  return (
    <section className="py-24 bg-[#060A1A] text-white relative z-10 overflow-hidden border-b border-white/5 bg-grid-pattern">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-sky-900/15 rounded-full blur-[130px]" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Device Banner Graphic */}
          <div className="w-full lg:flex-1 relative group min-w-0">
            {/* Animated Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#00F0FF] blur-[60px] opacity-20 group-hover:opacity-35 transition-opacity duration-700 rounded-3xl" />
            
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A0F24] backdrop-blur-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:-translate-y-2">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/devices-banner-tereatv-v2.jpg"
                  alt="Supported TereaTV IPTV Devices — Firestick, Smart TV, Android Box, Apple TV, PC & MAG"
                  title="TereaTV Cross-Platform IPTV Compatibility"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -bottom-5 -left-5 glass-card px-4 py-3 shadow-2xl flex items-center gap-3">
              <div className="bg-[#00F0FF]/15 p-2 rounded-xl border border-[#00F0FF]/30">
                <Wifi className="text-[#00F0FF]" size={18} strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-extrabold text-xs block text-white">Zero Buffering</span>
                <span className="text-[10px] text-slate-400 font-medium">Ultra-Fast 60FPS</span>
              </div>
            </div>
          </div>

          {/* Right Side: Title & Feature Cards */}
          <div className="w-full lg:flex-1 space-y-8 min-w-0 flex flex-col justify-center">
            <div>
              <div className="badge-pill mb-4">
                <span className="dot-blink" /> Limitless Compatibility
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase mb-4">
                Stream Seamlessly on <br />
                <span className="bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
                  Any Screen You Own
                </span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                TereaTV is designed to adapt to your lifestyle. From the biggest screen in your living room to your smartphone on the go, enjoy a <Link href="/installation" className="text-[#38BDF8] font-bold hover:underline">premium 4K viewing experience</Link> across <Link href="/channels" className="text-[#38BDF8] font-bold hover:underline">+50,000 channels</Link> without complicated hardware. Check our <Link href="/pricing" className="text-[#22D3EE] font-bold hover:underline">pricing plans</Link> for multi-screen support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* Feature 1 */}
              <div className="p-5 rounded-2xl bg-[#0A0F24] border border-white/10 hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-sky-500/10 border border-sky-500/20 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-[#38BDF8] mb-3 group-hover:scale-110 transition-transform">
                  <Tv size={22} />
                </div>
                <h3 className="font-bold text-white text-sm mb-1">Smart TVs</h3>
                <p className="text-slate-400 text-xs">
                  Setup for <Link href="/installation" className="text-slate-300 hover:text-[#38BDF8] underline decoration-sky-500/30">Samsung, LG, Android TV, Sony</Link>.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-5 rounded-2xl bg-[#0A0F24] border border-white/10 hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-[#38BDF8] mb-3 group-hover:scale-110 transition-transform">
                  <Monitor size={22} />
                </div>
                <h3 className="font-bold text-white text-sm mb-1">Computers</h3>
                <p className="text-slate-400 text-xs">
                  Guides for <Link href="/installation" className="text-slate-300 hover:text-[#38BDF8] underline decoration-blue-500/30">Windows, macOS &amp; Web Player</Link>.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-5 rounded-2xl bg-[#0A0F24] border border-white/10 hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-cyan-500/10 border border-cyan-500/20 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-[#22D3EE] mb-3 group-hover:scale-110 transition-transform">
                  <Box size={22} />
                </div>
                <h3 className="font-bold text-white text-sm mb-1">Streaming Sticks</h3>
                <p className="text-slate-400 text-xs">
                  Tutorials for <Link href="/blog/how-to-set-up-iptv-on-firestick" className="text-slate-300 hover:text-[#22D3EE] underline decoration-cyan-500/30">Firestick</Link>, MAG Box, &amp; <Link href="/installation" className="text-slate-300 hover:text-[#22D3EE] underline decoration-cyan-500/30">Apple TV</Link>.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-5 rounded-2xl bg-[#0A0F24] border border-white/10 hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-teal-500/10 border border-teal-500/20 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-teal-400 mb-3 group-hover:scale-110 transition-transform">
                  <Smartphone size={22} />
                </div>
                <h3 className="font-bold text-white text-sm mb-1">Mobile &amp; Tablets</h3>
                <p className="text-slate-400 text-xs">
                  Stream on <Link href="/installation" className="text-slate-300 hover:text-teal-300 underline decoration-teal-500/30">Android phones, iPhone &amp; iPad</Link>.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/installation" 
                className="btn-primary-voltra px-7 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
              >
                Get Setup Instructions &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
