"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface LogosCarouselProps {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const DEFAULT_LOGOS: Logo[] = [
  {
    id: "logo-1",
    description: "Client 1",
    image: "/client-logos/1.png",
    className: "h-20 w-auto",
  },
  {
    id: "logo-2",
    description: "Client 2",
    image: "/client-logos/2.png",
    className: "h-20 w-auto",
  },
  {
    id: "logo-3",
    description: "Client 3",
    image: "/client-logos/3.png",
    className: "h-20 w-auto",
  },
  {
    id: "logo-4",
    description: "Client 4",
    image: "/client-logos/4.png",
    className: "h-20 w-auto",
  },
  {
    id: "logo-5",
    description: "Client 5",
    image: "/client-logos/5.png",
    className: "h-20 w-auto",
  },
  {
    id: "logo-6",
    description: "Client 6",
    image: "/client-logos/6.png",
    className: "h-20 w-auto",
  },
  {
    id: "logo-7",
    description: "Client 7",
    image: "/client-logos/7.png",
    className: "h-20 w-auto",
  },
  {
    id: "logo-8",
    description: "Client 8",
    image: "/client-logos/8.png",
    className: "h-20 w-auto",
  },
  {
    id: "logo-9",
    description: "Client 9",
    image: "/client-logos/9.png",
    className: "h-20 w-auto",
  },
  {
    id: "logo-10",
    description: "Client 10",
    image: "/client-logos/10.png",
    className: "h-20 w-auto",
  },
];

export function LogosCarousel({
  heading = "Trusted by Industry Leaders",
  logos = DEFAULT_LOGOS,
  className = "",
}: LogosCarouselProps) {
  return (
    <section className={`w-full bg-black py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-white lg:text-4xl">
          {heading}
        </h2>
      </div>
      <div className="pt-4 md:pt-6 lg:pt-8">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-6xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({ 
                playOnInit: true, 
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              })
            ]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="mx-1 sm:mx-6 md:mx-8 lg:mx-10 flex shrink-0 items-center justify-center">
                    <div className="relative">
                      <Image
                        src={logo.image}
                        alt={logo.description}
                        width={200}
                        height={80}
                        className={`${logo.className} object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Gradient overlays for fade effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

