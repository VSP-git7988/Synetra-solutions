'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown, Linkedin, Mail, Menu, Phone, X } from 'lucide-react';
import { Logo } from './Brand';
import { services, serviceHref } from '@/data/services';
import { industries, industryHref } from '@/data/industries';
import { site } from '@/data/site';

type MenuKey = 'services' | 'industries' | null;

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobile, setMobile] = useState(false);
  const [acc, setAcc] = useState<MenuKey>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setMobile(false); setOpen(null); }, [path]);
  useEffect(() => { document.body.style.overflow = mobile ? 'hidden' : ''; }, [mobile]);

  const isActive = (h: string) => (h === '/' ? path === '/' : path?.startsWith(h.replace(/\/$/, '')));
  const link = (h: string) =>
    `relative py-2 text-[15px] font-medium transition-colors hover:text-synetra-blue ${isActive(h) ? 'text-synetra-blue' : 'text-synetra-navy'}`;

  const dropdown = (k: Exclude<MenuKey, null>) => {
    const items = k === 'services' ? services.map((s) => ({ t: s.title, h: serviceHref(s) })) : industries.map((i) => ({ t: i.title, h: industryHref(i) }));
    return (
      <div className="relative" onMouseEnter={() => setOpen(k)} onMouseLeave={() => setOpen(null)}>
        <button
          className={`${link(k === 'services' ? '/services/' : '/industries/')} flex items-center gap-1`}
          aria-expanded={open === k}
          onClick={() => setOpen(open === k ? null : k)}
        >
          {k === 'services' ? 'Services' : 'Industries'}
          <ChevronDown className={`h-4 w-4 transition-transform ${open === k ? 'rotate-180' : ''}`} />
        </button>
        <div className={`absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-4 transition-all duration-200 ${open === k ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'}`}>
          <ul className="overflow-hidden rounded-lg border-t-[3px] border-synetra-blue bg-white py-2 shadow-[0_18px_40px_-12px_rgba(4,34,87,.25)]">
            <li>
              <Link href={k === 'services' ? '/services/' : '/industries/'} className="block px-5 py-2.5 text-[14px] font-semibold text-synetra-blue hover:bg-synetra-mist">
                All {k === 'services' ? 'Services' : 'Industries'}
              </Link>
            </li>
            {items.map((l) => (
              <li key={l.t}>
                <Link href={l.h} className="block px-5 py-2.5 text-[14px] text-synetra-navy transition-colors hover:bg-synetra-mist hover:pl-6 hover:text-synetra-blue">{l.t}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Top info bar */}
      <div className="hidden bg-synetra-navy text-[13px] text-white/85 md:block">
        <div className="container-site flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4 text-synetra-sky" />{site.email}</a>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4 text-synetra-sky" />{site.phone}</a>
          </div>
          <div className="flex items-center gap-4">
            <span>Monday – Friday, 9:00 am – 6:00 pm</span>
            <a href={site.linkedin} aria-label="LinkedIn" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-synetra-sky"><Linkedin className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-[0_6px_20px_-10px_rgba(4,34,87,.25)]' : 'border-b border-synetra-line'}`}>
        <div className={`container-site flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-[70px]' : 'h-[84px]'}`}>
          <Logo className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`} />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            <Link href="/" className={link('/')}>Home</Link>
            <Link href="/about/" className={link('/about/')}>About</Link>
            {dropdown('services')}
            {dropdown('industries')}
            <Link href="/contact/" className={link('/contact/')}>Contact Us</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact/" className="btn-primary hidden !py-3 sm:inline-flex">Get in Touch</Link>
            <button className="rounded-md p-2 text-synetra-navy lg:hidden" aria-label="Open menu" onClick={() => setMobile(true)}>
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[60] bg-synetra-navy/50 transition-opacity lg:hidden ${mobile ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setMobile(false)} />
      <aside className={`fixed right-0 top-0 z-[61] flex h-full w-[86%] max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${mobile ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex h-[76px] items-center justify-between border-b border-synetra-line px-5">
          <Logo className="h-10" />
          <button aria-label="Close menu" onClick={() => setMobile(false)} className="rounded-md p-2 text-synetra-navy"><X className="h-6 w-6" /></button>
        </div>
        <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
          <Link href="/" className="block border-b border-synetra-line py-3.5 font-medium text-synetra-navy">Home</Link>
          <Link href="/about/" className="block border-b border-synetra-line py-3.5 font-medium text-synetra-navy">About</Link>
          {(['services', 'industries'] as const).map((k) => (
            <div key={k} className="border-b border-synetra-line">
              <button className="flex w-full items-center justify-between py-3.5 font-medium text-synetra-navy" onClick={() => setAcc(acc === k ? null : k)} aria-expanded={acc === k}>
                {k === 'services' ? 'Services' : 'Industries'}
                <ChevronDown className={`h-5 w-5 transition-transform ${acc === k ? 'rotate-180' : ''}`} />
              </button>
              {acc === k && (
                <div className="pb-3 pl-3">
                  {(k === 'services' ? services.map((s) => ({ t: s.title, h: serviceHref(s) })) : industries.map((i) => ({ t: i.title, h: industryHref(i) }))).map((l) => (
                    <Link key={l.t} href={l.h} className="block py-2 text-[15px] text-synetra-slate">{l.t}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact/" className="block border-b border-synetra-line py-3.5 font-medium text-synetra-navy">Contact Us</Link>
          <Link href="/contact/" className="btn-primary mt-6 w-full justify-center">Get in Touch</Link>
        </nav>
      </aside>
    </>
  );
}
