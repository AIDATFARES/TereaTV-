import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata = {
  title: "TereaTV Reseller Panel: Start Your Profitable IPTV Business",
  description:
    "Earn high profits with TereaTV's white-label IPTV reseller panel. Wholesale credits, instant sub-account provisioning, 99.9% uptime & 24/7 dedicated support.",
  alternates: {
    canonical: "/reseller",
  },
  openGraph: {
    title: "TereaTV Reseller Panel: Start Your Profitable IPTV Business",
    description:
      "Earn high profits with TereaTV's white-label IPTV reseller panel. Wholesale credits, instant sub-account provisioning, 99.9% uptime & 24/7 dedicated support.",
    url: "https://www.tereatv.top/reseller",
  },
  twitter: {
    card: "summary_large_image",
    title: "TereaTV Reseller Panel: Start Your Profitable IPTV Business",
    description:
      "Earn high profits with TereaTV's white-label IPTV reseller panel. Wholesale credits, instant sub-account provisioning, 99.9% uptime & 24/7 dedicated support.",
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4">
      <ResellerPageContent />
    </main>
  );
}
