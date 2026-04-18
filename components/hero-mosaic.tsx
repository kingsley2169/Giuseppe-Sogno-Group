"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type PhotoTile = {
  eyebrow: string;
  name: string;
  href: string;
  image: string;
  fallbackBg: string;
  gridClass: string;
  mobileOrder: number;
};

const PHOTO_TILES: PhotoTile[] = [
  {
    eyebrow: "01",
    name: "Edible Fat",
    href: "/services/edible-fat",
    image: "/hero/oil-plantation.png",
    fallbackBg: "bg-[#3F4F3A]",
    gridClass: "lg:col-span-4 lg:row-span-4 lg:col-start-6 lg:row-start-1",
    mobileOrder: 2,
  },
  {
    eyebrow: "02",
    name: "Tobacco",
    href: "/services/tobacco",
    image: "/hero/tobacco.avif",
    fallbackBg: "bg-[#5E4A2E]",
    gridClass: "lg:col-span-3 lg:row-span-4 lg:col-start-10 lg:row-start-1",
    mobileOrder: 3,
  },
  {
    eyebrow: "03",
    name: "Logistics & Freight",
    href: "/services/logistics",
    image: "/hero/seaport.jpg",
    fallbackBg: "bg-[#202A34]",
    gridClass: "lg:col-span-4 lg:row-span-4 lg:col-start-6 lg:row-start-5",
    mobileOrder: 4,
  },
  {
    eyebrow: "04",
    name: "Corporate Services",
    href: "/services/corporate",
    image: "/hero/business-district.avif",
    fallbackBg: "bg-[#A28A62]",
    gridClass: "lg:col-span-3 lg:row-span-4 lg:col-start-10 lg:row-start-5",
    mobileOrder: 5,
  },
];

export function HeroMosaic() {
  return (
    <section
      aria-label="Giuseppe Sogno Group"
      className="w-full bg-[#0b1218]"
    >
      <div className="grid w-full auto-rows-min grid-cols-1 gap-px lg:h-svh lg:min-h-180 lg:grid-cols-12 lg:grid-rows-8">
        {/* Statement tile */}
        <div
          className={cn(
            "relative flex min-w-0 flex-col bg-[#202A34] px-6 pt-24 pb-10 text-white sm:px-10 sm:pt-28 sm:pb-12",
            "lg:col-span-5 lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:px-10 lg:pt-24 lg:pb-10 xl:px-14 xl:pt-28 xl:pb-12"
          )}
          style={{ order: 1 }}
        >
          <div className="flex min-w-0 flex-col gap-5 lg:gap-6">
            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#A28A62]">
              Indonesia &nbsp;&#8596;&nbsp; Nigeria
            </span>
            <h1 className="font-serif text-[2rem] font-normal leading-[1.08] tracking-tight text-white wrap-break-word sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[3.25rem]">
              Four businesses, one operator, across two markets.
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">
              Bulk supply, freight coordination and local company setup &mdash;
              handled by people on the ground in both Indonesia and Nigeria.
            </p>
          </div>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 self-start border-b border-[#A28A62]/40 pb-1 text-sm font-medium tracking-wide text-white transition-colors hover:border-[#A28A62] hover:text-[#A28A62] lg:mt-auto lg:pt-8"
          >
            About the group
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Photo tiles */}
        {PHOTO_TILES.map((tile) => (
          <Link
            key={tile.name}
            href={tile.href}
            className={cn(
              "group relative block min-h-[42svh] overflow-hidden lg:min-h-0",
              tile.fallbackBg,
              tile.gridClass
            )}
            style={{ order: tile.mobileOrder }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tile.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="eager"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/10 transition-opacity duration-300 group-hover:from-black/60" />
            <div className="relative z-10 flex h-full flex-col justify-end gap-2 p-6 text-white sm:p-8">
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#A28A62]">
                {tile.eyebrow}
              </span>
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-medium tracking-tight text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {tile.name}
                </h2>
                <ArrowUpRight className="size-5 shrink-0 text-white/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#A28A62]" />
              </div>
            </div>
          </Link>
        ))}

        {/* Contact tile */}
        <div
          className={cn(
            "relative flex flex-col justify-between gap-8 bg-white px-6 py-12 text-[#202A34] sm:px-10 sm:py-14",
            "lg:col-span-5 lg:col-start-1 lg:row-span-4 lg:row-start-5 lg:px-12 lg:py-14 xl:px-16"
          )}
          style={{ order: 6 }}
        >
          <div className="flex flex-col gap-5">
            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#A28A62]">
              Enterprise inquiry
            </span>
            <p className="max-w-md text-lg leading-snug text-[#202A34] sm:text-xl lg:text-2xl">
              Looking for bulk supply, freight, or a local setup partner?
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:hello@sognogroup.com"
              className="font-serif text-2xl font-normal text-[#A28A62] underline decoration-[#A28A62]/40 decoration-1 underline-offset-[6px] transition-colors hover:text-[#8f7a56] hover:decoration-[#A28A62] sm:text-3xl"
            >
              hello@sognogroup.com
            </a>
            <a
              href="tel:+6281234567890"
              className="text-sm text-zinc-600 transition-colors hover:text-[#A28A62]"
            >
              +62 812 3456 7890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
