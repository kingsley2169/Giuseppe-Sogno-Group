"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type Division = {
  index: string;
  name: string;
  description: string;
  specs: string[];
  href: string;
  image: string;
  fallbackBg: string;
};

const DIVISIONS: Division[] = [
  {
    index: "01",
    name: "Edible Fat",
    description:
      "RBD palm oil sourced direct from Indonesian plantations and shipped in bulk to enterprise partners in Nigeria. Consistent grade, consistent cadence.",
    specs: ["Grades CP6, CP8, CP10", "FOB Indonesia", "CFR Nigerian ports"],
    href: "/services/edible-fat",
    image: "/hero/oil-plantation.png",
    fallbackBg: "bg-[#3F4F3A]",
  },
  {
    index: "02",
    name: "Tobacco",
    description:
      "Indonesian tobacco curated by grade and origin. Direct plantation relationships, enterprise volumes, shipped to Nigerian manufacturers and distributors.",
    specs: ["Grade-sorted", "Bulk volumes", "Plantation-direct"],
    href: "/services/tobacco",
    image: "/hero/tobacco.avif",
    fallbackBg: "bg-[#5E4A2E]",
  },
  {
    index: "03",
    name: "Logistics & Freight",
    description:
      "Procurement, shipping and clearing across the Indonesia\u2013Nigeria corridor. Coordinated as a single workflow from port of origin to final destination.",
    specs: ["Tanjung Priok \u2192 Lagos", "End-to-end coordination", "Customs clearing"],
    href: "/services/logistics",
    image: "/hero/seaport.jpg",
    fallbackBg: "bg-[#202A34]",
  },
  {
    index: "04",
    name: "Corporate Services",
    description:
      "Company registration, permits and visas in Indonesia. A local partner on the ground, handling the paperwork and presence needed to operate.",
    specs: ["PT PMA setup", "Work permits & KITAS", "Licensing & compliance"],
    href: "/services/corporate",
    image: "/hero/business-district.avif",
    fallbackBg: "bg-[#A28A62]",
  },
];

export function DivisionRows() {
  return (
    <section
      id="businesses"
      aria-label="Business divisions"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-4 sm:px-8 md:pt-24">
        <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#A28A62]">
          Divisions
        </span>
      </div>

      {DIVISIONS.map((division, i) => (
        <div
          key={division.name}
          className={cn(
            "border-t border-[#A28A62]/25",
            i === DIVISIONS.length - 1 && "border-b"
          )}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-10">
            <div
              className={cn(
                "relative min-h-[40svh] w-full overflow-hidden lg:min-h-[50svh] lg:col-span-4",
                division.fallbackBg
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

            <div className="flex flex-col justify-center gap-5 bg-white px-6 py-12 sm:px-10 sm:py-14 lg:col-span-6 lg:px-14 lg:py-16 xl:px-20">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-medium tracking-wide text-[#A28A62]">
                  {division.index}.
                </span>
                <h3 className="text-2xl font-medium leading-tight tracking-tight text-[#202A34] sm:text-3xl">
                  {division.name}
                </h3>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg">
                {division.description}
              </p>
              <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-600">
                {division.specs.map((spec, j) => (
                  <li key={spec} className="flex items-center gap-3">
                    <span className="text-[#202A34]">{spec}</span>
                    {j < division.specs.length - 1 ? (
                      <span aria-hidden className="text-[#A28A62]">
                        &middot;
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
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
      ))}
    </section>
  );
}
