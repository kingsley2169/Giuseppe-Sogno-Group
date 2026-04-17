"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
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

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "rounded-md px-3 py-2 text-sm font-medium transition-colors";
  const linkTone = scrolled
    ? "text-foreground hover:bg-muted"
    : "text-white hover:bg-white/10";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-[#202A34] text-white shadow-sm"
          : "bg-transparent text-white"
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
                          ? "text-foreground hover:bg-muted"
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

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className={cn(
                  "md:hidden",
                  scrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-white hover:bg-white/10 hover:text-white"
                )}
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-l border-zinc-200 bg-[#202A34] text-zinc-50 shadow-2xl"
          >
            <SheetHeader>
              <SheetTitle className="text-zinc-50">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pb-4">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <details key={item.label} className="group rounded-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
                      {item.label}
                      <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mt-1 ml-2 flex flex-col border-l pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SheetClose
                            nativeButton={false}
                            render={
                              <Link
                                href={child.href}
                                className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                              />
                            }
                          >
                            {child.label}
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <SheetClose
                    key={item.label}
                    nativeButton={false}
                    render={
                      <Link
                        href={item.href!}
                        className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                )
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
