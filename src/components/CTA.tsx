import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { site } from '@/data/site';

export default function CTA({
  title = 'Ready to start your next technology project?',
  text = 'Talk to a Synetra consultant about your goals. We will recommend the right mix of technology and talent.',
}: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-synetra-blue">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/page-banner.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="container-site relative flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight !text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-white/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact/" className="btn-white">Contact Us <ArrowRight className="h-4 w-4" /></Link>
          <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="btn-ghost-light"><Phone className="h-4 w-4" /> Call Now</a>
        </div>
      </div>
    </section>
  );
}
