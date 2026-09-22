import { Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function SupportCtaSection() {
  return (
    <section className="border-t border-white/5 bg-[#040714] px-5 py-20 relative overflow-hidden bg-grid-pattern">
      {/* Subtle glow background */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-900/15 rounded-full blur-[140px]" />

      <div
        className="relative z-10 mx-auto flex max-w-[720px] flex-col gap-8 rounded-3xl border border-white/10 bg-[#0A0F24] p-8 sm:p-10 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="max-w-[400px]">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/30 bg-sky-500/10 text-[#38BDF8] mb-4">
            <MessageSquare className="h-6 w-6" />
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
            <span>Have Questions About </span>
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#00F0FF] bg-clip-text text-transparent">
              TereaTV IPTV?
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
            Our technical support team is online 24/7 and responds in under 5 minutes on WhatsApp. Read our{" "}
            <Link href="/faq" className="text-[#38BDF8] hover:underline font-semibold">
              frequently asked questions
            </Link>{" "}
            or visit our{" "}
            <Link href="/contact" className="text-[#22D3EE] hover:underline font-semibold">
              contact support desk
            </Link>{" "}
            for direct assistance.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:w-48">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all hover:bg-[#20bd5a] hover:scale-105 active:scale-95"
            href="https://wa.me/213552069874?text=Hello%2C%20I%20have%20a%20question%20about%20TereaTV%20IPTV."
            rel="noreferrer"
            target="_blank"
          >
            <MessageSquare className="h-4 w-4" />
            Ask on WhatsApp
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:border-sky-400/50 hover:bg-sky-600/10 hover:text-[#38BDF8]"
            href="mailto:support@tereatv.top"
          >
            <Mail className="h-4 w-4" />
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
