import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Methodology", href: "/methodology" },
  { label: "Industries", href: "/industries" },
  { label: "Enterprise", href: "/enterprise" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-steel transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/check"
          className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-electric"
        >
          Start Free Check
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <nav
        className="mx-auto grid max-w-7xl grid-cols-4 gap-y-3 border-t border-line px-5 py-3 text-center md:hidden"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-xs font-bold text-steel transition hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
