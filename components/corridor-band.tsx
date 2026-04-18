export function CorridorBand() {
  return (
    <section
      aria-label="Indonesia to Nigeria corridor"
      className="w-full bg-[#202A34] text-white"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-16 sm:px-8 md:py-24">
        <div className="flex w-full items-center gap-4 sm:gap-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-300 sm:text-xs">
            Indonesia
          </span>
          <span
            aria-hidden
            className="h-px flex-1 bg-[#A28A62]"
          />
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-300 sm:text-xs">
            Nigeria
          </span>
        </div>
        <p className="text-center text-sm text-zinc-400 sm:text-base">
          A single operator across the corridor.
        </p>
      </div>
    </section>
  );
}
