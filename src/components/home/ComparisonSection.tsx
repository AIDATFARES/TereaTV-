import Link from "next/link";

export default function ComparisonSection() {
  const rows = [
    { feature: "Monthly Cost", terea: "From $4.2/mo", cable: "$80-$200/mo", other: "$10-$30/mo (unreliable)" },
    { feature: "Live Channels", terea: "+50,000 Channels", cable: "200-500", other: "5,000-15,000" },
    { feature: "4K Streaming", terea: "✓ Native 4K 60FPS", cable: "Very Limited", other: "Rarely stable" },
    { feature: "VOD Library", terea: "+120,000 Films & Series", cable: "Expensive Add-on", other: "Varies wildly" },
    { feature: "Server Uptime", terea: "99.9% Guaranteed", cable: "99%", other: "60-85%" },
    { feature: "Buffering", terea: "Zero (Anti-Freeze)", cable: "Rare", other: "Common at peak" },
    { feature: "Setup Time", terea: "Under 5 minutes", cable: "Technician appointment", other: "Complex manual setup" },
    { feature: "Contract", terea: "No Contract (Cancel anytime)", cable: "12-24 month contract", other: "Sometimes locked" },
    { feature: "Multi-Screen", terea: "✓ Included Options", cable: "Extra box fee", other: "Single stream only" },
    { feature: "Free Trial", terea: "✓ 24h Free Trial", cable: "No Trial", other: "Rarely available" },
  ];

  return (
    <section className="bg-[#040714] text-white relative z-10 border-b border-white/5 overflow-hidden py-24 bg-grid-pattern">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="badge-pill mb-4">
            <span className="dot-blink" /> IPTV vs Cable Comparison
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1] uppercase">
            Why TereaTV is the <br/>
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
              Smartest Choice for Cord-Cutters
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Discover why thousands of users are upgrading from traditional cable. Our service offers <Link href="/channels" className="text-[#38BDF8] hover:underline font-semibold">50,000+ live channels</Link>, superior 4K quality, and reliable anti-freeze technology at a <Link href="/pricing" className="text-[#38BDF8] hover:underline font-semibold">fraction of the cost</Link>. Simple setup on any device with <Link href="/installation" className="text-[#22D3EE] hover:underline font-semibold">no contracts or technician visits</Link>.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="bg-[#0A0F24] rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 p-8 pb-10 relative overflow-hidden backdrop-blur-xl">
            
            {/* Highlight Background for TereaTV Column */}
            <div className="absolute top-0 bottom-0 left-[26%] w-[25%] bg-gradient-to-b from-sky-500/10 via-blue-500/5 to-cyan-500/10 border-x border-sky-500/30 shadow-[0_0_50px_rgba(2,132,199,0.15)] pointer-events-none"></div>

            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-6 relative z-10">
              <div className="text-left font-extrabold text-slate-400 uppercase tracking-widest text-xs flex items-end pb-4">Features</div>
              
              <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#06B6D4] text-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(2,132,199,0.4)] transform -translate-y-4 scale-105 border-2 border-sky-300/40">
                <span className="text-[10px] uppercase tracking-widest font-black opacity-90 mb-1">Recommended</span>
                <span className="text-2xl font-black tracking-tight">TereaTV</span>
              </div>
              
              <div className="text-center font-extrabold text-slate-400 uppercase tracking-widest text-xs flex items-end justify-center pb-4">Traditional Cable</div>
              <div className="text-center font-extrabold text-slate-400 uppercase tracking-widest text-xs flex items-end justify-center pb-4">Other Providers</div>
            </div>

            {/* Table Rows */}
            <div className="relative z-10">
              {rows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-4 gap-4 py-4 border-b border-white/5 last:border-0 items-center hover:bg-white/[0.02] transition-colors rounded-xl px-2">
                  <div className="font-bold text-slate-300 text-sm">{row.feature}</div>
                  <div className="font-black text-[#38BDF8] text-center text-sm sm:text-base">{row.terea}</div>
                  <div className="font-medium text-slate-400 text-center text-xs sm:text-sm">{row.cable}</div>
                  <div className="font-medium text-slate-400 text-center text-xs sm:text-sm">{row.other}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Comparison (Cards) */}
        <div className="md:hidden space-y-6">
          <div className="rounded-3xl p-1 bg-gradient-to-br from-[#0284C7] to-[#06B6D4] shadow-xl">
            <div className="bg-[#0A0F24] text-white rounded-[1.35rem] p-6 backdrop-blur-xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#38BDF8] block text-center mb-1">
                PREMIUM CHOICE
              </span>
              <h3 className="text-2xl font-black mb-6 text-center text-white">TereaTV</h3>
              <div className="space-y-3.5">
                {rows.map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2.5 last:border-0 last:pb-0 text-xs">
                    <span className="text-slate-400 font-medium">{row.feature}</span>
                    <span className="font-extrabold text-[#38BDF8] text-right">{row.terea}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#0A0F24] rounded-3xl border border-white/10 p-6">
            <h3 className="text-lg font-bold mb-4 text-center text-slate-400">Traditional Cable / Satellite</h3>
            <div className="space-y-3">
              {rows.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0 text-xs">
                  <span className="text-slate-500">{row.feature}</span>
                  <span className="font-medium text-slate-400 text-right">{row.cable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/pricing"
            className="btn-primary-voltra px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
          >
            View Pricing Plans &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
