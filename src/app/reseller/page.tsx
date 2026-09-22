import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata = {
  title: "IPTV Reseller Panel & Wholesale Credits | TereaTV",
  description:
    "Start a profitable streaming business with TereaTV. White-label reseller panel, wholesale credits, instant sub-accounts & 24/7 dedicated support.",
  alternates: {
    canonical: "/reseller",
  },
  openGraph: {
    title: "IPTV Reseller Panel & Wholesale Credits | TereaTV",
    description:
      "Start a profitable streaming business with TereaTV. White-label reseller panel, wholesale credits, instant sub-accounts & 24/7 dedicated support.",
    url: "https://www.tereatv.top/reseller",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Reseller Panel & Wholesale Credits | TereaTV",
    description:
      "Start a profitable streaming business with TereaTV. White-label reseller panel, wholesale credits, instant sub-accounts & 24/7 dedicated support.",
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4">
      <ResellerPageContent />
    </main>
  );
}
