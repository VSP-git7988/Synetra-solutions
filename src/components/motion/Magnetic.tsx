'use client';
import { useRef } from 'react';

/** Wrap a button/link so it is gently pulled toward the cursor. */
export default function Magnetic({ children, strength = 0.35, className = '' }: { children: React.ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${(e.clientY - r.top - r.height / 2) * strength}px)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ''; };
  return (
    <span ref={ref} onMouseMove={move} onMouseLeave={leave} className={`inline-block transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${className}`}>
      {children}
    </span>
  );
}
