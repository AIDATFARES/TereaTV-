"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Headphones,
  Server,
  ShieldCheck,
  ShoppingCart,
  Zap,
} from "lucide-react";

type CreditPlan = {
  id: string;
  credits: number;
  price: number;
  oldPrice?: number;
  popular?: boolean;
  bestValue?: boolean;
};

const creditPlans: CreditPlan[] = [
  {
    id: "120-credits",
    credits: 120,
    price: 299,
  },
  {
    id: "240-credits",
    credits: 240,
    price: 559,
    popular: true,
  },
  {
    id: "360-credits",
    credits: 360,
    price: 799,
    bestValue: true,
  },
  {
    id: "600-credits",
    credits: 600,
    price: 1199,
  },
];

const planFeatures = [
  "Each credit hour equals 1 month",
  "Free Trial Everyday",
  "Customize groups",
  "Pay As You Go!",
  "Credits Not Expire",
  "24/7 support",
  "Create Sub-Resellers",
];

const advantages = [
  {
    icon: ShoppingCart,
    title: "COMPATIBLE WITH ALL DEVICES",
    description:
      "Our IPTV service is compatible with all devices: Smart TV, Android devices, MAG, Apple TV, Firestick & more.",
  },
  {
    icon: Server,
    title: "EFFICIENT SERVERS",
    description:
      "We have large, high-capacity servers equipped with anti-freeze technology to provide you with the best quality of service.",
  },
  {
    icon: Headphones,
    title: "EXPERT SUPPORT",
    description:
      "Our dedicated technical support team is available 7 days a week to help you and your reseller business whenever needed.",
  },
  {
    icon: Zap,
    title: "FULL CONTROL PANEL",
    description:
      "Manage customer lines, edit channels, generate unlimited free test accounts, and create sub-resellers effortlessly.",
  },
];

const resellerFaqs = [
  {
    question: "DOES THE CONTROL PANEL EXPIRE?",
    answer:
      "No, your reseller control panel does not expire. Once activated, your panel remains active permanently, and your credits never expire.",
  },
  {
    question: "CAN I RENEW A SUBSCRIPTION?",
    answer:
      "Yes! You can easily extend or renew any client subscription directly from your Xtream reseller panel with a single click.",
  },
  {
    question: "CAN I CHANGE A SUBSCRIPTION FROM ONE DEVICE TO ANOTHER?",
    answer:
      "Absolutely. You can modify lines, switch device types, or update M3U playlists and Xtream Codes parameters at any time inside your dashboard.",
  },
  {
    question: "WHAT IF THE SUBSCRIPTION DOES NOT WORK FOR MY CLIENT?",
    answer: (
      <span>
        Our expert support team is available 24/7 on{" "}
        <Link href="/contact" className="text-[#38BDF8] hover:underline font-semibold">
          WhatsApp &amp; Email
        </Link>{" "}
        to assist you with fast client setup, line diagnostics, and troubleshooting.
      </span>
    ),
  },
  {
    question: "HOW TO SELL IPTV SUBSCRIPTIONS?",
    answer:
      "You can sell IPTV subscriptions through your website, social media channels, local network, or direct clients. You set your own pricing and keep 100% of your profit margin.",
  },
  {
    question: "DOES YOUR IPTV SERVER SUPPORT ALL DEVICES?",
    answer: (
      <span>
        Yes! Our servers support Smart TVs, Android TV, Firestick, MAG boxes, iOS, and PC. Share our{" "}
        <Link href="/installation" className="text-[#38BDF8] hover:underline font-semibold">
          step-by-step device guides
        </Link>{" "}
        with your clients.
      </span>
    ),
  },
  {
    question: "HOW CAN I ACTIVATE A MAG BOX?",
    answer:
      "Inside your reseller panel, select 'Add MAG Device', enter the client's MAC address (00:1A:79:XX:XX:XX), and assign their subscription package instantly.",
  },
  {
    question: "CAN I STOP A SUBSCRIPTION?",
    answer:
      "Yes, you have complete authority to disable, pause, modify, or extend customer lines whenever necessary directly from your control panel.",
  },
  {
    question: "WHAT IF A STREAM STARTS BUFFERING?",
    answer: (
      <span>
        Our servers feature automatic load balancing and 99.9% uptime. You can also consult our guide on{" "}
        <Link href="/faq" className="text-[#38BDF8] hover:underline font-semibold">
          fixing client buffering
        </Link>
        .
      </span>
    ),
  },
  {
    question: "WHAT IF THE SERVER STOPS WORKING FOREVER?",
    answer:
      "We operate redundant multi-location server clusters across Europe and North America to guarantee continuous reliability, zero downtime, and backup streaming nodes.",
  },
  {
    question: "HOW TO CREATE A PANEL FOR A SUB RESELLER?",
    answer:
      "Inside your master panel, navigate to 'Sub-Reseller Management', create a new account username/password, and assign credit balance from your account.",
  },
];

