import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TereaTV Blog: Pro IPTV Guides, Tutorials & 4K Streaming Tips",
  description:
    "Master IPTV streaming with expert guides from TereaTV. Learn how to stop buffering, calibrate lip-sync audio, optimize 4K video, and choose the best hardware.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "TereaTV Blog: Pro IPTV Guides, Tutorials & 4K Streaming Tips",
    description:
      "Master IPTV streaming with expert guides from TereaTV. Learn how to stop buffering, calibrate lip-sync audio, optimize 4K video, and choose the best hardware.",
    url: "https://www.tereatv.top/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "TereaTV Blog: Pro IPTV Guides, Tutorials & 4K Streaming Tips",
    description:
      "Master IPTV streaming with expert guides from TereaTV. Learn how to stop buffering, calibrate lip-sync audio, optimize 4K video, and choose the best hardware.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
