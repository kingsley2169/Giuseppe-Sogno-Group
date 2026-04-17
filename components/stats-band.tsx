type Stat = {
  value: string;
  caption: string;
};

const STATS: Stat[] = [
  {
    value: "2",
    caption: "Countries, end-to-end coverage",
  },
  {
    value: "4",
    caption: "Business divisions under one operator",
  },
  {
    value: "10+",
    caption: "Years of corridor experience",
  },
];

export function StatsBand() {
  return (
    <section
      aria-label="By the numbers"
      className="w-full bg-[#202A34] text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32 lg:py-40">
        <div className="mb-12 flex justify-center md:mb-16">
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#A28A62]">
            By the numbers
          </span>
        </div>
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 md:grid-cols-3 md:gap-y-0">
          {STATS.map((stat) => (
            <div
              key={stat.caption}
              className="flex flex-col items-center gap-4 text-center"
            >
              <dt className="font-serif text-7xl font-normal leading-none text-[#A28A62] sm:text-8xl lg:text-[9rem]">
                {stat.value}
              </dt>
              <dd className="max-w-xs text-sm leading-relaxed text-zinc-300 sm:text-base">
                {stat.caption}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
