"use client";

import * as React from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  fallbackBg: string;
};

const SLIDES: HeroSlide[] = [
  {
    eyebrow: "Edible Fat",
    title: "RBD palm oil from Indonesia, supplied in bulk.",
    description:
      "CP6, CP8 and CP10 grades, shipped to Nigeria at enterprise scale.",
    ctaLabel: "Explore supply",
    ctaHref: "/services/edible-fat",
    image: "/hero/edible-fat.jpg",
    fallbackBg: "bg-[#3F4F3A]",
  },
  {
    eyebrow: "Tobacco",
    title: "Indonesian tobacco, curated for export.",
    description:
      "Sourced from trusted plantations and shipped in bulk to Nigerian partners.",
    ctaLabel: "See grades",
    ctaHref: "/services/tobacco",
    image: "/hero/tobacco.jpg",
    fallbackBg: "bg-[#5E4A2E]",
  },
  {
    eyebrow: "Logistics & Freight",
    title: "Indonesia to Nigeria, end to end.",
    description:
      "Procurement, shipping and clearing, managed as a single workflow.",
    ctaLabel: "Our corridor",
    ctaHref: "/services/logistics",
    image: "/hero/logistics.jpg",
    fallbackBg: "bg-[#202A34]",
  },
  {
    eyebrow: "Corporate Services",
    title: "Set up in Indonesia, confidently.",
    description:
      "Registrations, permits and visas handled by a local partner on the ground.",
    ctaLabel: "Start a company",
    ctaHref: "/services/corporate",
    image: "/hero/corporate.jpg",
    fallbackBg: "bg-[#A28A62]",
  },
];

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const autoplay = React.useMemo(
    () =>
      Autoplay({
        delay: 6000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section
      aria-label="Featured businesses"
      className="relative isolate w-full"
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[autoplay]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {SLIDES.map((slide, i) => (
            <CarouselItem key={slide.eyebrow} className="pl-0">
              <div
                className={cn(
                  "relative h-svh min-h-140 w-full overflow-hidden md:max-h-225",
                  slide.fallbackBg
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/45 to-black/25" />
                <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-end gap-4 px-4 pt-24 pb-20 sm:px-6 sm:pb-24 md:pb-32 lg:px-8">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white ring-1 ring-white/30 backdrop-blur-sm">
                    {slide.eyebrow}
                  </span>
                  <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h2>
                  <p className="max-w-xl text-base text-white/85 sm:text-lg">
                    {slide.description}
                  </p>
                  <div className="pt-2">
                    <Button
                      nativeButton={false}
                      render={<Link href={slide.ctaHref} />}
                      size="lg"
                      className="h-11 bg-[#A28A62] px-6 text-sm text-white shadow-sm hover:bg-[#8f7a56]"
                    >
                      {slide.ctaLabel}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center md:bottom-10">
        <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-black/20 px-3 py-2 backdrop-blur-sm">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.eyebrow}
              type="button"
              aria-label={`Go to slide ${i + 1}: ${slide.eyebrow}`}
              aria-current={current === i}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                current === i
                  ? "w-8 bg-white"
                  : "w-4 bg-white/50 hover:bg-white/80"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
