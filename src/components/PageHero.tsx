import Link from 'next/link';
import TideShader from './motion/TideShader';

export default function PageHero({
  eyebrow, title, text, crumbs, children,
}: { eyebrow: string; title: React.ReactNode; text?: string; crumbs: { label: string; href?: string }[]; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-synetra-abyss text-white">
      <TideShader intensity={0.8} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,10,28,.2),rgba(2,10,28,.7))]" />
      <div className="container-site relative pb-20 pt-40 sm:pb-24 sm:pt-48">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/55">
          <Link href="/" className="hover:text-white">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-synetra-sky" />
              {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span className="text-white" aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <p className="mt-10 text-[12px] font-semibold uppercase tracking-[0.3em] text-synetra-sky">( {eyebrow} )</p>
        <h1 className="mt-5 max-w-5xl font-display text-[2.7rem] font-normal leading-[1] !text-white sm:text-7xl lg:text-[6rem]">
          <span className="line-mask"><span style={{ animationDelay: '.1s' }}>{title}</span></span>
        </h1>
        <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          {text && <p className="max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{text}</p>}
          {children && <div className="flex flex-wrap gap-3 md:justify-end">{children}</div>}
        </div>
      </div>
    </section>
  );
}
