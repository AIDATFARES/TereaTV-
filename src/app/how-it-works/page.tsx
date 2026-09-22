import HowItWorksSection from "@/components/home/HowItWorksSection";
import Link from "next/link";
import { ShieldCheck, Zap, Phone, MonitorSmartphone, Globe2, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "How It Works — Fast Setup & Instant Streaming | TereaTV",
  description:
    "Get started with TereaTV in 3 simple steps: choose your plan, enter your credentials in your favorite player, and enjoy instant 4K streaming anywhere.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How It Works — Fast Setup & Instant Streaming | TereaTV",
    description:
      "Get started with TereaTV in 3 simple steps: choose your plan, enter your credentials in your favorite player, and enjoy instant 4K streaming anywhere.",
    url: "https://www.tereatv.top/how-it-works",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works — Fast Setup & Instant Streaming | TereaTV",
    description:
      "Get started with TereaTV in 3 simple steps: choose your plan, enter your credentials in your favorite player, and enjoy instant 4K streaming anywhere.",
  },
};

export default function HowItWorksPage() {
  return (
    <main className="flex-col flex min-h-screen bg-[#040714] bg-grid-pattern text-white overflow-hidden">
      
      {/* Page Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[radial-gradient(circle,rgba(2,132,199,0.16)_0%,transparent_70%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="badge-pill mb-6 inline-flex items-center gap-2">
            <span className="dot-blink" /> Simple Setup Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6 uppercase">
            How TereaTV IPTV Works: <br />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
              Start Streaming in Under 5 Minutes
            </span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We&apos;ve made cutting the cord as simple as possible. No technical skills required, no hardware to install, and absolutely zero hidden fees. Just <Link href="/pricing" className="text-[#38BDF8] hover:underline font-semibold">choose a plan</Link>, <Link href="/installation" className="text-[#38BDF8] hover:underline font-semibold">connect your app</Link>, and dive into <Link href="/channels" className="text-[#22D3EE] hover:underline font-semibold">infinite live TV &amp; VOD entertainment</Link>.
          </p>
        </div>
      </section>

      {/* The Core Timeline Section (Reused from Homepage) */}
      <div className="bg-[#040714]">
        <HowItWorksSection />
      </div>

      {/* Why Choose TereaTV - Pill Grid */}
      <section className="py-24 bg-[#0A0F24] text-white relative z-10 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-12 uppercase">
            Why Choose <span className="bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] bg-clip-text text-transparent">TereaTV IPTV</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            
            {/* Pill 1 */}
            <div className="glass-card-hover flex items-center gap-4 p-5 rounded-2xl text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8]">
                <ShieldCheck size={20} />
              </div>
              <span className="text-sm font-bold text-slate-200">Secure &amp; encrypted payments</span>
            </div>

            {/* Pill 2 */}
            <div className="glass-card-hover flex items-center gap-4 p-5 rounded-2xl text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8]">
                <Zap size={20} />
              </div>
              <span className="text-sm font-bold text-slate-200">Instant delivery within 5 mins</span>
            </div>

            {/* Pill 3 */}
            <div className="glass-card-hover flex items-center gap-4 p-5 rounded-2xl text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8]">
                <Phone size={20} />
              </div>
              <span className="text-sm font-bold text-slate-200">24/7 dedicated support</span>
            </div>

            {/* Pill 4 */}
            <div className="glass-card-hover flex items-center gap-4 p-5 rounded-2xl text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8]">
                <MonitorSmartphone size={20} />
              </div>
              <span className="text-sm font-bold text-slate-200">Works on all devices</span>
            </div>

            {/* Pill 5 */}
            <div className="glass-card-hover flex items-center gap-4 p-5 rounded-2xl text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8]">
                <Globe2 size={20} />
              </div>
              <span className="text-sm font-bold text-slate-200">150+ countries covered</span>
            </div>

            {/* Pill 6 */}
            <div className="glass-card-hover flex items-center gap-4 p-5 rounded-2xl text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8]">
                <CheckCircle2 size={20} />
              </div>
              <span className="text-sm font-bold text-slate-200">No contracts or hidden fees</span>
            </div>

          </div>
        </div>
      </section>

      {/* Large Fututistic CTA Block */}
      <section className="py-24 bg-[#040714] relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden border border-sky-500/30 bg-[#0A0F24] p-10 sm:p-16 text-center shadow-2xl backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.2)_0%,transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Ready to Start Streaming with TereaTV IPTV?
              </h2>
              <p className="text-slate-300 text-base md:text-lg font-medium mb-10 max-w-2xl mx-auto">
                Join thousands of satisfied customers. Get instant access to <Link href="/channels" className="text-[#38BDF8] hover:underline font-bold">+50,000 live channels</Link>, +120,000 films &amp; series, and reliable VIP sports coverage with <Link href="/pricing" className="text-[#22D3EE] hover:underline font-bold">flexible subscription packages</Link>.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20TereaTV%20IPTV." 
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary-voltra w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
                >
                  Get Free Trial &rarr;
                </a>
                <Link 
                  href="/pricing" 
                  className="btn-secondary-voltra w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
