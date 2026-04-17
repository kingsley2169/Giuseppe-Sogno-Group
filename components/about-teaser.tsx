"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutTeaser() {
  return (
    <section
      aria-label="About the group"
      className="w-full bg-[#F7F3EC]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:px-8 md:grid-cols-2 md:items-center md:gap-16 md:py-32">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#A28A62]">
            About us
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#202A34] sm:text-4xl md:text-5xl">
            One group, four businesses, a single operating team.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg">
            Giuseppe Sogno Group is an enterprise holding company built around
            the Indonesia–Nigeria trade corridor. The same team that sources
            and ships your cargo also handles the registrations, permits and
            on-the-ground work — which is why our clients treat us as a
            partner, not a vendor.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md bg-[#202A34] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2d3a48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28A62] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EC]"
            >
              About the group
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-[#202A34] md:aspect-3/4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/about/team.jpg"
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
