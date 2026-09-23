import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TereaTV Support: 24/7 Fast WhatsApp Help & Technical Desk",
  description:
    "Need immediate help with your IPTV setup? Contact TereaTV customer support 24/7 on WhatsApp or email. Fast technical assistance in under 5 minutes guaranteed!",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "TereaTV Support: 24/7 Fast WhatsApp Help & Technical Desk",
    description:
      "Need immediate help with your IPTV setup? Contact TereaTV customer support 24/7 on WhatsApp or email. Fast technical assistance in under 5 minutes guaranteed!",
    url: "https://www.tereatv.top/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "TereaTV Support: 24/7 Fast WhatsApp Help & Technical Desk",
    description:
      "Need immediate help with your IPTV setup? Contact TereaTV customer support 24/7 on WhatsApp or email. Fast technical assistance in under 5 minutes guaranteed!",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
