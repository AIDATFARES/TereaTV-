import Link from "next/link";
import DeviceSetupGuide from "@/components/installation/DeviceSetupGuide";
import BrandMarquee from "@/components/home/BrandMarquee";
import { Clock3, Download, Headphones, Link2, Monitor, PlayCircle } from "lucide-react";

export const metadata = {
  title: "TereaTV Setup Guide: Firestick, Smart TV, Android & Apple TV",
  description:
    "Step-by-step 5-minute setup guides for Firestick, Smart TV, Android, Apple TV & PC. Easy M3U & Xtream Codes setup with TiviMate & IPTV Smarters.",
  alternates: {
    canonical: "/installation",
  },
  openGraph: {
    title: "TereaTV Setup Guide: Firestick, Smart TV, Android & Apple TV",
    description:
      "Step-by-step 5-minute setup guides for Firestick, Smart TV, Android, Apple TV & PC. Easy M3U & Xtream Codes setup with TiviMate & IPTV Smarters.",
    url: "https://www.tereatv.top/installation",
  },
  twitter: {
    card: "summary_large_image",
    title: "TereaTV Setup Guide: Firestick, Smart TV, Android & Apple TV",
    description:
      "Step-by-step 5-minute setup guides for Firestick, Smart TV, Android, Apple TV & PC. Easy M3U & Xtream Codes setup with TiviMate & IPTV Smarters.",
  },
};

export default function Installation() {
  return (
    <main className="min-h-screen bg-[#040714] text-white pt-6 sm:pt-10 pb-24 relative overflow-hidden bg-grid-pattern">
      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute top-[6%] left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[radial-gradient(circle,rgba(2,132,199,0.15)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <div className="badge-pill mb-4 inline-flex items-center gap-2">
            <span className="dot-blink" /> Installation Guide
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
            <span className="block text-white">TereaTV IPTV Installation Guide:</span>
            <span className="mt-2 block bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
              Setup on Any Device Quickly
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
            Comprehensive step-by-step instructions to configure TereaTV on all your devices.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-slate-400">
            TereaTV works on Smart TVs, Firestick, Android, iOS, MAG, and more. New to TereaTV? Check{" "}
            <Link className="font-bold text-[#38BDF8] hover:underline" href="/pricing">TereaTV Pricing</Link>, or browse the{" "}
            <Link className="font-bold text-[#38BDF8] hover:underline" href="/channels">TereaTV Channel List</Link> before you start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-bold text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0A0F24] border border-white/10 px-4 py-2">
              <Monitor className="h-4 w-4 text-[#00F0FF]" /> 15+ Devices Supported
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0A0F24] border border-white/10 px-4 py-2">
              <Clock3 className="h-4 w-4 text-[#38BDF8]" /> 5–15 Minutes Setup
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0A0F24] border border-white/10 px-4 py-2">
              <Headphones className="h-4 w-4 text-emerald-400" /> 24/7 Support Available
            </span>
          </div>
        </header>

        {/* Quick Start Guide Section */}
        <section className="mb-20 rounded-3xl border border-white/10 bg-[#0A0F24] p-8 sm:p-14 shadow-2xl backdrop-blur-xl">
          <header className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">Quick Start Guide in 3 Steps</h2>
            <p className="mt-2 text-sm text-slate-400">Get started with TereaTV quickly and easily in three straightforward steps.</p>
          </header>
          <div className="grid gap-8 md:grid-cols-3">
            <QuickStartCard icon={Download} step="1" title="Download App">
              Download and install a top IPTV player like{" "}
              <Link href="/installation" className="text-[#38BDF8] hover:underline font-semibold">
                IPTV Smarters or TiviMate
              </Link>{" "}
              from your device app store.
            </QuickStartCard>
            <QuickStartCard icon={Link2} step="2" title="Add M3U URL">
              Input your TereaTV M3U playlist URL or Xtream Codes, sent immediately after ordering a{" "}
              <Link href="/pricing" className="text-[#38BDF8] hover:underline font-semibold">
                subscription plan
              </Link>
              .
            </QuickStartCard>
            <QuickStartCard icon={PlayCircle} step="3" title="Start Streaming">
              Gain immediate access to{" "}
              <Link href="/channels" className="text-[#22D3EE] hover:underline font-semibold">
                50,000+ live channels
              </Link>{" "}
              and movies with{" "}
              <Link href="/faq" className="text-[#00F0FF] hover:underline font-semibold">
                zero buffering
              </Link>
              .
            </QuickStartCard>
          </div>

          {/* Apps Platform Logos Banner */}
          <div className="mt-16 border-t border-white/10 pt-12">
            <p className="text-center text-xs font-extrabold tracking-widest text-slate-400 uppercase mb-8">
              Supported on all your favorite devices
            </p>
            <BrandMarquee 
              imagesFolder="devices" 
              images={[
                "amazon-fire-tv-stick.webp",
                "apple-tv.webp",
                "hisense-smart-tv.webp",
                "iptv-smarters-pro.webp",
                "lg-smart-tv.webp",
                "nvidia-shield-tv.webp",
                "android-tv-box.webp",
                "sony-bravia-tv.webp",
                "tv-media-box.webp",
                "windows-pc.webp",
                "xbox-console.webp"
              ]}
              cardClassName="flex-shrink-0 w-[150px] h-[75px] md:w-[200px] md:h-[90px] relative bg-[#040714] border border-white/10 rounded-2xl p-4 hover:border-sky-500/50 transition-all duration-300 shadow-md flex items-center justify-center"
              imageClassName="object-contain drop-shadow-sm brightness-90 hover:brightness-100"
            />
          </div>
        </section>

        {/* Detailed Interactive Device Setup Guide */}
        <DeviceSetupGuide />

        {/* Bottom Help Section */}
        <section className="mx-auto mt-20 max-w-2xl text-center rounded-3xl border border-white/10 bg-[#0A0F24] p-10 shadow-xl backdrop-blur-xl">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Need Help Setting Up TereaTV IPTV?</h2>
          <p className="mt-2 text-sm text-slate-400">
            Our technical support team is available 24/7 on WhatsApp to assist you with installation. You can also explore our{" "}
            <Link href="/faq" className="text-[#38BDF8] hover:underline font-semibold">
              troubleshooting FAQ
            </Link>{" "}
            for instant answers.
          </p>
          <div className="mt-6">
            <Link className="btn-primary-voltra px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider inline-flex items-center gap-2" href="/contact">
              Contact Support
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}

function QuickStartCard({ children, icon: Icon, step, title }: { children: React.ReactNode; icon: typeof Download; step: string; title: string }) {
  return (
    <article className="glass-card-hover flex flex-col rounded-2xl p-8 text-center items-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8] mb-5">
        <Icon className="h-7 w-7" strokeWidth={1.8} />
      </div>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#0284C7] to-[#06B6D4] text-xs font-black text-white shadow-md mb-3">
        {step}
      </span>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-xs sm:text-sm leading-relaxed text-slate-400">{children}</p>
    </article>
  );
}
