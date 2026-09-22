import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "IPTV Subscription Plans & Pricing from $4.20/mo | TereaTV",
  description:
    "Choose the perfect streaming plan with TereaTV. Access 50,000+ live channels, VIP 4K sports & 200K movies. Instant automated setup with a 3-day guarantee.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "IPTV Subscription Plans & Pricing from $4.20/mo | TereaTV",
    description:
      "Choose the perfect streaming plan with TereaTV. Access 50,000+ live channels, VIP 4K sports & 200K movies. Instant automated setup with a 3-day guarantee.",
    url: "https://www.tereatv.top/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Subscription Plans & Pricing from $4.20/mo | TereaTV",
    description:
      "Choose the perfect streaming plan with TereaTV. Access 50,000+ live channels, VIP 4K sports & 200K movies. Instant automated setup with a 3-day guarantee.",
  },
};

export default function PricingPage() {
  return (
    <main className="flex-grow pt-4">
      <PricingPageContent />
    </main>
  );
}
