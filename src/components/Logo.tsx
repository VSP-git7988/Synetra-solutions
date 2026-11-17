import Link from "next/link";
import { site } from "@/data/site";

/** `light` renders the logo in white for dark backgrounds. */
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`} aria-label={`${site.shortName}, home`}>
      {/* Plain <img>: static export, no image optimisation server. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={site.logo}
        alt=""
        width={520}
        height={120}
        className={`h-9 w-auto transition-[filter] duration-300 md:h-10 ${light ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
