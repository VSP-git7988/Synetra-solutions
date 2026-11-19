'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { steps } from '@/data/site';
gsap.registerPlugin(ScrollTrigger);

const BG = ['bg-white', 'bg-synetra-mist', 'bg-gradient-to-br from-synetra-blue to-synetra-sky', 'bg-synetra-navy'];

/** Cards pin on top of each other as you scroll; earlier cards shrink back like a deck. */
export default function StackingSteps() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cards = gsap.utils.toArray<HTMLElement>(ref.current!.querySelectorAll('[data-card]'));
    const ctx = gsap.context(() => {
      cards.forEach((c, i) => {
        if (i === cards.length - 1) return;
        gsap.to(c.firstElementChild, {
          scale: 0.9 + i * 0.02, filter: 'brightness(0.86)', ease: 'none',
          scrollTrigger: { trigger: cards[i + 1], start: 'top 85%', end: 'top 20%', scrub: true },
        });
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={ref} className="relative">
      {steps.map((s, i) => {
        const dark = i >= 2;
        return (
          <div key={s.title} data-card className="sticky pb-6" style={{ top: `${110 + i * 26}px` }}>
            <div className={`origin-top rounded-[36px] border border-synetra-navy/10 p-8 shadow-[0_30px_60px_-40px_rgba(2,10,28,.5)] sm:p-14 ${BG[i]}`}>
              <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
                <div>
                  <span className={`font-display text-sm ${dark ? 'text-white/70' : 'text-synetra-blue'}`}>Step 0{i + 1}</span>
                  <h3 className={`mt-4 font-display text-5xl sm:text-7xl ${dark ? '!text-white' : ''}`}>{s.title}</h3>
                </div>
                <div className="md:pb-3">
                  <div className="mb-6 flex gap-1.5" aria-hidden>
                    {[0, 1, 2, 3].map((k) => <span key={k} className={`h-2.5 w-10 rounded-full ${k <= i ? (dark ? 'bg-white' : 'bg-synetra-sky') : dark ? 'bg-white/25' : 'bg-synetra-navy/10'}`} />)}
                  </div>
                  <p className={`text-lg leading-relaxed sm:text-xl ${dark ? 'text-white/85' : 'text-synetra-slate'}`}>{s.text}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
