import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = {
  department: [
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/news", label: "News" },
  ],
  resources: [
    { href: "#", label: "For Students" },
    { href: "#", label: "For Faculty" },
    { href: "#", label: "Research Labs" },
  ],
  university: [
    { href: "#", label: "University Home" },
    { href: "#", label: "School of Engineering" },
    { href: "#", label: "Explore Degrees" },
  ],
};

export function Footer() {
  return (
    <footer className={cn("border-t border-border bg-muted")} role="contentinfo">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="group">
              <p className={cn(
                "text-lg font-serif font-bold text-foreground",
                "group-hover:text-accent transition-colors"
              )}>
                Computer Science
              </p>
              <p className="text-sm text-muted-foreground">
                School of Engineering
              </p>
            </Link>
            <address className="mt-4 text-sm not-italic leading-relaxed text-muted-foreground">
              Computer Science Building
              <br />
              123 University Avenue
              <br />
              Anytown, CA 90000
            </address>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Department of Computer Science.
              All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Accessibility", "Terms of Use"].map(
                (label) => (
                  <Link
                    key={label}
                    href="#"
                    className="text-xs text-muted-foreground hover:text-accent transition-colors"
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
