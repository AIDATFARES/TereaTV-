import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "24/7 Customer Support — WhatsApp & Live Help Desk | TereaTV",
  description:
    "Need fast assistance with your streaming setup? Contact the TereaTV support team 24/7 on WhatsApp or email. Fast technical help in under 5 minutes!",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "24/7 Customer Support — WhatsApp & Live Help Desk | TereaTV",
    description:
      "Need fast assistance with your streaming setup? Contact the TereaTV support team 24/7 on WhatsApp or email. Fast technical help in under 5 minutes!",
    url: "https://www.tereatv.top/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Customer Support — WhatsApp & Live Help Desk | TereaTV",
    description:
      "Need fast assistance with your streaming setup? Contact the TereaTV support team 24/7 on WhatsApp or email. Fast technical help in under 5 minutes!",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
