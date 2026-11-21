import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import Reveal from '@/components/Reveal';
import { Icon, PixelBullet, PixelMosaic } from '@/components/Brand';
import { industries } from '@/data/industries';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'IT consulting, cloud, AI and talent for financial services, consumer and retail, and health care and life sciences.',
};

const ART: (0 | 1 | 2 | 3)[][][] = [
  [[1, 1, 0, 2], [1, 2, 2, 0], [0, 2, 3, 3], [2, 0, 3, 1]],
  [[3, 0, 2, 2], [0, 2, 2, 1], [2, 2, 1, 0], [1, 1, 0, 3]],
  [[0, 2, 2, 0], [2, 3, 3, 2], [2, 3, 3, 2], [0, 1, 1, 0]],
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector knowledge built into every engagement."
        text="Regulation, customers and data look different in every industry. Our teams bring that context with them from day one."
        crumbs={[{ label: 'Industries' }]}
      />
      <section className="pb-8 pt-20 sm:pt-28">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 90}>
              <article id={ind.slug} className="card flex h-full scroll-mt-28 flex-col overflow-hidden">
                <div className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/industry-${i + 1}.jpg`} alt={ind.title} className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-synetra-mist text-synetra-blue"><Icon name={ind.icon} /></span>
                  <h2 className="mt-5 text-2xl font-semibold">{ind.title}</h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-synetra-slate">{ind.overview}</p>
                  <ul className="mt-6 space-y-3">
                    {ind.points.map((p) => <li key={p} className="flex gap-3 text-[15px]"><PixelBullet />{p}</li>)}
                  </ul>
                  <div className="mt-auto pt-8">
                    {ind.hasDetail ? (
                      <Link href={`/industries/${ind.slug}/`} className="btn-primary">View details <ArrowRight className="h-4 w-4" /></Link>
                    ) : (
                      <Link href="/contact/" className="btn-outline">Discuss your needs <ArrowRight className="h-4 w-4" /></Link>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
