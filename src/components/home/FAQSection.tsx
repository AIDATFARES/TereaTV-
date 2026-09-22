"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";

type FAQ = {
  id: number;
  category: string;
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    id: 1,
    category: "General",
    question: "What is TereaTV?",
    answer: (
      <>
        TereaTV is a premium IPTV service that offers live TV, VOD movies, TV series, and sports channels in high-quality streaming, including 4K. Check out our{" "}
        <Link
          href="/channels"
          className="text-[#38BDF8] font-semibold hover:underline"
        >
          live TV channels
        </Link>{" "}
        and{" "}
        <a
          href="#pricing"
          className="text-[#38BDF8] font-semibold hover:underline"
        >
          IPTV subscription plans
        </a>
        .
      </>
    ),
  },
  {
    id: 2,
    category: "General",
    question: "Do I need a subscription to use TereaTV?",
    answer: (
      <>
        Yes, a subscription is required. However, we offer a{" "}
        <a
          href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20TereaTV%20IPTV."
          target="_blank"
          rel="noreferrer"
          className="text-[#38BDF8] font-semibold hover:underline"
        >
          free 24-hour trial
        </a>{" "}
        so you can test the service before committing to our{" "}
        <a
          href="#pricing"
          className="text-[#38BDF8] font-semibold hover:underline"
        >
          subscription plans
        </a>
        .
      </>
    ),
  },
  {
    id: 3,
    category: "Technical",
    question: "What devices are compatible with TereaTV?",
    answer: (
      <>
        TereaTV works on Android TV, Firestick, Smart TVs (Samsung, LG), Android phones, tablets, Apple TV, and apps like Tivimate. Follow our step-by-step{" "}
        <Link
          href="/installation"
          className="text-[#38BDF8] font-semibold hover:underline"
        >
          installation guides
        </Link>{" "}
        to get started.
      </>
    ),
  },
  {
    id: 4,
    category: "Technical",
    question: "Can I watch on multiple devices at the same time?",
    answer: (
      <>
        Yes, we offer multi-device support. You can choose an{" "}
        <a
          href="#pricing"
          className="text-[#38BDF8] font-semibold hover:underline"
        >
          IPTV subscription plan
        </a>{" "}
        that allows streaming on up to 3 devices simultaneously. Perfect for families or shared living rooms.
      </>
    ),
  },
  {
    id: 5,
    category: "General",
    question: "Can I watch sports on TereaTV?",
    answer: (
      <>
        Absolutely. We offer a wide selection of live sports channels, including Premier League, Champions League, UFC, F1, NBA, and PPV broadcasts in 4K 60FPS. Explore our full{" "}
        <Link
          href="/channels"
          className="text-[#38BDF8] font-semibold hover:underline"
        >
          channels catalog
        </Link>
        .
      </>
    ),
  },
  {
    id: 6,
    category: "Billing",
    question: "What payment methods do you accept?",
    answer: (
      <>
        We accept PayPal, cryptocurrency (such as Bitcoin, USDT), credit cards, and instant transfers for quick and secure payments. Contact our{" "}
        <Link
          href="/contact"
          className="text-[#38BDF8] font-semibold hover:underline"
        >
          support team
        </Link>{" "}
        for any payment inquiries.
      </>
    ),
  },
  {
    id: 7,
    category: "General",
    question: "What kind of content is included?",
    answer: (
      <>
        The service includes 50,000+ live TV channels, sports, 120,000+ movies, TV series, kids&apos; content, international channels, and more – all in HD or 4K quality. Learn more in our{" "}
        <Link
          href="/blog"
          className="text-[#38BDF8] font-semibold hover:underline"
        >
          IPTV articles &amp; guides
        </Link>
        .
      </>
    ),
  },
  {
    id: 8,
    category: "Technical",
    question: "Do I need a VPN?",
    answer: (
      <>
        A VPN is not required because TereaTV includes built-in anti-freeze server protection. However, if your ISP limits streaming speeds, a VPN can be used without restrictions. Read our{" "}
        <Link
          href="/faq"
          className="text-[#38BDF8] font-semibold hover:underline"
        >
          FAQ knowledge base
        </Link>{" "}
        for further setup details.
      </>
    ),
  },
];

const categories = ["General", "Technical", "Billing"];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#060A1A] text-white relative z-10 border-t border-white/5 overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-900/10 blur-[130px] rounded-full" />

      <div className="relative z-10 max-w-[1050px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mb-4">
            <span className="dot-blink" /> Support &amp; FAQ
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1] uppercase">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
              Questions &amp; Answers
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about our IPTV service. If you need immediate help, our{" "}
            <Link href="/contact" className="text-[#38BDF8] font-semibold hover:underline">
              support team
            </Link>{" "}
            is available 24/7 on WhatsApp.
          </p>
        </div>

        {/* Tabbed FAQ Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Column: Categories */}
          <div className="w-full md:w-64 shrink-0 bg-[#0A0F24] rounded-2xl p-5 h-fit border border-white/10 shadow-lg">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 px-2">
              Browse Categories
            </p>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setExpandedId(null);
                    }}
                    className={`text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center justify-between ${
                      isActive 
                        ? "bg-gradient-to-r from-[#0284C7]/20 to-[#06B6D4]/20 border border-sky-500/40 text-[#38BDF8] shadow-sm" 
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{cat}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Questions */}
          <div className="flex-1">
            <p className="text-xl font-black text-white mb-6 border-b border-white/10 pb-4 tracking-tight">
              {activeCategory} Questions
            </p>
            
            <div className="flex flex-col gap-3.5">
              {filteredFaqs.map((faq) => {
                const isExpanded = expandedId === faq.id;
                
                return (
                  <div 
                    key={faq.id} 
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? "bg-[#0A0F24] border-sky-500/50 shadow-[0_4px_25px_rgba(2,132,199,0.15)]"
                        : "bg-[#0A0F24]/70 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex justify-between items-center p-5 text-left font-bold text-white focus:outline-none gap-4"
                    >
                      <h3 className="text-sm sm:text-base leading-snug font-bold">{faq.question}</h3>
                      <span className={`shrink-0 p-1 rounded-full border transition-all ${
                        isExpanded 
                          ? "bg-sky-500/20 border-sky-500/40 text-[#38BDF8]" 
                          : "bg-white/5 border-white/10 text-slate-400"
                      }`}>
                        {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-5 pt-0 text-xs sm:text-sm leading-relaxed text-slate-300 border-t border-white/5 mt-1 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>

        {/* Bottom CTA to Knowledge Base */}
        <div className="mt-16 text-center">
          <Link
            href="/faq"
            className="btn-secondary-voltra px-7 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>View Complete FAQ Knowledge Base</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
