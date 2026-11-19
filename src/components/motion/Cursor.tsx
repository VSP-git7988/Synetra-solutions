'use client';
import { useEffect, useRef, useState } from 'react';

/** Two-part cursor: a precise dot and a lagging ring that grows over interactive elements.
 *  Elements with data-cursor="View" show a label inside the ring. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.body.classList.add('has-cursor');
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      const t = (e.target as HTMLElement).closest('a,button,[data-cursor],input,select,textarea,label') as HTMLElement | null;
      setActive(!!t);
      setLabel(t?.dataset.cursor ?? '');
    };
    const loop = () => {
      rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener('mousemove', move);
    raf = requestAnimationFrame(loop);
    return () => { removeEventListener('mousemove', move); cancelAnimationFrame(raf); document.body.classList.remove('has-cursor'); };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[200] -ml-1 -mt-1 h-2 w-2 rounded-full bg-synetra-sky mix-blend-normal" aria-hidden />
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[199]" aria-hidden>
        <div
          className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300 ease-out ${
            label ? 'h-24 w-24 border-transparent bg-synetra-sky text-white' : active ? 'h-14 w-14 border-synetra-sky bg-synetra-sky/10' : 'h-9 w-9 border-synetra-sky/60'
          }`}
        >
          {label && <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">{label}</span>}
        </div>
      </div>
    </>
  );
}
