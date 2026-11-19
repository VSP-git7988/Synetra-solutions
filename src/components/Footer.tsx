import Link from 'next/link';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { Logo } from './Brand';
import { services, serviceHref } from '@/data/services';
import { industries, industryHref } from '@/data/industries';
import { site } from '@/data/site';

export default function Footer() {
  const head = 'text-[11px] font-semibold uppercase tracking-[0.28em] text-synetra-blue';
  const link = 'group inline-flex items-center gap-1 text-[15px] text-synetra-navy/75 transition-colors hover:text-synetra-navy';
  return (
    <footer className="relative mt-auto overflow-hidden bg-white">
      <div className="container-site pb-10 pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo className="h-14 sm:h-16" />
            <p className="mt-8 max-w-sm text-[16px] leading-relaxed text-synetra-slate">
              An IT consulting partner that plans, builds and runs technology, and brings in the people to deliver it.
            </p>
            <a href={`mailto:${site.email}`} className="mt-8 inline-block font-display text-2xl text-synetra-navy underline decoration-synetra-sky decoration-2 underline-offset-8 transition-colors hover:text-synetra-blue sm:text-3xl">
              {site.email}
            </a>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className={head}>Services</p>
              <ul className="mt-6 space-y-3">{services.map((s) => <li key={s.slug}><Link href={serviceHref(s)} className={link}>{s.title}</Link></li>)}</ul>
            </div>
            <div>
              <p className={head}>Industries</p>
              <ul className="mt-6 space-y-3">{industries.map((i) => <li key={i.slug}><Link href={industryHref(i)} className={link}>{i.title}</Link></li>)}</ul>
              <p className={`${head} mt-10`}>Company</p>
              <ul className="mt-6 space-y-3">
                <li><Link href="/about/" className={link}>About Us</Link></li>
                <li><Link href="/contact/" className={link}>Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <p className={head}>Contact</p>
              <ul className="mt-6 space-y-3 text-[15px] text-synetra-navy/75">
                <li><a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="hover:text-synetra-navy">{site.phone}</a></li>
                <li>{site.address}</li>
              </ul>
              <a href={site.linkedin} className="mt-8 inline-flex items-center gap-3 rounded-full border border-synetra-navy/15 py-2 pl-2 pr-5 text-sm font-semibold text-synetra-navy transition-colors hover:border-synetra-sky">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-synetra-navy text-white"><Linkedin className="h-4 w-4" /></span> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-synetra-navy/10 pt-8 text-sm text-synetra-slate sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Synetra Solutions LLC. All rights reserved.</p>
          <a href="#main" className="inline-flex items-center gap-2 font-semibold text-synetra-navy">Back to top <ArrowUpRight className="h-4 w-4 -rotate-45" /></a>
        </div>
      </div>
      <div aria-hidden className="h-2 w-full bg-gradient-to-r from-synetra-navy via-synetra-blue to-synetra-sky" />
    </footer>
  );
}
