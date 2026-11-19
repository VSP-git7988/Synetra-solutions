import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import Reveal from '@/components/Reveal';
import { Eyebrow, Icon, PixelMosaic } from '@/components/Brand';
import { industries } from '@/data/industries';
import { services, serviceHref } from '@/data/services';

export function generateStaticParams() {
  return industries.filter((i) => i.detail).map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const i = industries.find((x) => x.slug === params.slug);
  return { title: i?.title, description: i?.summary };
}

export default function IndustryDetail({ params }: { params: { slug: string } }) {
  const ind = industries.find((x) => x.slug === params.slug);
  if (!ind || !ind.detail) notFound();
  const d = ind.detail;
  const svc = (slug: string) => services.find((s) => s.slug === slug)!;

  return (
    <>
      <PageHero eyebrow="Industry" title={ind.title} text={d.tagline} crumbs={[{ label: 'Industries', href: '/industries/' }, { label: ind.title }]}>
        <Link href="/contact/" className="btn-white">Talk to a consultant <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>

      <section className="pb-20 pt-20 sm:pt-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Speed and control, at the same time.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-synetra-slate">{d.intro.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
          </Reveal>
          <Reveal delay={120} className="relative mx-auto flex aspect-square w-full max-w-[380px] items-center justify-center rounded-[2rem] bg-synetra-mist">
            <PixelMosaic pattern={[[1, 1, 0, 2, 3], [1, 2, 2, 0, 3], [0, 2, 3, 3, 0], [2, 0, 3, 1, 1], [3, 3, 0, 1, 0]]} size="h-11 w-11" gap="gap-3" />
            <span className="absolute -bottom-5 -right-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-synetra-navy text-white shadow-xl"><Icon name={ind.icon} className="h-8 w-8" /></span>
          </Reveal>
        </div>
      </section>

      <section className="bg-synetra-mist py-20 sm:py-24">
        <div className="container-site">
          <Reveal className="max-w-2xl"><Eyebrow>Challenges</Eyebrow><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">What we hear from financial leaders.</h2></Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.challenges.map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="card overflow-hidden p-7 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-synetra-sky">
                <p className="font-display text-sm font-bold text-synetra-blue">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-synetra-slate">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>How Synetra helps</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Technology, data and people, working as one.</h2>
            <p className="mt-5 text-lg text-synetra-slate">Each answer draws on one of our service lines, so you work with one partner and one team.</p>
          </Reveal>
          <div className="space-y-4">
            {d.help.map((h, i) => {
              const s = svc(h.service);
              return (
                <Reveal key={h.title} delay={i * 70}>
                  <Link href={serviceHref(s)} className="card group flex gap-6 p-7">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-synetra-mist text-synetra-blue transition-colors group-hover:bg-synetra-blue group-hover:text-white"><Icon name={s.icon} /></span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{h.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-synetra-slate">{h.text}</p>
                      <p className="mt-3 text-sm font-semibold text-synetra-blue">{s.title}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-synetra-slate group-hover:text-synetra-blue" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-site">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-synetra-slate">Relevant services</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.services.map((slug) => {
              const s = svc(slug);
              return (
                <Link key={slug} href={serviceHref(s)} className="card group flex items-center justify-between gap-3 p-5">
                  <span className="flex items-center gap-3"><span className="text-synetra-blue"><Icon name={s.icon} className="h-5 w-5" /></span><span className="font-display font-semibold text-synetra-navy">{s.title}</span></span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-synetra-slate group-hover:text-synetra-blue" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <CTA title="Modernise without adding risk." />
    </>
  );
}
