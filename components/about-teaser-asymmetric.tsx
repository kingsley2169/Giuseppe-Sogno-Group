"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutTeaserAsymmetric() {
  return (
    <section
      aria-label="About the group"
      className="w-full bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 sm:px-8 md:py-32 lg:grid-cols-3 lg:gap-16 lg:py-40 lg:pr-0">
        <div className="flex flex-col gap-6 lg:col-span-1 lg:pr-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#A28A62]">
            About
          </span>
          <h2 className="font-serif text-3xl font-normal leading-[1.1] tracking-tight text-[#202A34] sm:text-4xl lg:text-5xl">
            Built between two countries.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-zinc-700 sm:text-lg">
            Giuseppe Sogno Group brings four businesses under one operator,
            with people on the ground in Indonesia and Nigeria. We build
            relationships that last as long as the contracts.
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

        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#A28A62] lg:col-span-2 lg:aspect-auto lg:h-[80vh] lg:max-h-[720px]">
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
