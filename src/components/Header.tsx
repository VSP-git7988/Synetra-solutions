'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Plus, X } from 'lucide-react';
import { Logo, Icon } from './Brand';
import { services, serviceHref } from '@/data/services';
import { industries, industryHref } from '@/data/industries';

type MenuKey = 'services' | 'industries' | null;

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobile, setMobile] = useState(false);
  const last = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 160 && y > last.current && !open);
      last.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => { document.documentElement.style.overflow = mobile ? 'hidden' : ''; }, [mobile]);
  const close = () => { setOpen(null); setMobile(false); };
  const link = 'rounded-full px-4 py-2 text-[14px] font-semibold text-synetra-navy transition-colors hover:bg-synetra-mist';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] px-3 pt-3 transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] sm:px-5 sm:pt-4 ${hidden ? '-translate-y-[130%]' : ''}`}
        onMouseLeave={() => setOpen(null)}
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="flex items-center justify-between rounded-full border border-white bg-white py-2 pl-5 pr-2 shadow-[0_20px_50px_-25px_rgba(2,10,28,.55)] backdrop-blur-xl sm:pl-7">
            <Logo className="h-9 sm:h-10" />

            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
              <Link href="/" onMouseEnter={() => setOpen(null)} className={link}>Home</Link>
              <Link href="/about/" onMouseEnter={() => setOpen(null)} className={link}>About</Link>
              {(['services', 'industries'] as const).map((k) => (
                <button
                  key={k}
                  className={`${link} flex items-center gap-1.5 ${open === k ? 'bg-synetra-mist text-synetra-blue' : ''}`}
                  aria-expanded={open === k}
                  onMouseEnter={() => setOpen(k)}
                  onClick={() => setOpen(open === k ? null : k)}
                >
                  {k === 'services' ? 'Services' : 'Industries'}
                  <Plus className={`h-3.5 w-3.5 transition-transform duration-300 ${open === k ? 'rotate-45' : ''}`} />
                </button>
              ))}
              <Link href="/contact/" onMouseEnter={() => setOpen(null)} className={link}>Contact Us</Link>
            </nav>

            <div className="flex items-center gap-2">
              <Link href="/contact/" className="group hidden items-center gap-3 rounded-full bg-synetra-abyss py-2 pl-5 pr-2 text-[14px] font-semibold text-white transition-colors hover:bg-synetra-blue sm:flex">
                Let&apos;s talk
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-synetra-sky transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span>
              </Link>
              <button className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-synetra-abyss lg:hidden" aria-label="Open menu" onClick={() => setMobile(true)}>
                <span className="h-[2px] w-5 rounded bg-white" /><span className="h-[2px] w-3.5 self-center rounded bg-synetra-sky" />
              </button>
            </div>
          </div>

          {/* Mega menu */}
          <div className={`hidden lg:block transition-all duration-400 ${open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'}`}>
            <div className="mt-3 overflow-hidden rounded-[32px] border border-white/10 bg-synetra-abyss/95 p-3 text-white shadow-2xl backdrop-blur-xl">
              {open === 'industries' ? (
                <div className="grid grid-cols-3 gap-2">
                  {industries.map((ind, i) => (
                    <Link key={ind.slug} href={industryHref(ind)} onClick={close} className="group rounded-[24px] p-6 transition-colors hover:bg-white/[0.06]">
                      <span className="font-display text-xs text-synetra-sky">0{i + 1}</span>
                      <p className="mt-6 font-display text-xl text-white">{ind.title}</p>
                      <p className="mt-2 text-sm text-white/55">{ind.summary}</p>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-[1fr_1fr_320px] gap-2">
                  {services.map((s, i) => (
                    <Link key={s.slug} href={serviceHref(s)} onClick={close} className="group flex items-start gap-4 rounded-[24px] p-5 transition-colors hover:bg-white/[0.06]">
                      <span className="font-display text-xs text-synetra-sky">0{i + 1}</span>
                      <span>
                        <span className="block font-display text-[15px] text-white">{s.title}</span>
                        <span className="mt-1 block text-[13px] leading-snug text-white/50">{s.summary}</span>
                      </span>
                    </Link>
                  )).reduce<React.ReactNode[]>((acc, el, i) => { acc.push(el); return acc; }, [])}
                  <div className="relative col-start-3 row-span-3 row-start-1 flex flex-col justify-end overflow-hidden rounded-[24px] bg-gradient-to-br from-synetra-blue to-synetra-sky p-7">
                    <span aria-hidden className="absolute right-6 top-6 grid grid-cols-3 gap-1.5 opacity-50">
                      {[0, 1, 1, 1, 1, 1, 0, 1, 0].map((v, i) => <span key={i} className={`h-4 w-4 rounded-[3px] ${v ? 'bg-white' : ''}`} />)}
                    </span>
                    <p className="font-display text-2xl leading-tight">Not sure where to start?</p>
                    <p className="mt-2 text-sm text-white/80">A 30-minute call with a consultant maps your options.</p>
                    <Link href="/contact/" onClick={close} className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-synetra-navy">Book a call <ArrowUpRight className="h-4 w-4" /></Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-[120] flex flex-col bg-synetra-abyss text-white transition-[clip-path] duration-700 ease-[cubic-bezier(.7,0,.2,1)] lg:hidden ${mobile ? '[clip-path:circle(150%_at_100%_0)]' : 'pointer-events-none [clip-path:circle(0%_at_100%_0)]'}`}>
        <div className="flex items-center justify-between px-5 pt-5">
          <span className="inline-flex rounded-full bg-white px-4 py-2"><Logo className="h-8" /></span>
          <button aria-label="Close menu" onClick={() => setMobile(false)} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10"><X className="h-5 w-5" /></button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-6 py-8" aria-label="Mobile">
          {[{ t: 'Home', h: '/' }, { t: 'About', h: '/about/' }, { t: 'Services', h: '/services/' }, { t: 'Industries', h: '/industries/' }, { t: 'Contact Us', h: '/contact/' }].map((l, i) => (
            <Link key={l.t} href={l.h} onClick={close} className="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-4xl">
              <span className="text-xs text-synetra-sky">0{i + 1}</span>{l.t}
            </Link>
          ))}
          <div className="mt-6 flex flex-wrap gap-2">
            {services.map((s) => <Link key={s.slug} href={serviceHref(s)} onClick={close} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">{s.title}</Link>)}
          </div>
        </nav>
      </div>
    </>
  );
}