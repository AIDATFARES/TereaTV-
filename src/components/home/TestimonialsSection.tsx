import Image from "next/image";
import { Globe2, Headphones, RefreshCw, ShieldCheck, Star, Trophy, Tv, Users } from "lucide-react";

const reviewImages = [
  "1-2.webp",
  "2-2.webp",
  "3-3.webp",
  "4-2.webp",
  "1-2 (1).webp",
  "Image01-e1736575288611.jpg.webp",
  "Image02-e1736575280733.jpg.webp",
  "Image03-e1736575270823.jpg.webp",
  "Image07-e1736575248206.jpg.webp"
];

const metrics = [
  { icon: Star, value: "4.9 / 5.0", label: "Average rating", tone: "text-amber-300" },
  { icon: Users, value: "14K+", label: "Happy customers", tone: "text-[#38BDF8]" },
  { icon: Tv, value: "50K+", label: "Live channels", tone: "text-[#00F0FF]" },
  { icon: Globe2, value: "150+", label: "Countries supported", tone: "text-[#22D3EE]" },
  { icon: RefreshCw, value: "94%", label: "Renewal rate", tone: "text-[#10B981]" },
];

export default function TestimonialsSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#040714] py-24 sm:py-28 border-b border-white/5 bg-grid-pattern">
      {/* Ambient Lighting Glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_35%,rgba(2,132,199,0.14),transparent_40%),radial-gradient(ellipse_at_75%_55%,rgba(6,182,212,0.12),transparent_40%)]" />

      <div className="relative">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <div className="badge-pill mb-4">
            <Trophy className="h-3.5 w-3.5 text-amber-300" /> TOP RATED IPTV PROVIDER
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase leading-[1.05] tracking-tight text-white">
            <span className="block">Trusted by Thousands of</span>
            <span className="mt-1 block bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
              Happy Cord-Cutters
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
            Read real reviews from our global community. Discover why TereaTV is rated as the most reliable, buffer-free IPTV service for live sports, movies, and international channels.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="mx-auto mt-12 grid max-w-[850px] grid-cols-2 gap-3 px-5 sm:grid-cols-5 sm:px-0">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-[#0A0F24] p-4 text-center shadow-lg hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className={`mx-auto h-4 w-4 ${metric.tone}`} />
                <span className="mt-2 block text-base font-extrabold text-white">{metric.value}</span>
                <small className="mt-0.5 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  {metric.label}
                </small>
              </div>
            );
          })}
        </div>

        {/* Infinite Image Carousel of Real Reviews with Edge Fade Mask */}
        <div className="mt-12 flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] py-4">
          <div
            className="flex min-w-full gap-6 px-4 animate-marquee hover:[animation-play-state:paused]"
            style={{ animationDuration: '40s' }}
          >
            {[...reviewImages, ...reviewImages, ...reviewImages].map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[220px] sm:w-[280px] h-[340px] sm:h-[400px] relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 group drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)] border border-white/10 hover:border-sky-500/50 bg-[#0A0F24]"
              >
                <Image
                  src={`/reviews/${img}`}
                  alt={`Verified TereaTV 5-Star Subscriber Review and Stream Verification ${(index % reviewImages.length) + 1}`}
                  title={`TereaTV Verified Customer Rating & Testimonial ${(index % reviewImages.length) + 1}`}
                  fill
                  sizes="(max-width: 640px) 220px, 280px"
                  className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/213552069874?text=Hello%2C%20I%20would%20like%20a%20free%20trial%20for%20TereaTV%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="btn-primary-voltra px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center gap-2"
          >
            <Trophy className="h-4 w-4" /> Get Your 24-Hour Free Trial
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <Headphones className="h-3.5 w-3.5 text-[#00F0FF]" /> Instant WhatsApp delivery
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Tv className="h-3.5 w-3.5 text-[#38BDF8]" /> Works on all devices
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-[#38BDF8]" /> 99.9% uptime guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
