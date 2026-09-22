import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | TereaTV",
  description: "Learn how TereaTV collects, uses, and protects personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    title: "1. Data We Collect",
    content: [
      <>We collect personal data that you voluntarily provide when you subscribe to our IPTV service, request information about our products or services, or <Link className="font-bold text-[#00F0FF] hover:underline" href="/contact">contact us</Link>. The personal data we collect may include the following:</>,
    ],
    items: [
      "Contact information: Your email address, which we use for account creation and communication.",
      "Payment data: Information required to process a purchase, such as your payment method. Payment details are processed and stored securely by our payment processor. We recommend reviewing that processor's privacy policy.",
      "Device and connection information: When you access our service, we may automatically collect your IP address and device details, including device type and operating system. This information helps us maintain service performance and security.",
    ],
  },
  {
    title: "2. How We Use Your Data",
    content: ["We use the information we collect to:"],
    items: [
      "Provide and manage your account, including keeping your subscription active.",
      "Process transactions and bill you for the services you purchase.",
      "Send administrative information, including account notices, service updates, and policy changes.",
      "Protect our services by helping prevent unauthorized access, fraud, and security threats such as DDoS attacks.",
    ],
  },
  {
    title: "3. Legal Bases for Processing",
    content: ["We process your personal information using one or more of the following legal bases:"],
    items: [
      "Consent: You have given us clear permission to use your personal information for a specific purpose.",
      "Legitimate interests: Processing is necessary for legitimate business purposes, such as delivering our services and preventing fraudulent activity.",
      "Performance of a contract: Processing is necessary to provide the services covered by our agreement with you.",
    ],
  },
  {
    title: "4. Data Retention",
    content: ["We retain personal information only for as long as necessary to fulfil the purposes described in this policy, unless a longer retention period is required or permitted by law for tax, accounting, or other legal obligations."],
  },
  {
    title: "5. Cookies & Tracking Technologies",
    content: ["We may use cookies and similar technologies to collect or store information. These are primarily functional cookies that are essential for the website and client area to operate effectively. We do not use intrusive advertising tracking cookies."],
  },
  {
    title: "6. Third-Party Services",
    content: ["We may share data with third-party vendors, service providers, or agents that perform services for us or on our behalf and need the information to carry out their duties. These may include:"],
    items: [
      "Payment gateways, which process payments securely.",
      "Analytics providers, such as Google Analytics, which help us improve our services. Information shared with these providers is typically anonymized and aggregated.",
    ],
  },
  {
    title: "7. Data Security",
    content: ["We use appropriate technical and organizational security measures to protect the confidentiality of the personal information we process. However, no internet transmission or storage system can be guaranteed to be completely secure."],
  },
  {
    title: "8. Your Data Protection Rights",
    content: ["Your rights may depend on your location. Subject to applicable law, you may have the right to:"],
    items: [
      "Access and request copies of your personal information.",
      "Request correction of inaccurate or incomplete information.",
      "Request erasure of your personal information in certain circumstances.",
      "Opt out of marketing and promotional communications at any time.",
    ],
    after: <>To exercise any of these rights, please <Link className="font-bold text-[#00F0FF] hover:underline" href="/contact">contact our support team</Link>.</>,
  },
  {
    title: "9. Children's Privacy",
    content: ["Our services are not intended for anyone under the age of 18. We do not knowingly collect personal information from children under 18."],
  },
];

export default function PrivacyPolicyPage() {
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
            <span className="block text-white">TereaTV IPTV Privacy &amp; Data</span>
            <span className="mt-2 block bg-gradient-to-r from-[#00F0FF] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
              Protection Policy
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-slate-400">Last updated: 2026</p>
        </header>

        <div className="rounded-3xl border border-cyan-500/20 bg-[#0A0F24]/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl space-y-10 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="border-b border-white/10 pb-6 text-base text-slate-200 font-medium">
            Welcome to TereaTV. We are committed to protecting your personal information and respecting your privacy. If you have questions or concerns about this policy or our data practices, please <Link className="font-bold text-[#00F0FF] hover:underline" href="/contact">contact our support team</Link>.
          </p>
          {sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">{section.title}</h2>
              {section.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              {section.items && (
                <ul className="list-disc space-y-2 pl-6 marker:text-[#00F0FF]">
                  {section.items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              )}
              {section.after && <p>{section.after}</p>}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
