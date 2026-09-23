import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TereaTV Channels: 50,000+ Live 4K Channels & Full EPG Guide",
  description:
    "Explore 50,000+ live TV channels & 200,000 VOD movies from 160+ countries. Stream live sports, cinema, news & kids networks in 4K with instant switching!",
  alternates: {
    canonical: "/channels",
  },
  openGraph: {
    title: "TereaTV Channels: 50,000+ Live 4K Channels & Full EPG Guide",
    description:
      "Explore 50,000+ live TV channels & 200,000 VOD movies from 160+ countries. Stream live sports, cinema, news & kids networks in 4K with instant switching!",
    url: "https://www.tereatv.top/channels",
  },
  twitter: {
    card: "summary_large_image",
    title: "TereaTV Channels: 50,000+ Live 4K Channels & Full EPG Guide",
    description:
      "Explore 50,000+ live TV channels & 200,000 VOD movies from 160+ countries. Stream live sports, cinema, news & kids networks in 4K with instant switching!",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
