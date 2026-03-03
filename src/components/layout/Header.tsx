import Link from "next/link";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="bg-primary text-white sticky top-0 z-40">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:top-2 focus:left-2 focus:rounded"
      >
        Skip to main content
      </a>

      <div className="border-b border-primary-dark/30">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <span className="text-sm font-sans text-white/80">
            University Home
          </span>
        </div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 relative">
          <Link href="/" className="flex flex-col group">
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight group-hover:underline decoration-2 underline-offset-4">
              Computer Science
            </span>
            <span className="text-xs sm:text-sm text-white/70 font-sans">
              School of Engineering
            </span>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
