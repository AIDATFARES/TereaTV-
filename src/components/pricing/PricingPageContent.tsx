"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, CreditCard, Headphones, HelpCircle, MonitorSmartphone, ShieldCheck, Sparkles, Tv, Zap, Bitcoin, Wallet } from "lucide-react";

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
  { text: "4K, HD & SD Quality", included: true },
  { text: "+30,000 Live TV Channels", included: true },
  { text: "All Live Sports", included: true },
  { text: "+150,000 Movies & Series (VOD)", included: true },
  { text: "Anti-Freezing (No Buffering)", included: true },
  { text: "Up to 4 Days Catch-Up", included: true },
  { text: "TV Guide (EPG)", included: true },
  { text: "Free Pay-Per-View (PPV)", included: true },
  { text: "Built-in VPN Protection", included: true },
  { text: "Adult Channels (Optional)", included: true },
  { text: "3-Day Money-Back Guarantee", included: true },
  { text: "24/7 Technical Support", included: true },
];

const plans: Plan[] = [
  {
    id: "3-months",
    name: "3 Months",
    subtitle: "Perfect for trying out our premium service.",
    price: 35,
    durationLabel: "3 Months",
    period: "/ 3 months",
    saving: "Save 22%",
    features: defaultFeatures,
    buttonText: "SELECT PRO ➔",
  },
  {
    id: "12-months",
    name: "12 Months",
    subtitle: "The ultimate entertainment experience for a full year.",
    price: 69.99,
    oldPrice: 80,
    durationLabel: "12 Months",
    period: "/ year",
    saving: "Save 61%",
    popular: true,
    features: defaultFeatures,
    buttonText: "GET ULTIMATE PASS ➔",
  },
  {
    id: "6-months",
    name: "6 Months",
    subtitle: "A solid choice for half a year of uninterrupted joy.",
    price: 49.99,
    durationLabel: "6 Months",
    period: "/ 6 months",
    saving: "Save 44%",
    features: defaultFeatures,
    buttonText: "SELECT BASIC ➔",
  },
];

const includedFeatures = [
  { 
    icon: Tv, 
    title: "+50,000 Channels", 
    text: (
      <>
        Explore our comprehensive{" "}
        <Link href="/channels" className="text-[#38BDF8] hover:underline font-semibold">
          channels lineup
        </Link>{" "}
        including international sports, news, and entertainment.
      </>
    ) 
  },
  { 
    icon: MonitorSmartphone, 
    title: "200,000+ VODs", 
    text: (
      <>
        Enjoy +120,000 films and series from our regularly refreshed{" "}
        <Link href="/channels" className="text-[#38BDF8] hover:underline font-semibold">
          video-on-demand library
        </Link>
        .
      </>
    ) 
  },
  { 
    icon: Zap, 
    title: "Anti-freeze Technology", 
    text: (
      <>
        Optimized high-speed CDN servers deliver a buffer-free experience. Read our{" "}
        <Link href="/faq" className="text-[#38BDF8] hover:underline font-semibold">
          streaming stability guide
        </Link>
        .
      </>
    ) 
  },
  { 
    icon: Headphones, 
    title: "24/7 Support", 
    text: (
      <>
        The TereaTV support team is ready to assist on WhatsApp. Visit our{" "}
        <Link href="/contact" className="text-[#38BDF8] hover:underline font-semibold">
          support desk
        </Link>
        .
      </>
    ) 
  },
  { 
    icon: Sparkles, 
    title: "Fast Setup", 
    text: (
      <>
        Credentials are sent instantly after checkout. Follow our{" "}
        <Link href="/installation" className="text-[#38BDF8] hover:underline font-semibold">
          device installation guide
        </Link>{" "}
        to start watching.
      </>
    ) 
  },
  { 
    icon: CreditCard, 
    title: "TV Guide (EPG)", 
    text: (
      <>
        Track your favorite live broadcasts easily with full electronic program guides across all{" "}
        <Link href="/channels" className="text-[#38BDF8] hover:underline font-semibold">
          live TV channels
        </Link>
        .
      </>
    ) 
  },
];

const billingQuestions = [
  { question: "1. Which payment methods can I use?", answer: <>Available payment options are shown when you place your order. <Link className="font-semibold text-[#38BDF8] hover:underline" href="/contact">Contact TereaTV support</Link> if you need help before purchasing.</> },
  { question: "2. Is my payment protected?", answer: <>All transactions use 256-bit encrypted checkout. We also offer a 3-day guarantee under our <Link className="font-semibold text-[#38BDF8] hover:underline" href="/refund-policy">refund policy</Link>.</> },
  { question: "3. Will my subscription renew automatically?", answer: <>Renewal details are provided when you order. If you have any questions about your subscription period or renewal, <Link className="font-semibold text-[#38BDF8] hover:underline" href="/contact">contact support</Link> before your plan expires.</> },
  { question: "4. Can I change my plan or number of connections?", answer: <>Yes. <Link className="font-semibold text-[#38BDF8] hover:underline" href="/contact">Contact the support team</Link> with your order email and the plan or connection change you need, and they will advise on the available options.</> },
];

