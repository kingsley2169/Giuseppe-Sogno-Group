"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSplit() {
  return (
    <section
      aria-label="Giuseppe Sogno Group"
      className="relative w-full bg-[#202A34] text-white"
    >
      <div className="grid min-h-[90svh] w-full grid-cols-1 lg:grid-cols-5">
        <div className="relative order-1 col-span-1 min-h-[55svh] overflow-hidden bg-[#202A34] lg:order-1 lg:col-span-3 lg:min-h-[90svh]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero/seaport.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#111922]/70 via-[#111922]/25 to-transparent sm:h-40 lg:hidden" />
        </div>

        <div className="order-2 col-span-1 flex flex-col justify-center gap-8 bg-[#202A34] px-6 py-20 sm:px-10 sm:py-24 lg:order-2 lg:col-span-2 lg:px-14 lg:py-32 xl:px-20">
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#A28A62]">
            Indonesia &nbsp;&#8596;&nbsp; Nigeria
          </span>
          <h1 className="font-serif text-4xl font-normal leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
            A Giuseppe Sogno company, operating between two markets.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-zinc-300 sm:text-lg">
            Bulk supply, freight and local setup along the Indonesia&ndash;Nigeria
            corridor &mdash; handled by people on the ground in both countries.
          </p>
          <div className="mt-2 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href="#businesses"
              className="group inline-flex items-center gap-2 border-b border-[#A28A62]/40 pb-1 text-sm font-medium tracking-wide text-white transition-colors hover:border-[#A28A62] hover:text-[#A28A62]"
            >
              Our businesses
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm font-medium tracking-wide text-zinc-300 transition-colors hover:border-[#A28A62] hover:text-[#A28A62]"
            >
              Talk to us
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