export default function ResellerPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOrderPanel = (plan?: CreditPlan) => {
    const message = plan
      ? `Hello! I would like to order the TereaTV IPTV Reseller Panel with ${plan.credits} Credits for $${plan.price}.`
      : `Hello! I am interested in becoming a TereaTV IPTV Reseller and would like to request panel access.`;
    window.open(
      `https://wa.me/213552069874?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleFreeTrial = () => {
    const message = `Hello! I am interested in testing a TereaTV IPTV Reseller Panel free trial account.`;
    window.open(
      `https://wa.me/213552069874?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#040714] py-16 sm:py-24 bg-grid-pattern text-white">
      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[radial-gradient(circle,rgba(2,132,199,0.16)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* HERO SECTION */}
        <header className="relative mx-auto max-w-4xl text-center mb-16">
          <div className="badge-pill mb-4 inline-flex items-center gap-2">
            <span className="dot-blink" />
            IPTV Reseller Program
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white uppercase">
            <span className="block text-white">TereaTV IPTV Reseller Program:</span>
            <span className="mt-2 block bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
              Wholesale Credits &amp; Dedicated Panel
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Our IPTV reseller program empowers you to deliver high-quality streaming to your clients. Supply over{" "}
            <Link href="/channels" className="text-[#38BDF8] hover:underline font-semibold">
              +50,000 live channels
            </Link>{" "}
            and 200,000+ VODs under your own brand, compare with our public{" "}
            <Link href="/pricing" className="text-[#38BDF8] hover:underline font-semibold">
              consumer pricing plans
            </Link>
            , and enjoy dedicated 24/7 panel support.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handleFreeTrial}
              className="btn-primary-voltra px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
            >
              Request Free Panel Trial
            </button>
          </div>
        </header>

        {/* OUR RESELLER PLANS */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              <span className="block text-white">Our Exclusive</span>
              <span className="mt-1 block bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] bg-clip-text text-transparent">
                IPTV Reseller Plans
              </span>
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              We provide you with the best servers at the right wholesale price. Check our{" "}
              <Link href="/channels" className="text-[#38BDF8] hover:underline font-semibold">
                channel list
              </Link>{" "}
              and{" "}
              <Link href="/installation" className="text-[#22D3EE] hover:underline font-semibold">
                device setup guides
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch pt-2">
            {creditPlans.map((plan) => (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-3xl bg-[#0A0F24] p-6 shadow-xl transition-all duration-300 backdrop-blur-xl ${
                  plan.popular
                    ? "border-2 border-[#0284C7] shadow-[0_0_40px_rgba(2,132,199,0.3)] lg:scale-105 z-10"
                    : plan.bestValue
                    ? "border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.25)] z-10"
                    : "border border-white/10 hover:border-sky-500/40 hover:-translate-y-1"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0284C7] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                    Most Popular
                  </span>
                )}
                {plan.bestValue && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#0EA5E9] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-md">
                    Best Value
                  </span>
                )}

                <div className="text-center pt-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#38BDF8]">
                    PREMIUM IPTV
                  </span>
                  <h3 className="mt-1 text-2xl font-black text-white">
                    {plan.credits} IPTV Credits Panel
                  </h3>
                </div>

                <div className="my-5 rounded-2xl bg-[#040714] border border-white/10 py-4 text-center">
                  <span className="text-4xl font-black text-white">
                    ${plan.price}
                  </span>
                </div>

                <ul className="flex-grow space-y-3 border-t border-white/10 pt-4 text-xs font-semibold text-slate-300">
                  {planFeatures.map((feature) => (
                    <li className="flex items-center gap-2" key={feature}>
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-[#38BDF8]">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleOrderPanel(plan)}
                  className={`mt-6 w-full py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "btn-primary-voltra"
                      : "btn-secondary-voltra"
                  }`}
                >
                  Get A Panel
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* ADVANTAGES OF IPTV RESELLER */}
        <div className="mt-28">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              <span className="block text-white">Advantages of</span>
              <span className="mt-1 block bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] bg-clip-text text-transparent">
                TereaTV IPTV Reseller Program
              </span>
            </h2>
            <p className="mt-2 text-sm text-slate-400">Everything you need to successfully launch and manage your IPTV business.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card-hover flex flex-col items-center text-center p-6 rounded-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8] mb-5">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="mx-auto mt-28 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              <span className="block text-white">IPTV Reseller</span>
              <span className="mt-1 block bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="mt-2 text-sm text-slate-400">Got questions about our reseller panels? Here are answers to the most common queries.</p>
          </div>

          <div className="space-y-3">
            {resellerFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0F24] transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-bold text-white transition-colors hover:bg-white/5"
                  >
                    <h3 className="text-xs sm:text-sm tracking-wide uppercase font-extrabold flex items-center gap-3">
                      <span className="text-[#38BDF8]">▶</span>
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 shrink-0 text-[#38BDF8]" />
                    ) : (
                      <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 bg-[#040714] px-6 py-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => handleOrderPanel()}
              className="btn-primary-voltra px-10 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
            >
              Become Reseller Now
            </button>
          </div>
        </div>

        {/* TRUST BADGE */}
        <div className="mt-16 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>Official Xtream Codes Reseller Panel — 99.9% Uptime Guarantee</span>
        </div>
      </div>
    </section>
  );
}
