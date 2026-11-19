import Link from 'next/link';
import {
  Brain, Crown, Users, Server, Database, Leaf, Landmark, ShoppingBag, HeartPulse, PhoneCall, ShieldCheck, ShoppingCart, ScanSearch, Target, Lightbulb, Network, Gauge, Award, Globe2, type LucideIcon,
} from 'lucide-react';

/* ---------- Logo ---------- */
export function Logo({ variant = 'color', className = 'h-11' }: { variant?: 'color' | 'white'; className?: string }) {
  const src = variant === 'white' ? '/brand/synetra-logo-white.png' : '/brand/synetra-logo.png';
  return (
    <Link href="/" aria-label="Synetra Solutions LLC — home" className="inline-flex shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Synetra Solutions LLC" className={`${className} w-auto`} />
    </Link>
  );
}

/* ---------- Icons ---------- */
const ICONS: Record<string, LucideIcon> = {
  brain: Brain, crown: Crown, users: Users, server: Server, database: Database, leaf: Leaf,
  landmark: Landmark, shopping: ShoppingBag, heart: HeartPulse, phone: PhoneCall, shield: ShieldCheck, cart: ShoppingCart, scan: ScanSearch,
  target: Target, bulb: Lightbulb, network: Network, gauge: Gauge, award: Award, globe: Globe2,
};
export function Icon({ name, className = 'h-6 w-6' }: { name: string; className?: string }) {
  const C = ICONS[name] ?? Brain;
  return <C className={className} strokeWidth={1.6} aria-hidden />;
}

/* ---------- Pixel marker (3 squares from the logo cluster) ---------- */
export function PixelMarker({ className = '' }: { className?: string }) {
  return (
    <span aria-hidden className={`inline-grid grid-cols-2 gap-[3px] ${className}`}>
      <span className="h-[6px] w-[6px] rounded-[1.5px] bg-synetra-navy" />
      <span className="h-[6px] w-[6px] rounded-[1.5px] bg-synetra-sky" />
      <span className="h-[6px] w-[6px] rounded-[1.5px] bg-synetra-blue" />
      <span className="h-[6px] w-[6px]" />
    </span>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`eyebrow ${light ? '!text-synetra-sky' : ''}`}>
      <PixelMarker />
      {children}
    </span>
  );
}

export function PixelBullet({ light = false }: { light?: boolean }) {
  return <span aria-hidden className={`mt-[7px] h-2 w-2 shrink-0 rounded-[2px] ${light ? 'bg-synetra-sky' : 'bg-synetra-blue'}`} />;
}

/* ---------- Swoosh (S-curve from the logo) ---------- */
export function SwooshLine({ className = '', animate = false, color = 'url(#swg)' }: { className?: string; animate?: boolean; color?: string }) {
  return (
    <svg viewBox="0 0 1440 520" fill="none" preserveAspectRatio="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="swg" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#0097DF" stopOpacity="0" />
          <stop offset=".35" stopColor="#0097DF" stopOpacity=".55" />
          <stop offset="1" stopColor="#0162B6" stopOpacity=".15" />
        </linearGradient>
      </defs>
      <path
        d="M-20 430 C 260 470, 420 300, 640 260 S 1020 300, 1180 170 S 1380 40, 1470 60"
        stroke={color} strokeWidth="2" strokeLinecap="round" className={animate ? 'swoosh-draw' : ''}
      />
      <path
        d="M-20 470 C 300 500, 460 340, 690 300 S 1060 330, 1220 210 S 1400 90, 1470 110"
        stroke={color} strokeOpacity=".45" strokeWidth="1" strokeLinecap="round" className={animate ? 'swoosh-draw' : ''}
      />
    </svg>
  );
}

/* Curved section edge — sits at the top of a coloured band */
export function SwooshEdge({ fill = '#042257', flip = false }: { fill?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className={`block h-[60px] w-full sm:h-[90px] ${flip ? 'rotate-180' : ''}`} aria-hidden>
      <path d="M0 90 V60 C 360 0, 720 100, 1080 40 C 1260 10, 1380 20, 1440 30 V90 Z" fill={fill} />
    </svg>
  );
}

/* ---------- Pixel grid mosaic ---------- */
type Cell = 0 | 1 | 2 | 3; // 0 empty, 1 navy, 2 blue, 3 sky
const COLORS = ['', 'bg-synetra-navy', 'bg-synetra-blue', 'bg-synetra-sky'];
export function PixelMosaic({ pattern, size = 'h-9 w-9 sm:h-11 sm:w-11', gap = 'gap-2.5', shimmer = true }: { pattern: Cell[][]; size?: string; gap?: string; shimmer?: boolean }) {
  let i = 0;
  return (
    <div className={`grid ${gap}`} style={{ gridTemplateColumns: `repeat(${pattern[0].length}, minmax(0, 1fr))` }} aria-hidden>
      {pattern.flat().map((c, idx) => {
        const d = (i++ * 0.37) % 3.2;
        return (
          <span
            key={idx}
            className={`${size} rounded-[5px] ${c ? COLORS[c] : 'bg-transparent'} ${c && shimmer && idx % 3 === 0 ? 'pixel-shimmer' : ''}`}
            style={c && shimmer ? { animationDelay: `${d}s` } : undefined}
          />
        );
      })}
    </div>
  );
}

/* ---------- Faint circuit texture ---------- */
export function CircuitLines({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1">
        <path d="M0 80 H140 L180 120 H320" />
        <path d="M0 220 H90 L130 180 H260 L300 220 H420" />
        <path d="M600 60 H470 L430 100 H360" />
        <path d="M600 300 H500 L460 260 H340 L300 300 H200" />
        <path d="M220 400 V340 L260 300" />
      </g>
      <g fill="currentColor">
        {[[320, 120], [420, 220], [360, 100], [200, 300], [260, 300], [140, 80], [130, 180]].map(([x, y], k) => (
          <rect key={k} x={x - 3} y={y - 3} width="6" height="6" rx="1.5" />
        ))}
      </g>
    </svg>
  );
}
