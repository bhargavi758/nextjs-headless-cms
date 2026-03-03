"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav aria-label="Main navigation">
      <button
        type="button"
        className={cn(
          "md:hidden p-2 -mr-2 text-foreground rounded-md",
          "hover:bg-muted",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
        aria-expanded={mobileOpen}
        aria-controls="main-nav-menu"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className="sr-only">
          {mobileOpen ? "Close menu" : "Open menu"}
        </span>
        {mobileOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      <ul
        id="main-nav-menu"
        className={cn(
          mobileOpen ? "flex" : "hidden",
          "md:flex flex-col md:flex-row",
          "absolute md:relative left-0 right-0 top-full md:top-auto",
          "bg-background md:bg-transparent",
          "shadow-lg md:shadow-none border-b border-border md:border-0",
          "z-50 md:gap-1"
        )}
      >
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-4 py-3 md:py-2 md:px-3 text-sm font-medium transition-colors",
                isActive(href)
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
