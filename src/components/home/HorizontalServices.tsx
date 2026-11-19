'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { services, serviceHref } from '@/data/services';
gsap.registerPlugin(ScrollTrigger);

type C = 0 | 1 | 2 | 3;
const ART: C[][][] = [
  [[0, 0, 3, 3], [0, 2, 2, 3], [1, 2, 0, 0], [1, 1, 0, 0]],
  [[1, 1, 1, 1], [2, 0, 0, 2], [2, 0, 0, 2], [3, 3, 3, 3]],
  [[0, 2, 2, 0], [2, 1, 1, 2], [0, 3, 3, 0], [3, 0, 0, 3]],
  [[0, 3, 0, 0], [3, 2, 3, 0], [0, 1, 0, 0], [1, 1, 1, 0]],
  [[1, 2, 3, 0], [1, 2, 3, 0], [1, 2, 3, 3], [1, 2, 2, 3]],
  [[0, 0, 3, 3], [0, 2, 3, 0], [1, 2, 0, 0], [1, 0, 0, 0]],
];
const COL = ['', 'bg-white', 'bg-synetra-sky', 'bg-synetra-glow/60'];

export default function HorizontalServices() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP wraps the pinned element in a "pin-spacer" div. We pin an inner div (never the
    // element React mounts/unmounts directly), so React can always remove the outer <section>.
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const t = track.current!;
      const dist = () => t.scrollWidth - window.innerWidth + 80;
      gsap.to(t, {
        x: () => -dist(), ease: 'none',
        scrollTrigger: { trigger: wrap.current, start: 'top top', end: () => `+=${dist()}`, scrub: 1, pin: true, invalidateOnRefresh: true, anticipatePin: 1 },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="relative bg-synetra-abyss text-white">
    <div ref={wrap} className="relative overflow-hidden bg-synetra-abyss lg:h-screen">
      <div className="flex h-full flex-col justify-center py-24 lg:py-0">
        <div className="container-site flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow !text-synetra-sky">( 02 ) What we do</span>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.05] !text-white sm:text-6xl">Six disciplines. <span className="serif-i text-glow">One</span> partner.</h2>
          </div>
          <p className="max-w-sm text-white/60">Scroll to explore. Each discipline works on its own, or together with the others as one programme.</p>
        </div>

        <div ref={track} className="mt-14 flex gap-5 px-5 will-change-transform max-lg:flex-col sm:px-8 lg:w-max lg:pl-[max(2rem,calc((100vw-1320px)/2+2rem))]">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={serviceHref(s)}
              data-cursor="View"
              className={`group relative flex shrink-0 flex-col justify-between overflow-hidden rounded-[32px] p-8 transition-colors duration-500 lg:h-[58vh] lg:max-h-[540px] lg:min-h-[440px] lg:w-[400px] ${i === 0 ? 'bg-gradient-to-br from-synetra-blue via-synetra-sky to-synetra-glow' : 'glass hover:bg-white/[0.08]'}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-sm text-white/70">0{i + 1}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-synetra-navy"><ArrowUpRight className="h-5 w-5" /></span>
              </div>
              <div className="my-10 grid w-max grid-cols-4 gap-2 transition-transform duration-700 group-hover:scale-110 lg:my-0" aria-hidden>
                {ART[i].flat().map((c, k) => <span key={k} className={`h-7 w-7 rounded-[5px] ${c ? (i === 0 && c === 2 ? 'bg-synetra-navy' : COL[c]) : ''} ${c && k % 4 === 1 ? 'pixel-shimmer' : ''}`} style={{ animationDelay: `${k * 0.2}s` }} />)}
              </div>
              <div>
                <h3 className="font-display text-2xl leading-tight !text-white">{s.title}</h3>
                <p className={`mt-3 text-[15px] leading-relaxed ${i === 0 ? 'text-white/90' : 'text-white/60'}`}>{s.summary}</p>
              </div>
            </Link>
          ))}
          <Link href="/services/" className="group flex shrink-0 items-center justify-center rounded-[32px] border border-dashed border-white/20 p-8 lg:h-[58vh] lg:max-h-[540px] lg:min-h-[440px] lg:w-[320px]">
            <span className="text-center font-display text-2xl text-white/80 transition-colors group-hover:text-synetra-sky">All services<br /><span className="serif-i text-4xl">→</span></span>
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
}