import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { getIcon } from "@/lib/icons";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = getIcon(service.icon);
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/[0.07] bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/40 hover:shadow-lift"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100"
      />
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon aria-hidden className="h-6 w-6" />
      </span>
      <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed">{service.shortDescription}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
        Learn more
        <ArrowUpRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
