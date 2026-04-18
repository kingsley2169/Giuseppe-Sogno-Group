"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutTeaserBand() {
  return (
    <section
      aria-label="About the group"
      className="w-full bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 sm:px-8 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="flex flex-col gap-5 lg:col-span-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#A28A62]">
            About
          </span>
          <h2 className="font-serif text-3xl font-normal leading-[1.1] tracking-tight text-[#202A34] sm:text-4xl">
            Built between two countries.
          </h2>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-5">
          <p className="text-base leading-relaxed text-zinc-700 sm:text-lg">
            Giuseppe Sogno Group runs four businesses under one operator, with
            teams on the ground in both Indonesia and Nigeria.
          </p>
          <p className="text-base leading-relaxed text-zinc-700 sm:text-lg">
            We move products, paperwork and people along the corridor &mdash;
            and build relationships that last as long as the contracts.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 border-b border-[#A28A62]/40 pb-1 text-sm font-medium tracking-wide text-[#A28A62] transition-colors hover:border-[#A28A62] hover:text-[#8f7a56]"
            >
              About the group
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="relative aspect-square w-full overflow-hidden bg-[#A28A62] lg:col-span-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero/business-district.avif"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>
    </section>
  );
}
