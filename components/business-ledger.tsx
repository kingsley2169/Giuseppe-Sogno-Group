"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type Division = {
  index: string;
  name: string;
  description: string;
  href: string;
  image: string;
  fallbackBg: string;
};

const DIVISIONS: Division[] = [
  {
    index: "01",
    name: "Edible Fat",
    description:
      "RBD palm oil in CP6, CP8 and CP10 grades. Sourced from Indonesian plantations and shipped in bulk to enterprise partners in Nigeria.",
    href: "/services/edible-fat",
    image: "/hero/oil-plantation.png",
    fallbackBg: "bg-[#3F4F3A]",
  },
  {
    index: "02",
    name: "Tobacco",
    description:
      "Indonesian tobacco curated by grade, bought direct from trusted plantations and shipped to Nigerian manufacturers and distributors.",
    href: "/services/tobacco",
    image: "/hero/tobacco.avif",
    fallbackBg: "bg-[#5E4A2E]",
  },
  {
    index: "03",
    name: "Logistics & Freight",
    description:
      "Procurement, shipping and clearing across the Indonesia&ndash;Nigeria corridor, coordinated as a single workflow from port of origin to final destination.",
    href: "/services/logistics",
    image: "/hero/seaport.jpg",
    fallbackBg: "bg-[#202A34]",
  },
  {
    index: "04",
    name: "Corporate Services",
    description:
      "Company registration, permits and visas in Indonesia. A local partner on the ground, handling the paperwork and presence needed to operate.",
    href: "/services/corporate",
    image: "/hero/business-district.avif",
    fallbackBg: "bg-[#A28A62]",
  },
];

export function BusinessLedger() {
  return (
    <section
      id="businesses"
      aria-label="Business divisions"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-4 sm:px-8 md:pt-28">
        <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#A28A62]">
          Divisions
        </span>
      </div>

      {DIVISIONS.map((division, i) => {
        const imageOnRight = i % 2 === 1;
        return (
          <div
            key={division.name}
            className={cn(
              "border-t border-[#A28A62]/25",
              i === DIVISIONS.length - 1 && "border-b"
            )}
          >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
              <div
                className={cn(
                  "relative min-h-[55svh] w-full overflow-hidden lg:min-h-[70svh]",
                  division.fallbackBg,
                  imageOnRight ? "order-1 lg:order-2" : "order-1 lg:order-1"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={division.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div
                className={cn(
                  "flex flex-col justify-center gap-6 bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 xl:px-20",
                  imageOnRight ? "order-2 lg:order-1" : "order-2 lg:order-2"
                )}
              >
                <span className="font-serif text-5xl font-normal leading-none text-[#A28A62] sm:text-6xl lg:text-7xl">
                  {division.index}.
                </span>
                <h3 className="font-serif text-3xl font-normal leading-[1.1] tracking-tight text-[#202A34] sm:text-4xl lg:text-5xl">
                  {division.name}
                </h3>
                <p
                  className="max-w-lg text-base leading-relaxed text-zinc-700 sm:text-lg"
                  dangerouslySetInnerHTML={{ __html: division.description }}
                />
                <div className="pt-2">
                  <Link
                    href={division.href}
                    className="group inline-flex items-center gap-2 border-b border-[#A28A62]/40 pb-1 text-sm font-medium tracking-wide text-[#A28A62] transition-colors hover:border-[#A28A62] hover:text-[#8f7a56]"
                  >
                    Read more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
