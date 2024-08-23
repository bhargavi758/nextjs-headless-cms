import Link from "next/link";

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
    { href: "https://www.stanford.edu", label: "Stanford Home" },
    { href: "https://engineering.stanford.edu", label: "School of Engineering" },
    { href: "https://exploredegrees.stanford.edu", label: "Explore Degrees" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="group">
              <p className="text-lg font-serif font-bold text-white group-hover:underline decoration-2 underline-offset-4">
                Computer Science
              </p>
              <p className="text-sm text-gray-400">
                Stanford University
              </p>
            </Link>
            <address className="mt-4 text-sm not-italic leading-relaxed text-gray-400">
              Gates Computer Science Building
              <br />
              353 Jane Stanford Way
              <br />
              Stanford, CA 94305
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Department
            </h3>
            <ul className="space-y-2">
              {footerLinks.department.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              University
            </h3>
            <ul className="space-y-2">
              {footerLinks.university.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Stanford University. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Accessibility
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
