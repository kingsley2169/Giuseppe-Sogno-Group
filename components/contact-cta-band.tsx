import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const CONTACT_EMAIL = "info@giuseppesognogroup.com";

export function ContactCtaBand() {
  return (
    <section aria-label="Contact us" className="w-full bg-[#202A34]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-6 py-10 sm:px-8 md:px-12 md:py-14">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#A28A62]/20 blur-3xl"
          />
          <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.7fr)_auto] md:items-end md:gap-12">
            <div className="flex max-w-3xl flex-col gap-5">
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#D6C4A1]">
                Contact
              </span>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Enterprise inquiry? Let&apos;s talk.
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
                Speak with the team about bulk supply, freight coordination, or
                setting up operations in Indonesia. We work best with companies
                that need clear answers and dependable execution.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#A28A62] px-5 py-3 text-sm font-medium text-[#202A34] transition-colors hover:bg-[#b79d72] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#202A34]"
              >
                Contact us
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/78 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#202A34]"
              >
                <Mail className="size-4" />
                {CONTACT_EMAIL}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
