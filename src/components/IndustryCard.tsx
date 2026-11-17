import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Industry } from "@/data/industries";
import { getIcon } from "@/lib/icons";

/** Each industry gets its own gradient so the three cards read as a set but stay distinct. */
const tones = [
  "from-navy-900 via-navy-700 to-blue-600",
  "from-navy-700 via-blue-600 to-blue-400",
  "from-navy-900 via-blue-600 to-navy-700",
];

export function IndustryCard({ industry, index = 0 }: { industry: Industry; index?: number }) {
  const Icon = getIcon(industry.icon);
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className={`on-dark group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br p-8 text-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
        tones[index % tones.length]
      }`}
    >
      {/* Icon art in place of a photo */}
      <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
      <Icon
        aria-hidden
        strokeWidth={1}
        className="absolute -right-6 -top-6 h-56 w-56 text-white/10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-900/80 to-transparent" />

      <div className="relative">
        <span className="glass flex h-12 w-12 items-center justify-center rounded-xl">
          <Icon aria-hidden className="h-6 w-6" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold text-white">{industry.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-white/85">{industry.shortDescription}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
          Explore industry
          <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
