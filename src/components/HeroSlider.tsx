'use client';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    image: '/images/banner-1.jpg',
    tag: 'IT Consulting & AI Solutions',
    title: 'Transform your business with smarter technology',
    text: 'From AI strategy to cloud delivery, we help organisations modernise faster and with less risk.',
    primary: { label: 'Explore Services', href: '/services/' },
  },
  {
    image: '/images/banner-2.jpg',
    tag: 'IT Staffing & Executive Search',
    title: 'The right technology talent, exactly when you need it',
    text: 'Contract, contract-to-hire and permanent IT professionals, screened and ready to contribute.',
    primary: { label: 'Staffing Solutions', href: '/services/#staffing-solutions' },
  },
  {
    image: '/images/banner-3.jpg',
    tag: 'Cloud, Data & Infrastructure',
    title: 'Secure, scalable systems built for growth',
    text: 'Cloud migration, system integration and data management delivered by accountable teams.',
    primary: { label: 'Project Solutions', href: '/services/#project-solutions' },
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((n: number) => setI((n + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setTimeout(() => go(i + 1), 6000);
    return () => clearTimeout(t);
  }, [i, paused, go]);

  return (
    <section
      className="relative h-[560px] overflow-hidden bg-synetra-navy sm:h-[640px] lg:h-[680px]"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, k) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${k === i ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
          aria-hidden={k !== i}
          role="group"
          aria-roledescription="slide"
          aria-label={`${k + 1} of ${SLIDES.length}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.image} alt="" className={`absolute inset-0 h-full w-full object-cover ${k === i ? 'kenburns' : ''}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020A1C]/85 via-[#042257]/60 to-transparent" />
          <div className="container-site relative flex h-full items-center">
            <div className="max-w-2xl text-white">
              <p className={`inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-synetra-glow backdrop-blur transition-all delay-200 duration-700 ${k === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <span className="h-2 w-2 rounded-[2px] bg-synetra-sky" />{s.tag}
              </p>
              <h2 className={`mt-6 text-4xl font-bold leading-[1.15] !text-white transition-all delay-300 duration-700 sm:text-5xl lg:text-[3.6rem] ${k === i ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                {s.title}
              </h2>
              <p className={`mt-5 max-w-xl text-lg leading-relaxed text-white/85 transition-all delay-500 duration-700 ${k === i ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>{s.text}</p>
              <div className={`mt-9 flex flex-wrap gap-3 transition-all delay-700 duration-700 ${k === i ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                <Link href={s.primary.href} className="btn-primary" tabIndex={k === i ? 0 : -1}>{s.primary.label} <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/contact/" className="btn-ghost-light" tabIndex={k === i ? 0 : -1}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button onClick={() => go(i - 1)} aria-label="Previous slide" className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-synetra-navy md:flex">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={() => go(i + 1)} aria-label="Next slide" className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-synetra-navy md:flex">
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container-site flex gap-2">
          {SLIDES.map((_, k) => (
            <button key={k} onClick={() => go(k)} aria-label={`Go to slide ${k + 1}`} aria-current={k === i} className={`h-2 rounded-full transition-all ${k === i ? 'w-10 bg-synetra-sky' : 'w-2 bg-white/50 hover:bg-white'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
