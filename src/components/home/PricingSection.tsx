"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, CreditCard, Bitcoin, Wallet, ShieldCheck } from "lucide-react";

type PlanFeature = {
  text: string;
  included: boolean;
};

type Plan = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  durationLabel: string;
  period: string;
  saving?: string;
  popular?: boolean;
  features: PlanFeature[];
  buttonText: string;
};

const defaultFeatures: PlanFeature[] = [
  { text: "4K, HD & SD Ultra Quality", included: true },
  { text: "+50,000 Live TV Channels", included: true },
  { text: "All Live Sports & PPV Events", included: true },
  { text: "+150,000 Movies & Series (VOD)", included: true },
  { text: "Anti-Freezing (Zero Buffering)", included: true },
  { text: "Up to 4 Days Catch-Up", included: true },
  { text: "Electronic TV Guide (EPG)", included: true },
  { text: "Free Pay-Per-View Included", included: true },
  { text: "Built-in Anti-Freeze Protection", included: true },
  { text: "Adult Channels (Optional)", included: true },
  { text: "3-Day Money-Back Guarantee", included: true },
  { text: "24/7 Dedicated Technical Support", included: true },
];

const plans: Plan[] = [
  {
    id: "3-months",
    name: "3 Months",
    subtitle: "Starter 3-Month IPTV Pass",
    price: 35,
    durationLabel: "3 Months",
    period: "/ 3 months",
    saving: "Save 22%",
    features: defaultFeatures,
    buttonText: "BUY NOW ➔",
  },
  {
    id: "12-months",
    name: "12 Months",
    subtitle: "Ultimate 12-Month IPTV Pass",
    price: 69.99,
    oldPrice: 80,
    durationLabel: "12 Months",
    period: "/ year",
    saving: "Save 61%",
    popular: true,
    features: defaultFeatures,
    buttonText: "BUY NOW ➔",
  },
  {
    id: "6-months",
    name: "6 Months",
    subtitle: "Popular 6-Month IPTV Pass",
    price: 49.99,
    durationLabel: "6 Months",
    period: "/ 6 months",
    saving: "Save 44%",
    features: defaultFeatures,
    buttonText: "BUY NOW ➔",
  },
];

export default function PricingSection() {
  const [devices, setDevices] = useState(1);

  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the TereaTV ${plan.name} plan (${plan.durationLabel}) with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="pricing" className="py-24 bg-[#040714] text-white relative z-10 border-b border-white/5 bg-grid-pattern overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-sky-900/10 rounded-full blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center mb-12">
          <div className="badge-pill mb-4">
            <span className="dot-blink" /> TereaTV IPTV Subscription Plans
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.1]">
            Choose Your <br />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
              TereaTV IPTV Plan
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium">
            Affordable 4K IPTV Streaming with Instant WhatsApp Delivery
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Secure unlimited access to +50,000 live TV channels, +120,000 movies &amp; series, and worldwide sports in 4K. No contracts, zero hidden fees. Browse our{" "}
            <Link href="/channels" className="text-[#38BDF8] hover:underline font-semibold">IPTV channel catalog</Link> or view our{" "}
            <Link href="/installation" className="text-[#38BDF8] hover:underline font-semibold">device setup guide</Link>.
          </p>
        </header>

        {/* Device Connections Selector */}
        <div className="mx-auto mb-14 max-w-md" role="radiogroup" aria-label="Number of device connections">
          <p className="mb-3 text-center text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">
            Select Number of Connections
          </p>
          <div className="grid grid-cols-3 rounded-full border border-white/10 bg-[#0A0F24] p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  aria-checked={selected}
                  className={`rounded-full py-2.5 text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                    selected
                      ? "bg-gradient-to-r from-[#0284C7] to-[#06B6D4] text-white shadow-[0_4px_16px_rgba(2,132,199,0.5)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                  key={count}
                  onClick={() => setDevices(count)}
                  role="radio"
                  type="button"
                >
                  {count} Device{count > 1 ? "s" : ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-3xl bg-[#0A0F24] p-8 text-left transition-all duration-300 backdrop-blur-xl ${
                plan.popular
                  ? "border-2 border-[#0284C7] shadow-[0_0_50px_rgba(2,132,199,0.25)] md:scale-105 z-10"
                  : "border border-white/10 hover:border-sky-500/40 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#06B6D4] px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                  🔥 MOST POPULAR
                </div>
              )}

              {/* Card Header */}
              <div className="pb-6 border-b border-white/10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">
                  {plan.subtitle}
                </span>
                <h3 className="text-3xl font-black text-white mt-1 mb-2 tracking-tight">{plan.name}</h3>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-5xl font-black tracking-tight text-white">${priceFor(plan)}</span>
                  <span className="text-sm font-semibold text-slate-400">{plan.period}</span>
                </div>

                <div className="min-h-[22px] mt-2 flex items-center gap-2 text-xs">
                  {plan.saving && (
                    <span className="rounded-full bg-sky-500/20 text-[#38BDF8] border border-sky-500/30 px-2 py-0.5 font-bold">
                      {plan.saving}
                    </span>
                  )}
                  {plan.oldPrice && (
                    <span className="text-slate-500 line-through font-semibold">
                      ${(plan.oldPrice * devices).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="mt-8 flex-grow space-y-3.5">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                    {feature.included ? (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-[#38BDF8]">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </span>
                    ) : (
                      <X className="h-4 w-4 shrink-0 text-slate-600" />
                    )}
                    <span className={feature.included ? "text-slate-200 font-medium" : "text-slate-500"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-10 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => handleOrder(plan)}
                  className={`w-full py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-full transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#06B6D4] text-white shadow-[0_8px_30px_rgba(2,132,199,0.5)] hover:shadow-[0_12px_40px_rgba(2,132,199,0.7)] hover:scale-[1.02] animate-button-pulse"
                      : "bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-sky-400/50 hover:text-[#38BDF8]"
                  }`}
                >
                  {plan.buttonText}
                </button>
                <p className="mt-3 text-center text-[11px] font-semibold text-slate-500">
                  ⚡ Instant WhatsApp Activation
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Payment Methods & Guarantee */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <p className="text-sm sm:text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                <ShieldCheck className="h-5 w-5 text-[#00F0FF]" />
                Secure Encrypted Payments &amp; Instant Access
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Pay safely using Credit Card, PayPal, Bitcoin, or USDT. Zero hidden fees.
              </p>
            </div>

            <div className="flex items-center gap-5 text-slate-400">
              <CreditCard className="h-7 w-7 hover:text-[#38BDF8] transition-colors" />
              <Bitcoin className="h-7 w-7 hover:text-[#38BDF8] transition-colors" />
              <Wallet className="h-7 w-7 hover:text-[#38BDF8] transition-colors" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
