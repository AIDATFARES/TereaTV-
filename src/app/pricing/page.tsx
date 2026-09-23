import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "TereaTV Pricing: Best IPTV Subscription Plans from $4.20/mo",
  description:
    "Choose affordable 4K IPTV subscription plans with instant WhatsApp activation. 50K+ channels, live sports, 200K VOD, multi-screen & 3-day money-back guarantee!",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "TereaTV Pricing: Best IPTV Subscription Plans from $4.20/mo",
    description:
      "Choose affordable 4K IPTV subscription plans with instant WhatsApp activation. 50K+ channels, live sports, 200K VOD, multi-screen & 3-day money-back guarantee!",
    url: "https://www.tereatv.top/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "TereaTV Pricing: Best IPTV Subscription Plans from $4.20/mo",
    description:
      "Choose affordable 4K IPTV subscription plans with instant WhatsApp activation. 50K+ channels, live sports, 200K VOD, multi-screen & 3-day money-back guarantee!",
  },
};

export default function PricingPage() {
  return (
    <main className="flex-grow pt-4">
      <PricingPageContent />
    </main>
  );
}
