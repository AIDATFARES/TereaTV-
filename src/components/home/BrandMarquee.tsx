import Image from "next/image";

interface BrandMarqueeProps {
  imagesFolder?: string;
  images?: string[];
  cardClassName?: string;
  imageClassName?: string;
}

function getAccessibleImageDetails(folder: string, filename: string) {
  const cleanName = filename
    .replace(/\.[^/.]+$/, "")
    .replace(/^\d+[-_]?/, "")
    .replace(/[-_]/g, " ")
    .trim();

  if (folder === "devices") {
    const formattedDevice = cleanName
      ? cleanName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
      : "Streaming Device";
    return {
      alt: `TereaTV Compatible Device: ${formattedDevice}`,
      title: `Watch TereaTV on ${formattedDevice}`,
    };
  }

  const formattedChannel = cleanName && isNaN(Number(cleanName))
    ? cleanName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "Live Sports & Entertainment Network";

  return {
    alt: `TereaTV 4K Live Broadcast Channel: ${formattedChannel}`,
    title: `Stream ${formattedChannel} on TereaTV`,
  };
}

export default function BrandMarquee({
  imagesFolder = "brands",
  images,
  cardClassName,
  imageClassName
}: BrandMarqueeProps) {
  const defaultBrands = [
    "0.webp", "1.webp", "10-National-Geographic-Channel.webp", "10.webp", "11.webp",
    "13.webp", "14.webp", "15.webp", "16 (1).webp", "17.webp", "2.webp", "20-disney.webp",
    "21.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp"
  ];

  const brandList = images || defaultBrands;
  const repeatList = brandList.length < 10 
    ? [...brandList, ...brandList, ...brandList, ...brandList] 
    : [...brandList, ...brandList];

  return (
    <div className="w-full overflow-hidden bg-transparent py-4 relative flex items-center [mask-image:linear-gradient(90deg,transparent_0%,#000_6%,#000_94%,transparent_100%)]">
      {/* The scrolling container */}
      <div
        className={`flex gap-5 md:gap-7 px-6 items-center w-max ${brandList.length < 10 ? 'animate-marquee-fast' : 'animate-marquee'} hover:[animation-play-state:paused]`}
      >
        {repeatList.map((brand, i) => {
          const imgMeta = getAccessibleImageDetails(imagesFolder, brand);
          return (
            <div 
              key={i} 
              className={cardClassName || "flex-shrink-0 w-[110px] h-[55px] md:w-[145px] md:h-[68px] relative bg-white rounded-xl p-3 border border-white/10 hover:border-sky-400/60 hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.35)] flex items-center justify-center cursor-pointer"}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image 
                  src={`/${imagesFolder}/${brand}`} 
                  alt={imgMeta.alt}
                  title={imgMeta.title}
                  fill
                  sizes="(max-width: 640px) 110px, 145px"
                  className={imageClassName || "object-contain drop-shadow-sm rounded-lg"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
