import Image from "next/image";
import Link from "next/link";

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#040714] text-white relative z-10 border-b border-white/5 overflow-hidden bg-grid-pattern">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mb-4">
            <span className="dot-blink" /> Easy 3-Step Setup
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1] uppercase">
            How to Start Your <br/>
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
              Premium IPTV Subscription
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Setting up your TereaTV account is quick and simple. Follow our 3-step process to get instant access to <Link href="/channels" className="text-[#38BDF8] font-semibold hover:underline">live TV, movies, and series</Link>.
          </p>
        </div>

        {/* Timeline Steps Container */}
        <div className="relative max-w-[960px] mx-auto mb-12">
          {/* Vertical Dashed Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-sky-500/20 hidden md:block" />

          {/* STEP 1 */}
          <div className="relative mb-16 md:mb-20">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-gradient-to-r from-[#0284C7] to-[#06B6D4] text-white font-black text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_20px_rgba(2,132,199,0.5)] border border-sky-300/30">
                Step One
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Card */}
              <div className="bg-[#0A0F24] text-slate-100 p-8 rounded-3xl shadow-xl relative border border-white/10 hover:border-sky-500/40 transition-colors">
                <h3 className="text-xl font-black text-white mb-3">
                  <Link href="/pricing" className="hover:text-[#38BDF8] transition-colors">
                    1. Choose Your IPTV Plan
                  </Link>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Select the best IPTV subscription package for your needs from our{" "}
                  <Link href="/pricing" className="text-[#38BDF8] font-semibold hover:underline">
                    pricing plans
                  </Link>
                  . Once you complete the order, we will email or{" "}
                  <Link href="/contact" className="text-[#38BDF8] font-semibold hover:underline">
                    WhatsApp
                  </Link>{" "}
                  your login credentials instantly.
                </p>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-3xl bg-[#0A0F24] border border-white/10 shadow-xl group">
                <Image
                  src="/step-1-tereatv-v2.jpg"
                  alt="Step 1: Select your TereaTV IPTV subscription package and receive instant M3U & Xtream Codes login credentials"
                  title="Step 1: Choose TereaTV IPTV Plan"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative mb-16 md:mb-20">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-gradient-to-r from-[#0284C7] to-[#06B6D4] text-white font-black text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_20px_rgba(2,132,199,0.5)] border border-sky-300/30">
                Step Two
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Image */}
              <div className="overflow-hidden rounded-3xl bg-[#0A0F24] border border-white/10 shadow-xl group order-2 md:order-1">
                <Image
                  src="/step-2-tereatv-v2.jpg"
                  alt="Step 2: 5-minute easy installation of TereaTV IPTV application on Firestick, Smart TV, Android Box, or Apple TV"
                  title="Step 2: Install TereaTV IPTV App"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Card */}
              <div className="bg-[#0A0F24] text-slate-100 p-8 rounded-3xl shadow-xl relative border border-white/10 hover:border-sky-500/40 transition-colors order-1 md:order-2">
                <h3 className="text-xl font-black text-white mb-3">
                  <Link href="/installation" className="hover:text-[#38BDF8] transition-colors">
                    2. Install Your IPTV Player App
                  </Link>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Use our step-by-step{" "}
                  <Link href="/installation" className="text-[#38BDF8] font-semibold hover:underline">
                    IPTV installation guides
                  </Link>{" "}
                  to set up the service on your Smart TV,{" "}
                  <Link href="/installation" className="text-[#38BDF8] font-semibold hover:underline">
                    Firestick
                  </Link>
                  , Android Box, or Apple device using top apps like{" "}
                  <Link href="/installation" className="text-[#22D3EE] font-semibold hover:underline">
                    IPTV Smarters or TiviMate
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-gradient-to-r from-[#0284C7] to-[#06B6D4] text-white font-black text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_20px_rgba(2,132,199,0.5)] border border-sky-300/30">
                Step Three
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Card */}
              <div className="bg-[#0A0F24] text-slate-100 p-8 rounded-3xl shadow-xl relative border border-white/10 hover:border-sky-500/40 transition-colors">
                <h3 className="text-xl font-black text-white mb-3">
                  <Link href="/channels" className="hover:text-[#38BDF8] transition-colors">
                    3. Watch Live TV &amp; VOD
                  </Link>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Start streaming! Enjoy <strong className="text-white">+50,000 Channels</strong>, plus a massive Video on Demand (VOD) library of movies and series from our{" "}
                  <Link href="/channels" className="text-[#38BDF8] font-semibold hover:underline">
                    channels catalog
                  </Link>{" "}
                  with{" "}
                  <Link href="/faq" className="text-[#38BDF8] font-semibold hover:underline">
                    zero buffering
                  </Link>
                  .
                </p>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-3xl bg-[#0A0F24] border border-white/10 shadow-xl group">
                <Image
                  src="/step-3-tereatv-v2.jpg"
                  alt="Step 3: Stream over 50,000 live 4K channels and 200,000 VOD movies with zero buffering on TereaTV"
                  title="Step 3: Watch 4K Live TV on TereaTV"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
