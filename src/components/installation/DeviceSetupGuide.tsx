"use client";

import { Apple, Box, HelpCircle, Monitor, Satellite, Smartphone, Tv } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type DeviceItem = {
  id: string;
  label: string;
  icon: typeof Monitor;
  title: string;
  app: string;
  note?: React.ReactNode;
};

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const devices: DeviceItem[] = [
  { 
    id: "smart-tv", 
    label: "Smart TV", 
    icon: Monitor, 
    title: "Smart TV Setup (Samsung, LG, Sony, etc.)", 
    app: "Smart IPTV or IPTV Smarters", 
    note: (
      <span>
        Samsung TVs commonly use Smart IPTV, while LG TVs can use IPTV Smarters or SS IPTV. See our guide on the{" "}
        <Link href="/installation" className="text-[#38BDF8] hover:underline font-semibold">
          best IPTV players for Smart TVs
        </Link>
        .
      </span>
    ) 
  },
  { 
    id: "firestick", 
    label: "Firestick", 
    icon: Tv, 
    title: "Firestick Setup", 
    app: "IPTV Smarters Pro or TiviMate", 
    note: (
      <span>
        Install your preferred IPTV player from the Amazon Appstore, then sign in with the details from your welcome message.
      </span>
    ) 
  },
  { 
    id: "android", 
    label: "Android", 
    icon: Smartphone, 
    title: "Android Setup", 
    app: "IPTV Smarters Pro or TiviMate", 
    note: (
      <span>
        Download your player from Google Play and use the playlist details from your{" "}
        <Link href="/pricing" className="text-[#38BDF8] hover:underline font-semibold">
          TereaTV subscription
        </Link>{" "}
        to sign in.
      </span>
    ) 
  },
  { 
    id: "ios", 
    label: "iOS", 
    icon: Apple, 
    title: "iPhone & iPad Setup", 
    app: "IPTV Smarters Player", 
    note: "Install a compatible player from the App Store and enter the credentials from your welcome email." 
  },
  { 
    id: "mag", 
    label: "MAG Box", 
    icon: Box, 
    title: "MAG Box Setup", 
    app: "Portal URL", 
    note: (
      <span>
        Send your MAG device MAC address to our{" "}
        <Link href="/contact" className="text-[#38BDF8] hover:underline font-semibold">
          support team
        </Link>{" "}
        so we can activate your portal before setup.
      </span>
    ) 
  },
  { 
    id: "enigma", 
    label: "Enigma2", 
    icon: Satellite, 
    title: "Enigma2 Setup", 
    app: "XtreamTV or E-Channelizer", 
    note: "Use a compatible Enigma2 plugin and add the playlist details supplied with your subscription." 
  },
];

const faqs: FAQItem[] = [
  { 
    question: "1. How do I install IPTV on a Smart TV?", 
    answer: (
      <span>
        Install a compatible player such as Smart IPTV or IPTV Smarters from your TV&apos;s app store, then add the M3U URL or Xtream credentials from your welcome email.
      </span>
    )
  },
  { 
    question: "2. Where do I find my M3U URL?", 
    answer: (
      <span>
        Your M3U URL is included in the welcome message sent after activation of your{" "}
        <Link href="/pricing" className="text-[#38BDF8] hover:underline font-semibold">
          IPTV subscription
        </Link>
        .{" "}
        <Link href="/contact" className="text-[#22D3EE] hover:underline font-semibold">
          Contact support
        </Link>{" "}
        if you need it resent.
      </span>
    )
  },
  { 
    question: "3. How can I reduce buffering?", 
    answer: (
      <span>
        Use a stable internet connection, restart your device and router, and select an appropriate stream buffer setting. Read our complete guide to{" "}
        <Link href="/faq" className="text-[#38BDF8] hover:underline font-semibold">
          fixing IPTV buffering
        </Link>
        .
      </span>
    )
  },
  { 
    question: "4. How do I set up TereaTV using Xtream Codes API?", 
    answer: "Choose Xtream Codes API in your player and enter the server URL, username, and password from your welcome email." 
  },
  { 
    question: "5. Can I connect using a MAC address (Portal URL)?", 
    answer: (
      <span>
        Yes. MAG and compatible portal devices can be activated using their MAC address. Message our{" "}
        <Link href="/contact" className="text-[#38BDF8] hover:underline font-semibold">
          support team on WhatsApp
        </Link>{" "}
        for instant portal setup.
      </span>
    )
  },
];

