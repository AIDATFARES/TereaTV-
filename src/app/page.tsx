import HeroSection from "@/components/home/HeroSection";
import Link from "next/link";
import BrandMarquee from "@/components/home/BrandMarquee";
import MovieStrips from "@/components/home/MovieStrips";
import ChannelCategories from "@/components/home/ChannelCategories";
import DeviceSupport from "@/components/home/DeviceSupport";
import ComparisonSection from "@/components/home/ComparisonSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex-col flex min-h-screen bg-[#040714] text-white w-full max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Features & Channel Categories */}
      <ChannelCategories />

      {/* Pricing Section */}
      <PricingSection />

      {/* Movies, Sports & Entertainment Showcase (Image-free Interactive Hub) */}
      <MovieStrips />

      {/* Channel & Installation Quick Links */}
      <div className="w-full bg-[#040714] py-6 px-4 text-center border-y border-white/5 relative z-20">
        <p className="text-center text-xs sm:text-sm text-slate-400 max-w-3xl mx-auto">
          Explore the complete <Link prefetch={false} className="font-bold text-[#38BDF8] hover:underline" href="/channels">TereaTV Channel Lineup</Link> or view our <Link prefetch={false} className="font-bold text-[#38BDF8] hover:underline" href="/installation">Installation Guide</Link> for simple step-by-step setup.
        </p>
      </div>

      {/* IPTV vs Cable Comparison */}
      <ComparisonSection />

      {/* Device Support */}
      <DeviceSupport />

      {/* Device Logos Marquee */}
      <div className="w-full bg-[#060A1A] border-b border-white/5 pt-14 pb-8 relative z-10 bg-grid-pattern overflow-hidden">
        <p className="text-center text-xs font-extrabold tracking-widest text-slate-400 uppercase mb-8">
          Supported on All Leading Devices &amp; IPTV Players
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
          cardClassName="flex-shrink-0 w-[160px] h-[80px] md:w-[210px] md:h-[95px] relative bg-white border border-white/10 rounded-2xl p-4 md:p-5 hover:border-sky-400/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center justify-center cursor-pointer"
          imageClassName="object-contain drop-shadow-sm"
        />
      </div>

      {/* 3-Step Setup Timeline */}
      <HowItWorksSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* 24/7 Support CTA */}
      <SupportCtaSection />
    </main>
  );
}
