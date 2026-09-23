import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TereaTV FAQ: Everything You Need to Know About Our Service",
  description:
    "Got questions about TereaTV? Find clear answers on device compatibility, 4K speeds, channel lineups, multi-room streaming, payment methods, and free trials.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "TereaTV FAQ: Everything You Need to Know About Our Service",
    description:
      "Got questions about TereaTV? Find clear answers on device compatibility, 4K speeds, channel lineups, multi-room streaming, payment methods, and free trials.",
    url: "https://www.tereatv.top/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "TereaTV FAQ: Everything You Need to Know About Our Service",
    description:
      "Got questions about TereaTV? Find clear answers on device compatibility, 4K speeds, channel lineups, multi-room streaming, payment methods, and free trials.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
