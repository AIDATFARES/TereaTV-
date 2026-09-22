import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "50,000+ Live Channels & VOD Lineup | TereaTV TV Guide",
  description:
    "Explore the complete TereaTV channel lineup. Watch live sports, international news, cinema networks & over 200,000 on-demand movies with full EPG TV guide.",
  alternates: {
    canonical: "/channels",
  },
  openGraph: {
    title: "50,000+ Live Channels & VOD Lineup | TereaTV TV Guide",
    description:
      "Explore the complete TereaTV channel lineup. Watch live sports, international news, cinema networks & over 200,000 on-demand movies with full EPG TV guide.",
    url: "https://www.tereatv.top/channels",
  },
  twitter: {
    card: "summary_large_image",
    title: "50,000+ Live Channels & VOD Lineup | TereaTV TV Guide",
    description:
      "Explore the complete TereaTV channel lineup. Watch live sports, international news, cinema networks & over 200,000 on-demand movies with full EPG TV guide.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
