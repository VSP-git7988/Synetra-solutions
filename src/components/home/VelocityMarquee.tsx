'use client';
import { useEffect, useRef } from 'react';

/** Two giant rows of words drifting in opposite directions; scrolling speeds them up. */
export default function VelocityMarquee({ rows }: { rows: string[][] }) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let x = 0, v = 0, lastY = window.scrollY, raf = 0;
    const loop = () => {
      const y = window.scrollY; v += (Math.abs(y - lastY) * 0.06 - v) * 0.1; lastY = y;
      x += 0.35 + v;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const w = el.scrollWidth / 2;
        const off = (x % w);
        el.style.transform = `translate3d(${i % 2 ? -w + off : -off}px,0,0)`;
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div className="space-y-2 overflow-hidden py-6 sm:space-y-4" aria-hidden>
      {rows.map((row, i) => (
        <div key={i} ref={(el) => { refs.current[i] = el; }} className="flex w-max whitespace-nowrap will-change-transform">
          {[...row, ...row, ...row, ...row].map((w, k) => (
            <span key={k} className={`flex items-center gap-6 pr-6 font-display text-[13vw] leading-[1] sm:gap-10 sm:pr-10 sm:text-[8.5vw] ${(k + i) % 2 ? 'outline-text text-synetra-navy/30' : 'text-synetra-navy'}`}>
              {w}
              <span className="inline-grid grid-cols-2 gap-[0.06em]">
                <span className="h-[0.16em] w-[0.16em] rounded-[0.03em] bg-synetra-sky" /><span className="h-[0.16em] w-[0.16em] rounded-[0.03em] bg-synetra-blue" />
                <span className="h-[0.16em] w-[0.16em] rounded-[0.03em] bg-synetra-navy" /><span />
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
