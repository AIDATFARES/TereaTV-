import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | TereaTV",
  description: "Learn about the refund policy, eligibility, and process for TereaTV.",
  alternates: {
    canonical: "/refund-policy",
  },
};

const sections = [
  {
    title: "Our Commitment to You",
    content: [
      <>At TereaTV, we uphold the standard of our <Link className="font-bold text-[#00F0FF] hover:underline" href="/pricing">IPTV subscription plans</Link>. This policy specifies when refunds may be applicable, ensuring that we maintain a transparent and just process for every customer.</>,
    ],
  },
  {
    title: "Refund Eligibility",
    content: ["You could be entitled to a total or partial refund in the following cases:"],
    items: [
      "Technical Failures: Service is completely non-functional on your compatible device for 72+ consecutive hours due to a fault on our side.",
      "Duplicate Payments: Accidental duplicate charge for the same subscription period.",
      "Initial 7 Day Window for new customers: Request within 7 days of first purchase after attempting support-led troubleshooting.",
    ],
  },
  {
    title: "How to Request a Refund",
    content: ["To seek a refund, kindly follow these steps:"],
    items: [
      <>Connect with our support team using our <Link className="font-bold text-[#00F0FF] hover:underline" href="/contact">Contact page</Link>.</>,
      "Please use the subject: 'Refund Request'.",
      "Please provide your complete name, the email linked to your subscription, and the purpose of your inquiry.",
    ],
  },
  {
    title: "Sample Refund Request Message",
    content: [
      <>Contact: Send a message via our <Link className="font-bold text-[#00F0FF] hover:underline" href="/contact">Contact page</Link></>,
      "Message Title: Refund Request",
      "Hello,",
      "I am writing to ask for a refund regarding my IPTV subscription.",
      "My Name: [Your Full Name]",
      "My Email: [Your Subscription Email]",
      "Reason for Refund: [Concise explanation of your concern, for example, technical errors, billing duplicates, etc.]",
      "Thank you.",
    ],
  },
  {
    title: "What We Need to Process Your Refund",
    content: [],
    items: [
      "Account email used at checkout",
      "Order/transaction ID from payment provider",
      "Brief reason and steps already tried with support",
      "Device/app details (e.g., Firestick + IPTV Smarters)",
    ],
  },
  {
    title: "Processing Timeline",
    content: [],
    items: [
      "0–3 business days: Analysis executed by support team",
      "Same day after approval: The refund has been initiated, returning funds to your original payment method.",
      "5–10 business days: Funds manifest according to bank/card issuer.",
    ],
    after: "Expect to receive an email update at every step. Response times may increase on weekends or holidays.",
  },
  {
    title: "Exceptions (When Refunds Are Not Provided)",
    content: ["Refunds will be denied in these outlined cases:"],
    items: [
      <>You are discontent with the <Link className="font-bold text-[#00F0FF] hover:underline" href="/channels">channel list</Link> or provided content.</>,
      "Your connection speed is too slow or unstable to stream effectively.",
      "Your actions have breached our Terms of Service, including account sharing.",
      "Geo-blocking problems in your region are unfortunately outside of our influence and control.",
    ],
  },
  {
    title: "How to Avoid Refund Requests",
    content: [],
    items: [
      "Check Compatibility: Confirm your device/app supports M3U/Portal before purchase.",
      "Stable Internet: Use 30 Mbps+ and 5GHz Wi-Fi or Ethernet for 4K.",
      <>Use Setup Guides: Follow our step by step <Link className="font-bold text-[#00F0FF] hover:underline" href="/installation">Installation page</Link>.</>,
      <>Ask Support First: Most issues are solved in minutes—please <Link className="font-bold text-[#00F0FF] hover:underline" href="/contact">contact support</Link>.</>,
    ],
  },
];

export default function RefundPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
  return (
    <main className="min-h-screen bg-[#040714] text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full relative z-10 bg-grid-pattern overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(2,132,199,0.15)_0%,transparent_70%)]" />

      <article className="relative z-10">
        <header className="mb-14 text-center mx-auto max-w-3xl">
          <div className="badge-pill mb-4 inline-flex items-center gap-2">
            <span className="dot-blink" /> Legal Information
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight uppercase">
            <span className="block text-white">TereaTV IPTV Refund &amp; Money-Back</span>
            <span className="mt-2 block bg-gradient-to-r from-[#00F0FF] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
              Official Policy
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-slate-400">Last updated: {currentDate}</p>
        </header>

        <div className="rounded-3xl border border-cyan-500/20 bg-[#0A0F24]/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl space-y-10 text-slate-300 leading-relaxed text-sm sm:text-base">
          {sections.map((section, index) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">{index + 1}. {section.title}</h2>
              {section.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              {section.items && section.items.length > 0 && (
                <ul className="list-disc space-y-2 pl-6 marker:text-[#00F0FF]">
                  {section.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
              {section.after && <p>{section.after}</p>}
            </section>
          ))}
          <section className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">9. Contact Us</h2>
            <p>If you have any questions regarding our Refund Policy, please contact our <Link className="font-bold text-[#00F0FF] hover:underline" href="/contact">support team</Link>.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
