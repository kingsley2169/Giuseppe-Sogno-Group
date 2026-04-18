"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };
const SCROLL_THRESHOLD = 20;

const NAV_ITEMS: NavItem[] = [
  // { label: "Home", href: "/" },
  {
    label: "Homepages",
    children: [
      { label: "Version 1", href: "/" },
      { label: "Version 2", href: "/home-v2" },
      { label: "Version 3", href: "/home-v3" },
    ],
  },
  {
    label: "Businesses",
    children: [
      { label: "Edible Fat", href: "/services/edible-fat" },
      { label: "Tobacco", href: "/services/tobacco" },
      { label: "Logistics & Freight", href: "/services/logistics" },
      { label: "Corporate Services", href: "/services/corporate" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const getScrollTop = () =>
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.visualViewport?.pageTop ||
      0;

    const updateScrolled = () => {
      setScrolled(getScrollTop() > SCROLL_THRESHOLD);
    };

    const syncOnNextFrame = () => {
      window.requestAnimationFrame(updateScrolled);
    };

    syncOnNextFrame();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    window.addEventListener("resize", syncOnNextFrame);
    window.addEventListener("orientationchange", syncOnNextFrame);
    window.addEventListener("pageshow", syncOnNextFrame);

    return () => {
      window.removeEventListener("scroll", updateScrolled);
      window.removeEventListener("resize", syncOnNextFrame);
      window.removeEventListener("orientationchange", syncOnNextFrame);
      window.removeEventListener("pageshow", syncOnNextFrame);
    };
  }, []);

  React.useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const linkBase =
    "rounded-md px-3 py-2 text-sm font-medium transition-colors";
  const linkTone = "text-white hover:bg-white/10";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full text-white transition-[background-color,box-shadow] duration-300",
          scrolled || mobileMenuOpen
            ? "bg-[#202A34] shadow-sm"
            : "bg-transparent"
        )}
      >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          Sogno Group
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      className={cn(
                        "gap-1",
                        scrolled
                          ? "text-white hover:bg-white/10 hover:text-white"
                          : "text-white hover:bg-white/10 hover:text-white"
                      )}
                    />
                  }
                >
                  {item.label}
                  <ChevronDown className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {item.children.map((child) => (
                    <DropdownMenuItem
                      key={child.href}
                      render={<Link href={child.href} />}
                    >
                      {child.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={cn(linkBase, linkTone)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex size-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28A62] md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>
      </header>

      {mobileMenuOpen ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-16 right-0 h-[calc(100dvh-4rem)] w-72 overflow-y-auto border-l border-white/10 bg-[#202A34] px-4 pb-6 pt-4 text-zinc-50 shadow-2xl">
            <div className="mb-4 border-b border-white/10 pb-4">
              <p className="text-base font-semibold tracking-tight text-white">
                Menu
              </p>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <details key={item.label} className="group rounded-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10">
                      {item.label}
                      <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mt-1 ml-2 flex flex-col gap-1 border-l border-white/15 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-white/72 transition-colors hover:bg-white/10 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
