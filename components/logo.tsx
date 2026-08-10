import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="ConsultX home">
      <span className="text-xl font-black tracking-normal text-ink">
        CONSULT<span className="text-electric">X</span>
      </span>
      <span className="hidden border-l border-line pl-2 text-xs font-semibold uppercase text-steel sm:inline">
        Autonomous BI
      </span>
    </Link>
  );
}
