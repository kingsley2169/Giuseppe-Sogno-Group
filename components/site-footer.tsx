import Link from "next/link";

const BUSINESS_LINKS = [
  { label: "Edible Fat", href: "/services/edible-fat" },
  { label: "Tobacco", href: "/services/tobacco" },
  { label: "Logistics & Freight", href: "/services/logistics" },
  { label: "Corporate Services", href: "/services/corporate" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const CONTACT_EMAIL = "info@giuseppesognogroup.com";
const CURRENT_YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="w-full bg-zinc-50 pt-8 md:pt-10">
      <div className="bg-[#111922] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] md:gap-10">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex text-lg font-semibold tracking-tight text-white transition-colors hover:text-[#D6C4A1]"
            >
              Giuseppe Sogno Group
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/66">
              Enterprise operations across the Indonesia-Nigeria trade
              corridor, spanning bulk supply, freight coordination, and local
              business setup.
            </p>
          </div>

          <FooterColumn
            title="Businesses"
            items={BUSINESS_LINKS.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          />

          <FooterColumn
            title="Company"
            items={COMPANY_LINKS.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          />

        </div>

          <div className="flex flex-col gap-4 pt-6 text-sm text-white/56 md:flex-row md:items-center md:justify-between">
            <p>© {CURRENT_YEAR} Giuseppe Sogno Group. All rights reserved.</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: React.ReactNode[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-[#D6C4A1]">
        {title}
      </h2>
      <div className="flex flex-col gap-3">{items}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-white/72 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}
