import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PageHero({
  eyebrow, title, text, crumbs, children,
}: { eyebrow?: string; title: React.ReactNode; text?: string; crumbs: { label: string; href?: string }[]; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-synetra-navy">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/page-banner.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020A1C]/85 via-[#042257]/65 to-[#042257]/30" />
      <div className="container-site relative py-20 sm:py-24">
        {eyebrow && <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-synetra-glow">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight !text-white sm:text-5xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-lg text-white/85">{text}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        <nav aria-label="Breadcrumb" className="mt-8 inline-flex flex-wrap items-center gap-1.5 rounded-md bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
          <Link href="/" className="hover:text-white">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span className="text-white" aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