export default function PricingPageContent() {
  const [devices, setDevices] = useState(1);
  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the TereaTV ${plan.name} plan (${plan.durationLabel}) with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden bg-[#040714] py-16 sm:py-24 bg-grid-pattern">
      {/* Ambient Radial Lights */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[radial-gradient(circle,rgba(2,132,199,0.16)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-3xl text-center mb-14">
          <div className="badge-pill mb-4">
            <span className="dot-blink" /> TereaTV Plans
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
            <span className="block text-white">TereaTV IPTV Subscription</span>
            <span className="mt-2 block bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
              Plans &amp; Pricing
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
            Choose the TereaTV plan that fits you, with secure checkout, instant activation, and helpful 24/7 support.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-slate-400">
            Need help getting started? Visit our <Link className="font-bold text-[#38BDF8] hover:underline" href="/installation">installation guide</Link> or browse the <Link className="font-bold text-[#38BDF8] hover:underline" href="/channels">channel list</Link> before you order.
          </p>
        </header>

        {/* Device Connections Selector */}
        <div className="mx-auto mb-14 max-w-md" role="radiogroup" aria-label="Number of device connections">
          <p className="mb-3 text-center text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">
            Choose Your Connections
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
        <h2 className="sr-only">Select Your TereaTV IPTV Subscription Plan</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 items-stretch pt-2">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-3xl bg-[#0A0F24] p-8 text-left transition-all duration-300 backdrop-blur-xl ${
                plan.popular
                  ? "border-2 border-[#0284C7] shadow-[0_0_50px_rgba(2,132,199,0.25)] md:scale-105 z-10"
                  : "border border-white/10 hover:border-sky-500/40 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#06B6D4] px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                  🔥 MOST POPULAR
                </div>
              )}

              <div className="pb-6 border-b border-white/10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">
                  {plan.name}
                </span>
                <h3 className="text-3xl font-black text-white mt-1 mb-2 tracking-tight">{plan.name}</h3>
                <p className="text-xs text-slate-400 min-h-[36px] leading-relaxed">{plan.subtitle}</p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-5xl font-black tracking-tight text-white">${priceFor(plan)}</span>
                  <span className="text-sm font-semibold text-slate-400">{plan.period}</span>
                </div>

                <div className="min-h-[22px] mt-2 flex items-center gap-2">
                  {plan.saving && (
                    <span className="rounded-full bg-sky-500/20 text-[#38BDF8] border border-sky-500/30 px-2.5 py-0.5 text-xs font-bold">
                      {plan.saving}
                    </span>
                  )}
                  {plan.oldPrice && (
                    <span className="text-xs font-medium text-slate-500 line-through">
                      ${(plan.oldPrice * devices).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-8 flex-grow space-y-3.5">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-[#38BDF8]">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-500">
                        <X className="h-3 w-3 stroke-[2]" />
                      </span>
                    )}
                    <span className={`text-xs sm:text-sm font-medium ${feature.included ? "text-slate-300" : "text-slate-500"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => handleOrder(plan)}
                  className={`w-full py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all duration-300 transform active:scale-95 ${
                    plan.popular
                      ? "btn-primary-voltra shadow-[0_8px_24px_rgba(2,132,199,0.45)]"
                      : "btn-secondary-voltra"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Payment Methods & Guarantee */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-[#0A0F24] p-6 shadow-xl border border-white/10 border-l-4 border-l-[#0284C7]">
            <div>
              <p className="text-base sm:text-lg font-bold text-white">Secure Payments &amp; Instant Access</p>
              <p className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">Pay safely using Crypto, Credit Card, or PayPal. Your details are encrypted instantly.</p>
            </div>
            <div className="flex shrink-0 items-center gap-4 text-slate-400">
              <CreditCard className="h-6 w-6 text-sky-400" strokeWidth={1.5} />
              <Bitcoin className="h-6 w-6 text-amber-400" strokeWidth={1.5} />
              <Wallet className="h-6 w-6 text-cyan-400" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Included Features Section */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              What&apos;s Included With Your <span className="text-[#38BDF8]">TereaTV IPTV Subscription</span>
            </h2>
            <p className="mt-2 text-sm text-slate-400">Enjoy top-tier IPTV streaming features without additional surcharges.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map(({ icon: Icon, title, text }) => (
              <article className="glass-card-hover rounded-2xl p-6 text-left" key={title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base font-bold text-white">{title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Billing FAQ Section */}
        <section className="mx-auto mt-24 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Billing &amp; Subscription Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-slate-400">Common questions answered for our international subscribers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {billingQuestions.map((item) => (
              <div className="glass-card-hover flex flex-col rounded-2xl overflow-hidden p-6" key={item.question}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-[#38BDF8]">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.question}
                  </h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-11">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
          <ShieldCheck className="h-5 w-5 text-emerald-400" />
          <span><strong className="text-white">Secure ordering</strong> and friendly 24/7 TereaTV support.</span>
        </div>
      </div>
    </section>
  );
}
