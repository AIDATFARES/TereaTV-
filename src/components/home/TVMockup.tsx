import Image from "next/image";

export default function TVMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[1250px] flex items-center justify-center">
      {/* Background Ambient Glow Behind Mockup */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/25 via-blue-500/30 to-cyan-500/25 blur-[100px] rounded-full transform scale-125 pointer-events-none animate-pulse duration-1000" />

      {/* Floating Animated Container */}
      <div
        className="relative z-10 w-full animate-fade-up opacity-0 [animation-delay:400ms] group"
      >
        <div className="animate-float w-full transition-transform duration-500 filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] group-hover:scale-[1.03] group-hover:-translate-y-2">
          <Image
            alt="TereaTV Premium 4K IPTV Streaming Ecosystem across Smart TV, Smartphone, Tablet, and Laptop"
            title="TereaTV Multi-Device Streaming Platform"
            className="h-auto w-full object-contain filter drop-shadow-[0_12px_30px_rgba(56,189,248,0.25)]"
            height={1000}
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            src="/tereatv-tv-screen.webp"
            width={1800}
          />
        </div>
      </div>
    </div>
  );
}
