import { Globe, Ship, ShieldCheck } from "lucide-react";

const VALUES = [
  {
    icon: Globe,
    title: "Indonesia–Nigeria corridor expertise",
    description:
      "Operating knowledge on both sides of the corridor from source to final mile.",
  },
  {
    icon: Ship,
    title: "Bulk supply and shipping at scale",
    description:
      "Procurement, freight and clearing designed around enterprise volumes.",
  },
  {
    icon: ShieldCheck,
    title: "Local setup and compliance, end to end",
    description:
      "Registrations, permits and visas handled by a team physically based in Indonesia.",
  },
];

export function WhyUs() {
  return (
    <section
      aria-label="Why work with us"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <div className="mb-12 flex flex-col gap-4 md:mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#A28A62]">
            Why work with us
          </span>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#202A34] sm:text-4xl md:text-5xl">
            Cross-border, built for enterprises.
          </h2>
        </div>
        <ul className="grid gap-10 md:grid-cols-3 md:gap-12">
          {VALUES.map((value) => (
            <li key={value.title} className="flex flex-col gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#202A34] text-white">
                <value.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[#202A34] md:text-xl">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
