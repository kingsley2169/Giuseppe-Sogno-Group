"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type Division = {
  name: string;
  description: string;
  href: string;
  image: string;
  fallbackBg: string;
};

const DIVISIONS: Division[] = [
  {
    name: "Edible Fat",
    description:
      "RBD palm oil in CP6, CP8 and CP10 grades. Bulk supply from Indonesian plantations, shipped to Nigeria.",
    href: "/services/edible-fat",
    image: "/business/edible-fat.jpg",
    fallbackBg: "bg-[#3F4F3A]",
  },
  {
    name: "Tobacco",
    description:
      "Indonesian tobacco sourced from trusted plantations, curated by grade and shipped to Nigerian partners.",
    href: "/services/tobacco",
    image: "/business/tobacco.jpg",
    fallbackBg: "bg-[#5E4A2E]",
  },
  {
    name: "Logistics & Freight",
    description:
      "Procurement, shipping and clearing managed as a single workflow across the Indonesia–Nigeria corridor.",
    href: "/services/logistics",
    image: "/business/logistics.jpg",
    fallbackBg: "bg-[#202A34]",
  },
  {
    name: "Corporate Services",
    description:
      "Set up in Indonesia confidently — registrations, permits and visas handled by a local partner on the ground.",
    href: "/services/corporate",
    image: "/business/corporate.jpg",
    fallbackBg: "bg-[#A28A62]",
  },
];

export function BusinessGrid() {
  return (
    <section
      aria-label="Business divisions"
      className="w-full bg-zinc-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <div className="mb-12 flex flex-col gap-4 md:mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#A28A62]">
            Divisions
          </span>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#202A34] sm:text-4xl md:text-5xl">
            Four businesses, one operator.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
          {DIVISIONS.map((division) => (
            <Link
              key={division.name}
              href={division.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:border-[#A28A62] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28A62] focus-visible:ring-offset-2"
            >
              <div
                className={cn(
                  "relative aspect-4/3 w-full overflow-hidden",
                  division.fallbackBg
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={division.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-[#202A34] md:text-2xl">
                  {division.name}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                  {division.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-[#A28A62] transition-colors group-hover:text-[#8f7a56]">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