export default function DeviceSetupGuide() {
  const [activeDevice, setActiveDevice] = useState("smart-tv");
  const device = devices.find((item) => item.id === activeDevice) ?? devices[0];
  const DeviceIcon = device.icon;

  return (
    <section className="mb-16 md:mb-24">
      <header className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">Device Setup Instructions</h2>
        <p className="mt-2 text-sm text-slate-400">Select your device below to receive clear setup instructions.</p>
      </header>

      {/* Device Selection Pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2.5">
        {devices.map((item) => {
          const Icon = item.icon;
          const active = item.id === activeDevice;
          return (
            <button 
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 ${
                active 
                  ? "bg-gradient-to-r from-[#0284C7] to-[#06B6D4] text-white shadow-lg shadow-sky-500/30 border border-sky-400/40" 
                  : "border border-white/10 bg-[#0A0F24] text-slate-400 hover:border-sky-500/40 hover:text-white"
              }`} 
              key={item.id} 
              onClick={() => setActiveDevice(item.id)} 
              type="button"
            >
              <Icon className="h-4 w-4" />{item.label}
            </button>
          );
        })}
      </div>

      {/* Active Device Guide Card */}
      <article className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#0A0F24] p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
        
        {/* Device Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-b border-white/10 pb-6 mb-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8] shrink-0">
            <DeviceIcon className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white sm:text-3xl tracking-tight">{device.title}</h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">Follow these steps to configure your {device.label} for TereaTV.</p>
          </div>
        </div>
        
        {/* Important Note */}
        {device.note && (
          <div className="mb-8 rounded-2xl border border-sky-500/30 bg-sky-950/20 p-5 flex items-start gap-4">
            <HelpCircle className="h-5 w-5 text-[#38BDF8] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-1">Important Note</p>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">{device.note}</p>
            </div>
          </div>
        )}

        {/* Steps Grid */}
        <div className="space-y-4">
          <SetupStep 
            number="1" 
            title="Install IPTV App"
          >
            Navigate to your device&apos;s app store, search for <strong className="text-white">{device.app}</strong>, and install the application directly to your device.
          </SetupStep>
          
          <SetupStep 
            number="2" 
            title="Configure Your Playlist"
          >
            Launch the IPTV app, open its settings menu, and enter the M3U playlist details or Xtream Codes credentials supplied in your welcome email.
            <div className="mt-3">
              <CodeLine label="M3U URL" text="Use the secure playlist URL from your welcome email" />
            </div>
          </SetupStep>
          
          <SetupStep 
            number="3" 
            title="Start Watching"
          >
            Save your settings and allow the app a few moments to load the channels. You now have immediate access to live channels, movies and TV shows in stunning 4K quality!
          </SetupStep>
        </div>
      </article>

      {/* Installation FAQ */}
      <div className="mx-auto mt-20 max-w-4xl">
        <h2 className="mb-10 text-center text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">Installation FAQ</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <div className="glass-card-hover flex flex-col rounded-2xl overflow-hidden p-6" key={faq.question}>
              <div className="flex items-start gap-3 mb-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-[#38BDF8]">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {faq.question}
                </h3>
              </div>
              <div className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-11">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SetupStep({ children, number, title }: { children: React.ReactNode; number: string; title: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 bg-[#040714] border border-white/10 p-6 rounded-2xl transition-colors hover:border-sky-500/40">
      <div className="flex flex-1 gap-4 items-start">
         <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#0284C7] to-[#06B6D4] text-xs font-black text-white shadow-md">
           {number}
         </span>
         <div className="flex-1">
           <h4 className="text-base sm:text-lg font-bold text-white">{title}</h4>
           <div className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
             {children}
           </div>
         </div>
      </div>
    </div>
  );
}

function CodeLine({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl bg-[#0A0F24] border border-white/10 px-4 py-2.5 font-mono text-xs text-slate-300 break-all flex items-center gap-2">
      <span className="font-bold text-[#38BDF8]">{label}:</span> 
      <span>{text}</span>
    </div>
  );
}
