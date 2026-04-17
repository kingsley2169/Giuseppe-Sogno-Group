export function ContactCtaMinimal() {
  return (
    <section
      aria-label="Contact"
      className="w-full bg-white"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-28 text-center sm:px-8 md:py-40 lg:py-48">
        <h2 className="font-serif text-4xl font-normal leading-[1.05] tracking-tight text-[#202A34] sm:text-5xl md:text-6xl lg:text-7xl">
          Enterprise inquiry?
        </h2>

        <a
          href="mailto:hello@sognogroup.com"
          className="font-serif text-2xl font-normal text-[#A28A62] underline decoration-[#A28A62]/40 decoration-1 underline-offset-[8px] transition-colors hover:text-[#8f7a56] hover:decoration-[#A28A62] sm:text-3xl md:text-4xl"
        >
          hello@sognogroup.com
        </a>

        <div className="flex flex-col items-center gap-2 text-sm text-zinc-600 sm:text-base">
          <a
            href="tel:+6281234567890"
            className="transition-colors hover:text-[#A28A62]"
          >
            +62 812 3456 7890
          </a>
          <p className="max-w-xs">
            Jakarta, Indonesia &middot; Lagos, Nigeria
          </p>
        </div>
      </div>
    </section>
  );
}
