'use client';
import { useEffect, useRef, useState } from 'react';

export default function Counter({ value }: { value: string }) {
  const num = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.replace(/\d/g, '');
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(num); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const s = performance.now();
      const tick = (t: number) => { const p = Math.min(1, (t - s) / 1600); setN(Math.round(num * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [num]);
  return <span ref={ref}>{n}{suffix}</span>;
}
