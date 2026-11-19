'use client';
import { useEffect, useState } from 'react';

/** First-visit intro: the six logo pixels assemble, a counter runs, then the curtain lifts. */
const PIX: [number, number, string][] = [
  [1, 0, '#0B3A86'], [2, 0, '#0097DF'], [0, 1, '#0B3A86'], [1, 1, '#042257'], [2, 1, '#0162B6'], [1, 2, '#0162B6'],
];

export default function Preloader() {
  const [n, setN] = useState(0);
  const [phase, setPhase] = useState<'on' | 'out' | 'done'>('on');

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem('syn-intro') === '1'; sessionStorage.setItem('syn-intro', '1'); } catch {}
    if (seen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setPhase('done'); return; }
    document.documentElement.style.overflow = 'hidden';
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1500);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else { setPhase('out'); setTimeout(() => { setPhase('done'); document.documentElement.style.overflow = ''; }, 900); }
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); document.documentElement.style.overflow = ''; };
  }, []);

  if (phase === 'done') return null;
  return (
    <div
      className={`fixed inset-0 z-[300] flex flex-col items-center justify-center bg-synetra-abyss transition-transform duration-[900ms] ease-[cubic-bezier(.8,0,.2,1)] ${phase === 'out' ? '-translate-y-full' : ''}`}
      aria-hidden
    >
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => {
          const c = i % 3, r = Math.floor(i / 3);
          const p = PIX.findIndex(([x, y]) => x === c && y === r);
          return (
            <span
              key={i}
              className="h-7 w-7 rounded-[5px] transition-all duration-500"
              style={{
                background: p >= 0 ? PIX[p][2] : 'transparent',
                opacity: p >= 0 && n > p * 14 ? 1 : 0,
                transform: p >= 0 && n > p * 14 ? 'scale(1)' : 'scale(.3)',
              }}
            />
          );
        })}
      </div>
      <p className="mt-10 font-display text-sm tracking-[0.4em] text-white/60">SYNETRA</p>
      <p className="absolute bottom-8 right-8 font-display text-6xl font-light text-white/90 tabular-nums sm:text-8xl">{n}</p>
      <div className="absolute bottom-0 left-0 h-[2px] bg-synetra-sky" style={{ width: `${n}%` }} />
    </div>
  );
}
