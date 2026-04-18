type Fact = {
  label: string;
  value: string;
};

const FACTS: Fact[] = [
  {
    label: "Ports",
    value: "Tanjung Priok, Surabaya, Lagos, Onne",
  },
  {
    label: "Products",
    value: "RBD palm oil (CP6/8/10), Indonesian tobacco",
  },
  {
    label: "Services",
    value: "Shipping, clearing, company setup",
  },
  {
    label: "Presence",
    value: "Offices in Jakarta and Lagos",
  },
];

export function OperatingFacts() {
  return (
    <section
      aria-label="Operating facts"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
        <dl className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col gap-3 border-t border-[#A28A62]/30 pt-5"
            >
              <dt className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#A28A62]">
                {fact.label}
              </dt>
              <dd className="text-base leading-snug text-[#202A34] sm:text-lg">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
