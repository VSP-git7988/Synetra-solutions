'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

/** Large statement whose words light up one by one as you scroll. Wrap emphasis words in *asterisks*. */
export default function ScrubText({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const el = ref.current!;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const words = el.querySelectorAll('[data-w]');
    const ctx = gsap.context(() => {
      gsap.fromTo(words, { opacity: 0.12 }, {
        opacity: 1, ease: 'none', stagger: 0.08,
        scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <p ref={ref} className={className}>
      {text.split(' ').map((w, i) => {
        const em = w.startsWith('*');
        const clean = w.replace(/\*/g, '');
        return (
          <span key={i} data-w className={`inline-block pr-[0.25em] ${em ? 'serif-i text-gradient' : ''}`}>{clean}</span>
        );
      })}
    </p>
  );
}
