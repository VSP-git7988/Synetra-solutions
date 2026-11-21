import Link from 'next/link';
import { ChevronRight, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './Brand';
import { services, serviceHref } from '@/data/services';
import { industries, industryHref } from '@/data/industries';
import { site } from '@/data/site';

export default function Footer() {
  const head = 'font-display text-lg font-semibold text-white';
  const link = 'flex items-center gap-1.5 text-[15px] text-white/70 transition-colors hover:text-white';
  return (
    <footer className="mt-auto bg-synetra-navy text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <span className="inline-flex rounded-lg bg-white px-4 py-3"><Logo className="h-11" /></span>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
            Synetra Solutions LLC is an IT consulting partner for AI, cloud, data, IT project delivery and technology talent.
          </p>
          <a href={site.linkedin} aria-label="LinkedIn" className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-synetra-sky"><Linkedin className="h-4 w-4" /></a>
        </div>
        <div>
          <p className={head}>Services</p>
          <ul className="mt-5 space-y-3">{services.map((s) => <li key={s.slug}><Link href={serviceHref(s)} className={link}><ChevronRight className="h-4 w-4 text-synetra-sky" />{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <p className={head}>Quick Links</p>
          <ul className="mt-5 space-y-3">
            {[{ t: 'Home', h: '/' }, { t: 'About', h: '/about/' }, { t: 'Services', h: '/services/' }, { t: 'Industries', h: '/industries/' }, { t: 'Contact Us', h: '/contact/' }].map((l) => (
              <li key={l.t}><Link href={l.h} className={link}><ChevronRight className="h-4 w-4 text-synetra-sky" />{l.t}</Link></li>
            ))}
          </ul>
          <p className={`${head} mt-8`}>Industries</p>
          <ul className="mt-5 space-y-3">{industries.map((i) => <li key={i.slug}><Link href={industryHref(i)} className={link}><ChevronRight className="h-4 w-4 text-synetra-sky" />{i.title}</Link></li>)}</ul>
        </div>
        <div>
          <p className={head}>Contact Us</p>
          <ul className="mt-5 space-y-4 text-[15px] text-white/75">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-synetra-sky" />{site.address}</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-synetra-sky" /><a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white">{site.phone}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-synetra-sky" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Synetra Solutions LLC. All rights reserved.</p>
          <p>IT Consulting · Cloud · AI · Talent</p>
        </div>
      </div>
    </footer>
  );
}
