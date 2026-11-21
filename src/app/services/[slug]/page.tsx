import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import Reveal from '@/components/Reveal';
import { Eyebrow, Icon } from '@/components/Brand';
import { services, serviceHref, serviceImage } from '@/data/services';
import { industries, industryHref } from '@/data/industries';

export function generateStaticParams() {
  return services.filter((s) => s.detail).map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  return { title: s?.title, description: s?.summary };
}

const SECTIONS = [
  ['overview', 'Overview'], ['offer', 'What we offer'], ['approach', 'Our approach'],
  ['use-cases', 'Use cases'], ['outcomes', 'Outcomes'], ['industries', 'Industries'],
];

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s || !s.detail) notFound();
  const d = s.detail;
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Service" title={s.title} text={d.tagline} crumbs={[{ label: 'Services', href: '/services/' }, { label: s.title }]}>
        <Link href={`/contact/?service=${s.slug}`} className="btn-white">Talk to a consultant <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>

      <div className="container-site grid gap-12 pb-8 pt-20 sm:pt-28 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-synetra-slate">On this page</p>
            <ul className="mt-4 space-y-1 border-l border-synetra-line">
              {SECTIONS.map(([id, label]) => (
                <li key={id}><a href={`#${id}`} className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[15px] text-synetra-slate hover:border-synetra-blue hover:text-synetra-blue">{label}</a></li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="min-w-0 space-y-24">
          <section id="overview" className="scroll-mt-28">
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">From pilot projects to production results.</h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={serviceImage(s)} alt={s.title} className="mt-8 aspect-[16/8] w-full rounded-xl object-cover shadow-md" />
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-synetra-slate">
                {d.overview.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
              </div>
            </Reveal>
          </section>

          <section id="offer" className="scroll-mt-28">
            <Reveal><Eyebrow>What we offer</Eyebrow><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Capabilities across the AI lifecycle.</h2></Reveal>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2">
              {d.offer.map((o, i) => (
                <Reveal as="li" key={o.title} delay={(i % 2) * 70} className="card flex gap-5 p-6">
                  <span className="font-display text-sm font-bold text-synetra-sky">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{o.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-synetra-slate">{o.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </section>

          <section id="approach" className="scroll-mt-28">
            <Reveal><Eyebrow>Our approach</Eyebrow><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Four steps, with value proven early.</h2></Reveal>
            <div className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-5">
              <span aria-hidden className="absolute left-0 right-0 top-[22px] hidden h-1 rounded-full bg-gradient-to-r from-synetra-navy via-synetra-blue to-synetra-sky md:block" />
              {d.approach.map((a, i) => (
                <Reveal key={a.title} delay={i * 90} className="relative">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-white bg-synetra-navy font-display font-bold text-white shadow-md">{i + 1}</span>
                  <h3 className="mt-5 text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-synetra-slate">{a.text}</p>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="use-cases" className="scroll-mt-28">
            <Reveal><Eyebrow>Use cases</Eyebrow><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Where AI pays off first.</h2></Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {d.useCases.map((u, i) => (
                <Reveal key={u.title} delay={(i % 2) * 70} className="card group p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-synetra-mist text-synetra-blue transition-colors group-hover:bg-synetra-blue group-hover:text-white"><Icon name={u.icon} /></span>
                  <h3 className="mt-5 text-xl font-semibold">{u.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-synetra-slate">{u.text}</p>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="outcomes" className="scroll-mt-28">
            <Reveal className="overflow-hidden rounded-[2rem] bg-synetra-navy p-8 text-white sm:p-12">
              <Eyebrow light>Outcomes</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold !text-white sm:text-4xl">What our clients get out of it.</h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {d.outcomes.map((o) => (
                  <div key={o.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <p className="font-display text-3xl font-bold text-synetra-sky">{o.value}</p>
                    <p className="mt-2 text-[15px] text-white/80">{o.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <section id="industries" className="scroll-mt-28">
            <Reveal><Eyebrow>Industries</Eyebrow><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Applied across the sectors we know best.</h2></Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((ind) => (
                <Link key={ind.slug} href={industryHref(ind)} className="inline-flex items-center gap-2 rounded-full border border-synetra-line px-5 py-3 font-medium text-synetra-navy transition hover:border-synetra-sky hover:text-synetra-blue">
                  <Icon name={ind.icon} className="h-4 w-4" />{ind.title}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-synetra-slate">Explore other services</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {others.map((o) => (
                <Link key={o.slug} href={serviceHref(o)} className="card group flex items-center justify-between gap-4 p-5">
                  <span className="flex items-center gap-3"><span className="text-synetra-blue"><Icon name={o.icon} className="h-5 w-5" /></span><span className="font-display font-semibold text-synetra-navy">{o.title}</span></span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-synetra-slate group-hover:text-synetra-blue" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
      <CTA />
    </>
  );
}
