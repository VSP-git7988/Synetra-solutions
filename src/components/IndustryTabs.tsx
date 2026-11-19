'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { industries, industryHref } from '@/data/industries';
import { Icon, PixelBullet, PixelMosaic } from './Brand';

const ART: (0 | 1 | 2 | 3)[][][] = [
  [[1, 1, 0, 2], [1, 2, 2, 0], [0, 2, 3, 3], [2, 0, 3, 1]],
  [[3, 0, 2, 2], [0, 2, 2, 1], [2, 2, 1, 0], [1, 1, 0, 3]],
  [[0, 2, 2, 0], [2, 3, 3, 2], [2, 3, 3, 2], [0, 1, 1, 0]],
];

export default function IndustryTabs() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const n = (i + (e.key === 'ArrowRight' ? 1 : industries.length - 1)) % industries.length;
    setActive(n);
    refs.current[n]?.focus();
  };
  const ind = industries[active];

  return (
    <div>
      <div role="tablist" aria-label="Industries" className="flex flex-wrap gap-2 rounded-full border border-synetra-line bg-white p-1.5 sm:inline-flex">
        {industries.map((x, i) => (
          <button
            key={x.slug}
            ref={(el) => { refs.current[i] = el; }}
            role="tab"
            id={`tab-${x.slug}`}
            aria-selected={active === i}
            aria-controls={`panel-${x.slug}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium transition-all ${active === i ? 'bg-synetra-navy text-white' : 'text-synetra-navy hover:bg-synetra-mist'}`}
          >
            <Icon name={x.icon} className="h-4 w-4" />
            {x.title}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${ind.slug}`}
        aria-labelledby={`tab-${ind.slug}`}
        key={ind.slug}
        className="mt-8 grid items-center gap-10 rounded-[2rem] border border-synetra-line bg-white p-8 sm:p-12 lg:grid-cols-[1.25fr_1fr]"
      >
        <div>
          <h3 className="text-2xl font-semibold sm:text-3xl">{ind.title}</h3>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-synetra-slate">{ind.overview}</p>
          <ul className="mt-7 space-y-3">
            {ind.points.map((p) => (
              <li key={p} className="flex gap-3 text-[16px] text-synetra-ink"><PixelBullet />{p}</li>
            ))}
          </ul>
          <Link href={industryHref(ind)} className="btn-outline mt-9">
            Explore {ind.title} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative mx-auto flex aspect-square w-full max-w-[340px] items-center justify-center rounded-[2rem] bg-synetra-mist">
          <PixelMosaic pattern={ART[active]} size="h-12 w-12 sm:h-14 sm:w-14" gap="gap-3" />
          <span className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-synetra-blue shadow-[0_12px_30px_-14px_rgba(4,34,87,.45)]">
            <Icon name={ind.icon} className="h-7 w-7" />
          </span>
        </div>
      </div>
    </div>
  );
}
