import Link from "next/link";
import { Navigation } from "./Navigation";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className={cn("sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80")}>
      <a
        href="#main-content"
        className={cn(
          "sr-only focus:not-sr-only focus:absolute focus:z-50",
          "focus:bg-accent focus:text-accent-foreground",
          "focus:px-4 focus:py-2 focus:top-2 focus:left-2 focus:rounded-md"
        )}
      >
        Skip to main content
      </a>

      <div className="border-b border-border">
        <div className={cn("max-w-content mx-auto px-4 sm:px-6 lg:px-8")}>
          <div className="flex items-center justify-between py-5">
            <Link href="/" className="group">
              <span className={cn(
                "text-2xl sm:text-3xl font-serif font-bold tracking-tight text-foreground",
                "group-hover:text-accent transition-colors"
              )}>
                Computer Science
              </span>
              <span className="block text-xs sm:text-sm text-muted-foreground font-sans tracking-wide uppercase mt-0.5">
                School of Engineering
              </span>
            </Link>
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}
