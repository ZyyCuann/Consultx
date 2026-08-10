import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-6 text-steel">
            ConsultX helps businesses identify potential losses, diagnose root causes, and
            translate business problems into structured strategic actions.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-ink">Platform</h3>
          <div className="mt-4 grid gap-3 text-sm text-steel">
            <Link href="/check" className="hover:text-ink">
              Free Check
            </Link>
            <Link href="/services" className="hover:text-ink">
              Services
            </Link>
            <Link href="/insights" className="hover:text-ink">
              Insights
            </Link>
            <Link href="/methodology" className="hover:text-ink">
              Methodology
            </Link>
            <Link href="/industries" className="hover:text-ink">
              Industries
            </Link>
            <Link href="/capabilities" className="hover:text-ink">
              Capabilities
            </Link>
            <Link href="/how-it-works" className="hover:text-ink">
              How It Works
            </Link>
            <Link href="/portal-preview" className="hover:text-ink">
              Portal Preview
            </Link>
            <Link href="/roi-calculator" className="hover:text-ink">
              ROI Calculator
            </Link>
            <Link href="/case-library" className="hover:text-ink">
              Case Library
            </Link>
            <Link href="/toolkit" className="hover:text-ink">
              Toolkit
            </Link>
            <Link href="/sample-report" className="hover:text-ink">
              Sample Report
            </Link>
            <Link href="/report-preview" className="hover:text-ink">
              Report Preview
            </Link>
            <Link href="/knowledge" className="hover:text-ink">
              Knowledge
            </Link>
            <Link href="/playbooks" className="hover:text-ink">
              Playbooks
            </Link>
            <Link href="/admin" className="hover:text-ink">
              Dashboard
            </Link>
            <Link href="/enterprise" className="hover:text-ink">
              Enterprise
            </Link>
            <Link href="/about" className="hover:text-ink">
              About
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-ink">Positioning</h3>
          <p className="mt-4 text-sm leading-6 text-steel">
            AI-assisted advisory only. Final business decisions remain the client's
            responsibility.
          </p>
        </div>
      </div>
      <div className="border-t border-line px-5 py-5">
        <p className="mx-auto max-w-7xl text-xs font-medium text-steel">
          © 2026 ConsultX. Autonomous Business Intelligence.
        </p>
      </div>
    </footer>
  );
}
