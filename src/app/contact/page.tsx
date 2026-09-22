"use client";

import Link from "next/link";
import { Mail, MessageCircle, ArrowRight, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#040714] text-white pt-6 sm:pt-10 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10 bg-grid-pattern overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[radial-gradient(circle,rgba(2,132,199,0.16)_0%,transparent_70%)]" />

      <div className="mx-auto mb-16 max-w-3xl text-center relative z-10">
        <div className="badge-pill mb-4 inline-flex items-center gap-2">
          <span className="dot-blink" /> Contact Support
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
          <span className="block text-white">Contact TereaTV IPTV</span>
          <span className="mt-2 block bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
            Customer Support Team
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-slate-300 font-medium">
          We&apos;re here to help you get the best streaming experience. Need setup help? Check our{" "}
          <Link href="/installation" className="text-[#38BDF8] hover:underline font-semibold">
            installation guides
          </Link>
          . Exploring packages? View our{" "}
          <Link href="/pricing" className="text-[#38BDF8] hover:underline font-semibold">
            subscription plans
          </Link>{" "}
          or read our{" "}
          <Link href="/faq" className="text-[#22D3EE] hover:underline font-semibold">
            FAQ
          </Link>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative z-10">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          <h2 className="sr-only">Direct Support Channels</h2>
          <div className="glass-card-hover rounded-3xl p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-5 text-[#38BDF8]">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-xl text-white mb-1">Email Us</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-5 font-medium">For general inquiries and support.</p>
            <a
              className="text-[#38BDF8] font-extrabold hover:underline transition-colors text-sm"
              href="mailto:support@tereatv.top"
            >
              support@tereatv.top
            </a>
          </div>

          <div className="glass-card-hover rounded-3xl p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 text-emerald-400">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-xl text-white mb-1">WhatsApp Support</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-5 font-medium">
              Fastest way to reach us for technical issues.
            </p>
            <a
              className="text-emerald-400 font-extrabold hover:underline transition-colors flex items-center gap-2 text-sm"
              href="https://wa.me/213552069874?text=Hello,%20I%20need%20support%20for%20TereaTV."
              target="_blank"
              rel="noreferrer"
            >
              Start Chat <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="glass-card-hover rounded-3xl p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 text-[#22D3EE]">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-xl text-white mb-1">Response Time</h3>
            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
              We typically reply in <strong className="text-white">Under 2 hours</strong> during standard business hours.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl border border-white/10 bg-[#0A0F24] p-8 md:p-12 h-full shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 border-b border-white/10 pb-5">
              Send Us a Support Message
            </h2>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="bg-[#040714] border border-white/10 focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all font-medium"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="bg-[#040714] border border-white/10 focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all font-medium"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="bg-[#040714] border border-white/10 focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all font-medium"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="bg-[#040714] border border-white/10 focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all resize-none font-medium"
                  id="message"
                  name="message"
                  placeholder="Describe your issue or question in detail..."
                  rows={6}
                ></textarea>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  className="btn-primary-voltra px-10 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 group shadow-xl"
                  type="submit"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
