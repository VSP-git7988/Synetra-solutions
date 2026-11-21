import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import Reveal from '@/components/Reveal';
import { Eyebrow, Icon, PixelBullet, PixelMosaic } from '@/components/Brand';
import { services, serviceImage } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'AI, cloud and infrastructure projects, data management, IT staffing and executive search from Synetra Solutions.',
};

const ART: (0 | 1 | 2 | 3)[][][] = [
  [[0, 3, 3, 0], [2, 2, 3, 3], [1, 2, 2, 0], [1, 1, 0, 0]],
  [[1, 1, 1, 1], [2, 0, 0, 2], [2, 0, 0, 2], [3, 3, 3, 3]],
  [[0, 2, 2, 0], [2, 1, 1, 2], [0, 3, 3, 0], [3, 0, 0, 3]],
  [[3, 0, 3, 0], [0, 2, 0, 3], [1, 1, 2, 0], [1, 1, 1, 2]],
  [[1, 2, 3, 0], [1, 2, 3, 0], [1, 2, 3, 3], [1, 2, 2, 3]],
  [[0, 0, 3, 3], [0, 2, 3, 0], [1, 2, 0, 0], [1, 0, 0, 0]],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Everything you need to plan, build and staff technology.</>}
        text="Six connected service lines, one accountable partner. Engage us for a single expert, a delivery team or a complete programme."
        crumbs={[{ label: 'Services' }]}
      />

      <section className="pb-8 pt-20 sm:pt-28">
        <div className="container-site space-y-8">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article id={s.slug} className="card scroll-mt-28 grid items-center gap-10 overflow-hidden p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr]">
                <div className={i % 2 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-5xl font-bold text-transparent sm:text-6xl" style={{ WebkitTextStroke: '1.5px #0162B6' }}>{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-synetra-mist text-synetra-blue"><Icon name={s.icon} /></span>
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">{s.title}</h2>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-synetra-slate">{s.summary}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.offerings.map((o) => <li key={o} className="flex gap-3 text-[16px]"><PixelBullet />{o}</li>)}
                  </ul>
                  <div className="mt-9">
                    {s.hasDetail ? (
                      <Link href={`/services/${s.slug}/`} className="btn-primary">View details <ArrowRight className="h-4 w-4" /></Link>
                    ) : (
                      <Link href={`/contact/?service=${s.slug}`} className="btn-outline">Discuss this service <ArrowRight className="h-4 w-4" /></Link>
                    )}
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={serviceImage(s)} alt={s.title} className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pt-16">
        <div className="container-site text-center">
          <Eyebrow>Not sure which fits?</Eyebrow>
          <p className="mx-auto mt-4 max-w-2xl font-display text-2xl font-semibold text-synetra-navy">Most clients use two or three of our services together. We&apos;ll help you find the right mix.</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
