export function ContactBandDark() {
  return (
    <section
      aria-label="Contact"
      className="w-full bg-[#202A34] text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 sm:px-8 md:py-24 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#A28A62]">
            Get in touch
          </span>
          <h2 className="font-serif text-3xl font-normal leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Enterprise inquiry?
          </h2>
          <p className="max-w-md text-base leading-relaxed text-zinc-300 sm:text-lg">
            Bulk supply, freight coordination or a local setup partner &mdash;
            tell us what you need and we&rsquo;ll route it to the right team.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:col-span-4 lg:pt-8">
          <a
            href="mailto:hello@sognogroup.com"
            className="font-serif text-2xl font-normal text-[#A28A62] underline decoration-[#A28A62]/40 decoration-1 underline-offset-[6px] transition-colors hover:text-white hover:decoration-[#A28A62] sm:text-3xl"
          >
            hello@sognogroup.com
          </a>
          <a
            href="tel:+6281234567890"
            className="text-sm text-zinc-300 transition-colors hover:text-[#A28A62] sm:text-base"
          >
            +62 812 3456 7890
          </a>
        </div>

        <address className="flex flex-col gap-4 text-sm not-italic text-zinc-300 sm:text-base lg:col-span-3 lg:pt-8">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#A28A62]">
              Jakarta
            </span>
            <span>Jl. Example No. 1, Jakarta Selatan, Indonesia</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#A28A62]">
              Lagos
            </span>
            <span>Example Street, Victoria Island, Lagos, Nigeria</span>
          </div>
        </address>
      </div>
    </section>
  );
}
