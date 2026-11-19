'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { industries, industryHref } from '@/data/industries';

type C = 0 | 1 | 2 | 3;
const ART: C[][][] = [
  [[1, 1, 0, 2], [1, 2, 2, 0], [0, 2, 3, 3], [2, 0, 3, 1]],
  [[3, 0, 2, 2], [0, 2, 2, 1], [2, 2, 1, 0], [1, 1, 0, 3]],
  [[0, 2, 2, 0], [2, 3, 3, 2], [2, 3, 3, 2], [0, 1, 1, 0]],
];
const COL = ['', 'bg-synetra-navy', 'bg-synetra-blue', 'bg-synetra-sky'];

/** Huge editorial rows. On desktop, hovering a row floats a preview card that follows the cursor. */
export default function IndustryList() {
  const [hover, setHover] = useState<number | null>(null);
  const card = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, cx: 0, cy: 0 });

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      const p = pos.current; p.cx += (p.x - p.cx) * 0.12; p.cy += (p.y - p.cy) * 0.12;
      if (card.current) card.current.style.transform = `translate3d(${p.cx}px, ${p.cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative" onMouseMove={(e) => { pos.current.x = e.clientX; pos.current.y = e.clientY; }} onMouseLeave={() => setHover(null)}>
      <ul className="border-t border-synetra-navy/15">
        {industries.map((ind, i) => (
          <li key={ind.slug} className="border-b border-synetra-navy/15">
            <Link
              href={industryHref(ind)}
              onMouseEnter={() => setHover(i)}
              data-cursor="Explore"
              className="group relative grid items-center gap-4 overflow-hidden py-8 sm:py-12 lg:grid-cols-[80px_1fr_auto]"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-synetra-navy transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-y-100" />
              <span className="relative font-display text-sm text-synetra-blue transition-colors group-hover:text-synetra-sky lg:pl-4">0{i + 1}</span>
              <span className="relative font-display text-4xl leading-none text-synetra-navy transition-all duration-500 group-hover:translate-x-4 group-hover:text-white sm:text-6xl lg:text-7xl">{ind.title}</span>
              <span className="relative flex items-center gap-6 lg:pr-4">
                <span className="max-w-xs text-[15px] text-synetra-slate transition-colors group-hover:text-white/70 lg:hidden xl:block">{ind.summary}</span>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-synetra-navy/20 text-synetra-navy transition-all duration-500 group-hover:rotate-45 group-hover:border-synetra-sky group-hover:bg-synetra-sky group-hover:text-white"><ArrowUpRight className="h-6 w-6" /></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div ref={card} className="pointer-events-none fixed left-0 top-0 z-[70] hidden lg:block" aria-hidden>
        <div className={`w-[280px] rounded-[28px] bg-white p-6 shadow-[0_40px_80px_-30px_rgba(2,10,28,.6)] transition-all duration-500 ${hover === null ? 'scale-50 opacity-0' : 'scale-100 opacity-100'}`}>
          {hover !== null && (
            <>
              <div className="flex aspect-square items-center justify-center rounded-[20px] bg-synetra-mist">
                <div className="grid grid-cols-4 gap-2">
                  {ART[hover].flat().map((c, k) => <span key={k} className={`h-9 w-9 rounded-[5px] ${COL[c]}`} />)}
                </div>
              </div>
              <ul className="mt-5 space-y-2">
                {industries[hover].points.map((p) => <li key={p} className="flex gap-2 text-[13px] leading-snug text-synetra-ink"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-[1px] bg-synetra-sky" />{p}</li>)}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
