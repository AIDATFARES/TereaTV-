import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Disclaimer & DMCA | TereaTV",
  description: "Legal Disclaimer and DMCA policy for TereaTV.",
  alternates: {
    canonical: "/dmca",
  },
};

const sections = [
  {
    title: "No Legal Advice",
    content: [
      <>Nothing presented on this website or in our communications serves as legal or compliance counsel. If you have questions about IPTV legality or terms in your jurisdiction, consult a qualified attorney or explore our <Link className="font-bold text-[#38BDF8] hover:underline" href="/faq">frequently asked questions</Link>.</>,
    ],
  },
  {
    title: "Content Ownership and Hosting",
    content: [
      "TereaTV does not possess, manage, upload, store, or distribute copyrighted materials. All streams available via your account are sourced from external parties on the public internet. Mentions of channels, logos, or trademarks are solely for identification purposes and are owned by their respective entities.",
    ],
  },
  {
    title: "Availability and Service Changes",
    content: [
      <>Channel and VOD options may vary in availability, quality (including 4K/FHD/HD), features, plans, and <Link className="font-bold text-[#38BDF8] hover:underline" href="/pricing">pricing</Link>, and can be modified or removed by region without prior notification. We do not assure the availability of any particular <Link className="font-bold text-[#38BDF8] hover:underline" href="/channels">channel</Link>, event, or title.</>,
    ],
  },
  {
    title: "User Responsibility and Compliance",
    content: [
      "You are entirely accountable for your account usage and for following all relevant local laws and regulations. Avoid any actions with the service that could infringe on third-party rights. If you are uncertain about the legality of your usage, obtain independent legal counsel prior to proceeding.",
    ],
  },
  {
    title: "Third‑Party Links and Services",
    content: [
      "Our site could have links to third-party websites, applications, or services. We do not oversee and are not responsible for the content, policies, or practices of these third-party entities. Utilizing third-party services is at your own risk.",
    ],
  },
  {
    title: "No Warranties",
    content: [
      "THE SERVICE AND WEBSITE ARE OFFERED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. THIS INCLUDES, BUT IS NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON‑INFRINGEMENT. We do not guarantee uninterrupted, error-free, or secure operation.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "TereaTV, its owners, affiliates, employees, and agents shall not be liable to the fullest extent permitted by law for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of data, profits, or goodwill connected to your use of the site or service.",
    ],
  },
  {
    title: "Indemnification",
    content: [
      "You agree to defend, indemnify, and shield TereaTV from any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) related to your use of the service or any infringement of this disclaimer or applicable law.",
    ],
  },
  {
    title: "DMCA Takedown",
    content: [
      "In the event that you are a copyright owner or an agent and believe that content reachable through our service infringes your copyright, send a notice with the following information:",
    ],
    items: [
      "Identification of the work claimed to be infringed.",
      "Specify the exact location, like a URL or channel name, of the material you assert is infringing.",
      "We need your name, organization (if relevant), address, phone number, and email.",
      "You need to provide a statement affirming your honest belief that the disputed usage is not sanctioned by the copyright holder, their agent, or legal regulations.",
      "A perjury-penalized statement indicating that the information in the notice is accurate and that you are either the copyright owner or are authorized to represent the owner's interests.",
      "A valid copyright claim necessitates a physical or electronic signature from the owner or their representative.",
    ],
    after: "Submit DMCA notices: Access our Contact form. Valid notifications will be examined, and actions executed quickly.",
  },
  {
    title: "Changes to This Disclaimer",
    content: [
      "This disclaimer might be updated from time to time. The 'Last updated' date above shows the most recent change. Continued use of this site or service after changes indicates your acceptance of the revised terms.",
    ],
  },
];

export default function DmcaPage() {
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
            <span className="block text-white">TereaTV IPTV Legal Disclaimer</span>
            <span className="mt-2 block bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#00F0FF] bg-clip-text text-transparent">
              &amp; DMCA Official Notice
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-slate-400">Last updated: {currentDate}</p>
        </header>

        <div className="rounded-3xl border border-white/10 bg-[#0A0F24] p-8 sm:p-12 shadow-2xl backdrop-blur-xl space-y-10 text-slate-300 leading-relaxed text-sm sm:text-base">
          <div className="space-y-4">
            <p>Content featured on this website is meant for general informational use and does not serve as legal advice. By engaging with our site or services, you agree to this disclaimer.</p>
            <div className="rounded-2xl border border-sky-500/30 bg-sky-950/20 p-5 text-xs sm:text-sm text-slate-200">
              <strong className="text-white">Important:</strong> TereaTV delivers an intuitive IPTV service interface alongside account provisioning. We do not host, upload, store, or archive any audiovisual content. The details on this site are provided &apos;as is&apos; for general guidance, not legal counsel.
            </div>
          </div>

          {sections.map((section, index) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">{index + 1}. {section.title}</h2>
              {section.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              {section.items && section.items.length > 0 && (
                <ul className="list-disc space-y-2 pl-6 marker:text-[#38BDF8]">
                  {section.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
              {section.after && <p>{section.after}</p>}
            </section>
          ))}
          
          <section className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">11. Contact</h2>
            <p>For any inquiries, refer to our Terms of Service and <Link className="font-bold text-[#38BDF8] hover:underline" href="/privacy-policy">Privacy Policy</Link>, or contact <Link className="font-bold text-[#38BDF8] hover:underline" href="/contact">support</Link>.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
