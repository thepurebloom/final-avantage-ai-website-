"use client";

import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

const MEDIA_LOGOS = [
  { src: "/media-logos/forbes.svg", alt: "Forbes" },
  { src: "/media-logos/times-of-india.svg", alt: "The Times of India" },
  { src: "/media-logos/techcrunch.svg", alt: "TechCrunch" },
  { src: "/media-logos/economic-times.svg", alt: "The Economic Times" },
  { src: "/media-logos/the-hindu.svg", alt: "The Hindu" },
  { src: "/media-logos/hindustan-times.svg", alt: "Hindustan Times" },
  { src: "/media-logos/mint.svg", alt: "Mint" },
  { src: "/media-logos/indian-express.svg", alt: "The Indian Express" },
  { src: "/media-logos/business-standard.svg", alt: "Business Standard" },
  { src: "/media-logos/yourstory.svg", alt: "YourStory" },
];

type Props = { className?: string; logos?: typeof MEDIA_LOGOS; id?: string };

export default function AsSeenOnSection({
  className,
  logos = MEDIA_LOGOS,
  id = "as-seen-on",
}: Props) {
  return (
    <section id={id} className={cn("w-full bg-black", className)}>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-white">
          As Seen On
        </h2>
        <div className="mx-auto my-6 h-px max-w-sm bg-white/10 [mask-image:linear-gradient(to_right,transparent,white,transparent)]" />
        <LogoCloud logos={logos} />
        <div className="mx-auto mt-6 h-px max-w-sm bg-white/10 [mask-image:linear-gradient(to_right,transparent,white,transparent)]" />
      </div>
    </section>
  );
}


